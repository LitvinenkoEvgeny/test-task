exports.init = function(){
  let menu = document.getElementsByClassName(`hamburger-menu`)[0];
  let menuBar = menu.getElementsByClassName(`bar`)[0];
  let hiddenMenu = document.getElementsByClassName(`hidden__menu`)[0];
  let searchInput = document.getElementById(`search__input`);
  let searchIcon = document.getElementsByClassName(`search__icon`)[0];


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