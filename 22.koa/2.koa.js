let app = {
    middlewares:[],
    use(fn){
        this.middlewares.push(fn)
    }
}

app.use(function(next){
    console.log(1)
    next()
})

app.use(function(next){
    console.log(2)
    next()
})

app.use(function(next){
    console.log(3)
    next()
})
function dispatch(index){
    
}
dispatch(0)