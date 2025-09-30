const arr = [1, 2, 3, 4, 5, 6]
const obj = { a: 1, b: 2, age: 34, number: 3567, name: 'rahul', city: 'pune' }

// arr.forEach((el, i, ar) => {
//     console.log(el)
// })



for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}


for (let item of arr) {
    console.log(item)
}

for (let key in obj) {
    console.log(key)
    console.log(obj[key])
}





