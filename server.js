/**
 * Created by Karlo on 05-May-17.
 */
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

server.listen(process.env.PORT || 3000);
console.log('Server is running on 3000');

app.use(express.static('public'));

app.get('/', function (req,res) {
    res.sendFile(__dirname + 'public/index.html');
});

io.sockets.on('connection', function (socket) {
    console.log('New connection:' + socket.id);

    socket.on('mouse', mouseMsg);

    function mouseMsg(data) {
        socket.broadcast.emit('mouse', data);
        console.log(data);
    }


});



