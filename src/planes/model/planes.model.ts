import {Schema,Types} from 'mongoose';

const PlanesSchema = new Schema({
    name: {type:String,required:true},
    descripcion: {type:String,required:true},
    precio: {type:Number,required:true},
    limitProyectos: {type:Number,required:true},
    limitInvitadosProyecto: {type:Number,required:true},
    createdAt: {
        type:Date,
        default:Date.now
    }
  
})

export const PlanesModel = {name:'planes',schema: PlanesSchema}