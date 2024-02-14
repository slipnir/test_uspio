import '../scss/styles.scss';
import Swiper from 'swiper';

/* eslint-disable no-unused-vars */
import {Modal, Button} from 'bootstrap';

const swiper = new Swiper('.js_slider', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 5000,
    },
    lazy: true,
    grabCursor: true,
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});
/* eslint-enable no-unused-vars */

const subscribeButton = document.querySelector('.js_subscribe');
const emailInput = document.querySelector('.js_email');

subscribeButton.addEventListener('click', (event) => {
    event.preventDefault();

    const email = emailInput.value.trim();

    if (email !== '') {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', '/success.txt', true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    const response = xhr.responseText;
                    subscribeButton.textContent = `${response}`;
                    subscribeButton.classList.add('social__button-success');
                } else {
                    subscribeButton.textContent = 'Ошибка при подписке';
                }
            }
        };
        xhr.send();
    } else {
        alert('Пожалуйста, введите ваш email');
    }
});

const images = document.querySelectorAll('.js_img');

images.forEach(img => {
    img.addEventListener('click', () => {
        const modal = new Modal(document.getElementById('imageModal'));
        const modalImage = document.querySelector('.js_img_target');
        modalImage.src = img.src;
        modalImage.alt = img.alt;
        modalImage.title = img.title;
        modal.show();
    });
});

const burgerMenu = document.querySelector('.js_burger');
const nav = document.querySelector('.js_nav_menu');

burgerMenu.addEventListener('click', () => {
   nav.classList.add('nav__content-mobile');
});




