//child_process
//spawn fork exec execFile
let path = require('path')
let {spawn} = require('child_process')
let child = spawn('node',['1.spawn.js'],{
    cwd:path.join(__dirname,'test'),
    stdio:[0,1,2]
})
child.on('close',function(error){
    console.log('关闭')
})
child.on('exit',function(error){
    console.log('突出')
})
child.on('error',function(error){
    console.log(error)
})