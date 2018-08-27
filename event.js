let eventEmiter = require('./inherit')
let util = require('util')

function Girl(){
    // eventEmiter.call(this)
}
util.inherits(Girl,eventEmiter)

let girl = new Girl()

function cry(){
    console.log('cry')
}

function eat(){
    console.log('eat')
}
girl.on('shilian',cry)
girl.on('shilian',eat)

girl.emit('shilian')
//

function Boy(){
    // eventEmiter.call(this)
}
util.inherits(Boy,eventEmiter)

let boy = new Boy()

function run(){
    console.log('run')
}

function drink(){
    console.log('drink')
}
boy.on('shilian',run)
boy.on('shilian',drink)

boy.emit('shilian')