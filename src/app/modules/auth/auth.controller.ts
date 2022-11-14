import { compare } from "bcrypt";
import { Request, Response } from "express";
import { sign } from "jsonwebtoken";
import { UserModel } from "../user/models/user.model";

export class AuthController {
  async login(req: Request, res: Response) {
    const { email, password } = req.body;
    if (!email) return res.status(422).json({ msg: "Email Obrigatorio!" });

    if (!password) return res.status(422).json({ msg: "Senha Obrigatorio!" });

    const user = await UserModel.findOne({ email: email });

    if (!user) return res.status(404).json({ msg: "Email Não Encontrado" });

    const checkPassowrd = await compare(password, user.password);

    if (!checkPassowrd)
      return res.status(422).json({ msg: "Senha Incorreta!" });

    try {
      const secret = process.env["JWT_SECRET"] as string;
      const token = sign({ subject: user.id, expiresIn: "1h" }, secret);
      res.status(200).json({ msg: "Usuario logaado", token });
    } catch (error) {
      res.status(500).json({ msg: error });
    }
  }

  async register(req: Request, res: Response) {
    try {
      const user = await UserModel.create(req.body);
      return res.status(200).json(user);
    } catch (error) {
      return res.status(400).json({ msg: error });
    }
  }
}
