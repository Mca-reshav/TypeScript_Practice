//Object Types

type Address = {
    city: string;
    state: string;
    pincode: number;
  };
  
  type Student = {
    name: string;
    age: number;
    address: Address;
  };
  
  const student: Student = {
    name: 'Peter Parker',
    age: 20,
    address: {
      city: 'Mumbai',
      state: 'Maharashtra',
      pincode: 400001
    }
  };
  
  console.log(student);
  console.log(student.address.city)
//without using custom types

const student2: {
    name: string;
    age: number;
    address: {
      city: string;
      state: string;
      pincode: number;
    };
  } = {
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

  const mobile:{name:string,brand:string, price?:number}={name:"Pixel 7A",brand:"Google"}
  mobile.price=40000
  console.log(mobile);

  //Index Signature: It can be used for objects without a defined list of properties
  
  const marks:{[index: string]:number}={}
  marks.english=80
  marks.hindi=85
  marks.math=95
  const avg:number=Math.ceil((marks.english+marks.hindi+marks.math)/3)
  console.log("Average:",avg)