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
        res.setHeader('Cache-Control','no-cache')
        if(statObject.isDirectory()){
            let p = path.join(realPath,'index.html');
            let statObj = await stat(p)
            res.setHeader('Last-Modified',statObj.ctime.toGMTString())
            if(req.headers['if-modified-since']=== statObj.ctime.toGMTString()){
                res.statusCode = 304;
                res.end();
                return;
            }
            fs.createReadStream(p).pipe(res)
        }else{
            res.setHeader('Last-Modified',statObject.ctime.toGMTString())
            if(req.headers['if-modified-since']=== statObject.ctime.toGMTString()){
                res.statusCode = 304;
                res.end();
                return;
            } 
            fs.createReadStream(realPath).pipe(res)
        }
    }catch{
        res.statusCode = 404
        res.end('Not Found')
    }
}).listen(3003)