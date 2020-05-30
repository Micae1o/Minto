
let burger = document.querySelector('.ham');
let burgerMain = document.querySelector('.header__burger');
let menu = document.querySelector('.header__menu');
const body = document.body;

let links = document.querySelectorAll('.header__link');

// Бургер меню
burger.onclick = function () {
    burger.classList.toggle('active');
    burgerMain.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('lock');

    for (let i = 0; i < links.length; i++) {
        links[i].onclick = function () {

            burger.classList.remove('active');
            burgerMain.classList.remove('active');
            menu.classList.remove('active');
            body.classList.remove('lock');


        }
    }

}

// Скролл
let header = document.querySelector('.header');

window.addEventListener('scroll', function () {

    if (this.pageYOffset > 80 && header.classList.contains('default')) {
        header.classList.remove('default');
        header.classList.add('fixed');
    }

    if (this.pageYOffset <= 80 && header.classList.contains('fixed')) {
        header.classList.remove('fixed');
        header.classList.add('default');
    }
})


let mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '.arrow-next',
        prevEl: '.arrow-prev',
    },
})