import { Router } from "express";
import { autorizacao } from "./autorizacao";
import { PessoaController } from "./pessoa.controller";

const pessoasRoutes = Router();

const pessoaController = new PessoaController();
pessoasRoutes.post("/login", pessoaController.login);
pessoasRoutes.post("/register", pessoaController.store);

pessoasRoutes.get("/pessoas",autorizacao ,pessoaController.index);
pessoasRoutes.get("/pessoas/:id",autorizacao, pessoaController.show);
pessoasRoutes.patch("/pessoas/:id",autorizacao, pessoaController.update);
pessoasRoutes.delete("/pessoas/:id",autorizacao, pessoaController.delete);

export default pessoasRoutes;
