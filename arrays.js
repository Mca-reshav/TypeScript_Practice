/*Arrays*/
//Type inference
var arr = [];
arr.push("Hello");
//arr.push(hello)   error
console.log(arr);
var ary = [10, 20, 30, 40];
ary.push(60);
ary.forEach(function (value, index) {
    console.log("".concat(index, ": ").concat(value));
});
console.log(ary);
//readonly: a keyword that can prevent arrays from being changed
var readOnly = ["Hello"];
//readOnly.push("hey") error
//Typed Arrays (Tuples): A tuple is a typed array with a pre-defined length and types for each index
var sample = [10, "hello", true];
console.log(sample);
//Readonly tuple: A good practice is to make your tuple readonly
var sample2 = [20, false, "Hey"];
console.log(sample2);
sample2.push("hey!", 20);
console.log(sample2); //here no type safety in our tuple for indexes
var sample3 = [30, false, "hi"];
console.log(sample3);
//sample3.push(30,true,"HI")
//Named tuples: It allow us to provide context for our values at each index
var coor = [12.21, 23.32, "plot"];
console.log(coor[0] + coor[1]);
console.log(coor);
//Destructuring tuples
var graph = [10, 20];
var x = graph[0], y = graph[1];
console.log(x);
