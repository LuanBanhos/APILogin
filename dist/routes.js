"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var pessoa_controller_1 = require("./controllers/pessoa-controller");
var routes = (0, express_1.Router)();
routes.get("/home", function (req, res) {
    return res.status(200).json({ msg: "Servidor esta no ar" });
});
var pessoaController = new pessoa_controller_1.PessoaController();
routes.post("/register", pessoaController.store);
routes.get("/pessoas", pessoaController.index);
routes.get("/pessoas/:id", pessoaController.show);
routes.patch("/pessoas/:id", pessoaController.update);
routes.delete("/pessoas/:id", pessoaController.delete);
routes.post("/login", pessoaController.login);
exports.default = routes;
