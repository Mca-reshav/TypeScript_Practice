//Ts allows types to be defined separately from the variables that uses them, it allows types to be easily shared between different variables/objects

//Type Aliases
type Name = string
type Roll = number
type Course = string
type Address={ city:string, state:string}

type Student={
    name: Name,
    roll: Roll,
    course: Course
    address:Address
} 
const student:Student= {
    name: "Sunny",
    roll: 25,
    course: "MCA",
    address:{city:"Kolkata",state:"West Bengal"}
}
console.log(student)

//another way to use aliases

type carname=string
type carbrand= string

const show:{ carName:carname, carBrand:carbrand}={carName:"safari",carBrand:"tata"}

for (const key in show) {
        const element = show[key];
        console.log(`${key}: ${element}`)
}
