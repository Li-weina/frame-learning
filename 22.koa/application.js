let http = require('http')
let context = require('./context')
let request = require('./request')
let response = require('./response')
class Koa {
    constructor(){
        this.middlware;
        this.context = Object.create(context)
        this.request = Object.create(request)
        this.response = Object.create(response)
    }
    use(fn){
        this.middlware.push(fn);
    }
    createContext(req,res){
        let ctx = this.context;
        ctx.request = this.request;
        ctx.response = this.response;
        ctx.request.req = ctx.req =  req;
        ctx.response.res = ctx.res =  res;

        return ctx;
    }
    handleRequest(req,res){
        let ctx = this.createContext(req,res)
        this.middlware(ctx);
    }
    listen(...args){
        let server = http.createServer(this.handleRequest.bind(this));
        server.listen(...args);
    }
}

module.exports = Koa;
