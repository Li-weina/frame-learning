let net = require('net');

let server = net.createServer();
let clients = [];
server.on('connection',function(socket){
    console.log(socket.remoteAddress)
    clients.push(socket);
    server.getConnections((err,count)=>{
        console.log(count)
        socket.write(`当前聊天可容纳${server.maxConnections},您当前是${count}人\r\n`);
    })
    socket.setEncoding('utf8');
    socket.on('data',function(data){
        data = data.replace("\r\n",'');
        clients.forEach((s)=>{
            console.log((s)==socket)
            if(s == socket) return;
            s.write(data);
        })
    })
    socket.on('end',function(data){
        clients = clients.filter(s=> s != socket);
    })

});
server.on('close',function(){
    console.log('close')
})
server.on('error',function(err){
    console.log(err)
})

server.maxConnections = 2;
server.listen(3003)

