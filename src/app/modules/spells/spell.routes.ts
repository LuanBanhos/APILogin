import { Router } from "express";
import { SpellController } from "./spell-controller";

const spellRoutes = Router();
const spellController = new SpellController();


spellRoutes.post("/register/spell",spellController.registerSpell);
spellRoutes.post("/spells",spellController.spell);