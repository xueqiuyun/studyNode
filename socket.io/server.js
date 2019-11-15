var  express=require('express');
var app=express();
var server=require('http').Server(app);
var ws=require('socket.io')(server);
//将socket服务器和express进行结合

app.use(express.static(__dirname+'./client'));
//客户端连接
ws.on('connection',function(client){
    client.emit('hehe','欢迎光临');
})
server.listen(8081,'0.0.0.0');