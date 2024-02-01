import mongoose, { Document, Schema, Types } from "mongoose";

export interface ICompany {
  name: string;
  picture: string;
  services: string;
  city: string;
  address: string;
  rate: number;
  specialization: string;
}

export interface ICompanyModel extends ICompany, Document {}

const CompanySchema: Schema = new Schema(
  {
    _id: Types.ObjectId,
    name: { type: String },
    picture: {type: String },
    services: { type: String },
    city: { type: String },
    address: {type: String},
    rate: {type: Number},
    specialization: {type: String},
  },
  {
    versionKey: false,
    _id: false,
  }
);

export default mongoose.model<ICompanyModel>("Company", CompanySchema);
