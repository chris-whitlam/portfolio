import LambdaTester from 'lambda-tester';
import { createEvent } from 'test/utils';
import { handler } from './contact';

const sendMailMock = jest.fn();
jest.mock('@services', () => ({
  sendMail: sendMailMock
}));

describe('Functions -> contact (Unit)', () => {
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
});
