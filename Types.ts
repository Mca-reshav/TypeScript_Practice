/*
There are three main primitives in JavaScript and TypeScript.

boolean - 0/1
number - 123.321
string - "TypeScript"
*/

//user will decide: explicit type
let bool:boolean=true
let str:string="true"
let num: number=123
console.log(typeof bool, bool,typeof str,str,typeof num,num)

//ts will decide: implicit type
let abc="ABC"
console.log(typeof abc, abc)

//any 
let anyType=JSON.parse("123")
console.log(typeof anyType, anyType)

//special type:

//any
let v:any=true
v="string"
console.log(Math.round(v),typeof v)

//unknown
let w: unknown = 1;
w = "string"; // no error
console.log( typeof w)
w = {
  runANonExistentMethod: () => {
    console.log("I think therefore I am");
  }
} as { runANonExistentMethod: () => void}
if(typeof w === 'object' && w !== null) {
  (w as { runANonExistentMethod: Function }).runANonExistentMethod();
}