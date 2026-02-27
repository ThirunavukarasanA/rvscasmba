import mongoose, { Schema, Document } from 'mongoose';

export interface IAlumni extends Document {
  fullName: string;
  graduationYear: string;
  currentPosition: string;
  organization: string;
  linkedinUrl: string;
  professionalHighlights: string;
  createdAt: Date;
}

const AlumniSchema: Schema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    graduationYear: {
      type: String,
      required: true,
      trim: true,
    },
    currentPosition: {
      type: String,
      required: true,
      trim: true,
    },
    organization: {
      type: String,
      required: true,
      trim: true,
    },
    linkedinUrl: {
      type: String,
      required: true,
      trim: true,
    },
    professionalHighlights: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
    collection: 'Alumni', // explicitly setting DB Name to 'Alumni' as requested
  }
);

// Prevent mongoose from recompiling the model if it already exists
export default mongoose.models.Alumni || mongoose.model<IAlumni>('Alumni', AlumniSchema);
