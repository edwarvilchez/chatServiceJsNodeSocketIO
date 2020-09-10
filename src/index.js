//aqui va el código de la aplicación

//invocamos las dependencias
const http = require('http');
const path = require('path');
const express = require('express');
const socketio = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = socketio.listen(server);

require('./sockets')(io);


//settings
/*permite que se encuentre la direccion de los archivos estaticos necesarios para la aplicación*/
app.use(express.static(path.join(__dirname, 'public')));



//inicia el servidor
server.listen(3000, () => {
    console.log('Servidor activo en el puerto 3000');
});