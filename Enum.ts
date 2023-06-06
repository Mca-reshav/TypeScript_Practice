//Enum: A special class that represents a group of constants
// string enum and numeric enum
//by default enums will initialize the first value to 0 and add 1 to each additional value

enum metroCities{Delhi,Mumbai, Chennai, Kolkata}
console.log(metroCities.Delhi)
//metroCities.Chennai=hello   not assignable

enum metroCitiesLen{Delhi=5,Mumbai}
console.log(metroCitiesLen.Delhi)
console.log(metroCitiesLen.Mumbai)// auto increment by 1

enum metroCitiesDir{Delhi="North"}
console.log(metroCitiesDir.Delhi)
