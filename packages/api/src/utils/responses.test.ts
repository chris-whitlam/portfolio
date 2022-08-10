import {
  badRequest,
  internalServerError,
  successResponse,
  unprocessableEntity
} from './responses';

describe('Utils -> Responses', () => {
  const headers = {
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Methods': '*',
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  };

  describe('Success responses', () => {
    it('should return success response', () => {
      const data = { hello: 'world' };
      const statusCode = 201;
      const response = successResponse(data, statusCode);

      expect(response).toStrictEqual({
        body: JSON.stringify(data),
        headers,
        statusCode
      });
    });
  });

  describe('Error Responses', () => {
    it('should return 400 status code for bad request', () => {
      const message = 'Something went wrong';
      const response = badRequest(message);

      expect(response).toStrictEqual({
        body: JSON.stringify({ error: message }),
        headers,
        statusCode: 400
      });
    });

    it('should return 500 status code for internal server error', () => {
      const response = internalServerError();

      expect(response).toStrictEqual({
        body: JSON.stringify({ error: 'Something went wrong' }),
        headers,
        statusCode: 500
      });
    });

    it('should return 442 status code for unprocessable identity', () => {
      const response = unprocessableEntity();

      expect(response).toStrictEqual({
        body: JSON.stringify({ error: 'Something went wrong' }),
        headers,
        statusCode: 422
      });
    });
  });
});
