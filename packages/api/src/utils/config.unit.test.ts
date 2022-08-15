import { getConfig } from './config';

describe('Utils -> config', () => {
  it('should return config object', () => {
    const config = getConfig();

    expect(config).toStrictEqual({
      emailHost: 'test.co.uk',
      emailPassword: 'MyPassword',
      emailPort: 465,
      emailRecieverAddress: 'reciever@username.dev',
      emailSenderAddress: 'sender@username.dev',
      emailUsername: 'my@username.dev',
      corsOrigin: 'myCors'
    });
  });
});
