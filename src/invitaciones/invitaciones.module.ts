import { Module } from '@nestjs/common';
import { InvitacionesService } from './invitaciones.service';

@Module({
  providers: [InvitacionesService]
})
export class InvitacionesModule {}
