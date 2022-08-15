import middy from '@middy/core';
import { Event } from '@middy/http-json-body-parser';
import { successResponse } from '@utils';

const optionsMiddleware = (): middy.MiddlewareObj<Event> => ({
  // eslint-disable-next-line consistent-return
  before: ({ event }) => {
    if (event.httpMethod === 'OPTIONS') {
      return successResponse(undefined, 200);
    }
  }
});

export default optionsMiddleware;
