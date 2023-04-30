import {Schema,Types} from 'mongoose';

const SnippetsSchema = new Schema({
    name: {type:String,required:true},
    script: {type:String,default:''},
    user: { type: Types.ObjectId, ref: "users",required:true },
    createdAt: {
        type:Date,
        default:Date.now
    }
  
})

export const SnippetsModel = {name:'snippets',schema: SnippetsSchema}