let {fork} = require('child_process');
let path = require('path')
let child = fork('4.fork.js',['a','b'],{
    cwd:path.join(__dirname,'test'),
    silent: false
})
child.send('xxx',)
child.on('message',(data)=>{
    console.log(data)

})

let http = require('http')
let server = http.createServer((req,res)=>{
    res.end('父级'+process.pid+"")
})
server.listen(3000)
child.send('server',server)
