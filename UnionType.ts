// to use more than one types in ts 

const showValue=(value:string|number)=>{
    console.log(` ${ typeof value}: ${value}`)
}
showValue("hello")
showValue(123)

//narrowing by type guard
function printLength(value: string | number) {
    if (typeof value === 'string') {
      console.log(value.length); // Here, value is narrowed to type 'string'
    } else {
      console.log('Not a string');
    }
  } 
  printLength('Hello');
  