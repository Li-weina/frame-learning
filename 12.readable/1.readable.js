let fs = require('fs')
let rs = fs.createReadStream('1.txt',{
    highWaterMark:3
})
rs.setEncoding('utf8')
rs.on('readable',function(){
    let r = rs.read(1)
    console.log('no '+r)
    let s = rs.read(2)
    console.log('ok '+s)
})

let fs = require('fs');


let rs = fs.createReadStream('2.txt',{
  highWaterMark:3
});
//  readable模式
rs.setEncoding('utf8');
// 默认监听readable后 会执行回调，装满highWaterMark这么多的内容
// 自己去读取，如果杯子是空的会继续读取highWaterMark这么多,直到没东西为止
rs.on('readable',()=>{
  let r = rs.read(2);
  console.log(r)
  console.log(rs._readableState.length);
//   setTimeout(() => {
//     console.log(rs._readableState.length);
//   }, 1000);
});

// 行读取器 


let buffer = Buffer.from('0')
console.log(buffer)
console.log(buffer.toString())
let a = '\n'.charCodeAt(0)
console.log(a)

console.log('aaa\nbbbbb')
console.log('aaa\rbbbbb')
