import mongoose, { Schema, models } from "mongoose";

const BrochureDownloadSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  mobile: { type: String, required: true },
  courseName: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const BrochureDownload = models.BrochureDownload || mongoose.model("BrochureDownload", BrochureDownloadSchema);

export default BrochureDownload;
