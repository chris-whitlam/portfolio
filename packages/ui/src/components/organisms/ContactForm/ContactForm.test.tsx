import fetchMock from 'jest-fetch-mock';
import { ThemeProvider } from '@mui/material';
import { theme } from '@styles';
import {
  fireEvent,
  render as rtlRender,
  waitFor,
  screen
} from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { faker } from '@faker-js/faker';

import ContactForm from './ContactForm';

const ids = {
  form: 'contact-form',
  nameField: 'contact-form-name-field-input',
  emailField: 'contact-form-email-field-input',
  messageField: 'contact-form-message-field-input',
  submitBtn: 'contact-form-submit-button',
  errorMsg: 'contact-form-error-message',
  successMsg: 'contact-form-success-message'
};

const defaultFormInput = {
  name: faker.name.fullName(),
  email: faker.internet.email(),
  message: faker.lorem.lines(3)
};

const fillForm = ({
  name = defaultFormInput.name,
  email = defaultFormInput.email,
  message = defaultFormInput.message
} = defaultFormInput) => {
  fireEvent.change(screen.getByTestId(ids.nameField), {
    target: { value: name }
  });

  fireEvent.change(screen.getByTestId(ids.emailField), {
    target: { value: email }
  });

  fireEvent.change(screen.getByTestId(ids.messageField), {
    target: { value: message }
  });
};

const render = () =>
  rtlRender(
    <ThemeProvider theme={theme}>
      <ContactForm />
    </ThemeProvider>
  );

describe('Components -> Organisms -> Contact Form', () => {
  beforeEach(() => {
    fetchMock.mockResponse(JSON.stringify({ message: 'Success' }), {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  });

  afterAll(() => {
    fetchMock.resetMocks();
  });

  it('should render component correctly', () => {
    const { getByTestId } = render();

    expect(getByTestId(ids.form)).toBeInTheDocument();
    expect(getByTestId(ids.nameField)).toBeInTheDocument();
    expect(getByTestId(ids.emailField)).toBeInTheDocument();
    expect(getByTestId(ids.messageField)).toBeInTheDocument();
    expect(getByTestId(ids.submitBtn)).toBeInTheDocument();
    expect(getByTestId(ids.errorMsg)).not.toBeVisible();
    expect(getByTestId(ids.successMsg)).not.toBeVisible();
  });

  it('should be able to submit form', async () => {
    const { getByTestId } = render();

    act(fillForm);

    const submitButton = getByTestId(ids.submitBtn);

    await act(async () => {
      fireEvent.click(submitButton);
    });

    await waitFor(async () => {
      expect(getByTestId(ids.successMsg)).toBeVisible();
      expect(submitButton).not.toBeDisabled();
      expect(getByTestId(ids.errorMsg)).not.toBeVisible();
    });
  });

  it('should show error message if api error', async () => {
    const expectedErrorMessage = 'Something went wrong';
    fetchMock.mockRejectOnce(new Error(expectedErrorMessage));

    const { getByTestId } = render();

    act(fillForm);

    const submitButton = getByTestId(ids.submitBtn);

    await act(async () => {
      fireEvent.click(submitButton);
    });

    await waitFor(async () => {
      const errorMessage = getByTestId(ids.errorMsg);
      expect(errorMessage).toBeVisible();
      expect(errorMessage).toHaveTextContent(expectedErrorMessage);
      expect(getByTestId(ids.successMsg)).not.toBeVisible();
      expect(submitButton).not.toBeDisabled();
    });
  });

  it('should show if fails client-side validation', async () => {
    const expectedErrorMessage = 'Something went wrong';
    fetchMock.mockRejectOnce(new Error(expectedErrorMessage));

    const { getByTestId, getByText } = render();

    const submitButton = getByTestId(ids.submitBtn);

    await act(async () => {
      fireEvent.click(submitButton);
    });

    await waitFor(async () => {
      const nameErrorMessage = getByText('Your name is required');
      expect(nameErrorMessage).toBeVisible();

      const emailErrorMessage = getByText('Your email is required');
      expect(emailErrorMessage).toBeVisible();

      const messageErrorMessage = getByText('A message is required');
      expect(messageErrorMessage).toBeVisible();

      expect(getByTestId(ids.errorMsg)).not.toBeVisible();
      expect(getByTestId(ids.successMsg)).not.toBeVisible();
      expect(submitButton).not.toBeDisabled();
    });
  });
});
