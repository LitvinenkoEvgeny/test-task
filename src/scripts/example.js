exports.init = function(){
  let menu = document.querySelector(`.hamburger-menu`);
  let menuBar = menu.querySelector(`.bar`);
  let hiddenMenu = document.querySelector(`.hidden__menu`);
  let searchInput = document.querySelector(`#search__input`);
  let searchIcon = document.querySelector(`.search__icon`);


  function menuClick() {
    menuBar.classList.toggle(`animate`);
    menu.classList.toggle(`hamburger-menu--active`);
    hiddenMenu.classList.toggle(`hidden__menu--open`);
  }

  function searchFocus() {
    searchInput.classList.add(`open`);
    searchIcon.style.display = `none`;
  }
  function searchBlur() {
    searchInput.classList.remove(`open`);
    searchIcon.style.display = ``;
  }

  searchInput.addEventListener(`focus`, searchFocus);
  searchInput.addEventListener(`blur`, searchBlur);
  menu.addEventListener(`click`, menuClick);
};