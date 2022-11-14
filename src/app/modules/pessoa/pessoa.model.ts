import { genSalt, hash } from "bcrypt";
import { model, Schema, Types } from "mongoose";

const PessoaSchema = new Schema({
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

PessoaSchema.pre("save", async function () {
  const newSalt = await genSalt(10);
  const newHash = await hash(this.password, newSalt);
  this.salt = newSalt;
  this.password = newHash;
});

export const PessoaModel = model("Pessoas", PessoaSchema);
