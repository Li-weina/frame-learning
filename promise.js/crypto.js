let crypto = require('crypto');
let str = 'zfpf'

// let base = crypto.createHash('md5').update(str).digest('base64')
// console.log(base)


let hmac = crypto.createHmac('sha256','zfpx1');
let r = hmac.update('zfpx').digest('base64')
console.log(r)