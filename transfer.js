// function transfer(num){
//     let binary = num.toString(2);
//     console.log(binary)
//     let len = binary.length;
//     let ary = ['110','10','10'];
//     ary[2] = ary[2] + binary.slice(len - 6);
//     ary[1] = ary[1] + binary.slice(len - 12, len-6);
//     ary[0] = ary[0] + binary.slice(0, len-12).padStart(4,'0');
//     let result = ary.join('');
//     console.log(result)
//     return parseInt(result,2).toString(16)
// }

// let a = transfer(0x23)
// console.log(a)
// console.log(parseInt('0x24',16))
let str = Buffer.from([0b11001111,0b10111111,10111101]).toString();
console.log(str)


