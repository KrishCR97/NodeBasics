function Person(firstName,lastName){
this.firstName = firstName;
this.lastName = lastName;
}
Person.prototype.greet = function(){
    console.log("Hello " + this.firstName + " "+this.lastName);
}
var p = new Person("Veera Kishon Kumar","Mucherla");
p.greet();

console.log(p.__proto__);
