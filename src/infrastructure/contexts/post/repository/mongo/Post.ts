import mongoose from 'mongoose';

export interface IImagePost {
  id: string;
  description: string;
  image: string;
}

interface IPost {
  id: string;
  title: string;
  description: string;
  userId: string;
  tags: {
    moment: string;
    difficult: string;
    ability: string;
    side: string;
    map: string;
    mapPosition: string;
    agent: string;
  };
  imgs: IImagePost[];
}

const postSchema = new mongoose.Schema<IPost>(
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

export const Post = mongoose.model<IPost>('Post', postSchema);
