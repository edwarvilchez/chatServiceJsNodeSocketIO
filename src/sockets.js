module.exports = function(io){

    io.on('connection', socket => {
        console.log('nueva conexión');

        //recibimos el mensaje del cliente
        socket.on('send message', function(data){
            io.sockets.emit('new message', data);
        });
    });


}


 