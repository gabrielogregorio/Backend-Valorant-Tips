/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from 'mongoose';

const suggestionSchema = new mongoose.Schema<any>(
  {
    id: {
      type: String,
      unique: true,
    },
    postId: String,
    email: {
      type: String,
      maxlength: 100,
    },
    description: {
      type: String,
      required: true,
      maxlength: 500,
    },
    status: {
      type: String,
      index: true,
      background: true,
      required: true,
      enum: ['accepted', 'rejected', 'waiting'],
    },
  },
  {
    timestamps: true,
  },
);

// eslint-disable-next-line @typescript-eslint/naming-convention
export const Suggestion = mongoose.model<any>('Suggestion', suggestionSchema);
