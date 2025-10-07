const myPush = (arr, ele) => {
    arr[arr.length] = ele
    return arr


}

const myPop = (arr) => {
    return arr.slice(0, arr.length - 1)
}



str = "I Live In India."
// i live in india.

const toUppercase = (str) => {
    // str = "I live in India."

    let temp = ''
    const caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const sms = "abcdefghijklmnopqrstuvwxyz"

    for (let l = 0; l < str.length; l++) {
        let isTransformed = false
        str[l]
        for (l2 = 0; l2 < caps.length; l2++) {
            if (str[l] == caps[l2]) {
                temp = temp + sms[l2]
                isTransformed = true
            }
        }

        if (!isTransformed) {
            temp = temp + str[l]
        }

    }

    console.log(temp)

}

// seperateStr(str)

// const result = {
//     caps: "ILII",
//     sms: "ivenndia",
//     spacesCount: 3
// }
