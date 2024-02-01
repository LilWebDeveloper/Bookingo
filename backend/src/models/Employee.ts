import mongoose, { Document, Schema, Types } from "mongoose";

export interface IEmployee {
  name: string;
  surname: string;
  company: string;
}

export interface IEmployeeModel extends IEmployee, Document {}

const EmployeeSchema: Schema = new Schema(
  {
    _id: Types.ObjectId,
    name: { type: String },
    surname: {type: String },
    company: {type: Schema.Types.ObjectId, ref: "Company"}
  },
  {
    versionKey: false,
    _id: false,
  }
);

export default mongoose.model<IEmployeeModel>("Employee", EmployeeSchema);