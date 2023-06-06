// to use more than one types in ts 
var showValue = function (value) {
    console.log(" ".concat(typeof value, ": ").concat(value));
};
showValue("hello");
showValue(123);
//narrowing by type guard
function printLength(value) {
    if (typeof value === 'string') {
        console.log(value.length); // Here, value is narrowed to type 'string'
    }
    else {
        console.log('Not a string');
    }
}
printLength(55);
