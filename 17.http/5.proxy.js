let http = require('http');
let httpProxy = require('http-proxy');
let proxyServer = httpProxy.createProxy();

let map = {
    'www.zf8.cn':'http://localhost:3001',
    'www.zf29.cn':'http://localhost:3002',
}

http.createServer((req,res)=>{
    let target = req.headers['host'];
    console.log(target)
    proxyServer.web(req,res,{
        target:map[target]
    })

}).listen(3000)
// http.on('error',(data)=>{
//     console.log(data)
// })