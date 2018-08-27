let fs = require('fs');
let rs = fs.createReadStream('2.txt',{
    highWaterMark:3
})
let ws = fs.createWriteStream('4.txt',{
    highWaterMark:3
})

rs.pipe(ws)