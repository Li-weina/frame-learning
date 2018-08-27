process.stdout.on('data',(data)=>{
    process.stderr.write(data)
})