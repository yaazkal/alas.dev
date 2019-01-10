function toggleBurger() {
  const burger = document.querySelector('.navbar-burger');
  const menu = document.querySelector('.navbar-menu');

  burger.addEventListener ('click', () => {
    burger.classList.toggle('is-active');
    menu.classList.toggle('is-active');
  });
}

function toggleDropdown(){
  const dropdown = document.querySelector('.navbar-item.has-dropdown');
  
  dropdown.addEventListener('click', () => {
    dropdown.classList.toggle('is-active');
  });
}

document.addEventListener('DOMContentLoaded', () => {
  toggleBurger(); // this works only because there is only one burger
  toggleDropdown(); // this works only because there is only one dropdown
  console.log('Welcome geek!');
});
