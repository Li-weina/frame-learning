let http = require('http');
let url = require('url');
let fs = require('fs');
let path = require('path');
let {promisify} = require('util');
let stat = promisify(fs.stat)

http.createServer(async (req,res)=>{
    let {pathname, query} = url.parse(req.url, true);
    let realPath = path.join(__dirname,'public',pathname);
    try{
        let statObject = await stat(realPath);
        res.setHeader('Cache-Control','max-age=10')
        res.setHeader('Expires',new Date(Date.now()+10).toGMTString())
        if(statObject.isDirectory()){
            let p = path.join(realPath,'index.html');
            await stat(p)
            fs.createReadStream(p).pipe(res)
        }else{
            fs.createReadStream(realPath).pipe(res)
        }
    }catch{
        res.statusCode = 404;
        res.end('Not Found')
    }
}).listen(3003)