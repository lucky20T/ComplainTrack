import mongoose, { Schema, Document } from 'mongoose';

export interface IDepartment extends Document {
  name: string;
  description: string;
  contactEmail: string;
}

const DepartmentSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String },
    contactEmail: { type: String },
  },
  { timestamps: true }
);

export default mongoose.models.Department || mongoose.model<IDepartment>('Department', DepartmentSchema);
