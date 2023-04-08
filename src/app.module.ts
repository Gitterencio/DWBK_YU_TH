import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongodbConnectModule } from './mongodb-connect/mongodb-connect.module';
import { SocketGateway } from './socket/socket.gateway';
import { AuthModule } from './auth/auth.module';



@Module({
  imports: [UsersModule, MongodbConnectModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, SocketGateway],
})
export class AppModule {}
