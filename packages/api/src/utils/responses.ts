import { Response } from '@netlify/functions/dist/function/response';
import { getConfig } from './config';

const config = getConfig();

export const headers = {
  'Access-Control-Allow-Origin': config.corsOrigin,
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'OPTIONS, POST, PUT, GET, POST, DELETE',
  'Content-Type': 'application/json'
};

export const successResponse = (data?: object, statusCode = 200): Response => ({
  statusCode,
  headers,
  body: data && JSON.stringify(data)
});
