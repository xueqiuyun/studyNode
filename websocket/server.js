const WebSocket=require('ws');
const ws=new WebSocket.Server({port:8080},()=>{
    console.log('socket start');
})
let clients=[];
ws.on('connection',(client)=>{
    clients.push(client);
    client.send('欢迎光临');
    client.on('message',(msg)=>{
        console.log('来自前端的数据：'+msg);
        if(msg.indexOf('广播')!=-1){
            sendAll();
        }
    })
    client.on('close',(msg)=>{
        console.log('前端主动断开连接')
    })
})
function sendAll(){
    for(let i=0;i<clients.length;i++){
        clients[i].send('哈哈哈哈哈哈哈哈哈哈哈哈');
    }
}