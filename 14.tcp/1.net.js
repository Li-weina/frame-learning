let net = require('net');
let server = net.createServer(function(socket){
    socket.setEncoding('utf8')
    socket.on('data',(data)=>{
        console.log(data);
    })
//     socket.write(`
// HTTP/1.1 200 OK
// Content-Type: text/html
// Content-Length: 2

// ok
//     `)
});
// server.on('connection',function(socket){
//     socket.setEncoding('utf8')
//     socket.on('data',(data)=>{
//         console.log(data);
//     })
// //     socket.write(`
// // HTTP/1.1 200 OK
// // Content-Type: text/html
// // Content-Length: 2

// // ok
// //     `)
// })
server.listen(3000);

server.on('error',(error)=>{
    console.log(error)
    if(error.code === 'EADDRINUSE'){
        server.listen(3001)
    }
})