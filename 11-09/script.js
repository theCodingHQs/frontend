var users = [1, 2, 4, 6, 8, 33, 5, 66, 3, 87, 58];

for (let i = users.length; i >= 0; i--) {
  //   users[i] = users[i] * 2;
  console.log(users[i]);
}

console.log(users);

var user = {
  name: "Aashish",
  age: 22,
  city: "pune",
};

user.city = "mumbai";

console.log(user.city);

let i = 0;

while (i == 100) {
    console.log(users[i]);
  i++;
}

do {
  console.log(users[i]);
  i++
} while (i == 100);
