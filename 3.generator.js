// function * fn(){
//    let a =  yield 1;
//    console.log(a)
//     let b = yield 2;
//     console.log(b)
//     return b
// }

// let t = fn()
// console.log(t.next())
// console.log(t.next('a'))
// console.log(t.next('b'))

let fs = require('fs')
let bluebird = require('bluebird');
function read(path,type){
    return new Promise((resolve,reject)=>{
       fs.readFile(path,type,function(err,data){
           if(data) resolve(data);
           reject(err);           
       })
    })
}

async function fn(){
  let a = await read('1.txt','utf8')
  let b = await read(a,'utf8')
  return b
}
fn().then(data=>{
    console.log(data)
})
// let read = bluebird.promisify(fs.readFile)
// function* fn(){
//     let a = yield read('1.txt','utf8')
//     let b = yield read(a,'utf8')
//    return b
// }

function Co(it){
    return new Promise((resolve,reject)=>{
        function next(data){
            let {value,done} = it.next(data)
            if(!done){
                value.then(data=>{
                     next(data)
                 },reject)
            }else{
                resolve(value)
            }
        }
        next()
  
    })

}
// Co(fn()).then(data=>{
//     console.log(data)
// },err=>{
//     console.log(err)
// })



// function next(){
//     let {value,done} = t.next();
//     console.log(value,done)
//     if(!done){
//        next()
//     }
// }
// next()

function* a(){
    let a1 = yield 1;
    console.log(a1);
    let a2 = yield 2;
    return a2
}

let it2 = a();
it2.next(undefined) 
console.log(it2.next('4') )
console.log(it2.next('5'))


 
function* a(){
    yield 1;
    yield 2;
    yield 3;
}
let t = a()
console.log(t.next())
console.log(t.next())
console.log(t.next())
console.log(t.next())
