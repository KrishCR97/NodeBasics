//Unicode charater set means number representation of a character i.e.., e - 101
//Character UTF-8 meaning bits representation of a character i.e.., e - 01100101
//Buffers in node js can be used to convert the variable whihc contains data into specified charater set
var obj = {
    greet : "Hello Kishon"
}
console.log(obj['greet']);
var arr = [];
arr.push(function(){
    console.log('Function1');
});
arr.push(function(){
    console.log('Function2');
});
arr.forEach((item)=>{
item();
console.log('Yeah it worked');
});
//On is used to add a listener.
function Emitter(){
this.event = {};
}
var name = "Kishon";
var interpolatedStrin = `Hello ${name}`;
var objs = {
    name : "Obj1",
    fun1 : function(num){
    console.log(`Hello ${ this.n1} ${num}`);
    } 
};
//.apply and .call
objs.fun1.call({n1 : 1},2);
objs.fun1.apply({n1 : 3},[4]);