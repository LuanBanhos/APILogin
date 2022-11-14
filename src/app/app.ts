import express from "express";
import authRoutes from "./modules/auth/auth.routes";
import pessoasRoutes from "./modules/pessoa/pessoa.routes";

export const app = express();

app.use(express.json());
app.use(pessoasRoutes);
app.use(authRoutes);
