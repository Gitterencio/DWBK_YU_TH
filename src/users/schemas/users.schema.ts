import {Schema} from 'mongoose';

export const UsersSchema = new Schema({
    name: {type:String,required:true,  unique: true},
    email: {type:String,required:true},
    password: {type:String,required:true},
    createdAt: {
        type:Date,
        default:Date.now
    }
})