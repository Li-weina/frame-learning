function EventEmitter(){
    this._event = {}
}

EventEmitter.prototype.on = function(eventName,callback){
    console.log(this)

    if(!this._event) this._event = Object.create(null)
    if(this._event[eventName]){
        this._event[eventName].push(callback);
    }else{
        this._event[eventName] = [callback]
    }
}

EventEmitter.prototype.emit = function(eventName){
    this._event[eventName].forEach(fn => {
        fn()
    });
}

module.exports = EventEmitter
