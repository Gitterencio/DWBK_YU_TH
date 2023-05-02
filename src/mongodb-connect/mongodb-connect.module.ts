import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';

const prodURL:string ='mongodb://u6pdhvoipuyt36xoiosj:571yTiCu2NDBwxCCrnrU@n1-c2-mongodb-clevercloud-customers.services.clever-cloud.com:27017,n2-c2-mongodb-clevercloud-customers.services.clever-cloud.com:27017/b6c8fducycmfd3c?replicaSet=rs0'
const devURL:string='mongodb://0.0.0.0:27017/DWYT'

const url= prodURL;
@Module({
    imports:[
    MongooseModule.forRoot(url)
    ]
})
export class MongodbConnectModule {}
