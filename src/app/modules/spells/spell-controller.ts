import {Request,Response} from 'express'
import { SpellModel } from './spell-model';



export class SpellController{

    async registerSpell(req: Request, res: Response) {
        try {
          const spell = await SpellModel.create(req.body);
          return res.status(200).json(spell);
        } catch (error) {
          return res.status(400).json({ msg: error });
        }
      }


    async spell (req:Request,res:Response){
        const spells = await SpellModel.find();
        return res.status(200).json(spells);
    }
















}






























