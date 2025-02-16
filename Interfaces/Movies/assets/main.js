const sliderDotsBtn = document.querySelectorAll('.slider-dots span')
const sliders = document.querySelectorAll('.slider')
const header = document.querySelector('.header')
const navbar = document.querySelector('.navbar')
const navbarList = document.querySelectorAll('.navbar li a')
const coming = document.querySelector('.coming .box')
const menuBtn = document.querySelector('.menu-mt i')

sliderDotsBtn.forEach((item, i) => {
    item.addEventListener('click', () => {
        let number;
        sliders.forEach(item => {
            item.classList.remove('active')
        })
        sliderDotsBtn.forEach((item, i) => {
            if (item.classList.contains('active')) {
                number = i
            }
            item.classList.remove('active')
        })
        console.log(number, i)
        item.classList.add('active')
        if (number < i) {
            sliders[i].classList.add('active')
            sliders[number].style.transform = 'translateX(-100%)'
        } else {
            sliders[i].classList.add('active')
            sliders[number].style.transform = 'translateX(100%)'
        }
    })
})

let index = 0
setInterval(() => {
    index += 1
    if (index >= sliders.length) index = 0

    sliders.forEach((item, i) => {
        item.classList.remove('active', 'prev')
        if (i === index) {
            item.classList.add('active')
        } else if (i === index - 1 || index === 0 && i === sliders.length - 1) {
            item.classList.add('prev')
        }
    })
    sliderDotsBtn.forEach((item, i) => {
        item.classList.remove('active')
        if (i === index) {
            item.classList.add('active')
        }
    })

}, 2000)

window.onscroll = () => {
    menuBtn.classList.remove('bx-x')
    header.classList.remove('scroll')
    navbar.classList.remove('mt')
    if (document.documentElement.scrollTop > 50) {
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
    }
}

navbarList.forEach(item => {
    item.addEventListener('click', () => {
        navbarList.forEach(item => {
            item.classList.remove('nav-active')
        })
        item.classList.add('nav-active')
    })
})

let startX, scrollLeft;

let isMouseover = false

coming.addEventListener('mousedown', (e) => {
    isMouseover = true;
    startX = e.pageX 
    scrollLeft = coming.offsetLeft
});

coming.addEventListener('mousemove', (e) => {
    if (isMouseover) {
        const walk = (e.pageX - startX);
        coming.scrollLeft = scrollLeft - walk;
        scrollLeft = coming.scrollLeft
    }
});

coming.addEventListener('mouseup', () => {
    isMouseover = false;
});

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('bx-x')
    header.classList.toggle('scroll')
    navbar.classList.toggle('mt')
})
