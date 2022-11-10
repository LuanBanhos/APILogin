import { model, Schema, Types } from "mongoose";

const PessoaSchema = new Schema({
  id: {
    type: Types.ObjectId,
  },
  nome: {
    type: String,
    required: true,
  },
  sobrenome: {
    type: String,
    required: true,
  },
  idade: {
    type: Number,
    min: [1, "A idade deve ser maior que 1"],
  },
});

export const PessoaModel = model("Pessoas", PessoaSchema);
