//Typed arrays are used to deal with binary data i.e.., raw data.
var buffer = new Buffer('Hello','utf8');
console.log(buffer);
console.log(buffer.toString());
console.log(buffer.toJSON());
buffer.write('No');
console.log(buffer.toString());
buffer = new ArrayBuffer(8);//64 bits
 var view = new Int32Array(buffer);//32 bits
 view[0] = 5;
 view[1] = 2;
 console.log(view);