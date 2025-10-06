// const users = [{ name: 'rahul', age: 23 }]
const nums = [1, 2, 3]

const cbFun = (x, index, a) => {
    return x * 10
}

const updatedNums = nums.map(cbFun)

console.log(updatedNums)



const myMap = (newArray, cbFun) => {
    const temp = []
    for (let i = 0; i < newArray.length; i++) {
        const t = cbFun(newArray[i], i, newArray)
        temp[i] = t
    }
    return temp
}



const updates = myMap(nums, cbFun)
console.log(updates)