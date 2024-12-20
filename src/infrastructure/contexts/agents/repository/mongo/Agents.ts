import mongoose from 'mongoose';

const agentsSchema = new mongoose.Schema(
  {
    id: String,
    name: {
      type: String,
      unique: true,
    },
    image: String,
  },
  {
    timestamps: true,
    id: true,
  },
);

// eslint-disable-next-line @typescript-eslint/naming-convention
export const Agents = mongoose.model('Agents', agentsSchema);
