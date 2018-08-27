let http = require('http')
process.send('hello')
let os = require('os')
console.log(os.cpus().length)
process.on('message',(data,s)=>{
    if(data === 'server'){
        for(let i =0;i < os.cpus().length-1;i++){
            let server = http.createServer((req,res)=>{
                console.log('ok')
                res.end('子'+process.pid+"")
            })
            server.listen(s)
        }

    }

})
let path = require('path')
console.log(path.join('index.html','a'))
console.log(path.resolve('index.html','a.js'))