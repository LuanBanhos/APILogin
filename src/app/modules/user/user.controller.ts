import { Request, Response } from "express";

import { UserModel } from "./models/user.model";

export class UserController {
  async getAll(req: Request, res: Response) {
    const user = await UserModel.find();
    return res.status(200).json(user);
  }

  async find(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const user = await UserModel.findById(id);
      if (!user) {
        return res.status(404).json({ msg: "Pessoa Não Encontrada" });
      }
      return res.status(200).json(user);
    } catch (error) {
      return res.status(404).json({ msg: "Verificar o id da user" });
    }
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const user = await UserModel.findById(id);
      if (!user) return res.status(404).json({ msg: "Pessoa Não Encontrada" });
      await UserModel.findByIdAndUpdate(id, req.body);
      return res.status(200).json(user);
    } catch (error) {
      return res
        .status(404)
        .json({ msg: "Falha ao atualizar os dados da user" });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const user = await UserModel.findByIdAndDelete(id);
      if (!user) return res.status(404).json({ msg: "Pessoa não existe" });
      return res.status(200).json({ msg: "Pessoa deletada com sucesso" });
    } catch (error) {
      return res.status(404).json({ msg: "Falha ao deletar user" });
    }
  }
}
