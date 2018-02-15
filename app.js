let greet = require("./greet");
var num1 = 0;
var num2 = 3;
console.log(num1+num2);
function greeting(fn){
console.log("In greeting");
fn();
}
function hello(){
    console.log("In hello function");
}
greeting(hello);
module.exports = hello;
greet.englis();
greet.spanis();
