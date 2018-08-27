let fs = require('fs')
let ary = fs.readdirSync('a')
console.log(ary)

fs.stat('a',(error,stats)=>{
    if(error){
        console.log(error)
    }
    console.log(stats.__proto__)
})