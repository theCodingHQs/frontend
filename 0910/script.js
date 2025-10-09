const toggleNav = () => {
    const nav = document.getElementsByTagName('nav')[0]
    const offset = nav.offsetLeft

    if (offset < 0) {
        nav.style.left = 0
    } else {
        nav.style.left = '-100%'
    }
}