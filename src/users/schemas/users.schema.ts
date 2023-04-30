import {Schema,Types} from 'mongoose';

const UsersSchema = new Schema({
    name: {type:String,required:true},
    email: {type:String,required:true,unique: true},
    password: {type:String,required:true},
    img: { 
        data: Buffer, 
        contentType: String 
     },
    createdAt: {
        type:Date,
        default:Date.now
    }
})

export const UsersModel = {name:'users',schema: UsersSchema}