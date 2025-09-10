var data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let a = 6;
let b = 2;

data[0] = 100

console.log(data)


// console.log(data.length);
// console.log(data[a][b]);

var myFunction = () => {
  console.log("I am a Function");
};

var obj = {
  name: "Rahul",
  age: 18,
  city: "pune",
  fun: myFunction,
};

// console.log(obj);
// console.log(obj.name);
// console.log(obj.age);

var users = [
  { name: "Rahul", age: 18, city: "pune" }, //0
  { name: "Aakash", age: 24, city: "pune", values: [4, 5, 6, 7, 8, 9] }, //1
];

users[0].age = 31

console.log(users[0]);
// console.log(users[1].values[4]);
