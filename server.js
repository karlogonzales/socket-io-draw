/**
 * Created by Karlo on 05-May-17.
 */
var express = require('express');
var app = express();
var server = app.listen(3000);

var socket = require('socket.io');
var io = socket(server);

app.use(express.static('public'));

console.log('Server is running on 3000');

io.sockets.on('connection', newConnection);

function newConnection(socket) {
    console.log('New connection:' + socket.id);

    socket.on('mouse', mouseMsg);

    function mouseMsg(data) {
        socket.broadcast.emit('mouse', data);
        console.log(data);
    }
}

