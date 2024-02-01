import mongoose, { Document, Schema, Types } from "mongoose";

export interface IService {
  name: string;
  time: number;
  pirce: number;
  company: string;
}

export interface IServiceModel extends IService, Document {}

const ServiceSchema: Schema = new Schema(
  {
    _id: Types.ObjectId,
    name: { type: String },
    time: { type: Number },
    price: { type: Number },
    company: { type: Schema.Types.ObjectId, ref: "Company" },
  },
  {
    versionKey: false,
    _id: false,
  }
);

export default mongoose.model<IServiceModel>("Service", ServiceSchema);
