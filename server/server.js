const path=require('path');
const http=require('http');
const express=require('express');
const socketIO=require('socket.io');

const{generateMessage}=require('./utils/message');
const pubicPath=path.join(__dirname,'../public');
const port=process.env.PORT||3000;
var app=express();
var server=http.createServer(app);
var io=socketIO(server);

app.use(express.static(pubicPath));

io.on('connection',(socket)=>{
  console.log('new user connected');

socket.emit('newMessage',generateMessage('admin','welcome to the chat app'));

socket.broadcast.emit('newMessage',generateMessage('admin','New user joined'));

socket.on('createMessage',(message,callback)=>{
  console.log('create message',message);
  io.emit('newMessage',generateMessage(message.from,message.text));
  callback('this is from server');
  //   from:message.from,
  //   text:message.text,
  //   createdAt:new Date().getTime()
  // });
});
  socket.on('disconnect',()=>{
    console.log('user was disconnected');
   });
});

server.listen(port,()=>{
  console.log(`server is up on ${port}`);
});
