import mongoose from 'mongoose';

const postTagsSchema = new mongoose.Schema(
  {
    id: String,
    categoryId: String,
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
export const PostTags = mongoose.model('PostTags', postTagsSchema);
