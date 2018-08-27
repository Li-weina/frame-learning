//  async function a(params) {
//     let r = await b()
//     console.log(r)
// }
// a()
// function b(){
//     console.log('b');
//     return 'b2'

// }

let a = 2;
let b = 3;
function sum(a,b){
    return function(){
        return a + b;
    }
}

let total = sum(a,b)
let c= total();
console.log(c)