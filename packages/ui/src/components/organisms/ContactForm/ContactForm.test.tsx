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
  nameField: {
    input: 'contact-form-name-field-input',
    message: 'contact-form-name-field-message'
  },
  emailField: {
    input: 'contact-form-email-field-input',
    message: 'contact-form-email-field-message'
  },
  messageField: {
    input: 'contact-form-message-field-input',
    message: 'contact-form-message-field-message'
  },
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
  fireEvent.change(screen.getByTestId(ids.nameField.input), {
    target: { value: name }
  });

  fireEvent.change(screen.getByTestId(ids.emailField.input), {
    target: { value: email }
  });

  fireEvent.change(screen.getByTestId(ids.messageField.input), {
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
    expect(getByTestId(ids.nameField.input)).toBeInTheDocument();
    expect(getByTestId(ids.emailField.input)).toBeInTheDocument();
    expect(getByTestId(ids.messageField.input)).toBeInTheDocument();
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

    const { getByTestId } = render();

    const submitButton = getByTestId(ids.submitBtn);

    await act(async () => {
      fireEvent.click(submitButton);
    });

    await waitFor(async () => {
      const nameErrorMessage = getByTestId(ids.nameField.message);
      expect(nameErrorMessage).toBeVisible();
      expect(nameErrorMessage).toHaveTextContent('Your name is required');

      const emailErrorMessage = getByTestId(ids.emailField.message);
      expect(emailErrorMessage).toBeVisible();
      expect(emailErrorMessage).toHaveTextContent('Your email is required');

      const messageErrorMessage = getByTestId(ids.messageField.message);
      expect(messageErrorMessage).toBeVisible();
      expect(messageErrorMessage).toHaveTextContent('A message is required');

      expect(getByTestId(ids.errorMsg)).not.toBeVisible();
      expect(getByTestId(ids.successMsg)).not.toBeVisible();
      expect(submitButton).not.toBeDisabled();
    });
  });
});
