import mongoose from "mongoose";

const videoAccessSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
    },
    phone: {
      type: String,
      required: true,
    },
    consent: {
      type: Boolean,
      required: true,
      default: false,
    },
    watchedVideos: {
      type: [String],
      default: [],
    },
    submittedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

// Create index for email to allow efficient lookups and prevent duplicates
videoAccessSchema.index({ email: 1 });

export default mongoose.models.VideoAccess ||
  mongoose.model("VideoAccess", videoAccessSchema);
