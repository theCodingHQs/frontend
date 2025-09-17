const arr = [1, 4, 6, 45, 76, 46, 67, 89, 334, 78, 76, 89];

const filteredData = arr.filter((v) => {
  return v % 2 != 0;
});

const even = arr.find((a, b, c) => {

  return a  ==76

});

console.log(even)