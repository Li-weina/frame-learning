let http = require('http');
let fs = require('fs');
let path = require('path')
let server = http.createServer(function(req,res){
    let range = req.headers['range'];
    if(range){
        let [,start,end] = range.match(/(\d*)-(\d*)/)
    }else{
        fs.createReadStream(path.join(__dirname,'my.txt')).pipe(res);
    }
})

server.listen(3000)