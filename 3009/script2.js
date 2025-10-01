
const users = [
    { name: 'rahul', age: 24 },
    { name: 'abhinav', age: 23 },
    { name: 'gaurav', age: 45 },
    { name: 'aakash', age: 65 },
    { name: 'rakesh', age: 13 },
]

// input.addEventListener('input', (e) => { console.log(e.target.value) })



for (let item of users) {
    let d = document.createElement('div')
    d.innerHTML = item.name + '   ' + '(' + item.age + ')'

    container.appendChild(d)

}

const filter = () => {
    container.innerHTML = ''

    const value = input.value
    // const filteredUsers = users.filter(u => { return u.name == value })
    const filteredUsers = users.filter(u => { return u.age == value || u.name.includes(value) })



    for (let item of filteredUsers) {
        let d = document.createElement('div')
        d.innerHTML = item.name + '   ' + '(' + item.age + ')'

        container.appendChild(d)
    }

}




