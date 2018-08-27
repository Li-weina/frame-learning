onmessage = function(e){
    console.log(e.data)
    let sum = null;
    for(let i = 0; i < e.data; i++){
        sum += i;
    }
    this.postMessage(sum)
}

console.log(this)