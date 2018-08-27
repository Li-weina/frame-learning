// let after = function(times,callback){
//     return function(){
//         console.log('hello' + times)
//         if(times-- == 0 ){
//            callback()
//         }
//     }
// }

// let fn = after(2,function(){
//     console.log('调动二次')
// });
// fn();
// fn();
// fn();

let isType =  function(type){
    return function(content){
        let r = Object.prototype.toString.call(content).replace(/\[object\s|\]/g,'');
        return r == type

    }
}

let str = isType('String');

console.log(str('hello'))

let obj = ['String', 'Oject', 'Number']
let util = {};
for(let i=0;i<obj.length;i++){
    let cur = obj[i];
    util['is'+cur] = isType(cur);
}
console.log(util.isNumber('hl'))

// let fs = require('fs');

// fs.readFile('1.txt','utf8',function(err,data){
//     console.log(data)
//     fs.readFile(data,'utf8',function(err,data){
//         console.log(data)
//     })
// })

// let after = function(times,callback){
//     let res = [];
//     return function(){
//         fs.readFile('1.txt','utf8',function(err,data){
//             res.push(data)
//             if(times-- == 1){
//                 console.log(res)
//                 callback(res)
//             }
//         })

//     }
// }

// let result = after(2,function(data){
//     console.log(data);
// })
// result('1.txt');
// result('2.txt');
// result();

let fs = require('fs');

// function read(file){
//     return new Promise((resolve,reject)=>{
//         fs.readFile(file,'utf8',function(err,data){
//             if(data) resolve(data);
//             reject(err)
//         })
//     })
// }

// let fn = read('1.txt')
// .then(data=>{
//     return read(data)
// },err=>{
//     console.log(err)
// }).then(data=>{
//     console.log(data)
// })

//发布订阅模式

let event = {
    ary:[],
    ons:[],
    on(callback){
        // console.log(ary);
        this.ons.push(callback)

    

    },
    emit(data){
       this.ary.push(data)
    
        this.ons.forEach(element => {
            element(this.ary)
        })

    }
}

fs.readFile('1.txt','utf8',function(err,data){
    event.emit(data)
})
fs.readFile('2.txt','utf8',function(err,data){
    event.emit(data)
})
event.on(function(data){
    if(data.length == 2){
        console.log(data)

    }
})