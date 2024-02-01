import mongoose, { Document, Schema, Types } from "mongoose";

export interface IUser {
  login: string;
  password: string;
}

export interface IUserModel extends IUser, Document {}

const UserSchema: Schema = new Schema(
  {
    _id: Types.ObjectId,
    login: { type: String, require: true  },
    password: {type: String, require: true  },
  },
  {
    versionKey: false,
    _id: false,
  }
);

export default mongoose.model<IUserModel>("User", UserSchema);