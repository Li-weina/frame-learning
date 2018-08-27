let fs = require('fs')
let EventEmiter = require('events');
class readStream extends EventEmiter{
    constructor(path,options){
        super()
        this.path = path;
        this.flags = options.flags || 'r';
        this.encoding = options.encoding || null;
        this.mode = options.mode || 0o666;
        this.autoClose = options.autoClose || false;
        this.start = options.start || 0;
        this.end = options.end || null;
        this.highWaterMark = options.highWaterMark || 64 * 1024
        this.open()
        this.buffer = Buffer.alloc(this.highWaterMark)
        this.pos = this.start
        this.flowing = null;
        this.on('newListener',(type)=>{
            if(type==='data'){
                this.flowing = true
                this.read()
            }
        })
    }
    read(){
        if(typeof this.fd !== 'number'){
            return this.once('open',()=>{
                 this.read();
            });
        }
        let howMuchToRead = this.end ? Math.min(this.highWaterMark, (this.end+1 - this.pos)): this.highWaterMark
        fs.read(this.fd,this.buffer,0, howMuchToRead,this.pos,(err,byteRead)=>{
            if(byteRead > 0){
                this.pos = this.pos + byteRead;
                let r = this.buffer.slice(0,byteRead);
                 r = this.encoding? r.toString(this.encoding): r
                this.emit('data',r)
                if(this.flowing){
                    this.read()
                }
            }else{
                this.emit('end');
                if(this.autoClose){
                    this.destroy()
                }
            }

        })
    }
    pause(){
        this.flowing = false
    }
    resume(){
        this.flowing = true
        this.read()
    }
    destroy(){
        if(typeof this.fd === 'number'){
            fs.close(this.fd,()=>{
                this.emit('close');
            })
        }else{
            this.emit('close')
        }
    }
    open(){
        fs.open(this.path,this.flags,(err,fd)=>{
            if(err){
                this.emit('error',err)
                if(this.autoClose){
                    this.destroy();
                }
                return;
            }
            this.fd =fd;
            this.emit('open',this.fd)
        })
    }
}

module.exports = readStream