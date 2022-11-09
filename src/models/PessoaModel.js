const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId= Schema.ObjectId;

const PessoaSchema = new Schema({
    id: ObjectId,
    nome:{
        type:String,
        required:true
    },
    sobrenome:{
        type:String,
        required:true
    },
    idade:{
        type:Number,
        min:[1,'Quem leu é gay']
    },
});

const PessoaModel = mongoose.model('Pessoas',PessoaSchema);

module.exports = PessoaModel;