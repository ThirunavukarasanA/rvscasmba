import mongoose, { Schema, Document } from 'mongoose';

export interface IEventSubscriber extends Document {
  firstName: string;
  lastName: string;
  email: string;
  agreedToComms: boolean;
  createdAt: Date;
}

const EventSubscriberSchema: Schema = new Schema(
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
    agreedToComms: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    collection: 'EventSubscribers',
  }
);

export default mongoose.models.EventSubscriber || mongoose.model<IEventSubscriber>('EventSubscriber', EventSubscriberSchema);
