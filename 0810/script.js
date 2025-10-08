const str = "I Live In India."

const caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const sms = "abcdefghijklmnopqrstuvwxyz"

const seperateStr = (s) => {

    const obj = {
        caps: "",
        capsCount: 0,
        sms: "",
        smsCount: 0,
        spacesCount: 0,
    }

    for (item of s) {
        for (let index = 0; index < caps.length; index++) {
            if (item == caps[index]) {
                obj.caps += item
                obj.capsCount++
                break
            } else if (item == sms[index]) {
                obj.sms += item
                obj.smsCount++
                break
            } else if (item == ' ') {
                obj.spacesCount++
                break
            }
        }
    }
    return obj
}

// const countSubString(str, 'In')
//  1


// const replaceStrBy(str, 'In', 'Of')

