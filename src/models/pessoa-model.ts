import { model, Schema, Types } from "mongoose";
import  bcrypt  from "bcrypt";
import { type } from "os";


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
    unique: true
  },
  email:{
    type: String,
    required: true,
    unique: true
  },
  password:{
    type: String,
    required: true
  },
  salt:{
    type:String
  }
});

PessoaSchema.pre('save', async function (){
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(this.password,salt);

  this.salt = salt;
  this.password = hash;
});

export const PessoaModel = model("Pessoas", PessoaSchema);
