// let fs = require('fs');
// // let str = fs.readFileSync('4.txt','utf8');
// function readText(pathname) {
//     var bin = fs.readFileSync(pathname);
//     if (bin[0] === 0xEF && bin[1] === 0xBB && bin[2] === 0xBF) {
//         bin = bin.slice(3);
//     }
//     return bin.toString('utf-8');
// }
// console.log(readText('4.txt'))
// console.log(str.length)
// console.log(str.charCodeAt(0))

let fs = require('fs');
let str = fs.readFileSync('4.txt','utf8');
let r = stripBom(str);
console.log(r);
function stripBom (str){ // 目前去除多余的文字
    if(str.charCodeAt(0)=== 0xFFFD){
        return str.slice(1);
    }
}
// let a = 0x14
// let b = 0o24
// let c = 0b10100
// console.log(c)
// console.log(a===b)
// console.log(a===c)
// console.log(c===b)

// let e = (0xF7).toString()
// console.log(e)

// console.log(parseInt('1010',8))