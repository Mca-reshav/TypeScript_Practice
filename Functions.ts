//return type
function getTime(): number {
    return new Date().getHours();
}
console.log(getTime())

//void return type
function noReturn(): void {
    console.log("No return")
}

//parametric and optional
function mul(a: number, b: number, c?: number) {
    return a * b
}
console.log(mul(10, 20)) //if no paramter type is defined then by default will be any

//default 
function pow(value: number, exponent: number = 10) {
    return value ** exponent;
}
console.log(pow(10))

//rest parameters

function sum(a:number,b:number,...c:number[]){
    return a+b+c.reduce((x,y)=>x+y,0)
}
console.log(sum(10,20,30,40))