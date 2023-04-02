import { SubscribeMessage, WebSocketGateway,
  OnGatewayInit,
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketServer, } from '@nestjs/websockets';

import {Server,Socket} from 'socket.io';

@WebSocketGateway(
  {
     cors : {
      origin: true,
      credentials: true
  },
})
export class SocketGateway implements OnGatewayConnection,OnGatewayDisconnect,OnGatewayInit{
  @SubscribeMessage('message')
  handleMessage(client: any, payload: any): string {
    return 'Hello world!';
  }

  @WebSocketServer() server:Server;
  afterInit(server: Server) {
    console.log('esto se ejecuta cuando inicia');
  }

  handleConnection(client: Socket, ...args: any[]) {
    console.log('alguien se conecto al socket')
    console.log(`${client.handshake.query.room} -> ${client.id}`);  
    client.join('room')
    console.log("UN USUARIO SE UNIO A LA SALA " + 'room');
  }

  handleDisconnect(client: Socket) {
    console.log('alguien se FUE')
  }

  @SubscribeMessage('NewApplicationClient')
  handleEvent(client:Socket)
  {   
      console.log("NUEVA SOLICITUD")
      this.server.in("room").emit("NewClient", "RESPUESTA SOCKET BACKEND");
  }
}
