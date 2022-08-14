import { Response } from '@netlify/functions/dist/function/response';

export const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  'Access-Control-Allow-Methods': '*',
  'Content-Type': 'application/json'
};

export const successResponse = (data: unknown, statusCode = 200): Response => ({
  statusCode,
  headers,
  body: JSON.stringify(data)
});
