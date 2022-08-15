import { ContactRequest } from '@types';
import Joi from 'joi';

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
})
  .required()
  .messages({
    'object.base': `Please provide required fields`,
    'object.empty': `Please provide required fields`,
    'any.required': `Please provide required fields`
  });

const validateContactFormInput = async (contactFormInput: ContactRequest) => {
  return schema.validateAsync(contactFormInput);
};

export default validateContactFormInput;
