import mongoose from 'mongoose';

const postSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      unique: true,
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    isPublished: {
      type: Boolean,
      default: false,
    },
    authorIds: {
      type: [String],
      default: [],
    },
    agentIds: {
      type: [String],
      default: [],
    },
    mapIds: {
      type: [String],
      default: [],
    },
    tagIds: {
      type: [String],
      default: [],
    },
    steps: [
      {
        id: {
          type: String,
          required: true,
        },
        description: {
          type: String,
          required: true,
        },
        imageUrl: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  },
);
const asc = 1;
const desc = -1;

postSchema.index({ isDeleted: asc, isPublished: asc, createdAt: desc });

// eslint-disable-next-line @typescript-eslint/naming-convention
export const Post = mongoose.model('Post', postSchema);
