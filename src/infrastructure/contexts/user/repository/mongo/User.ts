import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      unique: true,
    },
    username: { type: String, unique: true, required: true },
    password: String,
    imageUrl: String,
    name: String,
  },
  {
    timestamps: true,
  },
);

// eslint-disable-next-line @typescript-eslint/naming-convention
export const User = mongoose.model('User', userSchema);
