import mongoose, { Schema, Document } from 'mongoose';

export interface IResume extends Document {
  fullName: string;
  email: string;
  phone: string;
  specialization: string;
  positionType: string;
  experience: number;
  qualification: string;
  linkedin?: string;
  statement?: string;
  resumeFileName?: string; // Storing just the file name/reference for now
  createdAt: Date;
}

const ResumeSchema: Schema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    specialization: {
      type: String,
      required: true,
      trim: true,
    },
    positionType: {
      type: String,
      required: true,
      trim: true,
    },
    experience: {
      type: Number,
      required: true,
      min: 0,
    },
    qualification: {
      type: String,
      required: true,
      trim: true,
    },
    linkedin: {
      type: String,
      trim: true,
    },
    statement: {
      type: String,
      trim: true,
    },
    resumeFileName: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
    collection: 'Resumes', 
  }
);

export default mongoose.models.Resume || mongoose.model<IResume>('Resume', ResumeSchema);
