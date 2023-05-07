import { SubscribeMessage, WebSocketGateway,
  OnGatewayInit,
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketServer } from '@nestjs/websockets';
import { Proyectos } from 'dw-data-types/interfaces/proyectos.interface';

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
    console.log(`USER ${client.id} JOINED TO THE PROJECT ROOM: ` + idRoom);
    //console.log(this.server.sockets.adapter.rooms)
    //this.server.in(idRoom).emit("JoinedRoomProject", `USER ${client.id} JOINED TO THE PROJECT ROOM: ` + idRoom);
    client.broadcast.to(idRoom).emit("JoinedRoomProject", `USER ${client.id} JOINED TO THE PROJECT ROOM: ` + idRoom);
  }

  @SubscribeMessage('SetActualEditingProject')
  actualEditingProject(client:Socket,data:{idRoom:string,proyecto:Proyectos})
  {   
    //console.log(`USER ${client.id} EDITING HTML ROOM: ` + data.idRoom);
    client.broadcast.to(data.idRoom).emit('ActualEditingProject',data.proyecto);

  }
  @SubscribeMessage('HTMLProjectEditing')
  editHTMLProject(client:Socket,data:{idRoom:string,html:string})
  {   
    client.broadcast.to(data.idRoom).emit('HTMLProjectEdited',data.html);

  }

  @SubscribeMessage('CSSProjectEditing')
  editCSSProject(client:Socket,data:{idRoom:string,css:string})
  {   
    client.broadcast.to(data.idRoom).emit('CSSProjectEdited',data.css);

  }
  @SubscribeMessage('JSProjectEditing')
  editJSProject(client:Socket,data:{idRoom:string,js:string})
  {   
    client.broadcast.to(data.idRoom).emit('JSProjectEdited',data.js);

  }

  @SubscribeMessage('EditingHTMLProject')
  editingHTMLProject(client:Socket,data:{idRoom:string,html:string})
  {   
    //console.log(`USER ${client.id} EDITING HTML ROOM: ` + data.idRoom);
    client.broadcast.to(data.idRoom).emit('EditedHTMLProject',data.html);

  }
  @SubscribeMessage('NewApplicationClient')
  handleEvent(client:Socket)
  {   
      console.log("NUEVA SOLICITUD")
      this.server.in("room").emit("NewClient", "RESPUESTA SOCKET BACKEND");
  }
}
