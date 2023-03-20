module.exports =  (io) => {
    io.on("connection", (socket) => {
        console.log(`${socket.handshake.query.room} -> ${socket.id}`);

        socket.join('room')
        console.log("UN USUARIO SE UNIO A LA SALA " + 'room')
        
        socket.on("NewApplicationClient", () => {

     

            console.log("NUEVA SOLICITUD")
            //socket.broadcast.emit("NewClient", "hola"); al emisor
             //socket.emit("NewClient","CLIENTE EN ESPERA");// a todos menos el emisor
      
            //sala espesificau
            io.sockets.in("room").emit("NewClient", "RESPUESTA SOCKET BACKEND");
      
          });



        socket.on("disconnect", () => {
            console.log(`DESCONECTADO -> ${socket.id}`)

            
          });
    });
}