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

Promise.prototype.then = function(onFulfilled,onRejected){
    let self = this;
    console.log(self.status)
    if(self.status === 'fulfilled'){
        onFulfilled(self.value)
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
}
module.exports = Promise;