import { Module } from '@nestjs/common';
import { PlanesService } from './planes.service';
import {MongooseModule} from '@nestjs/mongoose';
import { PlanesModel } from './model/planes.model';
import { PlanesController } from './planes.controller';
@Module({
  imports:[
    MongooseModule.forFeature([PlanesModel])
  ],
  controllers:[PlanesController],
  providers: [PlanesService],
  exports:[PlanesService]
})
export class PlanesModule {}
