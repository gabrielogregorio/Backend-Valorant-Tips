import mongoose from 'mongoose';

interface ICode {
  id: string;
  code: string;
  available: boolean;
}

const codeSchema = new mongoose.Schema<ICode>(
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

export const Code = mongoose.model<ICode>('Code', codeSchema);
