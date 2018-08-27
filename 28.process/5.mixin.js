let {spawn} = require('child_process')
let path = require('path');
let fs = require('fs')
let fd = fs.openSync(path.join(__dirname,'1.txt'),'w')
let child = spawn('node',['1.spawn.js','port','xxx'],{
    cwd:path.resolve(__dirname,'test'),
    stdio:['ignore','pipe',fd,'ipc']
})



let other = spawn('node',['2.write.js'],{
    cwd:path.resolve(__dirname,'test'),
    stdio:['ignore','pipe',fd]
})

child.on('message',(data)=>{
    console.log(data)
    // data = data.toString().replace('close','')
  
    if(data.toString()==='close'){
        fs.fsyncSync(fd)
        process.exit()
    }else{
        other.stdout.write(data)
    }
})