//Ts allows types to be defined separately from the variables that uses them, it allows types to be easily shared between different variables/objects
var student = {
    name: "Sunny",
    roll: 25,
    course: "MCA",
    address: { city: "Kolkata", state: "West Bengal" }
};
console.log(student);
var show = { carName: "safari", carBrand: "tata" };
for (var key in show) {
    var element = show[key];
    console.log("".concat(key, ": ").concat(element));
}
