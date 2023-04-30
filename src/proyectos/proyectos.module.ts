import { Module } from '@nestjs/common';
import { ProyectosService } from './proyectos.service';
import { ProyectosController } from './proyectos.controller';
import {MongooseModule} from '@nestjs/mongoose';
import { ProyectosModel } from './schemas/proyectos.schema';



@Module({
  imports:[
    MongooseModule.forFeature([ProyectosModel])
  ],
  controllers:[ProyectosController],
  providers: [ProyectosService],
  exports:[ProyectosService]
})
export class ProyectosModule {}
