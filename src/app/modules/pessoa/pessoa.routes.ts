import { Router } from "express";
import { AutorizacaoGuard } from "../auth/autorizacao.guard";
import { PessoaController } from "./pessoa.controller";

const pessoasRoutes = Router();
const pessoaController = new PessoaController();
pessoasRoutes.get("/pessoas", AutorizacaoGuard, pessoaController.index);
pessoasRoutes.get("/pessoas/:id", AutorizacaoGuard, pessoaController.show);
pessoasRoutes.patch("/pessoas/:id", AutorizacaoGuard, pessoaController.update);
pessoasRoutes.delete("/pessoas/:id", AutorizacaoGuard, pessoaController.delete);

export default pessoasRoutes;
