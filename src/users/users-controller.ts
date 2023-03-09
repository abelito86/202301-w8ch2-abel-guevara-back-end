import { RequestHandler } from 'express';
import { UserModel } from './users-schema.js';

const queryProjection = { __v: 0 };

export const getUserByIdController: RequestHandler = async (req, res) => {
  const { id } = req.params;
  const user = await UserModel.findById({ _id: id }, queryProjection).exec();
  if (user === null) {
    res.status(404).json('Not found');
  } else {
    res.json(user);
  }
};

export const updateUserByIdController: RequestHandler = async (req, res) => {
  const { id } = req.params;
  const dbRes = await UserModel.updateOne({ _id: id }, { ...req.body }).exec();
  if (dbRes.matchedCount === 0) {
    return res.status(404);
  }

  if (dbRes.modifiedCount === 1) {
    return res.status(200).json({ msg: 'Su usuario ha sido modificado' });
  }
};
