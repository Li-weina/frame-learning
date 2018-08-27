process.argv.slice(2).forEach(l=>{
   process.send(l)
})
process.send('close')