import LambdaTester from 'lambda-tester';
import { Response } from '@netlify/functions/dist/function/response';
import { handler } from './contact';
import { createEvent } from '../../../test/utils';

jest.mock('nodemailer', () => ({
  createTransport: jest.fn().mockImplementation(() => ({
    sendMail: jest.fn(),
    verify: jest.fn(),
    close: jest.fn()
  }))
}));

describe('Functions -> contact -> contact (Integration)', () => {
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
        .expectResolve((result: Response) => {
          expect(result.body).toEqual(
            JSON.stringify({
              message: 'Contact request sent'
            })
          );
          expect(result.statusCode).toEqual(200);
        });
    });
  });

  describe('Error states', () => {
    it('should return 400 is no request body', async () => {
      const event = createEvent();

      await LambdaTester(handler)
        .event(event)
        .expectResolve((result: Response) => {
          expect(result.statusCode).toEqual(400);
          expect(result.body).toEqual(`Request body can't be empty`);
        });
    });

    it(`should throw 400 when given invalid input`, async () => {
      const event = createEvent({
        ...body,
        email: 'test'
      });

      await LambdaTester(handler)
        .event(event)
        .expectResolve((result: Response) => {
          expect(result.body).toEqual('Must be a valid email');
          expect(result.statusCode).toEqual(400);
        });
    });
  });
});
