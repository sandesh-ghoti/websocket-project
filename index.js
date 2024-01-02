const express=require('express');
const app=express();
const http=require('http')
const server=http.createServer(app);
const {Server}=require('socket.io')
const io=new Server(server)
app.use('/',express.static(__dirname+'/public'))

io.on('connection',(socket)=>{
    console.log('a user connected',socket.id);
    socket.on('disconnect',()=>{
        console.log('user disconnected',socket.id);
    })
    socket.on('sendMessage',(data)=>{
        socket.broadcast.emit('sendMessage',data);
        // to send message to all including socket then use io.emit
        // io.emit('sendMessage',data);
    })
    socket.on('typing',(data)=>{
        socket.broadcast.emit('typing',data);
    })
})

server.listen(3000,()=>{
    console.log('listening on post: 3000');
})