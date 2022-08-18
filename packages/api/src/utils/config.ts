/* istanbul ignore file */
interface Config {
  emailHost: string;
  emailPort: number;
  emailPassword: string;
  emailUsername: string;
  emailSenderAddress: string;
  emailRecieverAddress: string;
  corsOrigin: string;
}

export const getConfig = (): Config => {
  const {
    EMAIL_HOST: emailHost,
    EMAIL_PORT: emailPort,
    EMAIL_PASSWORD: emailPassword,
    EMAIL_USERNAME: emailUsername,
    EMAIL_SENDER_ADDRESS: emailSenderAddress,
    EMAIL_RECIEVER_ADDRESS: emailRecieverAddress,
    CORS_ORIGIN: corsOrigin
  } = process.env;

  if (
    !emailHost ||
    !emailPort ||
    !emailPassword ||
    !emailUsername ||
    !emailSenderAddress ||
    !emailRecieverAddress ||
    !corsOrigin
  ) {
    throw new Error('Not all env vars defined');
  }

  return {
    emailHost,
    emailPort: Number(emailPort),
    emailPassword,
    emailUsername,
    emailSenderAddress,
    emailRecieverAddress,
    corsOrigin
  };
};
