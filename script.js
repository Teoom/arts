"use strict"
document.addEventListener("DOMContentLoaded", function() {

  const containers = document.querySelectorAll(".portfolio__content");
  for (let elem of containers) {
  
    elem.addEventListener("click", function({target}) {
    let info = target.closest(".picture__title__icon");
    let close = target.closest(".picture__desc__icon");

    if (info || close) elem.classList.toggle("info");
    });
  
  }}) 

  const btnDrop = document.querySelector('.portfolio__btn')

  btnDrop.addEventListener('click', function() {
      document.querySelector('.portfolio_pic__hidden').classList.toggle('active');
      if(document.querySelector('.portfolio_pic__hidden').classList.contains('active')) {
          btnDrop.textContent = 'Hide works';
      }
      else {
          btnDrop.textContent = 'Load more';
      }
  })

let header__burger = document.querySelector('.header__burger')
let header__menu = document.querySelector('.header__menu')
let body = document.querySelector('body')
header__burger.addEventListener('click', function() {
    header__burger.classList.toggle('active')
      header__menu.classList.toggle('active')
      body.classList.toggle('lock')
})

let links = document.querySelectorAll('.header__link')
for(let link of links) {
  link.addEventListener('click', function() {
    header__menu.classList.toggle('active')
    header__burger.classList.toggle('active')
  })
}

