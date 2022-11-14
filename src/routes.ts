import { Router } from "express";
import { PessoaController } from "./controllers/pessoa-controller";

const routes = Router();

routes.get("/home", (req, res) => {
  return res.status(200).json({ msg: "Servidor esta no ar" });
});

const pessoaController = new PessoaController();
routes.post("/register", pessoaController.store);
routes.get("/pessoas", pessoaController.index);
routes.get("/pessoas/:id", pessoaController.show);
routes.patch("/pessoas/:id", pessoaController.update);
routes.delete("/pessoas/:id", pessoaController.delete);
routes.post("/login",pessoaController.login);

export default routes;
