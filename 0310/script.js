// alert(1111)
// z = prompt('Enter your name')
//  z = confirm("Are you sure")
// console.log(z)



// a = Math.ceil(4.1)
// a = Math.floor(4.9)
// a = Math.random()
// a = Math.min(10,2,3,6,5,4,7)
a = Math.max(10, 2, 3, 6, 5, 4, 7)


// console.log(a)


const myFunc = (...a) => {
    console.log(a)

}
// myFunc(1,2,3,4,5,6,7,8,9)


const arr = [4, 7, 5]

// arr.push(100)
// arr.pop()
// arr.shift()
// arr.unshift(111)
// const x = arr.includes(70)
// const x = arr.find((a) => { return a == 5})

const x = arr.join('------')

// const x = arr.filter((a) => { return a == 4})

// const x = arr.map((a) => { return a+a})
console.log(x)

// console.log(arr)



const str = "Rahul"

// const z = str.charAt(2)
// const z = str.includes('l')
// const z = str.includes('Rah')
// const z = str.startsWith('Rah')
// const z = str.endsWith('ul')
// const z = str.replace('ul','zz')
// const z = str.split('.')
// const z = str.toUpperCase()
const z = str.toLowerCase()

console.log(z)



// arr = [1,2,3]
const updatedArray = myMap(arr, (x) => { return x + 10 }) // [11,12,13]
const pushedArray = myPush(arr, 10) // [1,2,3,10]
const poppedArray = myPop(arr) // [1,2]

