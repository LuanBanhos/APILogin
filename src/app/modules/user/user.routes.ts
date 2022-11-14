import { Router } from "express";

import { AutorizacaoGuard } from "../auth/autorizacao.guard";
import { UserController } from "./user.controller";

const userRoutes = Router();
const userController = new UserController();
userRoutes.get("/users", AutorizacaoGuard, userController.getAll);
userRoutes.get("/users/:id", AutorizacaoGuard, userController.find);
userRoutes.patch("/users/:id", AutorizacaoGuard, userController.update);
userRoutes.delete("/users/:id", AutorizacaoGuard, userController.delete);

export default userRoutes;
