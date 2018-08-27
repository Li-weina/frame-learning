let http = require('http')
let server = http.createServer();
server.on('request',(req,res)=>{
    console.log(req.url)
    req.setEncoding('utf8')
    req.on('data',(data)=>{
        console.log(data)
    })
})
server.listen(3000)