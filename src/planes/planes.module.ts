import { Module } from '@nestjs/common';
import { PlanesService } from './planes.service';

@Module({
  providers: [PlanesService]
})
export class PlanesModule {}
