import { ContactRequest } from '@types';
import { createTransport } from 'nodemailer';
import { getConfig } from '@utils';

const sendEmail = async ({ name, email, message }: ContactRequest) => {
  const {
    emailHost,
    emailPort,
    emailUsername,
    emailPassword,
    emailSenderAddress,
    emailRecieverAddress
  } = getConfig();

  const transporter = createTransport({
    host: emailHost,
    port: emailPort,
    secure: true,
    auth: {
      user: emailUsername,
      pass: emailPassword
    }
  });

  try {
    await transporter.verify();
  } catch (error) {
    console.error(`Email verification failed: ${error}`);
    throw error;
  }

  try {
    await transporter.sendMail({
      from: emailSenderAddress,
      to: emailRecieverAddress,
      subject: `Contact Request from ${name}`,
      html: `
          <p>${message}</p>
          <p>Message from ${name}</p>
          <p>${email}</p>
          `
    });
  } catch (error) {
    console.error(`Failed to send email: ${error}`);
    throw error;
  } finally {
    transporter.close();
  }
};

export default sendEmail;
