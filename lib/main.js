'use strict';

function toggleBurger() {
  var burger = document.querySelector('.navbar-burger');
  var menu = document.querySelector('.navbar-menu');

  burger.addEventListener('click', function () {
    burger.classList.toggle('is-active');
    menu.classList.toggle('is-active');
  });
}

function toggleDropdown() {
  var dropdown = document.querySelector('.navbar-item.has-dropdown');

  dropdown.addEventListener('click', function () {
    dropdown.classList.toggle('is-active');
  });
}

document.addEventListener('DOMContentLoaded', function () {
  toggleBurger(); // this works only because there is only one burger
  toggleDropdown(); // this works only because there is only one dropdown
  console.log('Welcome geek!');
});