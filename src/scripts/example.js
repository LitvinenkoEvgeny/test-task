exports.init = function(){
  let menu = document.getElementsByClassName(`hamburger-menu`)[0];
  let menuBar = menu.getElementsByClassName(`bar`)[0];
  let hiddenMenu = document.getElementsByClassName(`hidden__menu`)[0];


  function menuClick() {
    menuBar.classList.toggle(`animate`);
    menu.classList.toggle(`hamburger-menu--active`);
    hiddenMenu.classList.toggle(`hidden__menu--open`);
  }

  menu.addEventListener(`click`, menuClick);
};