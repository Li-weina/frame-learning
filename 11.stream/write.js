let fs = require('fs');

let ws = fs.createWriteStream('2.txt',{
    highWaterMark:3
})
let index = 9;
function write(){
    let flag = true
    while(index && flag){
        flag = ws.write(index-- + '');
    }
}

write()
ws.on('drain',()=>{
    console.log('干了')
    write()

})