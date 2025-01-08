import mongoose from 'mongoose';

const viewSchema = new mongoose.Schema(
  {
    ip: String,
    dateAccess: Date,
  },
  {
    timestamps: true,
    id: true,
  },
);

// eslint-disable-next-line @typescript-eslint/naming-convention
export const View = mongoose.model('View', viewSchema);
