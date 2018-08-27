
let a = new Promise((resolve,reject)=>{
    console.log(2)
    throw new Error('sorry')
})

a.then(data=>{
    console.log(data)
},err=>{

    // console.log(err)
})
console.log(1)