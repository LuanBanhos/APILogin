import express from "express";
import pessoasRoutes from "./modules/pessoa/pessoa.routes";

export const app = express();

app.use(express.json());
app.use(pessoasRoutes);
