import { successResponse } from './responses';

describe('Utils -> Responses', () => {
  const headers = {
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Methods': '*',
    'Access-Control-Allow-Origin': '*',
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
