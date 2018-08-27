let fs = require('fs');
let ws = fs.createWriteStream('3.txt',{
    flags:'w',
    encoding:'utf8',
    mode:0o666,
    autoClose:true,
    start:0,
    highWaterMark:3
})
// let flag = ws.write('1','utf8')
// flag = ws.write('1','utf8')
// flag = ws.write('2','utf8')
let i = 9;
function write(){
    let flag = true;
    while(i>0){
        flag = ws.write(i--+'');
        console.log(flag)
    }
}
write();
ws.on('drain',()=>{
    console.log('ganle')
    // write()
})

// fs.writeFile('1.txt','{a:1}',(err,data)=>{
//     console.log(err,data)
// })