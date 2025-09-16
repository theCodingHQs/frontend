const arr = [23, 40, 16, 28, 39];
const users = [
  { name: "Aakash", age: 23, location: "pune" },
  { name: "Amar", age: 15, location: "pune" },
  { name: "Rahul", age: 25, location: "pune" },
  { name: "Neha", age: 14, location: "pune" },
];

const myCallBackFunction = (el) => {
   return el.age == 15
};
 const us = users.map(myCallBackFunction) 
console.log(us)

// const x = arr.map(myCallBackFunction);
// console.log(x);

// [1,2,3] el +2
// map [3,4,5]
// filter []

// const z = arr.filter(myCallBackFunction);
// console.log(z);

const f = users.filter(myCallBackFunction)
console.log(f)