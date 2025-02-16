const prev = document.querySelector('.slider-prev')
const next = document.querySelector('.slider-next')
const sliders = document.querySelectorAll('.slider')
const menuIcon = document.getElementById('menu-icon')
const navbar = document.querySelector('.navbar')
const navbarList = document.querySelectorAll('.navbar li a')

let sliderNumber = 0

const updateSlider = (direction) => {
    sliderNumber += direction;

    // cập nhật sliderNumber
    if(sliderNumber >= sliders.length) sliderNumber = sliders.length - 1
    if (sliderNumber < 0) sliderNumber = 0

    sliderShow(sliderNumber)
};

function sliderShow (sliderNumber) {
        // Đảm bảo không vượt quá giới hạn
        if (sliderNumber >= sliders.length-1) {
            next.style.opacity = '0.5';
            next.style.cursor = 'default';
        } else if (sliderNumber <= 0) {
            sliderNumber = 0;
            prev.style.opacity = '0.5';
            prev.style.cursor = 'default';
        } else {
            next.style.opacity = '1';
            prev.style.opacity = '1';
            next.style.cursor = 'pointer';
            prev.style.cursor = 'pointer';
        }
    
        // Cập nhật trạng thái các slider
        sliders.forEach((item, index) => {
            item.classList.remove('active');
            if (index === sliderNumber) {
                item.classList.add('active');
                item.style.transform = 'translateX(0%)';
            } else if (index < sliderNumber) {
                item.style.transform = 'translateX(-100%)';
            } else {
                item.style.transform = 'translateX(100%)';
            }
        });
}


const autoSlider = () => {
    setInterval (() => {
        sliderNumber += 1
        if (sliderNumber >= sliders.length){
            sliderNumber = 0
        }
        sliderShow(sliderNumber)
    }, 10000)
}


// Event

autoSlider()
prev.onclick = () => updateSlider(-1)
next.onclick = () => updateSlider(1)

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('hide-t')
}

navbarList.forEach(item => {
    item.addEventListener('click', () => {
        navbarList.forEach(i => {
            i.classList.remove('home-active')
        })
        item.classList.add('home-active')
    })
})

window.onscroll = () => {
    menuIcon.classList.remove('bx-x')
    navbar.classList.add('hide-t')
}