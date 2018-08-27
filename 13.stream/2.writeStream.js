let {Writable} = require('stream');
class MyStream extends Writable{
    constructor(){
        super()
        this.index = 9
    }
    _write(content,ecoding,cb){
        console.log(content)
        cb()
    }
}

let rs = new MyStream()
rs.setEncoding = 'utf8'
rs.write('ok','utf8',()=>{
    console.log('end')
})
