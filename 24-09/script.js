const container = document.createElement('div')
container.style.background = '#ff0'
container.style.padding = '40px'
container.style.width = '100%'

const button = document.querySelector('.button')
console.log(button)
button.addEventListener('click',onClick)
document.body.appendChild(container)

 function onClick(e) {
    // e.preventDefault()

    const username = document.querySelector('.username')
    const pswd = document.querySelector('.password')

    // console.log("...", username.value, pswd.value)
    const nameContainer = document.createElement('div')
    const pswdContainer = document.createElement('div')

    nameContainer.style.background = '#fff'
    pswdContainer.style.background = '#fff'
    nameContainer.style.padding = '5px 20px'
    pswdContainer.style.padding = '5px 20px'

    nameContainer.innerHTML = username.value
    pswdContainer.innerHTML = pswd.value

    const userPswdContainer = document.createElement('div')
    userPswdContainer.style.display = 'flex'
    userPswdContainer.style.gap = '20px'

    userPswdContainer.appendChild(nameContainer)
    userPswdContainer.appendChild(pswdContainer)

    container.appendChild(userPswdContainer)
}



