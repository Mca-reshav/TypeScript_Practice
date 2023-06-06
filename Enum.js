//Enum: A special class that represents a group of constants
// string enum and numeric enum
//by default enums will initialize the first value to 0 and add 1 to each additional value
var metroCities;
(function (metroCities) {
    metroCities[metroCities["Delhi"] = 0] = "Delhi";
    metroCities[metroCities["Mumbai"] = 1] = "Mumbai";
    metroCities[metroCities["Chennai"] = 2] = "Chennai";
    metroCities[metroCities["Kolkata"] = 3] = "Kolkata";
})(metroCities || (metroCities = {}));
console.log(metroCities.Delhi);
//metroCities.Chennai=hello   not assignable
var metroCitiesLen;
(function (metroCitiesLen) {
    metroCitiesLen[metroCitiesLen["Delhi"] = 5] = "Delhi";
    metroCitiesLen[metroCitiesLen["Mumbai"] = 6] = "Mumbai";
})(metroCitiesLen || (metroCitiesLen = {}));
console.log(metroCitiesLen.Delhi);
console.log(metroCitiesLen.Mumbai); // auto increment by 1
var metroCitiesDir;
(function (metroCitiesDir) {
    metroCitiesDir["Delhi"] = "North";
})(metroCitiesDir || (metroCitiesDir = {}));
console.log(metroCitiesDir.Delhi);
