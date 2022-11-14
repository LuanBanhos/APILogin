import mongoose from "mongoose";

export async function startDB() {
  //await mongoose.connect("mongodb://localhost:27017/api-login");
  await mongoose.connect('mongodb+srv://LuanPB:a1b2c3@cluster0.2r3tsfj.mongodb.net/test');
}
