'use strict';
const btn = document.getElementById('c-hamburger__menu__btn');

btn.addEventListener('click', () => {
  if (btn.classList.contains('close')) {
    navShow();

  } else if (btn.classList.contains('show')) {
    navClose();
  }
});

const menuItem = document.querySelectorAll('.c-hamburger__menu__item').forEach(function (nav) {
  nav.addEventListener('click', () => {
    navClose();
  });
});

const bgClose = document.getElementById('c-hamburger__menu').addEventListener('click', () => {
  navClose();
});


const menuList = document.querySelector('#c-hamburger__menu');
const bodyFixed = document.getElementById('body');

function navShow() {
  btn.classList.add('show');
  btn.classList.remove('close');
  menuList.classList.add('show');
  menuList.classList.remove('close');
  bodyFixed.style.overflow = 'hidden'
}

function navClose() {
  menuList.classList.remove('show');
  menuList.classList.add('close');
  btn.classList.remove('show');
  btn.classList.add('close');
  bodyFixed.style.overflow = 'initial'
}

$(function () {
  var pagetop = $('#js-header');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 20) {
      colorChange('#707070');
      header.classList.add('is-bgColor--done');
      header.classList.remove('is-bgColor');
    } else {
      header.classList.add('is-bgColor');
      header.classList.remove('is-bgColor--done');
      colorChange('#fff');
    }
  });
});

const header = document.querySelector('.is-bgColor');

function colorChange(color) {
  const span = document.querySelectorAll('button#c-hamburger__menu__btn > span');

  span.forEach((el) => {
    header.style.color = color;
    el.style.backgroundColor = color;
  });
}
