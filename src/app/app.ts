import express from "express";
import authRoutes from "./modules/auth/auth.routes";
import userRoutes from "./modules/user/user.routes";
import spellRoutes from "./modules/spells/spell.routes"
export const app = express();

app.use(express.json());
app.use(userRoutes);
app.use(authRoutes);
app.use(spellRoutes);
