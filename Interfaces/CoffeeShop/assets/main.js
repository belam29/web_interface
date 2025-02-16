const searchBox = document.querySelector('.search-box')
const searchInput = document.querySelector('.input-search')
const header = document.querySelector('.header')
const menuBtn = document.querySelector('#menu-btn')
const navbar = document.querySelector('.navbar')

const searchBtn = document.getElementById('search-btn')
const clearSearch = document.getElementById('clearSearch')


searchInput.addEventListener('input', () => {
    if (searchInput.value !== '') {
        clearSearch.classList.remove('hide')
    } else {
        clearSearch.classList.add('hide')
    }
})

clearSearch.addEventListener('click', () => {
    searchInput.value = ''
})

searchBtn.onclick = () => {searchBox.classList.toggle('hide')}

window.onscroll = () => {
    if (document.documentElement.scrollTop > 100) {
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
    }
    menuBtn.querySelector('i').classList.remove('bx-x')
    navbar.classList.remove('show')
}

menuBtn.addEventListener('click', () => {
    menuBtn.querySelector('i').classList.toggle('bx-x')
    navbar.classList.toggle('show')
    header.classList.toggle('scroll')
})