import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';

@Module({
    imports:[
    MongooseModule.forRoot('mongodb://u6pdhvoipuyt36xoiosj:571yTiCu2NDBwxCCrnrU@n1-c2-mongodb-clevercloud-customers.services.clever-cloud.com:27017,n2-c2-mongodb-clevercloud-customers.services.clever-cloud.com:27017/b6c8fducycmfd3c?replicaSet=rs0')
    ]
})
export class MongodbConnectModule {}
