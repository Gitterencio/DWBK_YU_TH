import { SubscribeMessage, WebSocketGateway,
  OnGatewayInit,
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketServer } from '@nestjs/websockets';

import {Server,Socket} from 'socket.io';

@WebSocketGateway(
  {
     cors : {
      origin: true,
      credentials: true
  },
})
export class SocketGateway implements OnGatewayConnection,OnGatewayDisconnect,OnGatewayInit{
  @WebSocketServer() server:Server;
  afterInit(server: Server) {
    console.log('SOCKET WEB SERVICE START');
  }

  handleConnection(client: Socket, ...args: any[]) {
    console.log(`${client.handshake.query.message} -> ${client.id}`);  
  }

  handleDisconnect(client: Socket) {
    console.log(`USER DISCONNECT  ${client.id}`)
  }

  @SubscribeMessage('JoinRoomProject')
  joinRoomProject(client:Socket,idRoom:string)
  {   
    client.join(idRoom)
    console.log("USER JOINED TO THE PROJECT ROOM " + idRoom);
    this.server.in(idRoom).emit("JoinedRoomProject", "USER JOINED TO THE PROJECT ROOM "+idRoom);
  }

  @SubscribeMessage('NewApplicationClient')
  handleEvent(client:Socket)
  {   
      console.log("NUEVA SOLICITUD")
      this.server.in("room").emit("NewClient", "RESPUESTA SOCKET BACKEND");
  }
}
