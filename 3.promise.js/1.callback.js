function after(num, cb){
    let count = 0;
    return function(){
        console.log('ok');
        num--
        if(num == 0){
            cb()
        }
    }
}

let fn = after(3,function(){
    console.log('3')
})
fn()
fn()
console.log('so')
fn()

//typeof instanceof constructor Object.prototype.toString.call 

// isNumber(1)

function isType(type){
    return function(arg){
        let typeStr = Object.prototype.toString.call(arg).replace(/\[object\s|\]/g,'');
        return type == typeStr;
    }
}

let util = {};
let ary = ['Number','Object','String','Boolean']
// for(let i =0; i < ary.length;i++){
//     let funNam = 'is' + ary[i];
//     util[funNam] = function(arg){
//         let typeStr = Object.prototype.toString.call(arg).replace(/\[object\s|\]/g,'')
//         console.log(typeStr)
//         return ary[i] == typeStr;
//     }
// }
// for(let i =0; i < ary.length;i++){
//     let funName = 'is' + ary[i];
//     util[funName] = isType(ary[i])
// }

ary.forEach(t=>{
    util['is'+t] = isType(t)
})
console.log(util.isString('5'))

//发布订阅
let fs = require('fs')
let event = {
    ary:[],
    result:[],
    on(fn){
        this.ary.push(fn)
    },
    emit(data){
        this.result.push(data);
        this.ary.forEach(t=>{
            t(this.result)
        })
    }
}
event.on(function(data){
    if(data.length == 2){
        console.log(data)
    }
})
fs.readFile('1.txt','utf8',(err,data)=>{
    event.emit(data)
})

fs.readFile('2.txt','utf8',(err,data)=>{
    event.emit(data)
})

let fs = require('fs')
function read(count,fn){
    let result = [];
    return function(fileName){
        
        let res = fs.readFileSync(fileName,'utf8')
        result.push(res)
        if(--count == 0){
            fn(result)
        }
    }
}


 let fn = read(2,(data)=>{
    console.log(data)
})

fn('1.txt')
fn('2.txt')

let fs = require('fs')
function readFile(fileName){
    return new Promise(function(resolve,reject){
        fs.readFile(fileName,'utf8',(err,data)=>{
            if(err) reject(err);
            resolve(data)
        })
    })
}

// readFile('1.txt').then((data)=>{
//     return readFile(data)
// }).then(res=>{
//     console.log(res)
// })

async function read(fileName){
    let data = await readFile(fileName);
    let data2 = await readFile(data)
    return data2
}

read('1.txt').then((data)=>{
    console.log(data)
})




