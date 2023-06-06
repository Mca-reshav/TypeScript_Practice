//Interfaces: It is similar to type aliases, but it only used with object types
var dimension = {
    l: 30,
    b: 20
};
var vol = dimension.l * dimension.b;
console.log(vol);
var newdimension = {
    l: dimension.l,
    b: dimension.b,
    w: 10
};
var newVol = newdimension.l * newdimension.b * newdimension.w;
console.log(newVol);
