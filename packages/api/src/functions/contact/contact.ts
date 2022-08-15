import { ValidationError } from 'joi';
import { sendEmail } from '@services';
import middy from '@middy/core';
import jsonBodyParser, { Event } from '@middy/http-json-body-parser';
import { BadRequest, InternalServerError } from 'http-errors';
import { ContactRequest } from '@types';
import httpErrorHandler from '@middy/http-error-handler';
import cors from '@middy/http-cors';
import { Response } from '@netlify/functions/dist/function/response';
import { getConfig, successResponse } from '@utils';

import { optionsMiddleware } from '@middleware';
import validateContactFormInput from './validation';

const config = getConfig();

const lambdaHandler = async (event: Event): Promise<Response> => {
  console.log('Received contact request');

  if (!event.body) {
    throw new BadRequest("Request body can't be empty");
  }

  const body = event.body as unknown as ContactRequest;

  try {
    await validateContactFormInput(body);
  } catch (error: any) {
    if (error instanceof ValidationError) {
      throw new BadRequest(error.message);
    }
    throw new InternalServerError(
      `Failed to validate contact request - ${error.message}`
    );
  }

  await sendEmail(body);

  console.log('Successfully sent email');
  return successResponse({ message: 'Contact request sent' });
};

export const handler = middy()
  .use(
    cors({
      origin: config.corsOrigin,
      headers: 'Content-Type',
      methods: 'OPTIONS, POST'
    })
  )
  .use(optionsMiddleware())
  .use(jsonBodyParser())
  .use(httpErrorHandler({ fallbackMessage: 'Something went wrong' }))
  .handler(lambdaHandler);
