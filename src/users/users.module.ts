import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

import {MongooseModule} from '@nestjs/mongoose';
import {UsersModel} from './schemas/users.schema';

import {PasswordHashingService} from '../password-hashing/password-hashing.service';
@Module({
  imports:[
    MongooseModule.forFeature([UsersModel])
    ],
  controllers: [UsersController],
  providers: [UsersService,PasswordHashingService],
  exports: [UsersService,PasswordHashingService,  
  MongooseModule.forFeature([UsersModel])]
})
export class UsersModule {}
