import Joi, { ValidationError } from 'joi';
import { sendEmail } from '@services';
import { ContactRequest } from '@types';
import { Handler } from '@netlify/functions';
import {
  successResponse,
  badRequest,
  internalServerError,
  unprocessableEntity
} from '../../utils';

const schema = Joi.object({
  name: Joi.string().min(3).max(30).required().messages({
    'string.base': `Invalid name format`,
    'string.empty': `Name cannot be empty`,
    'string.min': `Name should have a minimum length of {#limit} characters`,
    'string.max': `Name should be less than {#limit} characters`,
    'any.required': `Name is a required field`
  }),

  email: Joi.string().email().required().messages({
    'string.base': `Invalid email format`,
    'string.empty': `Email cannot be empty`,
    'any.required': `Email is a required field`,
    'string.email': `Must be a valid email`
  }),

  message: Joi.string().required().messages({
    'string.base': `Invalid message format`,
    'string.empty': `Message cannot be empty`,
    'any.required': `Message is a required field`
  })
});

export const validateContactFormInput = async (
  contactFormInput: ContactRequest
) => {
  return schema.validateAsync(contactFormInput);
};

export const handler: Handler = async (event) => {
  console.log('Received contact request');

  if (!event.body) {
    return badRequest('Request body cannot be empty');
  }

  let body: ContactRequest;
  try {
    body = await JSON.parse(event.body);
  } catch {
    return unprocessableEntity();
  }

  try {
    await validateContactFormInput(body);
  } catch (error) {
    if (error instanceof ValidationError) {
      return badRequest(error.message);
    }
    return internalServerError();
  }

  try {
    await sendEmail(body);
  } catch (error) {
    console.error(error);
    return internalServerError();
  }

  console.log('Successfully sent email');
  return successResponse({ message: 'Contact request sent' });
};
