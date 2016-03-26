(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = function () {
  var block = document.body.querySelector(".info__block");
  var closeButton = block.querySelector(".info__close");

  function closeBlock() {
    block.classList.add("info__block--closed");
    removeBlock();
  }

  /*
    delete info__block after 800 ms.
   */
  function removeBlock() {
    return setTimeout(function () {
      block.style.display = "none";
    }, 800);
  }

  closeButton.addEventListener("click", closeBlock);
};

;
module.exports = exports["default"];

},{}],2:[function(require,module,exports){
"use strict";

exports.init = function () {
  var menu = document.querySelector(".hamburger-menu");
  var menuBar = menu.querySelector(".bar");
  var hiddenMenu = document.querySelector(".hidden__menu");
  var searchInput = document.querySelector("#search__input");
  var searchIcon = document.querySelector(".search__icon");

  function menuClick() {
    menuBar.classList.toggle("animate");
    menu.classList.toggle("hamburger-menu--active");
    hiddenMenu.classList.toggle("hidden__menu--open");
  }

  function searchFocus() {
    searchInput.classList.add("open");
    searchIcon.style.display = "none";
  }
  function searchBlur() {
    searchInput.classList.remove("open");
    searchIcon.style.display = "";
  }

  searchInput.addEventListener("focus", searchFocus);
  searchInput.addEventListener("blur", searchBlur);
  menu.addEventListener("click", menuClick);
};

},{}],3:[function(require,module,exports){
// this is the main file that pulls in all other modules
// you can require() bower components too!
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//let $ = require("jquery");

var _block = require("./block");

var _block2 = _interopRequireDefault(_block);

var example = require("./example");
example.init();
(0, _block2["default"])();

},{"./block":1,"./example":2}]},{},[3])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvaG9tZS91c2VyL2RvY3VtZW50cy93b3JrL3dyay9zcmMvc2NyaXB0cy9ibG9jay5qcyIsIi9ob21lL3VzZXIvZG9jdW1lbnRzL3dvcmsvd3JrL3NyYy9zY3JpcHRzL2V4YW1wbGUuanMiLCIvaG9tZS91c2VyL2RvY3VtZW50cy93b3JrL3dyay9zcmMvc2NyaXB0cy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O3FCQ0FlLFlBQVk7QUFDekIsTUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxhQUFhLGdCQUFnQixDQUFDO0FBQ3hELE1BQUksV0FBVyxHQUFHLEtBQUssQ0FBQyxhQUFhLGdCQUFnQixDQUFDOztBQUV0RCxXQUFTLFVBQVUsR0FBRztBQUNwQixTQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsdUJBQXVCLENBQUM7QUFDM0MsZUFBVyxFQUFFLENBQUM7R0FDZjs7Ozs7QUFLRCxXQUFTLFdBQVcsR0FBRztBQUNyQixXQUFPLFVBQVUsQ0FBQyxZQUFNO0FBQ3RCLFdBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxTQUFTLENBQUM7S0FDOUIsRUFBRSxHQUFHLENBQUMsQ0FBQztHQUNUOztBQUVELGFBQVcsQ0FBQyxnQkFBZ0IsVUFBVSxVQUFVLENBQUMsQ0FBQztDQUNuRDs7QUFBQSxDQUFDOzs7Ozs7QUNuQkYsT0FBTyxDQUFDLElBQUksR0FBRyxZQUFVO0FBQ3ZCLE1BQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLG1CQUFtQixDQUFDO0FBQ3JELE1BQUksT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLFFBQVEsQ0FBQztBQUN6QyxNQUFJLFVBQVUsR0FBRyxRQUFRLENBQUMsYUFBYSxpQkFBaUIsQ0FBQztBQUN6RCxNQUFJLFdBQVcsR0FBRyxRQUFRLENBQUMsYUFBYSxrQkFBa0IsQ0FBQztBQUMzRCxNQUFJLFVBQVUsR0FBRyxRQUFRLENBQUMsYUFBYSxpQkFBaUIsQ0FBQzs7QUFHekQsV0FBUyxTQUFTLEdBQUc7QUFDbkIsV0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLFdBQVcsQ0FBQztBQUNwQyxRQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDaEQsY0FBVSxDQUFDLFNBQVMsQ0FBQyxNQUFNLHNCQUFzQixDQUFDO0dBQ25EOztBQUVELFdBQVMsV0FBVyxHQUFHO0FBQ3JCLGVBQVcsQ0FBQyxTQUFTLENBQUMsR0FBRyxRQUFRLENBQUM7QUFDbEMsY0FBVSxDQUFDLEtBQUssQ0FBQyxPQUFPLFNBQVMsQ0FBQztHQUNuQztBQUNELFdBQVMsVUFBVSxHQUFHO0FBQ3BCLGVBQVcsQ0FBQyxTQUFTLENBQUMsTUFBTSxRQUFRLENBQUM7QUFDckMsY0FBVSxDQUFDLEtBQUssQ0FBQyxPQUFPLEtBQUssQ0FBQztHQUMvQjs7QUFFRCxhQUFXLENBQUMsZ0JBQWdCLFVBQVUsV0FBVyxDQUFDLENBQUM7QUFDbkQsYUFBVyxDQUFDLGdCQUFnQixTQUFTLFVBQVUsQ0FBQyxDQUFDO0FBQ2pELE1BQUksQ0FBQyxnQkFBZ0IsVUFBVSxTQUFTLENBQUMsQ0FBQztDQUMzQyxDQUFDOzs7Ozs7Ozs7OztxQkN0QmdCLFNBQVM7Ozs7QUFGM0IsSUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBR25DLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUNmLHlCQUFPLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICBsZXQgYmxvY2sgPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoYC5pbmZvX19ibG9ja2ApO1xuICBsZXQgY2xvc2VCdXR0b24gPSBibG9jay5xdWVyeVNlbGVjdG9yKGAuaW5mb19fY2xvc2VgKTtcblxuICBmdW5jdGlvbiBjbG9zZUJsb2NrKCkge1xuICAgIGJsb2NrLmNsYXNzTGlzdC5hZGQoYGluZm9fX2Jsb2NrLS1jbG9zZWRgKTtcbiAgICByZW1vdmVCbG9jaygpO1xuICB9XG5cbiAgLypcbiAgICBkZWxldGUgaW5mb19fYmxvY2sgYWZ0ZXIgODAwIG1zLlxuICAgKi9cbiAgZnVuY3Rpb24gcmVtb3ZlQmxvY2soKSB7XG4gICAgcmV0dXJuIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgYmxvY2suc3R5bGUuZGlzcGxheSA9IGBub25lYDtcbiAgICB9LCA4MDApO1xuICB9XG5cbiAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihgY2xpY2tgLCBjbG9zZUJsb2NrKTtcbn07XG4iLCJleHBvcnRzLmluaXQgPSBmdW5jdGlvbigpe1xuICBsZXQgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5oYW1idXJnZXItbWVudWApO1xuICBsZXQgbWVudUJhciA9IG1lbnUucXVlcnlTZWxlY3RvcihgLmJhcmApO1xuICBsZXQgaGlkZGVuTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5oaWRkZW5fX21lbnVgKTtcbiAgbGV0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3NlYXJjaF9faW5wdXRgKTtcbiAgbGV0IHNlYXJjaEljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuc2VhcmNoX19pY29uYCk7XG5cblxuICBmdW5jdGlvbiBtZW51Q2xpY2soKSB7XG4gICAgbWVudUJhci5jbGFzc0xpc3QudG9nZ2xlKGBhbmltYXRlYCk7XG4gICAgbWVudS5jbGFzc0xpc3QudG9nZ2xlKGBoYW1idXJnZXItbWVudS0tYWN0aXZlYCk7XG4gICAgaGlkZGVuTWVudS5jbGFzc0xpc3QudG9nZ2xlKGBoaWRkZW5fX21lbnUtLW9wZW5gKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNlYXJjaEZvY3VzKCkge1xuICAgIHNlYXJjaElucHV0LmNsYXNzTGlzdC5hZGQoYG9wZW5gKTtcbiAgICBzZWFyY2hJY29uLnN0eWxlLmRpc3BsYXkgPSBgbm9uZWA7XG4gIH1cbiAgZnVuY3Rpb24gc2VhcmNoQmx1cigpIHtcbiAgICBzZWFyY2hJbnB1dC5jbGFzc0xpc3QucmVtb3ZlKGBvcGVuYCk7XG4gICAgc2VhcmNoSWNvbi5zdHlsZS5kaXNwbGF5ID0gYGA7XG4gIH1cblxuICBzZWFyY2hJbnB1dC5hZGRFdmVudExpc3RlbmVyKGBmb2N1c2AsIHNlYXJjaEZvY3VzKTtcbiAgc2VhcmNoSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihgYmx1cmAsIHNlYXJjaEJsdXIpO1xuICBtZW51LmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgbWVudUNsaWNrKTtcbn07IiwiLy8gdGhpcyBpcyB0aGUgbWFpbiBmaWxlIHRoYXQgcHVsbHMgaW4gYWxsIG90aGVyIG1vZHVsZXNcbi8vIHlvdSBjYW4gcmVxdWlyZSgpIGJvd2VyIGNvbXBvbmVudHMgdG9vIVxubGV0IGV4YW1wbGUgPSByZXF1aXJlKFwiLi9leGFtcGxlXCIpO1xuLy9sZXQgJCA9IHJlcXVpcmUoXCJqcXVlcnlcIik7XG5pbXBvcnQgYmxvY2sgZnJvbSBcIi4vYmxvY2tcIjtcbmV4YW1wbGUuaW5pdCgpO1xuYmxvY2soKTtcbiJdfQ==
