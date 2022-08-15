import { headers } from '@utils';
import optionsMiddleware from './optionsMiddleware';

describe('Middleware -> Options', () => {
  const middleware = optionsMiddleware();

  beforeAll(() => {
    if (middleware.before === undefined) {
      throw new Error('before is not defined');
    }
  });

  it('should return success if httpMethod is OPTIONS', async () => {
    const response =
      middleware.before &&
      middleware.before({
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        event: {
          httpMethod: 'OPTIONS'
        }
      });

    expect(response).toStrictEqual({
      body: undefined,
      statusCode: 200,
      headers
    });
  });

  it('should not return if httpMethod is not OPTIONS', async () => {
    const response =
      middleware.before &&
      middleware.before({
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        event: {
          httpMethod: 'POST'
        }
      });

    expect(response).toBeUndefined();
  });
});
