import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
  firstName: {
    type: String,
    required: "Enter a First Name",
  },
  lastName: {
    type: String,
    required: "Enter a Last Name",
  },
  userName: {
    type: String,
    required: "Enter a User Name",
  },
  accountNumber: {
    type: Number,
  },
});
