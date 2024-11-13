import { IUser } from '@/infrastructure/api/interfaces/user';
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema<IUser>(
  {
    id: {
      type: String,
      unique: true,
    },
    username: { type: String, unique: true, required: true },
    password: String,
    image: String,
  },
  {
    timestamps: true,
  },
);

export const User = mongoose.model<IUser>('User', userSchema);
