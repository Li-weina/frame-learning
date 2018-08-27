let Koa = require('koa')

let app = new Koa();

let lot = function(){
    return new Promise((reslove,reject)=>{
        console.log(9)
        reslove(function fn(){
            console.log('reslove')
        }())
    })
}
app.use(async(ctx,next)=>{
    console.log(1)
    let r = await lot();
    console.log(r)
    ctx.body = 'hello'
   await next()
    console.log(2)
})
app.use((ctx,next)=>{
    console.log(3)
    setTimeout(function(){
        console.log('time')
    },5000)
    next()
    console.log(4)
})
app.use((ctx,next)=>{
    console.log(5)
    next()
    console.log(6)
})

app.listen(3000)