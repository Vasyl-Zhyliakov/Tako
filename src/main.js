import { testimonialsSwiper, awardsSwiper, workSwiper } from './scripts/slider';
import { animateMotion } from './scripts/motion';

function updateMenuState() {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
}

const product = document.getElementById('product');

product.addEventListener('click', (e) => {
  if (location.hash === '#menu') {
    product.classList.add('nav__menu-button--active');
    e.preventDefault();
    location.hash = '';
    updateMenuState();
  } else {
    product.classList.remove('nav__menu-button--active');
  }
});

const menu = document.getElementById('menu');
const burger = document.getElementById('burger');

burger.addEventListener('click', (e) => {
  if (location.hash === '#menu') {
    e.preventDefault();
    location.hash = '';
    updateMenuState();
  }
});

window.addEventListener('hashchange', updateMenuState());

document.querySelectorAll('.details__button').forEach((button) => {
  button.addEventListener('click', () => {
    const input = button.previousElementSibling;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(input.value).then(() => {
        button.classList.add('details__button--copied');
        console.log('details__button--copied');
        setTimeout(() => {
          button.classList.remove('details__button--copied');
        }, 1500);
      });
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  animateMotion();
});
