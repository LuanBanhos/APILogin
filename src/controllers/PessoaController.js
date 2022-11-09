const  PessoaModel = require('../models/PessoaModel');

class PessoaController {

async store (req , res){
  try {
    //const {nome,sobrenome,idade}= req.body;

    //if(!nome||!sobrenome||!idade){
    //return res.status(400).json({msg:"Nome , Sobrenome Ou idade necessario inserir"})
    //}
    const createdPessoa = await PessoaModel.create(req.body);

    return res.status(200).json(createdPessoa);
  } catch (error) {
    return res.status(400).json({msg:error})
  }
}

async index(req , res){
const Pessoa = await PessoaModel.find();

return res.status(200).json(Pessoa);
}

async show (req , res){
try {
    const {id} = req.params;

const Pessoa = await PessoaModel.findById(id);


if(!Pessoa){
    return res.status(404).json({msg:"Pessoa Não Encontrada"})
}
    return res.status(200).json(Pessoa);
} catch (error) {
    return res.status(404).json({msg:"Verificar o id da pessoa"})
}
}

async update(req , res){
 const {id} = req. params;

 try {
    await PessoaModel.findByIdAndUpdate(id,req.body);
    return res.status(200).json({msg:"Atualização de pessoa feita com sucesso"});
 } catch (error) {
    return res.status(404).json({msg:"Falha ao atualizar os dados da pessoa"})
 }

}

async delete (req , res){
   try {
    const {id} = req.params;

    const PessoaDelete = await PessoaModel.findByIdAndDelete(id);

    if(!PessoaDelete){
        return res.status(404).json({msg:"Pessoa não existe"})
    }

        return res.status(200).json({msg:"Pessoa deletada com sucesso"})
   } catch (error) {
        return res.status(404).json({msg:"Falha ao deletar pessoa"})
   }
}

}


module.exports = new PessoaController();

