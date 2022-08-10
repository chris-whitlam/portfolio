import LambdaTester from 'lambda-tester';
import { handler } from './contact';
import { createEvent } from '../../../test/utils';

jest.mock('nodemailer', () => ({
  createTransport: jest.fn().mockImplementation(() => ({
    sendMail: jest.fn(),
    verify: jest.fn(),
    close: jest.fn()
  }))
}));

describe('Functions -> contact (Integration)', () => {
  const body = {
    name: 'Bob Bobbins',
    email: 'bob@bobbins.com',
    message: 'Hi there'
  };

  describe('Success states', () => {
    it('should return success response when email sent successfully', async () => {
      const event = createEvent(body);

      await LambdaTester(handler)
        .event(event)
        .expectResolve((result) => {
          expect(result.statusCode).toEqual(200);
          expect(result.body).toEqual(
            JSON.stringify({
              message: 'Contact request sent'
            })
          );
        });
    });
  });

  describe('Error states', () => {
    it('should return 400 is no request body', async () => {
      const event = createEvent();

      await LambdaTester(handler)
        .event(event)
        .expectResolve((result) => {
          expect(result.statusCode).toEqual(400);
          expect(result.body).toEqual(
            JSON.stringify({
              error: 'Request body cannot be empty'
            })
          );
        });
    });

    it.each`
      input                     | expectedMessage
      ${{ name: undefined }}    | ${'Name is a required field'}
      ${{ name: '' }}           | ${'Name cannot be empty'}
      ${{
  name: 'hi'
}} | ${'Name should have a minimum length of 3 characters'}
      ${{
  name: new Array(35 + 1).join('a')
}} | ${'Name should be less than 30 characters'}
      ${{ email: undefined }}   | ${'Email is a required field'}
      ${{ email: '' }}          | ${'Email cannot be empty'}
      ${{ email: 'sdfsdif@' }}  | ${'Must be a valid email'}
      ${{ message: undefined }} | ${'Message is a required field'}
      ${{ message: '' }}        | ${'Message cannot be empty'}
    `(
      `should throw 400 when given $input`,
      async ({ input, expectedMessage }) => {
        const event = createEvent({
          ...body,
          ...input
        });

        await LambdaTester(handler)
          .event(event)
          .expectResolve((result) => {
            expect(result.body).toEqual(
              JSON.stringify({
                error: expectedMessage
              })
            );
            expect(result.statusCode).toEqual(400);
          });
      }
    );
  });
});
