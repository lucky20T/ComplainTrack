import mongoose, { Schema, Document } from 'mongoose';

export interface IComplaint extends Document {
  trackingId: string;
  userId?: mongoose.Types.ObjectId; // Optional for anonymous complaints
  title: string;
  description: string;
  category: string;
  departmentId?: mongoose.Types.ObjectId;
  status: 'PENDING' | 'IN_PROGRESS' | 'RESOLVED' | 'REJECTED';
  priority: 'LOW' | 'MEDIUM' | 'HIGH' | 'URGENT';
  location?: {
    lat: number;
    lng: number;
    address: string;
  };
  attachments: string[]; // URLs
  officerRemarks: string[];
  resolvedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const ComplaintSchema = new Schema(
  {
    trackingId: { type: String, required: true, unique: true },
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    departmentId: { type: Schema.Types.ObjectId, ref: 'Department' },
    status: {
      type: String,
      enum: ['PENDING', 'IN_PROGRESS', 'RESOLVED', 'REJECTED'],
      default: 'PENDING',
    },
    priority: {
      type: String,
      enum: ['LOW', 'MEDIUM', 'HIGH', 'URGENT'],
      default: 'LOW',
    },
    location: {
      lat: { type: Number },
      lng: { type: Number },
      address: { type: String },
    },
    attachments: [{ type: String }],
    officerRemarks: [{ type: String }],
    resolvedAt: { type: Date },
  },
  { timestamps: true }
);

export default mongoose.models.Complaint || mongoose.model<IComplaint>('Complaint', ComplaintSchema);
