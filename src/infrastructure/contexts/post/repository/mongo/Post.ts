import mongoose from 'mongoose';

const postSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      unique: true,
    },
    title: String,
    description: String,
    userId: String,
    tags: {
      moment: String,
      difficult: String,
      ability: String,
      side: String,
      map: String,
      mapPosition: String,
      agent: String,
    },
    imgs: [
      {
        id: String,
        description: String,
        image: String,
      },
    ],
  },
  {
    timestamps: true,
  },
);

// eslint-disable-next-line @typescript-eslint/naming-convention
export const Post = mongoose.model('Post', postSchema);
