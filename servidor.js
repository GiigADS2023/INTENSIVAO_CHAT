const http = require('http'); //Usando recurso que tem no node
const express = require('express');
const aplicacao = express();

const servidorHttp = http.createServer(aplicacao);
const io = require("socket.io")(servidorHttp);

aplicacao.use(express.static('public'));

io.addListener("connection", (socket) => {
    console.log('um usuário conectou-se');
    socket.addListener('nova mensagem', (msg) => {
        io.emit('nova mensagem', msg);
    })
});

/*É uma função, conecida como função de flecha
() => {
    return
} */

servidorHttp.listen(1000);