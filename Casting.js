//Casting is the process of overriding a type that is provided earlier
//as
//let x:unknown=5
var x = "helloworld";
console.log(typeof x, x);
var y = x.length;
console.log(typeof y);
// casting doesnot actually change the type of the data
//<>
var z = 'hello';
console.log(z.length);
//this type of casting will not work with TSX,such as React files
//force casting: first cast to unknown and then to the target type
var a = 123;
console.log(a.length);
