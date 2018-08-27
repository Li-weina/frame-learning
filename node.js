//[ '/usr/local/bin/node',
// '/Users/lena/WebstormProjects/Framework-teacher/201805/1.node/2.process.js',
// '--color',
// 'red' ]
// console.log(process)
// let obj = {}
// let ary = process.argv.slice(2)
// ary.forEach((element,index) => {
//     if(element.includes('--')){
//         // let key = ;
//         obj[element.slice(2)] = ary[index+1]
//     }
// });

// console.log(obj)

// console.log(global)
// console.log(global.console)
// console.error('no')
// process.stderr.write('ok')

// console.assert(1===2,'work %s on','=')

// console.dir(global,{showHidden:true})

// console.time('pro')
// Promise.resolve().then(()=>{
//     console.timeEnd('pro')
// })

// setTimeout(function(){
//     console.log(0)
// },500)
// setTimeout(function(){
//     console.log(1)
// },1000)
// setTimeout(function(){
//     console.log(2)
// },2000)

// for(;;){
    
// }
// console.log(process.env)
// console.log(typeof process.env.NODE_ENV)
// if(process.env.NODE_ENV === 'production'){
//     console.log('production')
// }else{
//     console.log('dev')
// }

console.log(process.env.DEBUG);
console.log(module.paths)