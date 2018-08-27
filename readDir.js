var fsn = Date.now()
var fs = require('fs')
var fsl = Date.now() - fsn
// console.log('time'+fsl)
setTimeout(() => {
    console.log('setTimeout')
    // for(;;){}
}, 3);

console.log('ok')
var n = Date.now()
process.nextTick(function(){
    console.log('nextTick')
})
fs.readFile('work.html',function(){
    // var l = Date.now() - n
    // console.log(l)
    // console.time('start')
    // for(let i =0;i<100;i++){
    //     console.log('no')
    // }
    // console.timeEnd('start')
    // console.log('fs')
    setTimeout(() => {
        console.log('setTimeout2')
        // for(;;){}
    }, 0);
    setImmediate(function(){
        console.log('seimmediate2')
    })
})

setImmediate(function(){
    console.log('seimmediate')
})