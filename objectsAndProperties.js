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
var interpolatedStrin = `Hello ${name}`