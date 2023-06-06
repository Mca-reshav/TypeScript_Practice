/*Generics:
Generics in TypeScript allow you to create reusable code components that can work with different types. They provide a way to create functions, classes, and interfaces that can operate on a variety of data types while maintaining type safety.*/
function createPair(v1, v2) {
    return [v1, v2];
}
console.log(createPair('hello', 42));
function swap(a, b) {
    return [b, a];
}
console.log(swap(10, 20));
console.log(swap("hello", "hi"));
