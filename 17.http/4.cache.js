let http = require('http');
let url = require('url');
let fs = require('fs');
let path = require('path');
let {promisify} = require('util');
let stat = promisify(fs.stat);
let crypto = require('crypto');

http.createServer(async (req,res)=>{
    let {pathname, query} = url.parse(req.url, true);
    let realPath = path.join(__dirname,'public',pathname);
    try{
        let statObject = await stat(realPath);
        res.setHeader('Cache-Control','no-cache')
        if(statObject.isDirectory()){
            let p = path.join(realPath,'index.html');
            await stat(p)
            let rs = fs.createReadStream(p);
            let md5 = crypto.createHash('md5');
            let ary = [];
            rs.on('data', function(data){
                md5.update(data);
                ary.push(data)
            })
            rs.on('end',function(){
               let r = md5.digest('base64');
               if(req.headers['if-none-match']===r){
                   res.statusCode = 304;
                   res.end();
                   return;
               }
               res.setHeader('Etag',r)
                res.end(Buffer.concat(ary))
            })
        }else{
            await stat(realPath)
            let rs = fs.createReadStream(realPath);
            let md5 = crypto.createHash('md5');
            let ary = [];
            rs.on('data', function(data){
                md5.update(data);
                ary.push(data)
            })
            rs.on('end',function(){
               let r = md5.digest('base64');
               if(req.headers['if-none-match']===r){
                   res.statusCode = 304;
                   res.end();
                   return;
               }
               res.setHeader('Etag',r)
                res.end(Buffer.concat(ary))
            })
        }
    }catch(e){
        console.log(e)
        res.statusCode = 404;
        res.end('Not Found')
    }
}).listen(3003)