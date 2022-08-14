import LambdaTester from 'lambda-tester';
import { Response } from '@netlify/functions/dist/function/response';
import { createEvent } from '../../../test/utils';
import { handler } from './contact';
import * as sendEmailModule from '../../services/sendEmail';
import * as validationModule from './validation';

// jest.mock('@services', () => ({
//   sendEmail: jest.fn()
// }));

describe('Functions -> contact (Unit)', () => {
  const body = {
    name: 'Bob Bobbins',
    email: 'bob@bobbins.com',
    message: 'Hi there'
  };

  const sendEmailSpy = jest.spyOn(sendEmailModule, 'default');
  const validationSpy = jest.spyOn(validationModule, 'default');

  beforeEach(jest.resetAllMocks);
  afterAll(jest.restoreAllMocks);

  describe('Success states', () => {
    it('should return success response when email sent successfully', async () => {
      const event = createEvent(body);

      // eslint-disable-next-line @typescript-eslint/no-empty-function
      sendEmailSpy.mockImplementation(async () => {});

      await LambdaTester(handler)
        .event(event)
        .expectResolve((result: Response) => {
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
    it('should return error response when fail to parse JSON input', async () => {
      const event = createEvent(body);

      validationSpy.mockImplementation(async () => {
        throw new Error('Something went wrong');
      });

      await LambdaTester(handler)
        .event(event)
        .expectResolve((result: Response) => {
          expect(result.statusCode).toEqual(500);
          expect(result.body).toEqual('Something went wrong');
        });
    });

    it('should return error response when fail to validate form input', async () => {
      const event = createEvent(body);

      validationSpy.mockImplementation(async () => {
        throw new Error('Something went wrong');
      });

      await LambdaTester(handler)
        .event(event)
        .expectResolve((result: Response) => {
          expect(result.statusCode).toEqual(500);
          expect(result.body).toEqual('Something went wrong');
        });
    });

    it('should return error response when fail to send email', async () => {
      const event = createEvent(body);

      sendEmailSpy.mockImplementation(async () => {
        throw new Error('Something went wrong');
      });

      await LambdaTester(handler)
        .event(event)
        .expectResolve((result: Response) => {
          expect(result.statusCode).toEqual(500);
          expect(result.body).toEqual('Something went wrong');
        });
    });
  });
});
