import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongodbConnectModule } from './mongodb-connect/mongodb-connect.module';
import { SocketGateway } from './socket/socket.gateway';
import { AuthModule } from './auth/auth.module';
import { ProyectosController } from './proyectos/proyectos.controller';
import { ProyectosModule } from './proyectos/proyectos.module';
import { PlanesController } from './planes/planes.controller';
import { PlanesModule } from './planes/planes.module';
import { InvitacionesController } from './invitaciones/invitaciones.controller';
import { InvitacionesModule } from './invitaciones/invitaciones.module';
import { SnippetsController } from './snippets/snippets.controller';
import { SnippetsModule } from './snippets/snippets.module';



@Module({
  imports: [UsersModule, MongodbConnectModule, AuthModule, ProyectosModule, PlanesModule, InvitacionesModule, SnippetsModule],
  controllers: [AppController, ProyectosController, PlanesController, InvitacionesController, SnippetsController],
  providers: [AppService, SocketGateway],
})
export class AppModule {}
