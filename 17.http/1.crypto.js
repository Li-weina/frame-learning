let crypto = require('crypto');
let hmac = crypto.createHmac('sha256','zfpx1');
let r = hmac.update('zfpx').digest('base64');
console.log(r)

// _____
let crypto = require('crypto');
let base = crypto.createHash('md5').update('zfpx').digest('base64');
console.log(base)