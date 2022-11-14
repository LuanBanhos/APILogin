import { Request, Response } from "express";

import { PessoaModel } from "./pessoa.model";

export class PessoaController {
  async index(req: Request, res: Response) {
    const pessoa = await PessoaModel.find();
    return res.status(200).json(pessoa);
  }

  async show(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const pessoa = await PessoaModel.findById(id);

      if (!pessoa) {
        return res.status(404).json({ msg: "Pessoa Não Encontrada" });
      }

      return res.status(200).json(pessoa);
    } catch (error) {
      return res.status(404).json({ msg: "Verificar o id da pessoa" });
    }
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const pessoa = await PessoaModel.findById(id);

      if (!pessoa)
        return res.status(404).json({ msg: "Pessoa Não Encontrada" });

      await PessoaModel.findByIdAndUpdate(id, req.body);
      return res.status(200).json(pessoa);
    } catch (error) {
      return res
        .status(404)
        .json({ msg: "Falha ao atualizar os dados da pessoa" });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const pessoa = await PessoaModel.findByIdAndDelete(id);

      if (!pessoa) {
        return res.status(404).json({ msg: "Pessoa não existe" });
      }

      return res.status(200).json({ msg: "Pessoa deletada com sucesso" });
    } catch (error) {
      return res.status(404).json({ msg: "Falha ao deletar pessoa" });
    }
  }
}
