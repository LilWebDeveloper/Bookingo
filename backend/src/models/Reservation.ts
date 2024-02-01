import mongoose, { Document, Schema, Types } from "mongoose";

export interface IReservation {
  userId: string;
  companyId: string;
  serviceId: string;
  employeeId: string;
  date: string;
}

export interface IReservationModel extends IReservation, Document {}

const ReservationSchema: Schema = new Schema(
  {
    _id: Types.ObjectId,
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    companyId: { type: Schema.Types.ObjectId, ref: "Company" },
    serviceId: { type: Schema.Types.ObjectId, ref: "Service" },
    employeeId: { type: Schema.Types.ObjectId, ref: "Employee" },
    date: { type: String },
  },
  {
    versionKey: false,
    _id: false,
  }
);

export default mongoose.model<IReservationModel>(
  "Reservation",
  ReservationSchema
);
