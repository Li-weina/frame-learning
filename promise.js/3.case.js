let promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('ok')
    },100)
})
let promise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject('no')
    },1000)
})

Promise.all([promise,promise2]).then(data=>{
    console.log(data)
},err=>{
    console.log(err)
})
// promise.then(data=>{
//     return {name:'lena'}
    
// }).then(data=>{
//     console.log(data)
// })

// promise.then(data=>{
//     console.log('onok2')
// })