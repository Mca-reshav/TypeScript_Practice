//Casting is the process of overriding a type that is provided earlier

//as

//let x:unknown=5
let x:unknown="helloworld"
console.log(typeof x, x);
let y=(x as string).length
console.log(typeof y);

// casting doesnot actually change the type of the data

//<>
let z:unknown='hello'
console.log((<string>z).length)
//this type of casting will not work with TSX,such as React files

//force casting: first cast to unknown and then to the target type
let a=123
console.log(((a as unknown)as string).length);
