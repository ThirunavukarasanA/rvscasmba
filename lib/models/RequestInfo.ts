import mongoose, { Schema, Document } from 'mongoose';

export interface IRequestInfo extends Document {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  program: string;
  qualification: string;
  city: string;
  source?: string;
  message?: string;
  createdAt: Date;
}

const RequestInfoSchema: Schema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    mobile: {
      type: String,
      required: true,
      trim: true,
    },
    program: {
      type: String,
      required: true,
      trim: true,
    },
    qualification: {
      type: String,
      required: true,
      trim: true,
    },
    city: {
      type: String,
      required: true,
      trim: true,
    },
    source: {
      type: String,
      trim: true,
    },
    message: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
    collection: 'RequestInformation',
  }
);

export default mongoose.models.RequestInfo || mongoose.model<IRequestInfo>('RequestInfo', RequestInfoSchema);
