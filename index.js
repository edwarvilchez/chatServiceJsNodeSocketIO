//aqui va el código de la aplicación

//invocamos las dependencias
const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = socketio.listen(server);

io.on('connection', socket => {
    console.log('nueva conexión'); 
});

//settings
/*permite que se encuentre la direccion de los archivos estaticos necesarios para la aplicación*/
app.use(express.static('public'));


//inicia el servidor
server.listen(3000, () => {
    console.log('Servidor activo en el puerto 3000');
});