const path=require('path');
const http=require('http');
const express=require('express');
const socketIO=require('socket.io');

const pubicPath=path.join(__dirname,'../public');
const port=process.env.PORT||3000;
var app=express();
var server=http.createServer(app);
var io=socketIO(server);

app.use(express.static(pubicPath));

io.on('connection',(socket)=>{
  console.log('new user connected');

socket.emit('newMessage',{
  from:'tnny@example.com',
  text:'hey...wat doing',
  createdAt:1232456
});

socket.on('createMessage',(message)=>{
  console.log('create message',message);
});
  socket.on('disconnect',()=>{
    console.log('user was disconnected');
   });
});

server.listen(port,()=>{
  console.log(`server is up on ${port}`);
});
