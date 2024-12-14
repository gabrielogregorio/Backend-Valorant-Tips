import mongoose from 'mongoose';

const codeSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      unique: true,
    },
    code: String,
    available: Boolean,
  },
  {
    timestamps: true,
  },
);

// eslint-disable-next-line @typescript-eslint/naming-convention
export const Code = mongoose.model('Code', codeSchema);
