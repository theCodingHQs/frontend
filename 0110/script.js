

//  = 10 = 10+9+8+7+6+5+4+3=2+1

const add = (n) => {
    let sum = 0
    for (let i = 1; i <= n; i++) {
        sum = sum + i
    }
    return sum
}


// 10 + 9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1
const sum = (n) => {

    if (n == 0) return n

    return n + sum(n - 1)
}


sum(5)