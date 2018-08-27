// let Promise = require('./1.promise');
let pro = new Promise((reslove,reject)=>{
    reslove('sorry')
})

let a = pro.then(data=>{
    console.log(this)
    return a
},err=>{
    console.log('no ' + err)
}).then(data=>{
    console.log('suc ' + data)
},err=>{
    console.log('no ' + err)
})