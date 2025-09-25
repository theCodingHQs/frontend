const arr = [
    { name: 'aakash', age: 23, city: 'pune' },
    { name: 'rohit', age: 23, city: 'pune' },
    { name: 'abhinav', age: 23, city: 'pune' },
    { name: 'raghav', age: 23, city: 'pune' },
    { name: 'sanjay', age: 23, city: 'pune' },
]
const arr2 = [
    { name: 'aakash-23', age: 23, city: 'pune' },
    { name: 'rohit-23', age: 23, city: 'pune' },
    { name: 'abhinav-23', age: 23, city: 'pune' },
    { name: 'raghav-23', age: 23, city: 'pune' },
    { name: 'sanjay-23', age: 23, city: 'pune' },
]


const body = document.getElementsByTagName('body')[0]


const table = document.createElement('table')
// table.insertRow(0)
table.setAttribute('border', '1')
const thead = document.createElement('thead')
const tbody = document.createElement('tbody')

const tr = document.createElement('tr')

const name = document.createElement('th')
const age = document.createElement('th')
const city = document.createElement('th')

name.innerHTML = 'Name'
age.innerHTML = 'Age'
city.innerHTML = 'City'

tr.append(name)
tr.append(age)
tr.append(city)

thead.append(tr)
table.append(thead)

body.appendChild(table)

table.append(tbody)



// for (let i = 0; i < arr.length; i++) {
//     let body_tr = document.createElement('tr')

//     const name_td = document.createElement('td')
//     const age_td = document.createElement('td')
//     const city_td = document.createElement('td')

//     name_td.innerHTML = arr[i].name
//     age_td.innerHTML = arr[i].age
//     city_td.innerHTML = arr[i].city

//     body_tr.append(name_td)
//     body_tr.append(age_td)
//     body_tr.append(city_td)

//     tbody.append(body_tr)

// }


const createTds = (num) => {

    let array = []

    for (let i = 0; i < num; i++) {
        let td = document.createElement('td')
        array.push(td)
    }

    return array
}




const insertRow = (data) => {

    const n_tr = document.createElement('tr')
    let all_td = createTds(3)

    const [name_td, age_td, city_td] = all_td


    name_td.innerHTML = data.name
    age_td.innerHTML = data.age
    city_td.innerHTML = data.city

    n_tr.append(name_td)
    n_tr.append(age_td)
    n_tr.append(city_td)

    tbody.append(n_tr)

}



for (let i = 0; i < arr.length; i++) {
    insertRow(arr[i])
}



for (let i = 0; i < arr2.length; i++) {
    insertRow(arr2[2])
}



