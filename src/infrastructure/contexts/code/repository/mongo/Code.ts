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

// eslint-disable-next-line @typescript-eslint/naming-convention
export const Code = mongoose.model<ICode>('Code', codeSchema);
