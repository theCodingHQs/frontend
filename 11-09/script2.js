const data = [23, 2, 43, 4, 53, 4, 5, 6, 56, 44, 3, 77, 8, 76];

for (let i = 0; i < data.length; i++) {
  if (data[i] % 2 == 0) {
    console.log(data[i]);
  } else {
    console.log(data[i], "number is odd");
  }
}

// == ===  !=  > <   >=

let name = "Rahul";

name = name + " " + "surname";

console.log(`my name is ${name}`);



const myFunction = function () {
  console.log("function called");
};
function myFunction2() {
  console.log("function called");
}

const arrowFunction = () => {
  console.log("function called");
};

myFunction();
myFunction2();
arrowFunction();
