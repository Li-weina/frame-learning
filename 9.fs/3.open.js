let fs = require('fs');
// let buffer = Buffer.alloc(5)
// fs.open('2.txt','r',(err,fd)=>{
//     let buffer = Buffer.alloc(5);
//     fs.read(fd,buffer,2,3,1,(err,bytesWrite)=>{
//         console.log(bytesWrite);
//         fs.close(fd,(err)=>{
//             console.log('ok')
//             console.log(buffer.toString())
//         })
//     })
// })
let readPos = 0;
let writePos = 0;
fs.open('2.txt','r',(err,rfd)=>{
    fs.open('1.txt','w',(err,wfd)=>{
        let buffer = Buffer.alloc(5)
        function next(){
            fs.read(rfd,buffer,0,5,null,(err,bytesRead)=>{
                console.log(buffer.toString())
                if(bytesRead > 0){
                    readPos += bytesRead;
                    fs.write(wfd,buffer,0,bytesRead,null,(err,bytesWrite)=>{
                        writePos += bytesWrite;
                        next()
                    })
                }else{
                    fs.close(rfd,()=>{
                        console.log('读取结束')
                    })
                    fs.fsync(wfd,()=>{
                        fs.close(wfd,()=>{
                            console.log('写入结束')
                        })
                    })
                    
                }

            })
        }
        next()

    })
})

let buffer = Buffer.from('123');
let fs = require('fs');
fs.write('2.txt',buffer,0,3,3,(err,bytesWrite)=>{
    console.log(bytesWrite)
})