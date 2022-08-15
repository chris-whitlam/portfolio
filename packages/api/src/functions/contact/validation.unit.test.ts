import { ValidationError } from 'joi';
import validateContactFormInput from './validation';

describe('Functions -> contact -> validation', () => {
  const baseInput = {
    name: 'Bob Bobbins',
    email: 'bob@bobbins.com',
    message: 'Hi there'
  };

  it.each`
    input                                                  | expectedMessage
    ${{ ...baseInput, name: undefined }}                   | ${'Name is a required field'}
    ${{ ...baseInput, name: '' }}                          | ${'Name cannot be empty'}
    ${{ ...baseInput, name: 'hi' }}                        | ${'Name should have a minimum length of 3 characters'}
    ${{ ...baseInput, name: new Array(35 + 1).join('a') }} | ${'Name should be less than 30 characters'}
    ${{ ...baseInput, email: undefined }}                  | ${'Email is a required field'}
    ${{ ...baseInput, email: '' }}                         | ${'Email cannot be empty'}
    ${{ ...baseInput, email: 'sdfsdif@' }}                 | ${'Must be a valid email'}
    ${{ ...baseInput, message: undefined }}                | ${'Message is a required field'}
    ${{ ...baseInput, message: '' }}                       | ${'Message cannot be empty'}
  `(
    `should throw validation error when fails validation`,
    async ({ input, expectedMessage }) => {
      await expect(validateContactFormInput(input)).rejects.toThrow(
        new ValidationError(expectedMessage, {}, {})
      );
    }
  );
});
