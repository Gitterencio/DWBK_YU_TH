import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

import {MongooseModule} from '@nestjs/mongoose';
import {UsersSchema} from './schemas/users.schema';

import {PasswordHashingService} from '../password-hashing/password-hashing.service';
@Module({
  imports:[
    MongooseModule.forFeature([
      {name:'Users',schema: UsersSchema}
    ])
    ],
  controllers: [UsersController],
  providers: [UsersService,PasswordHashingService]
})
export class UsersModule {}
