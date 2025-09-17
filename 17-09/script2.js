const input = document.getElementById("input-field");
const button = document.getElementById("button");



const calculate = function () {
  const value = input.value; //1,2,3,4,5

  const splitedElements = value.split(","); // ['1', '4', '7', '3', '5']  => [1,2,3,4,5]

  const CBFun = function (x) {
    return Number(x);
  };

  const numbers = splitedElements.map(CBFun);

  console.log(numbers)

  let sum = 0
  
  for(let i = 0; i < numbers.length; i++){
    
  // sum = i + numbers[i]  //2 // 4
  sum = sum + numbers[i] // 2 // 5 // 9
  // sum = sum + i  //0 // 1


  }

  console.log(sum)

};


button.addEventListener('click',calculate)