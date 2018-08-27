function Promise(excutor){
    let self = this;
    self.status = 'pending';
    self.value = undefined;
    self.reason = undefined;
    self.onFulfilledCallbacks = [];
    self.onRejectedCallbacks = [];
    function resolve(value){
        if(self.status === 'pending'){
            self.status = 'fulfilled';
            self.value = value;
            self.onFulfilledCallbacks.forEach(element => {
                element(self.value)
            });
        }


    }
    function reject(reason){
        if(self.status === 'pending'){
            self.status = 'rejected';
            self.reason = reason;
            self.onRejectedCallbacks.forEach(element => {
                element(self.reason)
            });
        }

    }
    excutor(resolve,reject)
}
function resolvePromise(promise2,x,resolve,reject){
    if(promise2 === x){
         reject(new TypeError('sorry'))
    }
    if( x !==null && (typeof x === 'object' || typeof x === 'function')){
        try{
            let then = x.then;
            if(typeof then === 'function'){
                then.call(x,y=>{
                    resolvePromise(promise2,y,resolve,reject);
                },err=>{
                    reject(err)
                })
            }
        }catch(e){
            return reject(e)
        }


    }else{
        return resolve(x)
    }
}
Promise.prototype.then = function(onFulfilled,onRejected){
    let self = this;
    // console.log(self.status)
    let promise2 = new Promise((resolve,reject)=>{
        if(self.status === 'fulfilled'){
            let x = onFulfilled(self.value)
            resolvePromise(promise2,x,resolve,reject)
            return
        }
        if(self.status === 'rejected'){
            onRejected(self.reason)
            return
        }
        if(self.status === 'pending'){
            self.onFulfilledCallbacks.push(onFulfilled);
            self.onRejectedCallbacks.push(onRejected)
        }
    })


    return promise2
}
module.exports = Promise;