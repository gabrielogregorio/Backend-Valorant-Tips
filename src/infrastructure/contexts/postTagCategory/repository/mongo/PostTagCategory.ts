import mongoose from 'mongoose';

const postTagCategorySchema = new mongoose.Schema(
  {
    id: String,
    name: {
      type: String,
      unique: true,
    },
  },
  {
    timestamps: true,
    id: true,
  },
);

// eslint-disable-next-line @typescript-eslint/naming-convention
export const PostTagCategory = mongoose.model('PostTagCategory', postTagCategorySchema);
