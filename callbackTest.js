function callback1(callBack){
console.log("In callback Function");
var data = {
    name : "Kishon"
};
callBack(data);
}
callback1(function(data){
     console.log('In call back1');
     console.log(data.name);
});