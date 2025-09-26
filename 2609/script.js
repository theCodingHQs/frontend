const arr = [1, 2, 3, 4, 5, 6]


//  { firstName:'rahul',lastName:'malhotra' }


const strFunction = (userName) => {
    const flName = userName.split(' ') // ['rahul','malhotra']
    const fName = flName[0]
    const lName = flName[1]

    return { firstName: fName, lastName: lName }


}
strFunction('rahul malhotra')