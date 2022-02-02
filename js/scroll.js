'use strict';
const jsSmoothScroll = document.querySelectorAll('a[href^="#"]');

for (let i = 0; i < jsSmoothScroll.length; i++) {
  jsSmoothScroll[i].addEventListener('click', (e) => {
    e.preventDefault();
    // href属性の取得
    let href = jsSmoothScroll[i].getAttribute('href');
    let target = document.getElementById(href.replace('#', ''));
    const rect = target.getBoundingClientRect().top;
    const offset = window.pageYOffset;
    // 移動先のポジション取得
    const position = rect + offset;

    window.scrollTo({
      top: position,
      behavior: 'smooth'
    });
  });
}