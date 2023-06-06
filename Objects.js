//Object Types
var student = {
    name: 'Peter Parker',
    age: 20,
    address: {
        city: 'Mumbai',
        state: 'Maharashtra',
        pincode: 400001
    }
};
console.log(student);
console.log(student.address.city);
//without using custom types
var student2 = {
    name: 'Bruce Wyne',
    age: 25,
    address: {
        city: 'Bengaluru',
        state: 'Karnataka',
        pincode: 500001
    }
};
console.log(student2);
//optional property: These are the properties that doesnot have specified object definition
var mobile = { name: "Pixel 7A", brand: "Google" };
mobile.price = 40000;
console.log(mobile);
//Index Signature: It can be used for objects without a defined list of properties
var marks = {};
marks.english = 80;
marks.hindi = 85;
marks.math = 95;
var avg = Math.ceil((marks.english + marks.hindi + marks.math) / 3);
console.log("Average:", avg);
