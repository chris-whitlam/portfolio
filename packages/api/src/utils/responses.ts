const errorResponse = (message = 'Something went wrong', statusCode = 500) => {
  console.error(message);

  return {
    statusCode,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Allow-Methods': '*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      error: message
    })
  };
};

export const successResponse = (data: unknown, statusCode = 200) => ({
  statusCode,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Methods': '*',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
});

export const badRequest = (message: string) => errorResponse(message, 400);
export const internalServerError = (message = 'Something went wrong') =>
  errorResponse(message, 500);
export const unprocessableEntity = (message = 'Something went wrong') =>
  errorResponse(message, 422);
