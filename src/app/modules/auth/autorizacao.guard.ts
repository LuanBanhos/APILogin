import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

export function AutorizacaoGuard(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authtoke = request.headers.authorization;

  if (!authtoke) {
    return response.status(401).json({
      msg: "token perdido",
    });
  }
  const scret = process.env["JWT_SECRET"] as string;
  const [, token] = authtoke.split(" ");

  try {
    verify(token, scret);

    return next();
  } catch (error) {
    return response.status(401).json({ msg: "token invalido" });
  }
}
