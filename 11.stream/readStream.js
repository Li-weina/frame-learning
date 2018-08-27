let fs = require('fs');
let readStream = require('./1.readStream')
let rs = new readStream('1.txt',{
    flags:'r',
    encoding:'utf8',
    mode:0o666,
    autoClose:true,
    start:0,
    end:6,
    highWaterMark:3
})

rs.on('open',(data)=>{
    console.log(data)
})

rs.on('data',(data)=>{
    console.log(data)
    rs.pause();
    setTimeout(()=>{
        rs.resume()
    },1000)
})

rs.on('end',()=>{
    console.log('end')

})

rs.on('close',(data)=>{
    console.log(data)
})

rs.on('error',(data)=>{
    console.log(data)
})