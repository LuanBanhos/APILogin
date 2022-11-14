import { genSalt, hash } from "bcrypt";
import { model, Schema, Types } from "mongoose";

const UserSchema = new Schema({
  id: {
    type: Types.ObjectId,
  },
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  salt: {
    type: String,
  },
});

UserSchema.pre("save", async function () {
  const newSalt = await genSalt(10);
  const newHash = await hash(this.password, newSalt);
  this.salt = newSalt;
  this.password = newHash;
});

export const UserModel = model("Users", UserSchema);
