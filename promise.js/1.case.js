let Promise = require('./1.promise')

let pro = new Promise((reslove,reject)=>{
    setTimeout(function(){
        reject('ok')
    },1000)

})
pro.then(data=>{
    console.log('success '+data)
},err=>{
    console.log('error '+err)
})

console.log('2')

//Array.from()  ?