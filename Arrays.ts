/*Arrays*/

//Type inference

const arr: string[]=[];
arr.push("Hello")
//arr.push(hello)   error
console.log(arr)

const ary: number[]=[10,20,30,40]
ary.push(60)
ary.forEach((value,index)=>{
console.log(`${index}: ${value}`)
})
console.log(ary)

//readonly: a keyword that can prevent arrays from being changed

const readOnly:readonly string[]=["Hello"]
//readOnly.push("hey") error

//Typed Arrays (Tuples): A tuple is a typed array with a pre-defined length and types for each index

const sample:[number, string,boolean]=[10,"hello",true]
console.log(sample)

//Readonly tuple: A good practice is to make your tuple readonly

const sample2:[number, boolean, string]=[20,false,"Hey"]
console.log(sample2);
sample2.push("hey!",20)
console.log(sample2);//here no type safety in our tuple for indexes

const sample3:readonly[number,boolean,string]=[30, false, "hi"]
console.log(sample3)
//sample3.push(30,true,"HI")

//Named tuples: It allow us to provide context for our values at each index
const coor:[x:number, y:number,z:string]=[12.21, 23.32, "plot"]
console.log(coor[0]+coor[1])
console.log(coor)

//Destructuring tuples

const graph:[number,number]=[10,20]
const[x,y]=graph
console.log(x) // this will work with destructured method not with named tuples method
