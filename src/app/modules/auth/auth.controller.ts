import { compare } from "bcrypt";
import { validate, ValidationError } from "class-validator";
import { Request, Response } from "express";
import { sign } from "jsonwebtoken";

import { LoginUserDTO } from "../user/DTOs/login-user.dto";
import { UserModel } from "../user/models/user.model";

export class AuthController {
  async login(req: Request, res: Response) {
    try {
      const data = new LoginUserDTO();
      data.email = req.body.email;
      data.password = req.body.password;

      const errors = await validate(data);
      if (errors.length > 0) throw errors;

      const user = await UserModel.findOne({ email: data.email });
      if (!user) return res.status(404).json({ msg: "User not found" });

      const passwordIsValid = await compare(data.password, user.password);
      if (!passwordIsValid)
        return res.status(404).json({ msg: "User not found" });

      const secret = process.env["JWT_SECRET"] as string;
      const token = sign({ subject: user.id, expiresIn: "1h" }, secret);

      res.status(200).json({ token });
    } catch (errors: ValidationError[] | any) {
      const responseErrors = [];
      errors.map((error: ValidationError) => {
        responseErrors.push({
          property: error.property,
          rules: {
            ...error.constraints,
          },
        });
      });
      res.status(400).json(responseErrors);
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
