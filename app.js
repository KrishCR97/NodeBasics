let greet = require("./greet");
let greet1 = require("./greet.js");
let emt = require('./emitterTest.js');
// var num1 = 0;
// var num2 = 3;
// console.log(num1+num2);
// function greeting(fn){
// console.log("In greeting");
// fn();
// }
// function hello(){
//     console.log("In hello function");
// }
// greeting(hello);
// module.exports = hello;
// greet.englis();
// greet.spanis();
// greet1.num();
let emit = new emt();
emit.on('greet',function(){
    console.log('Whats wrong');
}

);
emit.on('greet',function(){
    console.log('Hai I\'m all right');
});
emit.emit('greet');