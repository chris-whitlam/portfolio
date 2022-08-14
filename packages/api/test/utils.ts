export const createEvent = (body: object | null = null): any => ({
  body,
  headers: {},
  multiValueHeaders: {},
  httpMethod: 'POST',
  isBase64Encoded: false,
  path: '',
  queryStringParameters: {},
  pathParameters: {},
  multiValueQueryStringParameters: {},
  stageVariables: {},
  requestContext: {
    accountId: '',
    apiId: '',
    authorizer: {},
    protocol: '',
    httpMethod: '',
    identity: {} as any,
    path: '',
    stage: ''
  },
  resource: ''
});
