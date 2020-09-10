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
app.set('port', process.env.PORT || 5000)
/*permite que se encuentre la direccion de los archivos estaticos necesarios para la aplicación*/
app.use(express.static(path.join(__dirname, 'public')));

//inicia el servidor
server.listen(app.get('port'), () => {
    console.log('Servidor activo en el puerto', app.get('port'));
});