let {Transform} = require('stream');
class MyStream extends Transform{
    _transform(chunk,encoding,callback){
        this.push(chunk.toString().toUpperCase());
        callback()
    }
}
let transform = new MyStream();
process.stdin.pipe(transform).pipe(process.stdout)