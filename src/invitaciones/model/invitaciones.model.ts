import {Schema,Types} from 'mongoose';

const InvitacionesSchema = new Schema({
    user: { type: Types.ObjectId, ref: "users",required:true },
    proyecto: { type: Types.ObjectId, ref: "proyectos",required:true },
    invitado: { type: String,required:true },
    estado: {
        type: String,
        enum : ['espera','aceptada','rechazada','cancelada'],
        default: 'espera'
    },
    createdAt: {
        type:Date,
        default:Date.now
    }
  
})

export const InvitacionesModel = {name:'invitaciones',schema: InvitacionesSchema}