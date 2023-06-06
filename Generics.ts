/*Generics: 
Generics in TypeScript allow you to create reusable code components that can work with different types. They provide a way to create functions, classes, and interfaces that can operate on a variety of data types while maintaining type safety.*/

function createPair<S, T>(v1: S, v2: T): [S, T] {
    return [v1, v2];
  }
  console.log(createPair<string, number>('hello', 42));

  
function swap<T>(a:T,b:T):[T,T]{
    return [b,a]
}
console.log(swap<number> (10,20)) 
console.log(swap<string>("hello","hi"));
