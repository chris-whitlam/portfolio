import { ContactRequest } from '@types';
import sendEmail from './sendEmail';

const sendMailMock = jest.fn();
const verifyMock = jest.fn();
const closeMock = jest.fn();
jest.mock('nodemailer', () => ({
  createTransport: jest.fn().mockImplementation(() => ({
    sendMail: sendMailMock,
    verify: verifyMock,
    close: closeMock
  }))
}));

describe('Services -> sendEmail', () => {
  const contactRequest: ContactRequest = {
    name: 'Bob Bobbins',
    email: 'bob@bobbins.com',
    message: 'Wow your website is amazing!'
  };

  afterEach(jest.resetAllMocks);

  it('should successfully send email', async () => {
    await sendEmail(contactRequest);

    expect(verifyMock).toBeCalled();
    expect(sendMailMock).toBeCalledWith({
      from: process.env.EMAIL_SENDER_ADDRESS,
      to: process.env.EMAIL_RECIEVER_ADDRESS,
      subject: `Contact Request from ${contactRequest.name}`,
      html: `
          <p>${contactRequest.message}</p>
          <p>Message from ${contactRequest.name}</p>
          <p>${contactRequest.email}</p>
          `
    });
    expect(closeMock).toBeCalled();
  });

  it('should throw error if verification fails', async () => {
    const error = new Error('Something went wrong');
    verifyMock.mockRejectedValue(error);

    await expect(sendEmail(contactRequest)).rejects.toThrow(error);

    expect(sendMailMock).not.toBeCalled();
    expect(closeMock).not.toBeCalled();
  });

  fit('should throw error if send fails', async () => {
    const error = new Error('Something went wrong');
    sendMailMock.mockRejectedValue(error);

    await expect(sendEmail(contactRequest)).rejects.toThrow(error);

    expect(verifyMock).toBeCalled();
    expect(sendMailMock).toBeCalled();
    expect(closeMock).toBeCalled();
  });
});
