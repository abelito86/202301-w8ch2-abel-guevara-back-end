import { Joi } from 'express-validation';

const usersValidation = {
  body: Joi.object({
    firstName: Joi.string(),
    lastName: Joi.string(),
    email: Joi.string().email().required(),
    phone: Joi.string().regex(/^\+?(34|34[1-9]\d)\d{9}$/),
    imageUrl: Joi.string(),
  }),
};

export default usersValidation;
