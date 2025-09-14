import { Model, Schema, model } from "mongoose";
import { IUser } from "./user.interface";

// Define model type
type UserModel = Model<IUser, object>;

const userSchema = new Schema(
  {
    id: { type: String, required: true, unique: true },
    role: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true, // ✅ works now
  }
);

export const User = model<IUser, UserModel>('User', userSchema);
