import { Module } from '@nestjs/common';
import { InvitacionesService } from './invitaciones.service';
import { InvitacionesController } from './invitaciones.controller';
import {MongooseModule} from '@nestjs/mongoose';
import {InvitacionesModel}  from './model/invitaciones.model';
import { UsersModule } from 'src/users/users.module';
@Module({
  imports:[
    MongooseModule.forFeature([InvitacionesModel]),
    UsersModule
  ],
  controllers:[InvitacionesController],
  providers: [InvitacionesService],
  exports:[InvitacionesService]
})
export class InvitacionesModule {}
