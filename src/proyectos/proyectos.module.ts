import { Module } from '@nestjs/common';
import { ProyectosService } from './proyectos.service';

@Module({
  providers: [ProyectosService]
})
export class ProyectosModule {}
