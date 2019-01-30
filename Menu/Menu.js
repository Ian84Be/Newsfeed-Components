
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence.
  console.log('ANIANIANAINAI')
  menu.classList.toggle('menu--open');
  return (menu.classList.contains('menu--open')) ? TweenLite.to(menu, 1, {x:-350}) : TweenLite.to(menu, 1, {x:350}) 
  // TweenLite.to(menu, 1, {x:350});
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class
const menuButton = document.querySelectorAll('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu

menuButton.forEach(el => {
  el.addEventListener('click', toggleMenu);
});

