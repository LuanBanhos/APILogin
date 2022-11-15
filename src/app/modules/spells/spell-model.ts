import { model, Schema, Types } from "mongoose";
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
        type: String, DamegeType,
        enum: DamegeType,
        default: DamegeType.None
    },
    conditions:{
        type:SpellCondition,
        default: [SpellCondition.None]
    },
    school:{
        type: String, MagicSchool,
        enum:MagicSchool,
        default: MagicSchool.None
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
        type: MagicComponents,
        default:[]
    }
})

export const SpellModel = model("Spell", spellmodel);
















