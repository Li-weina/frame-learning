// function *a(){
//     yield '1';
//     yield '2'
// }

// function *b(){
//     yield *a();
//     yield '3'
// }
// let it = b();
// console.log(it.next())
// console.log(it.next())

let fs = require('fs');
function read(){
    return new Promise(function(resolve,reject){
        fs.readFile('1.txt','utf8',(error,data)=>{
            // console.log(error)
            if(error) reject(error);
            resolve(data)
        })
    })
}

read().then(data=>{
    console.log('resolve')
    try{
        console.log('firsr'+data)
        throw new Error('second')
    }catch(e){
        console.log('catch'+e)
    }
},err=>{
    console.log('first'+err)
}).then(data=>{
    console.log('then'+data)
},error=>{
    console.log('second'+error)
})