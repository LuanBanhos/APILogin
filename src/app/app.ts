import express from "express";
import authRoutes from "./modules/auth/auth.routes";
import userRoutes from "./modules/user/user.routes";

export const app = express();

app.use(express.json());
app.use(userRoutes);
app.use(authRoutes);
