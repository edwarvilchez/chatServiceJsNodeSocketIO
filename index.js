const express = require("express");
const app = express();


app.use(express.static('public'));


//server area
app.listen(3000, () => {
    console.log('Servidor activo en el puerto 3000');
});