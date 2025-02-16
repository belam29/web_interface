const preload = document.querySelector('[data-preload]')
const header = document.querySelector('[data-header]')

window.addEventListener('load', function () {
    preload.classList.add('loaded')
})


let sY = 0;
window.addEventListener('scroll', function () {
    if (this.scrollY > 50 && this.scrollY > sY) {
        header.classList.add('active')
        header.classList.add('hide')
    } else if (this.scrollY > 50 && this.scrollY < sY) {
        header.classList.remove('hide')
    }
    else {
        header.classList.remove('active')
        header.classList.remove('hide')
    }

    sY = this.scrollY

})



///Slider////

const heroSlider = document.querySelector('[data-hero-slide]')
const heroItem = document.querySelectorAll('[data-hero-slide-item]')
const btnSliderNext = document.querySelector('[data-next-slider]')
const btnSliderPrev = document.querySelector('[data-prev-slider]')

let currentIndex = 0
let previousSlide = heroItem[0]

function updateSlider() {
    previousSlide.classList.remove('active')
    heroItem[currentIndex].classList.add('active')
    previousSlide = heroItem[currentIndex]
}


const slideNext = function () {
    if (currentIndex >= heroItem.length - 1) {
        currentIndex = 0
    } else {
        currentIndex++
    }

    updateSlider(currentIndex)
}

const slidePrev = function () {
    if (currentIndex < 0) {
        currentIndex = heroItem.length - 1
    } else {
        currentIndex--
    }

    updateSlider(currentIndex)
}

let interval;

const autoPlaySlider = () => {
    if (interval) {
        clearInterval(interval)
    }

    interval = setInterval(slideNext, 10000)
}

window.addEventListener('load', autoPlaySlider)

btnSliderNext.addEventListener('click', () => {
    autoPlaySlider()
    slideNext()
})
btnSliderPrev.addEventListener('click', () => {
    autoPlaySlider()
    slidePrev()
})

// about

const about = document.getElementById('about')
const aboutImgBanner = document.querySelector('[data-about-banner-img]')
const aboutImgAbs = document.querySelector('[data-about-img-abs]')

let x, y;
about.addEventListener('mousemove', function (e) {

    // giới hạn 5 -5
    x = e.clientX / window.innerWidth * 10 - 5
    y = e.clientY / window.innerHeight * 10 - 5
    
    aboutImgBanner.style.transform = `translate(${-x}px, ${-y}px)`
    aboutImgAbs.style.transform = `translate(${-x*2}px, ${-y*2}px)`

})

// 

const openNavbar = document.querySelector('[data-open-navbar]')
const navbar = document.querySelector('[data-navbar]')
const closeNavbar = document.querySelector('[data-close-navbar]')
const overlay = document.querySelector('.overlay')

openNavbar.addEventListener('click', function () {
    navbar.classList.add('active')
    overlay.classList.add('show')
    

    if (overlay.classList.contains('show')) {
        document.body.style.overflow = 'hidden'
    }
})

closeNavbar.addEventListener('click', function () {
    navbar.classList.remove('active')
    overlay.classList.remove('show')
    document.body.style.overflow = 'auto'
})

