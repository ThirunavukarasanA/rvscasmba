import mongoose, { Schema, Document } from 'mongoose';

export interface IContact extends Document {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  message?: string;
  createdAt: Date;
}

const ContactSchema: Schema = new Schema(
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
    message: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
    collection: 'Contacts', 
  }
);

export default mongoose.models.Contact || mongoose.model<IContact>('Contact', ContactSchema);
