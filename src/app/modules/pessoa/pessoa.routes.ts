import { Router } from "express";
import { PessoaController } from "./pessoa.controller";

const pessoasRoutes = Router();

const pessoaController = new PessoaController();
pessoasRoutes.post("/login", pessoaController.login);
pessoasRoutes.post("/register", pessoaController.store);

pessoasRoutes.get("/pessoas", pessoaController.index);
pessoasRoutes.get("/pessoas/:id", pessoaController.show);
pessoasRoutes.patch("/pessoas/:id", pessoaController.update);
pessoasRoutes.delete("/pessoas/:id", pessoaController.delete);

export default pessoasRoutes;
