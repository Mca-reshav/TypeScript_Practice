/*
There are three main primitives in JavaScript and TypeScript.

boolean - 0/1
number - 123.321
string - "TypeScript"
*/
//user will decide: explicit type
var bool = true;
var str = "true";
var num = 123;
console.log(typeof bool, bool, typeof str, str, typeof num, num);
//ts will decide: implicit type
var abc = "ABC";
console.log(typeof abc, abc);
//any 
var anyType = JSON.parse("123");
console.log(typeof anyType, anyType);
//special type:
//any
var v = true;
v = "string";
console.log(Math.round(v), typeof v);
//unknown
var w = 1;
w = "string"; // no error
console.log(typeof w);
w = {
    runANonExistentMethod: function () {
        console.log("I think therefore I am");
    }
};
if (typeof w === 'object' && w !== null) {
    w.runANonExistentMethod();
}
