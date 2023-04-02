import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { MongodbConnectModule } from './mongodb-connect/mongodb-connect.module';
import { SocketGateway } from './socket/socket.gateway';

@Module({
  imports: [UsersModule, MongodbConnectModule],
  controllers: [AppController, UsersController],
  providers: [AppService, SocketGateway],
})
export class AppModule {}
