import { model, Schema, Types, } from "mongoose";
import { DamegeType, MagicComponents, MagicSchool, SpellCondition } from "./spell-enum";


const spellmodel = new Schema({
    id: {
        type: Types.ObjectId,
      },
    name: {
        type: String,
        required: true,
      },
    level:{
        type: Number,
        default: 0,
        required:true
      },
    description: {
        type: String,
        required: true,
      },
    damege:{
        type: String, 
        default: 0
    },
    conditions:{
        default: 0,
    },
    school:{
        type: String,
        default: 0
    },
    castingTime:{
        type: String
    },
    range:{
        type: String
    },
    duration:{
        type: String
    },
    components:{
        type:String,
        default:0
    }
})

export const SpellModel = model("Spell", spellmodel);
















