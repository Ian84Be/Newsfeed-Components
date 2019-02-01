function toggleMenu() {
  menu.classList.toggle('menu--open');
  if (menu.classList.contains('menu--open')) {
    TweenLite.to(menu, 1, {x:350, ease:Power4.easeOut});
    console.log('opening');
  } else {
    TweenLite.to(menu, 1, {x:-350, ease:Power4.easeOut});
    console.log('closing');
  }
}

const menu = document.querySelector('.menu');
const menuButton = document.querySelectorAll('.menu-button');

menuButton.forEach(el => {
  el.addEventListener('click', ev => {
    ev.stopPropagation();
    toggleMenu();
  } );
});

window.addEventListener('click', ev => {
  if (menu.classList.contains('menu--open')) toggleMenu();
});