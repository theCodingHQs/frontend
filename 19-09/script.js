const arr = [2, 4, 6, 8, 3, 6, 4, 2, 9, 2, 6, 1];

// z = findInArray(arr, "12");

// z  //true

const findInArray = function (elements, find) {
  for (let i = 0; i < elements.length; i++) {
    if (elements[i] == find) {
      return true;
    }
  }

  return false;
};

let xyz = findInArray(arr, 5);

const printEvens = (elements) => {
  for (let i = 0; i < elements.length; i++) {
    if (elements[i] % 2 != 0) {
      continue;
    }

    console.log(elements[i], "is even");
  }
};

printEvens(arr);
