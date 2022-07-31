const errorResponse = (message = 'Something went wrong', statusCode = 500) => ({
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
});

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

export const badRequest = (message: string) => {
  console.log(message);
  return errorResponse(message, 400);
};

export const internalServerError = (message = 'Something went wrong') => {
  console.log(message);
  return errorResponse(message, 500);
};

export const unprocessableEntity = (message = 'Something went wrong') => {
  console.log(message);
  return errorResponse(message, 422);
};
