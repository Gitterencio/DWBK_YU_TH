import {Schema,Types} from 'mongoose';

const ProyectosSchema = new Schema({
    name: {type:String,required:true},
    html_text: {type:String,default:''},
    css_text: {type:String,default:''},
    js_text: {type:String,default:''},
    user: { type: Types.ObjectId, ref: "users",required:true }
  
})

export const ProyectosModel = {name:'proyectos',schema: ProyectosSchema}