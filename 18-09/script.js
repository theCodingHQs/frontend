const body = document.getElementsByTagName("body")[0];

const div = document.createElement("div");
div.innerHTML = "Hello World!";

div.style.backgroundColor = "red";
div.style.fontSize = "40px";
div.style.padding = "40px";
div.style.color = "#fff";
div.style.borderRadius = "60px";
div.id = "divElement";

body.append(div);

// for (let i = 0; i < users.length; i++) {
//   let el = document.createElement("div");
//   el.setAttribute("id", `number${i}`);
//   el.innerHTML = users[i];

//   body.append(el);
//   console.log(el);
// }

const table = document.createElement("table");
table.setAttribute("border", "2");
const thead = document.createElement("thead");
const tbody = document.createElement("tbody");

const headRow = document.createElement("tr");
const nameTh = document.createElement("th");
nameTh.innerHTML = "Name";
const ageTh = document.createElement("th");
ageTh.innerHTML = "Age";
const cityTh = document.createElement("th");
cityTh.innerHTML = "City";

headRow.append(nameTh);
headRow.append(ageTh);
headRow.append(cityTh);

thead.append(headRow);
table.append(thead);

body.append(table);

const users = [
  { name: "Aakash", age: 12, city: "pune" },
  { name: "Abhinav", age: 14, city: "pune" },
  { name: "Rahul", age: 21, city: "pune" },
  { name: "Ankit", age: 24, city: "pune" },
];

for (let u = 0; u < users.length; u++) {
  let row = document.createElement("tr");

  let name = document.createElement("td");
  name.innerHTML = users[u].name;
  let age = document.createElement("td");
  age.innerHTML = users[u].age;
  let city = document.createElement("td");
  city.innerHTML = users[u].city;

  row.append(name);
  row.append(age);
  row.append(city);

  tbody.append(row);
}

table.append(tbody);
