const data = [1, 2, 3, 4, 5, 6, 7, 8, 9]; //9

for (let num = 0; num < data.length; num++) {
  //num = 0 = 1
  //num = 1 = 2
  //...
  //...
  //num = 8 = 9

  console.log(data[num]);
}
console.log("///////////////////");

var users = [
  { name: "Rahul", age: 18, city: "pune" }, //0
  { name: "Aakash", age: 24, city: "pune", values: [4, 5, 6, 7, 8, 9] }, //1
];

for (let user = 0; user < users.length; user++) {
  //   users[user] = { age: age + 2 }; //
  //   users.age = age + 2;
  //   users[user].age = users[user].age + 2;    // users[user].age = age + 2; 
  //   users[user] = age + 2; 
  //   users[user] = users[user].age + 2; 
  //   users[user].age = age + 2; 
  users[user].age = users[user].age + 2;
}

console.log(users);




