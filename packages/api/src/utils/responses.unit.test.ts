import { successResponse } from './responses';

describe('Utils -> Responses', () => {
  const headers = {
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'OPTIONS, POST, PUT, GET, POST, DELETE',
    'Access-Control-Allow-Origin': process.env.CORS_ORIGIN,
    'Content-Type': 'application/json'
  };

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
