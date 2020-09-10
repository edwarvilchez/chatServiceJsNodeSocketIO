//invocamos el código de socket io

$(function(){
    const socket = io();

    //capturamos los eventos del DOM
    const $messageForm = $('#msgForm');
    const $messageBox = $('#message');
    const $messageChat = $('#chat');

    //eventos
    //enviamos los mensajes desde el cliente
    $messageForm.submit(e =>{
        e.preventDefault();
        socket.emit('send message', $messageBox.val());
        $messageBox.val('');
    });

    //recibimos los mensajes desde el servidor
    socket.on('new message', function(data){
        $messageChat.append(data + "<br/>");
    })


});