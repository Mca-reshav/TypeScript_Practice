//Interfaces: It is similar to type aliases, but it only used with object types

interface Dimension {
    l:number,
    b:number
}
const dimension:Dimension={
    l:30,
    b:20    
}
const vol=dimension.l*dimension.b
console.log(vol)

//extending interfaces

interface newDimension extends Dimension{
    w:number
}
const newdimension:newDimension={
    l:dimension.l,
    b:dimension.b,
    w:10
}
const newVol=newdimension.l*newdimension.b*newdimension.w
console.log(newVol)