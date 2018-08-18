//setting up express module
var express = require('express');
var app = express();

//setting up server
app.use(express.static('public')); //runs files that are in public directory
var server = app.listen(8000);

//Make sure application is running
console.log('App is running');

//set up socket
var socket = require("socket.io");
var io = socket(server);

io.sockets.on("connection", newConnection);

function newConnection(socket){
    console.log('new connection'+ socket.id);

}
