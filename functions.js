//return type
function getTime() {
    return new Date().getHours();
}
console.log(getTime());
//void return type
function noReturn() {
    console.log("No return");
}
//parametric and optional
function mul(a, b, c) {
    return a * b;
}
console.log(mul(10, 20)); //if no paramter type is defined then by default will be any
//default 
function pow(value, exponent) {
    if (exponent === void 0) { exponent = 10; }
    return Math.pow(value, exponent);
}
console.log(pow(10));
//rest parameters
function sum(a, b) {
    var c = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        c[_i - 2] = arguments[_i];
    }
    return a + b + c.reduce(function (x, y) { return x + y; }, 0);
}
console.log(sum(10, 20, 30, 40));
