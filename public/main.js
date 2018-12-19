//CLIENTS CODE or Front end code

var socket=io("http://localhost:3000");

socket.on("connect", function(data)
{

	console.log("connect");
})

socket.on("disconnect", function(data)
{

	console.log("disconnect");
})


socket.on("message", function(data)
{

	console.log(data);
})

function sendMessage()
{
	socket.emit("chat","dead is the new sexy");
}