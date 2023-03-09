import express from 'express';
import {
  getUserByIdController,
  updateUserByIdController,
} from './users-controller.js';
import usersValidation from './users-validation.js';
import { validate } from 'express-validation';

const router = express.Router();

router
  .route('/:id')
  .get(getUserByIdController)
  .put(validate(usersValidation), updateUserByIdController);

export default router;
