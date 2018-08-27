//child_process
//spawn fork exec execFile
let path = require('path')
let {spawn} = require('child_process')
let child = spawn('node',['1.spawn.js','port','3000'],{
    cwd:path.join(__dirname,'test'),
    stdio:['ignore','ignore','ignore','ipc']
})

child.on('message',(data)=>{
    console.log(data)
})
// child.stderr.on('data',function(data){
//     console.log(data.toString())
// })
// child.stdin.on('end',function(data){
//     console.log('end')
// })
child.on('close',function(error){
    console.log('关闭')
})
child.on('exit',function(error){
    console.log('突出')
})
child.on('error',function(error){
    console.log(error)
})