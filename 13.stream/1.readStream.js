let {Readable} = require('stream');
class MyStream extends Readable{
    constructor(){
        super()
        this.index = 9
    }
    _read(){
        while(this.index){
            this.push(this.index-- + '')

        }
    }
}

let rs = new MyStream()
rs.setEncoding('utf8')
rs.on('data',(data)=>{
    console.log(data)
})