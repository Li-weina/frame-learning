let path = require('path');
let fs = require('fs')
function Moudle(){

}
Moudle._resolveFilename = function(p){
    p = path.join(__dirname,p);
    

}
function req(p){
    Moudle._resolveFilename(p)
}