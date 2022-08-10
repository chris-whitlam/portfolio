import { Event } from '@netlify/functions/dist/function/event';

export const createEvent = (body: object | null = null): Event => ({
  rawUrl: '',
  rawQuery: '',
  path: '',
  httpMethod: 'POST',
  headers: {},
  multiValueHeaders: {},
  queryStringParameters: null,
  multiValueQueryStringParameters: null,
  body: body && JSON.stringify(body),
  isBase64Encoded: false
});
