const toggleModal = (isOpen) => {

    const overlay = document.querySelector('#overlay')
    if (isOpen) {
        overlay.style.display = 'flex'
    } else {
        overlay.style.display = 'none'
    }

}



const modal = document.querySelector('#modal')
modal.addEventListener('click', (e) => { e.stopPropagation() })