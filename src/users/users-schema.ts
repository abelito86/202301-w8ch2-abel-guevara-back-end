import mongoose, { Schema } from 'mongoose';

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  imageUrl: string;
}

const userSchema = new Schema<User>({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  imageUrl: String,
});

export const UserModel = mongoose.model<User>('User', userSchema, 'users');
