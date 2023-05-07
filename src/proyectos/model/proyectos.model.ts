import {Schema,Types} from 'mongoose';

const ProyectosSchema = new Schema({
    name: {type:String,required:true},
    descripcion: {type:String},
    html_text: {type:String,default:''},
    css_text: {type:String,default:''},
    js_text: {type:String,default:''},
    user: { type: Types.ObjectId, ref: "users",required:true },
    createdAt: {
        type:Date,
        default:Date.now
    }
  
})

export const ProyectosModel = {name:'proyectos',schema: ProyectosSchema}