var express = require("express");
var http = require("http");
var app= express();
var server=http.createServer(app).listen(3000);
var io=require("socket.io")(server);

app.use(express.static("./public"));

io.on("connection",function(socket) //connection is an event as soon as client gets connected
{

	socket.emit("message","welcome to coding chat"); // server sending msg to client

	//console.log("New connection Recieved");

	socket.on("chat",function(data)
	{
		socket.broadcast.emit("message",
			{
				data:data,
				sender:socket.id	
			});
	})

})


console.log("Running socket server on port 3000");