let http = require('http');
let server = http.createServer();
// server.on('connection',function(socket){
//     socket.setEncoding('utf8')
//     socket.on('data',function(data){
//         console.log(data)
//     })
// })

server.on('request',(req,res)=>{
    console.log(req.method);
    console.log(req.url);
    console.log(req.httpVersions);
    console.log(req.header);
    req.on('data',(data)=>{
        console.log(data)
    })
    req.on('end',function(){
        console.log('end')
    })
})
server.listen(3000,()=>{
    console.log(`server start`)
});