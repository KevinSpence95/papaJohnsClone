/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home/cardSlider.js":
/*!********************************!*\
  !*** ./src/home/cardSlider.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ cardSlider)
/* harmony export */ });
/* harmony import */ var _cardSlider_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cardSlider.css */ "./src/home/cardSlider.css");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function cardSlider() {
  var content = document.createElement("section");
  content.classList.add("sliderSection");
  content.innerHTML = "\n        <button class='leftArrow'>\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-arrow-left\"><line x1=\"19\" y1=\"12\" x2=\"5\" y2=\"12\"></line><polyline points=\"12 19 5 12 12 5\"></polyline></svg>\n        </button>\n        <div class='trimWindow'></div>\n        <div class='cardWindow'>\n            <div class='cardSlider'>\n                <div class='card'></div>\n                <div class='card'></div>\n                <div class='card'></div>\n                <div class='card'></div>\n                <div class='card'></div>\n                <div class='card'></div>\n            </div>\n        </div>\n        <div class='trimWindow'></div>\n        <button class='rightArrow'>\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-arrow-right\"><line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"></line><polyline points=\"12 5 19 12 12 19\"></polyline></svg>\n        </button>\n  ";
  var leftArrow = content.querySelector(".leftArrow");
  leftArrow.addEventListener("click", function () {
    slideLeft();
  });
  var cardWindow = content.querySelector(".cardWindow");
  var rightArrow = content.querySelector(".rightArrow");
  rightArrow.addEventListener("click", function () {
    slideRight();
  });
  function slideLeft() {
    var _getSliderData = getSliderData(),
      regionWidth = _getSliderData.regionWidth,
      scrollPosition = _getSliderData.scrollPosition;
    if (Math.floor(scrollPosition) % regionWidth !== 0) {
      cardWindow.scroll({
        left: Math.floor(scrollPosition / regionWidth) * regionWidth,
        behavior: "smooth"
      });
    } else {
      cardWindow.scroll({
        left: scrollPosition - regionWidth,
        behavior: "smooth"
      });
    }

    // if (scrollPosition % positionRanges[0] === 0) {
    //   let left =
    //     (Math.floor(scrollPosition / positionRanges[0]) - 1) *
    //     positionRanges[0];
    //   cardWindow.scroll({
    //     left: left,
    //     behavior: "smooth",
    //   });
    // } else {
    //   cardWindow.scroll({
    //     left:
    //       Math.floor(scrollPosition / positionRanges[0]) * positionRanges[0] -
    //       1,
    //     behavior: "smooth",
    //   });
    // }
  }

  function slideRight() {
    var _getSliderData2 = getSliderData(),
      regionWidth = _getSliderData2.regionWidth,
      scrollPosition = _getSliderData2.scrollPosition;
    if (Math.floor(scrollPosition) % regionWidth !== 0) {
      cardWindow.scroll({
        left: (Math.floor(scrollPosition / regionWidth) + 1) * regionWidth,
        behavior: "smooth"
      });
    } else {
      cardWindow.scroll({
        left: scrollPosition + regionWidth,
        behavior: "smooth"
      });
    }

    // alert(`scrollLeft = ${scrollPosition} of ${maxScrollLeft}`);

    // if (scrollPosition % positionRanges[0] === 0) {
    //   cardWindow.scroll({
    //     left:
    //       (Math.floor(scrollPosition / positionRanges[0]) + 1) *
    //       positionRanges[0],
    //     behavior: "smooth",
    //   });
    //   alert(scrollPositionRight);
    // } else {
    //   let left = (Math.floor(scrollPosition / positionRanges[0]) + 1) *
    //   positionRanges[0]
    //   if(maxScrollLeft-scrollPosition < (cardWidth + 2)) {
    //     left = maxScrollLeft;
    //   }
    //   cardWindow.scroll({
    //     left:
    //       left,
    //     behavior: "smooth",
    //   });
    // }
  }

  function getSliderData() {
    var cardWidth = getCardWidth();
    var scrollPosition = cardWindow.scrollLeft;
    var cardSliderWidth = getCardSliderWidth();
    var maxScrollLeft = getMaxScrollLeft();
    var leftToScroll = maxScrollLeft - scrollPosition;
    var numCards = getNumCards();
    var gapWidth = (cardSliderWidth - cardWidth * numCards) / (numCards + 1);
    var positionRanges = [];
    for (var i = 1; i <= numCards; i++) {
      var upperBound = i * cardWidth + i * gapWidth;
      positionRanges.push(upperBound);
    }
    var regionWidth = positionRanges[0];
    return {
      scrollPosition: scrollPosition,
      leftToScroll: leftToScroll,
      maxScrollLeft: maxScrollLeft,
      positionRanges: positionRanges,
      regionWidth: regionWidth,
      numCards: numCards,
      cardWidth: cardWidth,
      gapWidth: gapWidth,
      cardSliderWidth: cardSliderWidth
    };
  }
  function getMaxScrollLeft() {
    return cardWindow.scrollWidth - cardWindow.clientWidth;
  }
  function getCardWidth() {
    var card = document.querySelector(".card");
    var width = card.offsetWidth;
    return width;
  }
  function getCardSliderWidth() {
    var cardSlider = document.querySelector(".cardSlider");
    var width = cardSlider.offsetWidth;
    return width;
  }
  function getNumCards() {
    var cards = document.querySelectorAll(".card");
    var numCards = _toConsumableArray(cards).length;
    return numCards;
  }
  return content;
}

/***/ }),

/***/ "./src/home/hero.js":
/*!**************************!*\
  !*** ./src/home/hero.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ hero)
/* harmony export */ });
/* harmony import */ var _hero_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hero.css */ "./src/home/hero.css");

function hero() {
  var content = document.createElement("div");
  content.classList.add("hero");
  content.innerHTML = "\n        <div class='heroText'>\n        <h1>Starting at $13</h1>\n        <h3>Limited time offer</h3>\n        <div>\n        <h1>Epic stuffed crust pizza</h1>\n        <h3>1-topping special</h3>\n        <h4>Choose your topping. Cheese your crust.</h4>\n        </div>\n        <div>\n          <a href=\"#\" class='blackBtn'>Order Delivery</a>\n          <a href=\"#\" class='whiteBtn'>Order Carryout</a>\n        </div>\n        </div>\n  ";
  return content;
}

/***/ }),

/***/ "./src/home/home.js":
/*!**************************!*\
  !*** ./src/home/home.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ home)
/* harmony export */ });
/* harmony import */ var _home_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.css */ "./src/home/home.css");
/* harmony import */ var _hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hero */ "./src/home/hero.js");
/* harmony import */ var _cardSlider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cardSlider */ "./src/home/cardSlider.js");



function home() {
  var content = document.createElement("div");
  content.classList.add("main__home");
  // let line1 = document.createElement('h2')
  // line1.textContent = 'Starting at $13'
  // content.appendChild(line1)
  content.appendChild((0,_hero__WEBPACK_IMPORTED_MODULE_1__["default"])());
  content.appendChild((0,_cardSlider__WEBPACK_IMPORTED_MODULE_2__["default"])());
  // content.textContent = "Home";

  return content;
}

/***/ }),

/***/ "./src/menu/menu.js":
/*!**************************!*\
  !*** ./src/menu/menu.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menu)
/* harmony export */ });
/* harmony import */ var _menu_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.css */ "./src/menu/menu.css");

function menu() {
  var content = document.createElement("div");
  content.classList.add("main__menu");
  content.textContent = "MENU";
  return content;
}

/***/ }),

/***/ "./src/papaRewards/papaRewards.js":
/*!****************************************!*\
  !*** ./src/papaRewards/papaRewards.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ papaRewards)
/* harmony export */ });
/* harmony import */ var _papaRewards_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./papaRewards.css */ "./src/papaRewards/papaRewards.css");

function papaRewards() {
  var content = document.createElement("div");
  content.textContent = "PAPA REWARDS";
  content.classList.add("main__papaRewards");
  return content;
}

/***/ }),

/***/ "./src/specials/specials.js":
/*!**********************************!*\
  !*** ./src/specials/specials.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ specials)
/* harmony export */ });
/* harmony import */ var _specials_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./specials.css */ "./src/specials/specials.css");

function specials() {
  var content = document.createElement("div");
  content.classList.add("main__specials");
  content.textContent = "SPECIALS";
  return content;
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/home/cardSlider.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/home/cardSlider.css ***!
  \***********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n\n.sliderSection {\n  background-color: var(--color1);\n  height: 500px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n}\n\n.cardWindow {\n  height: 400px;\n  width: min(100vw, calc(960px + 6rem));\n  overflow-y: hidden;\n  overflow-x: scroll;\n  position:relative;\n  display: flex;\n  align-items: center;\n}\n\n.trimWindow:first-of-type {\n    background-color: var(--color1);\n    height:400px;\n    width:12px;\n    display: block;\n    transform: translateX(6px);\n    z-index: 1000;\n}\n.trimWindow:last-of-type {\n    background-color: var(--color1);\n    height:400px;\n    width:12px;\n    transform: translateX(-6px);\n    display: block;\n    z-index: 1000;\n}\n\n/* .cardWindow::before {\n    content: '';\n    background-color: yellow;\n    height:400px;\n    width:12px;\n    display: block;\n    position: absolute;\n    left:4px\n}\n.cardWindow::after {\n    content: '';\n    background-color: yellow;\n    height:400px;\n    width:12px;\n    display: block;\n    position: absolute;\n    right:4px;\n    z-index: 2000;\n} */\n\n.cardSlider {\n  height: 400px;\n  width: fit-content;\n  padding: 0 1.5rem;\n  background-color: var(--color1);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1.5rem;\n}\n\n.card {\n  min-width: 320px;\n  min-height: 362px;\n  border-radius: 1.5rem;\n  background-color: yellowgreen;\n}\n@media screen and (max-width: 833px) {\n    .cardSlider {\n        padding: 0 .75rem;\n        gap:.75rem;\n    }\n    .card {\n        min-width: 272px;\n    }\n}\n\nbutton {\n    position: absolute;\n    background-color: black;\n    border: 1px solid black;\n    color:white;\n    opacity: .4;\n    border-radius: 5rem;\n    padding:.5rem;\n    cursor:pointer;\n    z-index: 1500;\n}\n\nbutton:hover {\n    opacity: 1;\n    color:white;\n}\n\n.leftArrow {\n    left:2rem;\n}\n\n.rightArrow {\n    right:2rem;\n}", "",{"version":3,"sources":["webpack://./src/home/cardSlider.css"],"names":[],"mappings":";;AAEA;EACE,+BAA+B;EAC/B,aAAa;EACb,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,qCAAqC;EACrC,kBAAkB;EAClB,kBAAkB;EAClB,iBAAiB;EACjB,aAAa;EACb,mBAAmB;AACrB;;AAEA;IACI,+BAA+B;IAC/B,YAAY;IACZ,UAAU;IACV,cAAc;IACd,0BAA0B;IAC1B,aAAa;AACjB;AACA;IACI,+BAA+B;IAC/B,YAAY;IACZ,UAAU;IACV,2BAA2B;IAC3B,cAAc;IACd,aAAa;AACjB;;AAEA;;;;;;;;;;;;;;;;;;GAkBG;;AAEH;EACE,aAAa;EACb,kBAAkB;EAClB,iBAAiB;EACjB,+BAA+B;EAC/B,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,qBAAqB;EACrB,6BAA6B;AAC/B;AACA;IACI;QACI,iBAAiB;QACjB,UAAU;IACd;IACA;QACI,gBAAgB;IACpB;AACJ;;AAEA;IACI,kBAAkB;IAClB,uBAAuB;IACvB,uBAAuB;IACvB,WAAW;IACX,WAAW;IACX,mBAAmB;IACnB,aAAa;IACb,cAAc;IACd,aAAa;AACjB;;AAEA;IACI,UAAU;IACV,WAAW;AACf;;AAEA;IACI,SAAS;AACb;;AAEA;IACI,UAAU;AACd","sourcesContent":["\n\n.sliderSection {\n  background-color: var(--color1);\n  height: 500px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n}\n\n.cardWindow {\n  height: 400px;\n  width: min(100vw, calc(960px + 6rem));\n  overflow-y: hidden;\n  overflow-x: scroll;\n  position:relative;\n  display: flex;\n  align-items: center;\n}\n\n.trimWindow:first-of-type {\n    background-color: var(--color1);\n    height:400px;\n    width:12px;\n    display: block;\n    transform: translateX(6px);\n    z-index: 1000;\n}\n.trimWindow:last-of-type {\n    background-color: var(--color1);\n    height:400px;\n    width:12px;\n    transform: translateX(-6px);\n    display: block;\n    z-index: 1000;\n}\n\n/* .cardWindow::before {\n    content: '';\n    background-color: yellow;\n    height:400px;\n    width:12px;\n    display: block;\n    position: absolute;\n    left:4px\n}\n.cardWindow::after {\n    content: '';\n    background-color: yellow;\n    height:400px;\n    width:12px;\n    display: block;\n    position: absolute;\n    right:4px;\n    z-index: 2000;\n} */\n\n.cardSlider {\n  height: 400px;\n  width: fit-content;\n  padding: 0 1.5rem;\n  background-color: var(--color1);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1.5rem;\n}\n\n.card {\n  min-width: 320px;\n  min-height: 362px;\n  border-radius: 1.5rem;\n  background-color: yellowgreen;\n}\n@media screen and (max-width: 833px) {\n    .cardSlider {\n        padding: 0 .75rem;\n        gap:.75rem;\n    }\n    .card {\n        min-width: 272px;\n    }\n}\n\nbutton {\n    position: absolute;\n    background-color: black;\n    border: 1px solid black;\n    color:white;\n    opacity: .4;\n    border-radius: 5rem;\n    padding:.5rem;\n    cursor:pointer;\n    z-index: 1500;\n}\n\nbutton:hover {\n    opacity: 1;\n    color:white;\n}\n\n.leftArrow {\n    left:2rem;\n}\n\n.rightArrow {\n    right:2rem;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/home/hero.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/home/hero.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".hero {\n    background-color: grey;\n    color:white;\n    height:453px;\n    padding: 0 10vw;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    letter-spacing: 1px;\n}\n.heroText {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 1rem;\n    overflow: hidden;\n    width:fit-content;\n    padding: 2rem 0rem;\n\n}\n\n.hero > div > *:first-child {\n    background-color: black;\n    padding: 0rem .5rem 2px .5rem;\n    transform: skewX(-5deg) rotateZ(-5deg) translateY(-5px) translateX(-2px);\n    width:fit-content;\n    position: relative;\n    animation: heroSlide 400ms ease-in forwards;\n\n}\n@keyframes heroSlide {\n    from {\n        transform: skewX(-5deg) rotateZ(-5deg) translateY(0px) translateX(-15rem);\n    }\n    to {\n        transform: skewX(-5deg) rotateZ(-5deg) translateY(-5px) translateX(-2px);\n    }\n}\n\n.hero > div > *:first-child::after {\n    content: '99';\n    font-size: 1.35rem;\n    text-decoration: underline;\n    margin: 0rem .1rem 0rem .35rem;\n    position: relative;\n    bottom: .5rem;\n    \n}\n.hero > div > *:nth-child(2) {\n    background-color: hsl(355, 68%, 48%);\n    padding: 0px .35rem 2px .35rem;\n    width:fit-content;  \n    font-size: 1rem;\n    position:relative;\n    /* z-index: 100; */\n}\n/* .hero > div > *:nth-child(2)::after {\n    background-color:red;\n    content: '';\n    height:1.6rem;\n    width: 1.6rem;\n    position:absolute;\n    transform: skewX(-30deg) translateX(-2px);\n    z-index: 1;\n} */\n\n\n.hero > div > *:nth-child(3) {\n    \n    padding-bottom: 2px;\n    width:fit-content;\n    margin-bottom: .75rem;\n}\n.hero > div > *:nth-child(4) a:first-child {\n    margin-right: 1.5rem;\n}\n\n\n\n\n@media screen and (max-width: 833px) { \n    .hero {\n        height: 400px;\n        padding: 1rem;\n    }\n}", "",{"version":3,"sources":["webpack://./src/home/hero.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,WAAW;IACX,YAAY;IACZ,eAAe;IACf,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,SAAS;IACT,gBAAgB;IAChB,iBAAiB;IACjB,kBAAkB;;AAEtB;;AAEA;IACI,uBAAuB;IACvB,6BAA6B;IAC7B,wEAAwE;IACxE,iBAAiB;IACjB,kBAAkB;IAClB,2CAA2C;;AAE/C;AACA;IACI;QACI,yEAAyE;IAC7E;IACA;QACI,wEAAwE;IAC5E;AACJ;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,0BAA0B;IAC1B,8BAA8B;IAC9B,kBAAkB;IAClB,aAAa;;AAEjB;AACA;IACI,oCAAoC;IACpC,8BAA8B;IAC9B,iBAAiB;IACjB,eAAe;IACf,iBAAiB;IACjB,kBAAkB;AACtB;AACA;;;;;;;;GAQG;;;AAGH;;IAEI,mBAAmB;IACnB,iBAAiB;IACjB,qBAAqB;AACzB;AACA;IACI,oBAAoB;AACxB;;;;;AAKA;IACI;QACI,aAAa;QACb,aAAa;IACjB;AACJ","sourcesContent":[".hero {\n    background-color: grey;\n    color:white;\n    height:453px;\n    padding: 0 10vw;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    letter-spacing: 1px;\n}\n.heroText {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 1rem;\n    overflow: hidden;\n    width:fit-content;\n    padding: 2rem 0rem;\n\n}\n\n.hero > div > *:first-child {\n    background-color: black;\n    padding: 0rem .5rem 2px .5rem;\n    transform: skewX(-5deg) rotateZ(-5deg) translateY(-5px) translateX(-2px);\n    width:fit-content;\n    position: relative;\n    animation: heroSlide 400ms ease-in forwards;\n\n}\n@keyframes heroSlide {\n    from {\n        transform: skewX(-5deg) rotateZ(-5deg) translateY(0px) translateX(-15rem);\n    }\n    to {\n        transform: skewX(-5deg) rotateZ(-5deg) translateY(-5px) translateX(-2px);\n    }\n}\n\n.hero > div > *:first-child::after {\n    content: '99';\n    font-size: 1.35rem;\n    text-decoration: underline;\n    margin: 0rem .1rem 0rem .35rem;\n    position: relative;\n    bottom: .5rem;\n    \n}\n.hero > div > *:nth-child(2) {\n    background-color: hsl(355, 68%, 48%);\n    padding: 0px .35rem 2px .35rem;\n    width:fit-content;  \n    font-size: 1rem;\n    position:relative;\n    /* z-index: 100; */\n}\n/* .hero > div > *:nth-child(2)::after {\n    background-color:red;\n    content: '';\n    height:1.6rem;\n    width: 1.6rem;\n    position:absolute;\n    transform: skewX(-30deg) translateX(-2px);\n    z-index: 1;\n} */\n\n\n.hero > div > *:nth-child(3) {\n    \n    padding-bottom: 2px;\n    width:fit-content;\n    margin-bottom: .75rem;\n}\n.hero > div > *:nth-child(4) a:first-child {\n    margin-right: 1.5rem;\n}\n\n\n\n\n@media screen and (max-width: 833px) { \n    .hero {\n        height: 400px;\n        padding: 1rem;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/home/home.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/home/home.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".main__home {\n  height:3070px;\n  background-color: bisque;\n}\n\n.whiteBtn {\n  color: black;\n  padding: .35rem .75rem;\n  border: 1px solid white;\n  background-color: white;\n  border-radius: 2rem;\n}\n.whiteBtn:hover {\n  background-color: rgb(227, 227, 227);\n}\n.blackBtn {\n  color: white;\n  padding: .35rem .75rem;\n  border: 1px solid white;\n  background-color: black;\n  border-radius: 2rem;\n}\n.blackBtn:hover {\n  background-color: rgb(46, 46, 46);\n}", "",{"version":3,"sources":["webpack://./src/home/home.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,wBAAwB;AAC1B;;AAEA;EACE,YAAY;EACZ,sBAAsB;EACtB,uBAAuB;EACvB,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,oCAAoC;AACtC;AACA;EACE,YAAY;EACZ,sBAAsB;EACtB,uBAAuB;EACvB,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,iCAAiC;AACnC","sourcesContent":[".main__home {\n  height:3070px;\n  background-color: bisque;\n}\n\n.whiteBtn {\n  color: black;\n  padding: .35rem .75rem;\n  border: 1px solid white;\n  background-color: white;\n  border-radius: 2rem;\n}\n.whiteBtn:hover {\n  background-color: rgb(227, 227, 227);\n}\n.blackBtn {\n  color: white;\n  padding: .35rem .75rem;\n  border: 1px solid white;\n  background-color: black;\n  border-radius: 2rem;\n}\n.blackBtn:hover {\n  background-color: rgb(46, 46, 46);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/menu/menu.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/menu/menu.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".main__menu {\n  color: blue;\n}\n", "",{"version":3,"sources":["webpack://./src/menu/menu.css"],"names":[],"mappings":"AAAA;EACE,WAAW;AACb","sourcesContent":[".main__menu {\n  color: blue;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/papaRewards/papaRewards.css":
/*!*******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/papaRewards/papaRewards.css ***!
  \*******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".main__papaRewards {\n  color: orange;\n}\n", "",{"version":3,"sources":["webpack://./src/papaRewards/papaRewards.css"],"names":[],"mappings":"AAAA;EACE,aAAa;AACf","sourcesContent":[".main__papaRewards {\n  color: orange;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/specials/specials.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/specials/specials.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".main__specials {\n  color: purple;\n}\n", "",{"version":3,"sources":["webpack://./src/specials/specials.css"],"names":[],"mappings":"AAAA;EACE,aAAa;AACf","sourcesContent":[".main__specials {\n  color: purple;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! assets/chevron-down.svg */ "./src/assets/chevron-down.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\n:root {\n  height: 100vh;\n  font-size: 16px;\n  --color0: rgb(209, 209, 209);\n  --color1: white;\n  --color2: black;\n  --color3: #38a575;\n  --color4: hsl(355, 68%, 48%);\n  --color5: rgb(230, 230, 230);\n  --color6: rgb(46, 46, 46);\n  --color7: rgb(98, 98, 98);\n  --mainFont: \"Oswald\", sans-serif;\n  --secondaryFont: Helvetica, Arial, sans-serif;\n}\n\n/* make these items responsive */\nimg,\npicture,\nsvg,\nvideo {\n  display: block;\n  max-width: 100%;\n}\n\n/* make the form elements inherit font properties the way everything else does */\ninput,\ntextarea,\nbutton,\nselect {\n  font: inherit;\n}\n\nbody {\n  min-height: 100%;\n  font-family: var(--mainFont);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  position: relative;\n}\n/*******************************************************************************************/\n\nul {\n  margin: 0;\n  padding: 0;\n  height: 100%;\n}\nli {\n  list-style: none;\n  height: 100%;\n}\na {\n  text-decoration: none;\n}\n.navContainer {\n  width: 100%;\n  height: 128px;\n  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n}\n.navContainer ul,\n.navContainer li,\n.navContainer a {\n  display: flex;\n  align-items: center;\n}\n.topNav {\n  height: 50%;\n}\n.topNav li {\n  margin: 0.5rem;\n}\n.topNav li:first-child {\n  margin-right: auto;\n}\n.topNav a {\n  height: 50%;\n  color: var(--color2);\n  padding: 0.5rem;\n  border-radius: 0.3rem;\n}\n.startYourOrder > a,\n.language > a,\n.login > a {\n  gap: 0.25rem;\n  transition: background-color 150ms ease-in;\n}\n.startYourOrder > a:hover,\n.language > a:hover,\n.login > a:hover {\n  background-color: var(--color5);\n  z-index: 100;\n}\n.startYourOrder > a:focus,\n.language > a:focus,\n.login > a:focus {\n  background-color: var(--color5);\n}\n.signUp > a {\n  border-radius: 1rem;\n  border: 1px solid var(--color2);\n  background-color: var(--color2);\n  color: var(--color1);\n}\n.logo {\n  height: 1.6rem;\n  padding-left: 4vw;\n}\n.logoIMG {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  cursor: pointer;\n}\n.filtered {\n  filter: brightness(0) saturate(100%) invert(29%) sepia(67%) saturate(5198%)\n    hue-rotate(341deg) brightness(83%) contrast(94%);\n  /* https://stackoverflow.com/questions/22252472/how-can-i-change-the-color-of-an-svg-element*/\n}\n.signUp > a:hover {\n  background-color: var(--color6);\n}\n.signUp {\n  margin-right: 4vw !important;\n}\n\n/*language popup styling*/\n.language {\n  position: relative;\n}\n.language-popup {\n  z-index: 99;\n  opacity: 1;\n  position: absolute;\n  background-color: var(--color1);\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,\n    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,\n    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;\n  top: 100%;\n  right: -104px;\n  font-size: 1rem;\n  text-transform: none;\n  color: black;\n  height: 148px;\n  width: 288px;\n  padding: 1rem 1.75rem 1.5rem 1.75rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n}\n.language-popup::after {\n  position: absolute;\n  content: \"\";\n  width: 20px;\n  height: 20px;\n  background-color: var(--color1);\n  transform: rotate(55deg) skew(20deg);\n  top: -0.1rem;\n  left: 45%;\n}\n\n.language-popup h3 {\n  display: inline-block;\n  width: 100%;\n  font-size: 1.15rem;\n  padding-bottom: 0.55rem;\n  margin-bottom: 1rem;\n  border-bottom: 1px solid var(--color0);\n}\n.language-popup ul {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n}\n.language-popup li {\n  margin: 0;\n  width: 100%;\n}\n.language-popup a {\n  font-family: var(--secondaryFont);\n  color: var(--color3);\n  height: 100%;\n  width: 100%;\n  font-size: 0.75rem;\n}\n.language-popup a:hover {\n  text-decoration: underline;\n}\n\n/*login popup styling NEEDS WORK*/\n.login {\n  position: relative;\n}\n.login-popup {\n  z-index: 99;\n  opacity: 1;\n  position: absolute;\n  background-color: var(--color1);\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,\n    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,\n    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;\n  top: 100%;\n  right: 0;\n  text-transform: none;\n  color: black;\n  height: 340px;\n  width: 288px;\n  padding: 1rem 1.75rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.login-popup::after {\n  position: absolute;\n  content: \"\";\n  width: 20px;\n  height: 20px;\n  background-color: var(--color1);\n  transform: rotate(55deg) skew(20deg);\n  top: -0.1rem;\n  left: 80.5%;\n}\n.login-popup h3 {\n  display: inline-block;\n  width: 100%;\n  font-size: 1.15rem;\n  padding-bottom: 0.55rem;\n  border-bottom: 1px solid var(--color0);\n}\n.loginForm {\n  display: flex;\n  flex-direction: column;\n  gap: 1.15rem;\n}\n.loginFormSection {\n  display: flex;\n  flex-direction: column;\n}\n.loginFormSection label {\n  font-size: 0.75rem;\n  font-family: var(--secondaryFont);\n  color: var(--color7);\n}\n.loginForm input:not([type=\"checkbox\"]) {\n  outline: none;\n  border: 1px solid var(--color7);\n  border-radius: 6px;\n  padding: 0.25rem;\n  margin-top: 4px;\n}\n.loginForm input:not([type=\"checkbox\"]):focus {\n  border: 1px solid var(--color3);\n}\n.loginFormSection:nth-child(2) {\n  position: relative;\n}\n.loginFormSection:nth-child(2) a {\n  position: absolute;\n  left: 38.5%;\n  bottom: 18px;\n}\n.loginFormSection:nth-child(3) label:first-child {\n  position: absolute;\n  font-size: 0.85rem;\n  left: 50px;\n  bottom: 121px;\n}\n.rememberMe {\n  accent-color: var(--color3);\n  width: 1rem;\n  height: 1rem;\n}\n.rememberMe + label {\n  margin-top: 4px;\n}\n.loginFormSection:nth-child(4) button {\n  text-transform: uppercase;\n  font-size: 0.9rem;\n  color: var(--color1);\n  background-color: var(--color2);\n  border: 1px solid var(--color2);\n  padding: 0.25rem 0.65rem;\n  border-radius: 1rem;\n  width: fit-content;\n  margin-bottom: 1rem;\n  cursor: pointer;\n}\n.loginFormSection:nth-child(4) button:hover {\n  background-color: var(--color6);\n}\n.loginFormSection:nth-child(4) div {\n  display: flex;\n  font-family: var(--secondaryFont);\n  color: var(--color7);\n  font-size: 0.75rem;\n}\n.loginFormSection:nth-child(4) a {\n  display: inline-block;\n  height: fit-content;\n  width: fit-content;\n  padding: 0;\n  margin-left: 0.5rem;\n}\n\n.login-popup a {\n  font-family: var(--secondaryFont);\n  color: var(--color3);\n  height: 100%;\n  width: 100%;\n  font-size: 0.75rem;\n}\n.login-popup a:hover {\n  text-decoration: underline;\n}\n\n/*for language AND login popups*/\n.hide-popup {\n  opacity: 0;\n  z-index: 1;\n}\n/*Hamburger Mobile Menu styling hidden on desktop*/\n.mobileMenu {\n  display: none;\n}\n.pageWrapper {\n  height: 100vh;\n}\n.pageOverlay {\n  display: none;\n}\n\n/*******************************************************************************************/\n\n.bottomNav {\n  height: 50%;\n  border-top: 1px solid var(--color0);\n  border-bottom: 1px solid var(--color0);\n}\n.bottomNav li {\n  margin: 0rem;\n}\n.bottomNav li:nth-child(3) {\n  margin-right: auto;\n}\n.bottomNav a {\n  color: var(--color2);\n}\n.menu > a,\n.specials > a,\n.papaRewards > a {\n  height: 100%;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n  font-size: larger;\n}\n.menu > a:hover,\n.specials > a:hover,\n.papaRewards > a:hover {\n  border-bottom: 4px solid var(--color3);\n  padding-top: 3.9px; /*stops text from moving upwards when border is added on hover*/\n}\n.active {\n  border-bottom: 4px solid var(--color3);\n  padding-top: 3.9px;\n}\n.menu {\n  padding-left: 4vw;\n}\n.login2 > a {\n  padding: 0.5rem;\n  border-radius: 2rem;\n  color: var(--color1);\n  background-color: var(--color2);\n  border: 1px solid var(--color2);\n  margin-right: 0.5rem;\n  font-size: 0.8rem;\n}\n.promoCodeForm {\n  position: relative;\n  z-index: 50;\n}\n.promoCodeForm > input {\n  padding: 0.35rem;\n  border: 1px solid var(--color2);\n}\n.promoCodeForm > input:first-child {\n  border-top-left-radius: 0.3rem;\n  border-bottom-left-radius: 0.3rem;\n  border-right: none;\n  position: relative;\n}\n.promoCodeForm > input:first-child:focus {\n  border-color: var(--color3);\n  outline: none;\n}\n.promoCodeForm > input:first-child::placeholder {\n  font-style: italic;\n  font-family: Cambria, Georgia, Times, \"Times New Roman\", serif;\n  font-size: smaller;\n  position: absolute;\n  top: 0.6rem;\n}\n\n.promoCodeForm > input:first-child {\n  border-top-left-radius: 0.3rem;\n  border-bottom-left-radius: 0.3rem;\n  margin-left: 1rem;\n}\n\n.promoCodeForm > input:nth-child(2) {\n  border-top-right-radius: 0.3rem;\n  border-bottom-right-radius: 0.3rem;\n  background-color: var(--color2);\n  color: var(--color1);\n  position: relative;\n  right: 4px;\n  margin-right: 1rem;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\n\n.cart {\n  border-left: 1px solid var(--color0);\n  padding: 1rem 0rem 1rem 1rem;\n  margin-right: 4vw !important;\n  cursor: pointer;\n}\n.cart > svg {\n  margin-right: 0.25rem;\n}\n.cart > span {\n  color: var(--color4);\n  font-size: 1.375rem;\n  position: relative;\n}\n.cart > span::before {\n  content: \"$\";\n  color: var(--color4);\n  font-size: 1rem;\n  position: relative;\n  bottom: 5px;\n}\n.login2 > a:hover,\n.promoCodeForm input[type=\"submit\"]:hover {\n  background-color: var(--color6);\n}\n\n/*******************************************************************************************/\n\nfooter {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  border-top: var(--color0) 1px solid;\n  padding: 1.5rem max(4rem, 8vw);\n}\n.footerContentWidthControl {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n.footerLinks {\n  width: calc(100% - min(600px, 42%));\n  display: flex;\n  align-items: baseline;\n}\n.footerLinks > div {\n  margin-right: auto;\n}\nfooter a {\n  color: var(--color7);\n  font-size: 0.75rem;\n  text-transform: none;\n  font-family: var(--secondaryFont);\n  letter-spacing: 0px;\n}\nfooter a:hover {\n  text-decoration: underline;\n}\n.footerLinks h4 {\n  color: var(--color2);\n  font-size: 0.9rem;\n  text-transform: none;\n}\n.franchise {\n  width: min(600px, 42%);\n}\n.franchise > a {\n  width: 100%;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  text-transform: none;\n  color: black;\n  gap: 1.5rem;\n  border: 1px solid var(--color0);\n  border-radius: 0.5rem;\n  padding: 1rem;\n  transition: box-shadow 150ms ease-in;\n}\n.franchise a {\n  font-family: var(--mainFont);\n  font-size: 1.25rem;\n}\n.franchise a:hover {\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n  text-decoration: none;\n}\n.footerBottom {\n  margin-top: 2rem;\n  padding-top: 1.75rem;\n  border-top: 1px solid var(--color0);\n  /* background-color: pink; */\n  display: flex;\n  align-items: baseline;\n}\n.countrySelect {\n  width: fit-content;\n  font-family: var(--secondaryFont);\n  font-size: 0.75rem;\n  padding: 0.5rem;\n  border-radius: 5px;\n  margin-right: 1rem;\n}\n.countrySelect:focus {\n  border: 1px solid var(--color3);\n  outline: none;\n}\n.legalLinks {\n  display: flex;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n  margin: 0.5rem auto 1rem 0rem;\n}\n.legalLinks li {\n  /* background-color: aquamarine; */\n  display: flex;\n}\n.footerBottom {\n  position: relative;\n}\n.socialMediaLinkIcons {\n  position: relative;\n  right: 0;\n  top: 6px;\n  /* align-self: baseline; */\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-left: 1rem;\n  /* background-color: #38a575; */\n}\n.socialMediaLinkIcons svg {\n  transition: color 400ms ease-in-out;\n}\n.socialMediaLinkIcons svg:hover {\n  color: black;\n}\n\n/*******************************************************************************************/\n\n/* When the browser is 833px or wider */\n@media screen and (min-width: 833px) {\n  .mobile {\n    display: none !important;\n    /* background-color: green; */\n  }\n  .desktop {\n    display: flex !important;\n  }\n}\n/* When the browser is less than 833px wide */\n@media screen and (max-width: 833px) {\n  .mobile {\n    display: flex !important;\n  }\n  .desktop {\n    display: none !important;\n  }\n  .navContainer {\n    height: 114px;\n  }\n  .topNav {\n    height: 55%;\n  }\n  .bottomNav {\n    height: 45%;\n  }\n  .menu > a,\n  .specials > a,\n  .papaRewards > a {\n    font-size: 1rem;\n  }\n  .menu > a:hover,\n  .specials > a:hover,\n  .papaRewards > a:hover {\n    padding-top: 3.7px; /*stops text from moving upwards when border is added on hover*/\n  }\n  .active {\n    padding-top: 3.7px;\n  }\n  .menu {\n    padding-left: 0rem;\n  }\n  .logo {\n    height: 1.6rem;\n    padding-left: 0rem;\n  }\n  .logo img {\n    transform: scale(0.75) translateX(-21px);\n  }\n  footer {\n    padding: 1.5rem;\n  }\n  .footerContentWidthControl {\n    flex-direction: column;\n  }\n  .footerLinks {\n    width: 100%;\n  }\n  .franchise {\n    width: 100%;\n    padding-top: 1.5rem;\n  }\n  .legalLinks {\n    margin-top: 1.5rem;\n  }\n  .socialMediaLinkIcons {\n    align-self: flex-start;\n    margin-left: 0;\n  }\n  /***************** Hamburger*/\n  .pageWrapper {\n    transition: transform 500ms;\n  }\n  .slidePageWrapperL {\n    animation: slidePageL 500ms forwards;\n  }\n  @keyframes slidePageL {\n    to {\n      transform: translateX(-85%);\n    }\n  }\n  .slidPage {\n    transform: translateX(-85%);\n  }\n  .slidePageWrapperR {\n    animation: slidePageR 500ms forwards;\n  }\n  @keyframes slidePageR {\n    to {\n      transform: translateX(0);\n    }\n  }\n\n  .showMobileMenu {\n    display: block;\n    position: fixed;\n    width: 85%;\n    height: 100%;\n    background-color: #e6e6e6;\n    z-index: 500;\n    right: 0;\n    transform: translateX(100%);\n  }\n  .slideMobileMenuL {\n    animation: slideMenuL 500ms forwards;\n  }\n  @keyframes slideMenuL {\n    to {\n      transform: translateX(0);\n    }\n  }\n  .slidMenu {\n    transform: translateX(0);\n  }\n  .slideMobileMenuR {\n    animation: slideMenuR 500ms forwards;\n  }\n  @keyframes slideMenuR {\n    to {\n      transform: translateX(100%);\n    }\n  }\n\n  .darkenOverlay {\n    display: block;\n    position: absolute;\n    inset: 0;\n    background-color: var(--color7);\n    opacity: 0.5;\n    z-index: 5000;\n  }\n\n  .mobileMenu ul {\n    /* background-color: chartreuse; */\n    height: fit-content;\n    margin: 1.25rem 1.75rem;\n  }\n  .mobileMenu li {\n    /* background-color: pink; */\n    padding: 1rem 0rem;\n  }\n  .mobileMenu li:not(:last-child) {\n    border-top: 1px solid var(--color0);\n  }\n  .mobileMenu a {\n    /* background-color: orange; */\n    color: var(--color2);\n    padding: 0.3rem 0.5rem;\n    border-radius: 1rem;\n  }\n  .mobileSignUp {\n    background-color: var(--color4);\n    color: white !important;\n    transition: background-color 150ms ease-in;\n  }\n  .mobileSignUp:hover {\n    background-color: hsl(355, 68%, 28%);\n  }\n  .mobileMenu .promoCodeForm {\n    display: block;\n  }\n  .mobileMenu .promoCodeForm input:first-child {\n    margin-left: 0;\n    width: clamp(160px, 70%, 500px);\n  }\n\n  /***************** End of  Styling Hamburger*/\n}\n/* When the browser is less than 639px wide */\n@media screen and (max-width: 639px) {\n  .ourCompany ul,\n  .ourPizza ul,\n  .help ul {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: flex-start;\n    gap: 1px;\n    max-height: fit-content;\n    transition: transform 500ms;\n    overflow: hidden;\n  }\n  .ourCompany li,\n  .ourPizza li,\n  .help li {\n    animation: dropdown 400ms ease-in-out forwards;\n  }\n\n  @keyframes dropdown {\n    from {\n      transform: translateY(-120px);\n    }\n    to {\n      transform: translateY(0px);\n    }\n  }\n\n  .hiddenOnSmallScreens {\n    display: none !important;\n  }\n  .footerLinks {\n    flex-direction: column;\n  }\n  .footerLinks h4 {\n    margin: 0.75rem 0rem 0.25rem 0rem;\n    padding: 0.25rem 0rem;\n    border-bottom: 1px solid var(--color0);\n  }\n  .ourCompany,\n  .ourPizza,\n  .help {\n    width: 100%;\n    height: fit-content;\n    position: relative;\n    padding-bottom: 0.5rem;\n    margin-top: 2px;\n  }\n\n  .footerLinks h4::after {\n    content: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    position: absolute;\n    right: -5px;\n    top: 1rem;\n  }\n  .footerLinks li {\n    height: auto;\n  }\n}\n/*******************************************************************************************/\n/*home.css*/\n\n/*******************************************************************************************/\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AACA;;;EAGE,sBAAsB;AACxB;;AAEA;EACE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,eAAe;EACf,4BAA4B;EAC5B,eAAe;EACf,eAAe;EACf,iBAAiB;EACjB,4BAA4B;EAC5B,4BAA4B;EAC5B,yBAAyB;EACzB,yBAAyB;EACzB,gCAAgC;EAChC,6CAA6C;AAC/C;;AAEA,gCAAgC;AAChC;;;;EAIE,cAAc;EACd,eAAe;AACjB;;AAEA,gFAAgF;AAChF;;;;EAIE,aAAa;AACf;;AAEA;EACE,gBAAgB;EAChB,4BAA4B;EAC5B,yBAAyB;EACzB,qBAAqB;EACrB,kBAAkB;AACpB;AACA,4FAA4F;;AAE5F;EACE,SAAS;EACT,UAAU;EACV,YAAY;AACd;AACA;EACE,gBAAgB;EAChB,YAAY;AACd;AACA;EACE,qBAAqB;AACvB;AACA;EACE,WAAW;EACX,aAAa;EACb,iDAAiD;AACnD;AACA;;;EAGE,aAAa;EACb,mBAAmB;AACrB;AACA;EACE,WAAW;AACb;AACA;EACE,cAAc;AAChB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,WAAW;EACX,oBAAoB;EACpB,eAAe;EACf,qBAAqB;AACvB;AACA;;;EAGE,YAAY;EACZ,0CAA0C;AAC5C;AACA;;;EAGE,+BAA+B;EAC/B,YAAY;AACd;AACA;;;EAGE,+BAA+B;AACjC;AACA;EACE,mBAAmB;EACnB,+BAA+B;EAC/B,+BAA+B;EAC/B,oBAAoB;AACtB;AACA;EACE,cAAc;EACd,iBAAiB;AACnB;AACA;EACE,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,eAAe;AACjB;AACA;EACE;oDACkD;EAClD,6FAA6F;AAC/F;AACA;EACE,+BAA+B;AACjC;AACA;EACE,4BAA4B;AAC9B;;AAEA,yBAAyB;AACzB;EACE,kBAAkB;AACpB;AACA;EACE,WAAW;EACX,UAAU;EACV,kBAAkB;EAClB,+BAA+B;EAC/B;;uEAEqE;EACrE,SAAS;EACT,aAAa;EACb,eAAe;EACf,oBAAoB;EACpB,YAAY;EACZ,aAAa;EACb,YAAY;EACZ,oCAAoC;EACpC,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,uBAAuB;AACzB;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,WAAW;EACX,YAAY;EACZ,+BAA+B;EAC/B,oCAAoC;EACpC,YAAY;EACZ,SAAS;AACX;;AAEA;EACE,qBAAqB;EACrB,WAAW;EACX,kBAAkB;EAClB,uBAAuB;EACvB,mBAAmB;EACnB,sCAAsC;AACxC;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,WAAW;AACb;AACA;EACE,SAAS;EACT,WAAW;AACb;AACA;EACE,iCAAiC;EACjC,oBAAoB;EACpB,YAAY;EACZ,WAAW;EACX,kBAAkB;AACpB;AACA;EACE,0BAA0B;AAC5B;;AAEA,iCAAiC;AACjC;EACE,kBAAkB;AACpB;AACA;EACE,WAAW;EACX,UAAU;EACV,kBAAkB;EAClB,+BAA+B;EAC/B;;uEAEqE;EACrE,SAAS;EACT,QAAQ;EACR,oBAAoB;EACpB,YAAY;EACZ,aAAa;EACb,YAAY;EACZ,qBAAqB;EACrB,aAAa;EACb,sBAAsB;EACtB,YAAY;AACd;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,WAAW;EACX,YAAY;EACZ,+BAA+B;EAC/B,oCAAoC;EACpC,YAAY;EACZ,WAAW;AACb;AACA;EACE,qBAAqB;EACrB,WAAW;EACX,kBAAkB;EAClB,uBAAuB;EACvB,sCAAsC;AACxC;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;AACd;AACA;EACE,aAAa;EACb,sBAAsB;AACxB;AACA;EACE,kBAAkB;EAClB,iCAAiC;EACjC,oBAAoB;AACtB;AACA;EACE,aAAa;EACb,+BAA+B;EAC/B,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;AACjB;AACA;EACE,+BAA+B;AACjC;AACA;EACE,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;AACd;AACA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,UAAU;EACV,aAAa;AACf;AACA;EACE,2BAA2B;EAC3B,WAAW;EACX,YAAY;AACd;AACA;EACE,eAAe;AACj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;AACA;EACE,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,QAAQ;EACR,QAAQ;EACR,0BAA0B;EAC1B,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,iBAAiB;EACjB,+BAA+B;AACjC;AACA;EACE,mCAAmC;AACrC;AACA;EACE,YAAY;AACd;;AAEA,4FAA4F;;AAE5F,uCAAuC;AACvC;EACE;IACE,wBAAwB;IACxB,6BAA6B;EAC/B;EACA;IACE,wBAAwB;EAC1B;AACF;AACA,6CAA6C;AAC7C;EACE;IACE,wBAAwB;EAC1B;EACA;IACE,wBAAwB;EAC1B;EACA;IACE,aAAa;EACf;EACA;IACE,WAAW;EACb;EACA;IACE,WAAW;EACb;EACA;;;IAGE,eAAe;EACjB;EACA;;;IAGE,kBAAkB,EAAE,+DAA+D;EACrF;EACA;IACE,kBAAkB;EACpB;EACA;IACE,kBAAkB;EACpB;EACA;IACE,cAAc;IACd,kBAAkB;EACpB;EACA;IACE,wCAAwC;EAC1C;EACA;IACE,eAAe;EACjB;EACA;IACE,sBAAsB;EACxB;EACA;IACE,WAAW;EACb;EACA;IACE,WAAW;IACX,mBAAmB;EACrB;EACA;IACE,kBAAkB;EACpB;EACA;IACE,sBAAsB;IACtB,cAAc;EAChB;EACA,6BAA6B;EAC7B;IACE,2BAA2B;EAC7B;EACA;IACE,oCAAoC;EACtC;EACA;IACE;MACE,2BAA2B;IAC7B;EACF;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,oCAAoC;EACtC;EACA;IACE;MACE,wBAAwB;IAC1B;EACF;;EAEA;IACE,cAAc;IACd,eAAe;IACf,UAAU;IACV,YAAY;IACZ,yBAAyB;IACzB,YAAY;IACZ,QAAQ;IACR,2BAA2B;EAC7B;EACA;IACE,oCAAoC;EACtC;EACA;IACE;MACE,wBAAwB;IAC1B;EACF;EACA;IACE,wBAAwB;EAC1B;EACA;IACE,oCAAoC;EACtC;EACA;IACE;MACE,2BAA2B;IAC7B;EACF;;EAEA;IACE,cAAc;IACd,kBAAkB;IAClB,QAAQ;IACR,+BAA+B;IAC/B,YAAY;IACZ,aAAa;EACf;;EAEA;IACE,kCAAkC;IAClC,mBAAmB;IACnB,uBAAuB;EACzB;EACA;IACE,4BAA4B;IAC5B,kBAAkB;EACpB;EACA;IACE,mCAAmC;EACrC;EACA;IACE,8BAA8B;IAC9B,oBAAoB;IACpB,sBAAsB;IACtB,mBAAmB;EACrB;EACA;IACE,+BAA+B;IAC/B,uBAAuB;IACvB,0CAA0C;EAC5C;EACA;IACE,oCAAoC;EACtC;EACA;IACE,cAAc;EAChB;EACA;IACE,cAAc;IACd,+BAA+B;EACjC;;EAEA,6CAA6C;AAC/C;AACA,6CAA6C;AAC7C;EACE;;;IAGE,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,2BAA2B;IAC3B,QAAQ;IACR,uBAAuB;IACvB,2BAA2B;IAC3B,gBAAgB;EAClB;EACA;;;IAGE,8CAA8C;EAChD;;EAEA;IACE;MACE,6BAA6B;IAC/B;IACA;MACE,0BAA0B;IAC5B;EACF;;EAEA;IACE,wBAAwB;EAC1B;EACA;IACE,sBAAsB;EACxB;EACA;IACE,iCAAiC;IACjC,qBAAqB;IACrB,sCAAsC;EACxC;EACA;;;IAGE,WAAW;IACX,mBAAmB;IACnB,kBAAkB;IAClB,sBAAsB;IACtB,eAAe;EACjB;;EAEA;IACE,gDAAqC;IACrC,kBAAkB;IAClB,WAAW;IACX,SAAS;EACX;EACA;IACE,YAAY;EACd;AACF;AACA,4FAA4F;AAC5F,WAAW;;AAEX,4FAA4F","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap\");\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\n:root {\n  height: 100vh;\n  font-size: 16px;\n  --color0: rgb(209, 209, 209);\n  --color1: white;\n  --color2: black;\n  --color3: #38a575;\n  --color4: hsl(355, 68%, 48%);\n  --color5: rgb(230, 230, 230);\n  --color6: rgb(46, 46, 46);\n  --color7: rgb(98, 98, 98);\n  --mainFont: \"Oswald\", sans-serif;\n  --secondaryFont: Helvetica, Arial, sans-serif;\n}\n\n/* make these items responsive */\nimg,\npicture,\nsvg,\nvideo {\n  display: block;\n  max-width: 100%;\n}\n\n/* make the form elements inherit font properties the way everything else does */\ninput,\ntextarea,\nbutton,\nselect {\n  font: inherit;\n}\n\nbody {\n  min-height: 100%;\n  font-family: var(--mainFont);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  position: relative;\n}\n/*******************************************************************************************/\n\nul {\n  margin: 0;\n  padding: 0;\n  height: 100%;\n}\nli {\n  list-style: none;\n  height: 100%;\n}\na {\n  text-decoration: none;\n}\n.navContainer {\n  width: 100%;\n  height: 128px;\n  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n}\n.navContainer ul,\n.navContainer li,\n.navContainer a {\n  display: flex;\n  align-items: center;\n}\n.topNav {\n  height: 50%;\n}\n.topNav li {\n  margin: 0.5rem;\n}\n.topNav li:first-child {\n  margin-right: auto;\n}\n.topNav a {\n  height: 50%;\n  color: var(--color2);\n  padding: 0.5rem;\n  border-radius: 0.3rem;\n}\n.startYourOrder > a,\n.language > a,\n.login > a {\n  gap: 0.25rem;\n  transition: background-color 150ms ease-in;\n}\n.startYourOrder > a:hover,\n.language > a:hover,\n.login > a:hover {\n  background-color: var(--color5);\n  z-index: 100;\n}\n.startYourOrder > a:focus,\n.language > a:focus,\n.login > a:focus {\n  background-color: var(--color5);\n}\n.signUp > a {\n  border-radius: 1rem;\n  border: 1px solid var(--color2);\n  background-color: var(--color2);\n  color: var(--color1);\n}\n.logo {\n  height: 1.6rem;\n  padding-left: 4vw;\n}\n.logoIMG {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  cursor: pointer;\n}\n.filtered {\n  filter: brightness(0) saturate(100%) invert(29%) sepia(67%) saturate(5198%)\n    hue-rotate(341deg) brightness(83%) contrast(94%);\n  /* https://stackoverflow.com/questions/22252472/how-can-i-change-the-color-of-an-svg-element*/\n}\n.signUp > a:hover {\n  background-color: var(--color6);\n}\n.signUp {\n  margin-right: 4vw !important;\n}\n\n/*language popup styling*/\n.language {\n  position: relative;\n}\n.language-popup {\n  z-index: 99;\n  opacity: 1;\n  position: absolute;\n  background-color: var(--color1);\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,\n    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,\n    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;\n  top: 100%;\n  right: -104px;\n  font-size: 1rem;\n  text-transform: none;\n  color: black;\n  height: 148px;\n  width: 288px;\n  padding: 1rem 1.75rem 1.5rem 1.75rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n}\n.language-popup::after {\n  position: absolute;\n  content: \"\";\n  width: 20px;\n  height: 20px;\n  background-color: var(--color1);\n  transform: rotate(55deg) skew(20deg);\n  top: -0.1rem;\n  left: 45%;\n}\n\n.language-popup h3 {\n  display: inline-block;\n  width: 100%;\n  font-size: 1.15rem;\n  padding-bottom: 0.55rem;\n  margin-bottom: 1rem;\n  border-bottom: 1px solid var(--color0);\n}\n.language-popup ul {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n}\n.language-popup li {\n  margin: 0;\n  width: 100%;\n}\n.language-popup a {\n  font-family: var(--secondaryFont);\n  color: var(--color3);\n  height: 100%;\n  width: 100%;\n  font-size: 0.75rem;\n}\n.language-popup a:hover {\n  text-decoration: underline;\n}\n\n/*login popup styling NEEDS WORK*/\n.login {\n  position: relative;\n}\n.login-popup {\n  z-index: 99;\n  opacity: 1;\n  position: absolute;\n  background-color: var(--color1);\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,\n    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,\n    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;\n  top: 100%;\n  right: 0;\n  text-transform: none;\n  color: black;\n  height: 340px;\n  width: 288px;\n  padding: 1rem 1.75rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.login-popup::after {\n  position: absolute;\n  content: \"\";\n  width: 20px;\n  height: 20px;\n  background-color: var(--color1);\n  transform: rotate(55deg) skew(20deg);\n  top: -0.1rem;\n  left: 80.5%;\n}\n.login-popup h3 {\n  display: inline-block;\n  width: 100%;\n  font-size: 1.15rem;\n  padding-bottom: 0.55rem;\n  border-bottom: 1px solid var(--color0);\n}\n.loginForm {\n  display: flex;\n  flex-direction: column;\n  gap: 1.15rem;\n}\n.loginFormSection {\n  display: flex;\n  flex-direction: column;\n}\n.loginFormSection label {\n  font-size: 0.75rem;\n  font-family: var(--secondaryFont);\n  color: var(--color7);\n}\n.loginForm input:not([type=\"checkbox\"]) {\n  outline: none;\n  border: 1px solid var(--color7);\n  border-radius: 6px;\n  padding: 0.25rem;\n  margin-top: 4px;\n}\n.loginForm input:not([type=\"checkbox\"]):focus {\n  border: 1px solid var(--color3);\n}\n.loginFormSection:nth-child(2) {\n  position: relative;\n}\n.loginFormSection:nth-child(2) a {\n  position: absolute;\n  left: 38.5%;\n  bottom: 18px;\n}\n.loginFormSection:nth-child(3) label:first-child {\n  position: absolute;\n  font-size: 0.85rem;\n  left: 50px;\n  bottom: 121px;\n}\n.rememberMe {\n  accent-color: var(--color3);\n  width: 1rem;\n  height: 1rem;\n}\n.rememberMe + label {\n  margin-top: 4px;\n}\n.loginFormSection:nth-child(4) button {\n  text-transform: uppercase;\n  font-size: 0.9rem;\n  color: var(--color1);\n  background-color: var(--color2);\n  border: 1px solid var(--color2);\n  padding: 0.25rem 0.65rem;\n  border-radius: 1rem;\n  width: fit-content;\n  margin-bottom: 1rem;\n  cursor: pointer;\n}\n.loginFormSection:nth-child(4) button:hover {\n  background-color: var(--color6);\n}\n.loginFormSection:nth-child(4) div {\n  display: flex;\n  font-family: var(--secondaryFont);\n  color: var(--color7);\n  font-size: 0.75rem;\n}\n.loginFormSection:nth-child(4) a {\n  display: inline-block;\n  height: fit-content;\n  width: fit-content;\n  padding: 0;\n  margin-left: 0.5rem;\n}\n\n.login-popup a {\n  font-family: var(--secondaryFont);\n  color: var(--color3);\n  height: 100%;\n  width: 100%;\n  font-size: 0.75rem;\n}\n.login-popup a:hover {\n  text-decoration: underline;\n}\n\n/*for language AND login popups*/\n.hide-popup {\n  opacity: 0;\n  z-index: 1;\n}\n/*Hamburger Mobile Menu styling hidden on desktop*/\n.mobileMenu {\n  display: none;\n}\n.pageWrapper {\n  height: 100vh;\n}\n.pageOverlay {\n  display: none;\n}\n\n/*******************************************************************************************/\n\n.bottomNav {\n  height: 50%;\n  border-top: 1px solid var(--color0);\n  border-bottom: 1px solid var(--color0);\n}\n.bottomNav li {\n  margin: 0rem;\n}\n.bottomNav li:nth-child(3) {\n  margin-right: auto;\n}\n.bottomNav a {\n  color: var(--color2);\n}\n.menu > a,\n.specials > a,\n.papaRewards > a {\n  height: 100%;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n  font-size: larger;\n}\n.menu > a:hover,\n.specials > a:hover,\n.papaRewards > a:hover {\n  border-bottom: 4px solid var(--color3);\n  padding-top: 3.9px; /*stops text from moving upwards when border is added on hover*/\n}\n.active {\n  border-bottom: 4px solid var(--color3);\n  padding-top: 3.9px;\n}\n.menu {\n  padding-left: 4vw;\n}\n.login2 > a {\n  padding: 0.5rem;\n  border-radius: 2rem;\n  color: var(--color1);\n  background-color: var(--color2);\n  border: 1px solid var(--color2);\n  margin-right: 0.5rem;\n  font-size: 0.8rem;\n}\n.promoCodeForm {\n  position: relative;\n  z-index: 50;\n}\n.promoCodeForm > input {\n  padding: 0.35rem;\n  border: 1px solid var(--color2);\n}\n.promoCodeForm > input:first-child {\n  border-top-left-radius: 0.3rem;\n  border-bottom-left-radius: 0.3rem;\n  border-right: none;\n  position: relative;\n}\n.promoCodeForm > input:first-child:focus {\n  border-color: var(--color3);\n  outline: none;\n}\n.promoCodeForm > input:first-child::placeholder {\n  font-style: italic;\n  font-family: Cambria, Georgia, Times, \"Times New Roman\", serif;\n  font-size: smaller;\n  position: absolute;\n  top: 0.6rem;\n}\n\n.promoCodeForm > input:first-child {\n  border-top-left-radius: 0.3rem;\n  border-bottom-left-radius: 0.3rem;\n  margin-left: 1rem;\n}\n\n.promoCodeForm > input:nth-child(2) {\n  border-top-right-radius: 0.3rem;\n  border-bottom-right-radius: 0.3rem;\n  background-color: var(--color2);\n  color: var(--color1);\n  position: relative;\n  right: 4px;\n  margin-right: 1rem;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\n\n.cart {\n  border-left: 1px solid var(--color0);\n  padding: 1rem 0rem 1rem 1rem;\n  margin-right: 4vw !important;\n  cursor: pointer;\n}\n.cart > svg {\n  margin-right: 0.25rem;\n}\n.cart > span {\n  color: var(--color4);\n  font-size: 1.375rem;\n  position: relative;\n}\n.cart > span::before {\n  content: \"$\";\n  color: var(--color4);\n  font-size: 1rem;\n  position: relative;\n  bottom: 5px;\n}\n.login2 > a:hover,\n.promoCodeForm input[type=\"submit\"]:hover {\n  background-color: var(--color6);\n}\n\n/*******************************************************************************************/\n\nfooter {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  border-top: var(--color0) 1px solid;\n  padding: 1.5rem max(4rem, 8vw);\n}\n.footerContentWidthControl {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n.footerLinks {\n  width: calc(100% - min(600px, 42%));\n  display: flex;\n  align-items: baseline;\n}\n.footerLinks > div {\n  margin-right: auto;\n}\nfooter a {\n  color: var(--color7);\n  font-size: 0.75rem;\n  text-transform: none;\n  font-family: var(--secondaryFont);\n  letter-spacing: 0px;\n}\nfooter a:hover {\n  text-decoration: underline;\n}\n.footerLinks h4 {\n  color: var(--color2);\n  font-size: 0.9rem;\n  text-transform: none;\n}\n.franchise {\n  width: min(600px, 42%);\n}\n.franchise > a {\n  width: 100%;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  text-transform: none;\n  color: black;\n  gap: 1.5rem;\n  border: 1px solid var(--color0);\n  border-radius: 0.5rem;\n  padding: 1rem;\n  transition: box-shadow 150ms ease-in;\n}\n.franchise a {\n  font-family: var(--mainFont);\n  font-size: 1.25rem;\n}\n.franchise a:hover {\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n  text-decoration: none;\n}\n.footerBottom {\n  margin-top: 2rem;\n  padding-top: 1.75rem;\n  border-top: 1px solid var(--color0);\n  /* background-color: pink; */\n  display: flex;\n  align-items: baseline;\n}\n.countrySelect {\n  width: fit-content;\n  font-family: var(--secondaryFont);\n  font-size: 0.75rem;\n  padding: 0.5rem;\n  border-radius: 5px;\n  margin-right: 1rem;\n}\n.countrySelect:focus {\n  border: 1px solid var(--color3);\n  outline: none;\n}\n.legalLinks {\n  display: flex;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n  margin: 0.5rem auto 1rem 0rem;\n}\n.legalLinks li {\n  /* background-color: aquamarine; */\n  display: flex;\n}\n.footerBottom {\n  position: relative;\n}\n.socialMediaLinkIcons {\n  position: relative;\n  right: 0;\n  top: 6px;\n  /* align-self: baseline; */\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-left: 1rem;\n  /* background-color: #38a575; */\n}\n.socialMediaLinkIcons svg {\n  transition: color 400ms ease-in-out;\n}\n.socialMediaLinkIcons svg:hover {\n  color: black;\n}\n\n/*******************************************************************************************/\n\n/* When the browser is 833px or wider */\n@media screen and (min-width: 833px) {\n  .mobile {\n    display: none !important;\n    /* background-color: green; */\n  }\n  .desktop {\n    display: flex !important;\n  }\n}\n/* When the browser is less than 833px wide */\n@media screen and (max-width: 833px) {\n  .mobile {\n    display: flex !important;\n  }\n  .desktop {\n    display: none !important;\n  }\n  .navContainer {\n    height: 114px;\n  }\n  .topNav {\n    height: 55%;\n  }\n  .bottomNav {\n    height: 45%;\n  }\n  .menu > a,\n  .specials > a,\n  .papaRewards > a {\n    font-size: 1rem;\n  }\n  .menu > a:hover,\n  .specials > a:hover,\n  .papaRewards > a:hover {\n    padding-top: 3.7px; /*stops text from moving upwards when border is added on hover*/\n  }\n  .active {\n    padding-top: 3.7px;\n  }\n  .menu {\n    padding-left: 0rem;\n  }\n  .logo {\n    height: 1.6rem;\n    padding-left: 0rem;\n  }\n  .logo img {\n    transform: scale(0.75) translateX(-21px);\n  }\n  footer {\n    padding: 1.5rem;\n  }\n  .footerContentWidthControl {\n    flex-direction: column;\n  }\n  .footerLinks {\n    width: 100%;\n  }\n  .franchise {\n    width: 100%;\n    padding-top: 1.5rem;\n  }\n  .legalLinks {\n    margin-top: 1.5rem;\n  }\n  .socialMediaLinkIcons {\n    align-self: flex-start;\n    margin-left: 0;\n  }\n  /***************** Hamburger*/\n  .pageWrapper {\n    transition: transform 500ms;\n  }\n  .slidePageWrapperL {\n    animation: slidePageL 500ms forwards;\n  }\n  @keyframes slidePageL {\n    to {\n      transform: translateX(-85%);\n    }\n  }\n  .slidPage {\n    transform: translateX(-85%);\n  }\n  .slidePageWrapperR {\n    animation: slidePageR 500ms forwards;\n  }\n  @keyframes slidePageR {\n    to {\n      transform: translateX(0);\n    }\n  }\n\n  .showMobileMenu {\n    display: block;\n    position: fixed;\n    width: 85%;\n    height: 100%;\n    background-color: #e6e6e6;\n    z-index: 500;\n    right: 0;\n    transform: translateX(100%);\n  }\n  .slideMobileMenuL {\n    animation: slideMenuL 500ms forwards;\n  }\n  @keyframes slideMenuL {\n    to {\n      transform: translateX(0);\n    }\n  }\n  .slidMenu {\n    transform: translateX(0);\n  }\n  .slideMobileMenuR {\n    animation: slideMenuR 500ms forwards;\n  }\n  @keyframes slideMenuR {\n    to {\n      transform: translateX(100%);\n    }\n  }\n\n  .darkenOverlay {\n    display: block;\n    position: absolute;\n    inset: 0;\n    background-color: var(--color7);\n    opacity: 0.5;\n    z-index: 5000;\n  }\n\n  .mobileMenu ul {\n    /* background-color: chartreuse; */\n    height: fit-content;\n    margin: 1.25rem 1.75rem;\n  }\n  .mobileMenu li {\n    /* background-color: pink; */\n    padding: 1rem 0rem;\n  }\n  .mobileMenu li:not(:last-child) {\n    border-top: 1px solid var(--color0);\n  }\n  .mobileMenu a {\n    /* background-color: orange; */\n    color: var(--color2);\n    padding: 0.3rem 0.5rem;\n    border-radius: 1rem;\n  }\n  .mobileSignUp {\n    background-color: var(--color4);\n    color: white !important;\n    transition: background-color 150ms ease-in;\n  }\n  .mobileSignUp:hover {\n    background-color: hsl(355, 68%, 28%);\n  }\n  .mobileMenu .promoCodeForm {\n    display: block;\n  }\n  .mobileMenu .promoCodeForm input:first-child {\n    margin-left: 0;\n    width: clamp(160px, 70%, 500px);\n  }\n\n  /***************** End of  Styling Hamburger*/\n}\n/* When the browser is less than 639px wide */\n@media screen and (max-width: 639px) {\n  .ourCompany ul,\n  .ourPizza ul,\n  .help ul {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: flex-start;\n    gap: 1px;\n    max-height: fit-content;\n    transition: transform 500ms;\n    overflow: hidden;\n  }\n  .ourCompany li,\n  .ourPizza li,\n  .help li {\n    animation: dropdown 400ms ease-in-out forwards;\n  }\n\n  @keyframes dropdown {\n    from {\n      transform: translateY(-120px);\n    }\n    to {\n      transform: translateY(0px);\n    }\n  }\n\n  .hiddenOnSmallScreens {\n    display: none !important;\n  }\n  .footerLinks {\n    flex-direction: column;\n  }\n  .footerLinks h4 {\n    margin: 0.75rem 0rem 0.25rem 0rem;\n    padding: 0.25rem 0rem;\n    border-bottom: 1px solid var(--color0);\n  }\n  .ourCompany,\n  .ourPizza,\n  .help {\n    width: 100%;\n    height: fit-content;\n    position: relative;\n    padding-bottom: 0.5rem;\n    margin-top: 2px;\n  }\n\n  .footerLinks h4::after {\n    content: url(assets/chevron-down.svg);\n    position: absolute;\n    right: -5px;\n    top: 1rem;\n  }\n  .footerLinks li {\n    height: auto;\n  }\n}\n/*******************************************************************************************/\n/*home.css*/\n\n/*******************************************************************************************/\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/home/cardSlider.css":
/*!*********************************!*\
  !*** ./src/home/cardSlider.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_cardSlider_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./cardSlider.css */ "./node_modules/css-loader/dist/cjs.js!./src/home/cardSlider.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_cardSlider_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_cardSlider_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_cardSlider_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_cardSlider_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/home/hero.css":
/*!***************************!*\
  !*** ./src/home/hero.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_hero_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./hero.css */ "./node_modules/css-loader/dist/cjs.js!./src/home/hero.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_hero_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_hero_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_hero_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_hero_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/home/home.css":
/*!***************************!*\
  !*** ./src/home/home.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./home.css */ "./node_modules/css-loader/dist/cjs.js!./src/home/home.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/menu/menu.css":
/*!***************************!*\
  !*** ./src/menu/menu.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./menu.css */ "./node_modules/css-loader/dist/cjs.js!./src/menu/menu.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/papaRewards/papaRewards.css":
/*!*****************************************!*\
  !*** ./src/papaRewards/papaRewards.css ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_papaRewards_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./papaRewards.css */ "./node_modules/css-loader/dist/cjs.js!./src/papaRewards/papaRewards.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_papaRewards_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_papaRewards_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_papaRewards_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_papaRewards_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/specials/specials.css":
/*!***********************************!*\
  !*** ./src/specials/specials.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_specials_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./specials.css */ "./node_modules/css-loader/dist/cjs.js!./src/specials/specials.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_specials_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_specials_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_specials_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_specials_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/chevron-down.svg":
/*!*************************************!*\
  !*** ./src/assets/chevron-down.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c3e123cf78bc368a192f.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _home_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home */ "./src/home/home.js");
/* harmony import */ var _menu_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu/menu */ "./src/menu/menu.js");
/* harmony import */ var _specials_specials__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./specials/specials */ "./src/specials/specials.js");
/* harmony import */ var _papaRewards_papaRewards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./papaRewards/papaRewards */ "./src/papaRewards/papaRewards.js");






// import Mountains from "./Mountains.jpg";

var main = document.body.querySelector(".mainContent");
function changeMain(page) {
  main.innerHTML = "";
  var contentElement;
  if (page == "home") {
    contentElement = (0,_home_home__WEBPACK_IMPORTED_MODULE_1__["default"])();
  } else if (page == "menu") {
    contentElement = (0,_menu_menu__WEBPACK_IMPORTED_MODULE_2__["default"])();
    menuTarget.classList.add("active");
    specialsTarget.classList.remove("active");
    papaRewardsTarget.classList.remove("active");
  } else if (page == "specials") {
    contentElement = (0,_specials_specials__WEBPACK_IMPORTED_MODULE_3__["default"])();
    specialsTarget.classList.add("active");
    menuTarget.classList.remove("active");
    papaRewardsTarget.classList.remove("active");
  } else if (page == "papa rewards") {
    contentElement = (0,_papaRewards_papaRewards__WEBPACK_IMPORTED_MODULE_4__["default"])();
    papaRewardsTarget.classList.add("active");
    specialsTarget.classList.remove("active");
    menuTarget.classList.remove("active");
  }
  main.appendChild(contentElement);
}
var logoTarget = document.querySelector(".logo img");
logoTarget.addEventListener("click", function () {
  changeMain("home");
});
var syoTarget = document.querySelector(".startYourOrder a");
syoTarget.addEventListener("click", function () {
  changeMain("specials");
});
var languageTarget = document.querySelector(".language a");
var languagePopup = document.querySelector(".language-popup");
languageTarget.addEventListener("click", function () {
  //if the login popup is still open, close the login popup and then open the language popup
  if (!loginPopup.classList.contains("hide-popup")) {
    loginPopup.classList.toggle("hide-popup");
    document.activeElement.blur();
  }
  languagePopup.classList.toggle("hide-popup");
  languageTarget.focus();
});
var loginTarget = document.querySelector(".login a");
var loginPopup = document.querySelector(".login-popup");
loginTarget.addEventListener("click", function () {
  //if the language popup is still open, close the language popup and then open the login popup
  if (!languagePopup.classList.contains("hide-popup")) {
    languagePopup.classList.toggle("hide-popup");
    document.activeElement.blur();
  }
  loginPopup.classList.toggle("hide-popup");
  loginTarget.focus();
});

//process closing the popups when the user clicks elsewhere besides the popups
document.addEventListener("click", function (e) {
  //if both popups are hidden
  if (languagePopup.classList.contains("hide-popup") && loginPopup.classList.contains("hide-popup")) {
    return; //do nothing
  } else {
    //if it's the language popup that open,
    if (loginPopup.classList.contains("hide-popup")) {
      //and the click isnt on the language popup, its children or its target
      if (e.target !== languagePopup && e.target.closest(".language-popup") !== languagePopup && e.target.closest("a") !== languageTarget) {
        //close the language popup and unfocus the trigger
        languagePopup.classList.toggle("hide-popup");
        document.activeElement.blur();
      }
      //if it's the login popup that open,
    } else if (languagePopup.classList.contains("hide-popup")) {
      //and the click isnt on the login popup, its children or its target
      if (e.target !== loginPopup && e.target.closest(".login-popup") !== loginPopup && e.target.closest("a") !== loginTarget) {
        //close the login popup and unfocus the trigger
        loginPopup.classList.toggle("hide-popup");
        document.activeElement.blur();
      }
    }
  }
});
var signUpTarget = document.querySelector(".signUp a");
signUpTarget.addEventListener("click", function () {
  changeMain("home");
});

//Hamburger Mobile Menu Functionalit
var hamburger = document.querySelector(".hamburger a");
var mobileMenu = document.querySelector(".mobileMenu");
var pageOverlay = document.querySelector(".pageOverlay");
var pageWrapper = document.querySelector(".pageWrapper");
hamburger.addEventListener("click", function () {
  mobileMenu.classList.add("showMobileMenu");
  mobileMenu.classList.add("slideMobileMenuL");
  pageOverlay.classList.add("darkenOverlay");
  pageWrapper.classList.add("slidePageWrapperL");
  pageOverlay.addEventListener("click", function () {
    pageOverlay.classList.remove("darkenOverlay");
    pageWrapper.classList.add("slidPage");
    pageWrapper.classList.remove("slidePageWrapperL");
    pageWrapper.classList.add("slidePageWrapperR");
    mobileMenu.classList.add("slidMenu");
    mobileMenu.classList.remove("slideMobileMenuL");
    mobileMenu.classList.add("slideMobileMenuR");
    setTimeout(function () {
      pageWrapper.classList.remove("slidPage");
      pageWrapper.classList.remove("slidePageWrapperR");
      mobileMenu.classList.remove("slidMenu");
      mobileMenu.classList.remove("slideMobileMenuR");
      mobileMenu.classList.remove("showMobileMenu");
    }, 500);
  }, {
    once: true
  });
});

//----------------------------------

var menuTarget = document.querySelector(".menu a");
menuTarget.addEventListener("click", function () {
  changeMain("menu");
  menuTarget.classList.toggle(".active");
});
var specialsTarget = document.querySelector(".specials a");
specialsTarget.addEventListener("click", function () {
  changeMain("specials");
});
var papaRewardsTarget = document.querySelector(".papaRewards a");
papaRewardsTarget.addEventListener("click", function () {
  changeMain("papa rewards");
});
var shoppingCartTarget = document.querySelector(".cart");
shoppingCartTarget.addEventListener("click", function () {
  changeMain("specials");
});
var footerLinks = document.querySelectorAll(".footerLinks > div");

// footerLinks.forEach((link) => {
//   let hiddenLinks = link.querySelector("ul");
//   link.querySelector("h4").addEventListener("click", () => {
//     hiddenLinks.classList.toggle("hiddenOnSmallScreens");
//   });
// });

var ourCompany = document.querySelector(".ourCompany");
ourCompany.querySelector("h4").addEventListener("click", function () {
  ourCompany.querySelector("ul").classList.toggle("hiddenOnSmallScreens");
  ourPizza.querySelector("ul").classList.add("hiddenOnSmallScreens");
  help.querySelector("ul").classList.add("hiddenOnSmallScreens");
});
var ourPizza = document.querySelector(".ourPizza");
ourPizza.querySelector("h4").addEventListener("click", function () {
  ourPizza.querySelector("ul").classList.toggle("hiddenOnSmallScreens");
  ourCompany.querySelector("ul").classList.add("hiddenOnSmallScreens");
  help.querySelector("ul").classList.add("hiddenOnSmallScreens");
});
var help = document.querySelector(".help");
help.querySelector("h4").addEventListener("click", function () {
  help.querySelector("ul").classList.toggle("hiddenOnSmallScreens");
  ourPizza.querySelector("ul").classList.add("hiddenOnSmallScreens");
  ourCompany.querySelector("ul").classList.add("hiddenOnSmallScreens");
});

//initial state
changeMain("home");
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUssWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxLQUFLLE9BQU8sYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sT0FBTyxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLE9BQU8sV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLEtBQUssS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLEtBQUssS0FBSyxZQUFZLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLEtBQUssWUFBWSxNQUFNLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxhQUFhLE1BQU0sVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxPQUFPLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxPQUFPLFlBQVkseUJBQXlCLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLEtBQUssTUFBTSxZQUFZLE9BQU8sYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssT0FBTyxVQUFVLE1BQU0sT0FBTyx3QkFBd0IsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxZQUFZLE1BQU0sWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FB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LENBQUMsT0FBTyxDQUFDO0FBQzFDOEUsSUFBSSxDQUFDOUUsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtFQUN2RDZFLElBQUksQ0FBQzlFLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQ0osU0FBUyxDQUFDK0QsTUFBTSxDQUFDLHNCQUFzQixDQUFDO0VBQ2pFa0IsUUFBUSxDQUFDN0UsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDSixTQUFTLENBQUNDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQztFQUNsRStFLFVBQVUsQ0FBQzVFLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQ0osU0FBUyxDQUFDQyxHQUFHLENBQUMsc0JBQXNCLENBQUM7QUFDdEUsQ0FBQyxDQUFDOztBQUVGO0FBQ0FpRCxVQUFVLENBQUMsTUFBTSxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrX2RlbW8vLi9zcmMvaG9tZS9jYXJkU2xpZGVyLmpzIiwid2VicGFjazovL3dlYnBhY2tfZGVtby8uL3NyYy9ob21lL2hlcm8uanMiLCJ3ZWJwYWNrOi8vd2VicGFja19kZW1vLy4vc3JjL2hvbWUvaG9tZS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX2RlbW8vLi9zcmMvbWVudS9tZW51LmpzIiwid2VicGFjazovL3dlYnBhY2tfZGVtby8uL3NyYy9wYXBhUmV3YXJkcy9wYXBhUmV3YXJkcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX2RlbW8vLi9zcmMvc3BlY2lhbHMvc3BlY2lhbHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFja19kZW1vLy4vc3JjL2hvbWUvY2FyZFNsaWRlci5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFja19kZW1vLy4vc3JjL2hvbWUvaGVyby5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFja19kZW1vLy4vc3JjL2hvbWUvaG9tZS5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFja19kZW1vLy4vc3JjL21lbnUvbWVudS5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFja19kZW1vLy4vc3JjL3BhcGFSZXdhcmRzL3BhcGFSZXdhcmRzLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrX2RlbW8vLi9zcmMvc3BlY2lhbHMvc3BlY2lhbHMuY3NzIiwid2VicGFjazovL3dlYnBhY2tfZGVtby8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFja19kZW1vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX2RlbW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYnBhY2tfZGVtby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYnBhY2tfZGVtby8uL3NyYy9ob21lL2NhcmRTbGlkZXIuY3NzP2RkZjciLCJ3ZWJwYWNrOi8vd2VicGFja19kZW1vLy4vc3JjL2hvbWUvaGVyby5jc3M/OGQ2NyIsIndlYnBhY2s6Ly93ZWJwYWNrX2RlbW8vLi9zcmMvaG9tZS9ob21lLmNzcz84ZDQxIiwid2VicGFjazovL3dlYnBhY2tfZGVtby8uL3NyYy9tZW51L21lbnUuY3NzP2ZlYjMiLCJ3ZWJwYWNrOi8vd2VicGFja19kZW1vLy4vc3JjL3BhcGFSZXdhcmRzL3BhcGFSZXdhcmRzLmNzcz9lMjE3Iiwid2VicGFjazovL3dlYnBhY2tfZGVtby8uL3NyYy9zcGVjaWFscy9zcGVjaWFscy5jc3M/MGUxZCIsIndlYnBhY2s6Ly93ZWJwYWNrX2RlbW8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VicGFja19kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2tfZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFja19kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYnBhY2tfZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX2RlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX2RlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX2RlbW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFja19kZW1vL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYnBhY2tfZGVtby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFja19kZW1vL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VicGFja19kZW1vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFja19kZW1vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFja19kZW1vL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYnBhY2tfZGVtby93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly93ZWJwYWNrX2RlbW8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYnBhY2tfZGVtby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuL2NhcmRTbGlkZXIuY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNhcmRTbGlkZXIoKSB7XG4gIGxldCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChcInNsaWRlclNlY3Rpb25cIik7XG4gIGNvbnRlbnQuaW5uZXJIVE1MID0gYFxuICAgICAgICA8YnV0dG9uIGNsYXNzPSdsZWZ0QXJyb3cnPlxuICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGNsYXNzPVwiZmVhdGhlciBmZWF0aGVyLWFycm93LWxlZnRcIj48bGluZSB4MT1cIjE5XCIgeTE9XCIxMlwiIHgyPVwiNVwiIHkyPVwiMTJcIj48L2xpbmU+PHBvbHlsaW5lIHBvaW50cz1cIjEyIDE5IDUgMTIgMTIgNVwiPjwvcG9seWxpbmU+PC9zdmc+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8ZGl2IGNsYXNzPSd0cmltV2luZG93Jz48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz0nY2FyZFdpbmRvdyc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdjYXJkU2xpZGVyJz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdjYXJkJz48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdjYXJkJz48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdjYXJkJz48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdjYXJkJz48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdjYXJkJz48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdjYXJkJz48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz0ndHJpbVdpbmRvdyc+PC9kaXY+XG4gICAgICAgIDxidXR0b24gY2xhc3M9J3JpZ2h0QXJyb3cnPlxuICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGNsYXNzPVwiZmVhdGhlciBmZWF0aGVyLWFycm93LXJpZ2h0XCI+PGxpbmUgeDE9XCI1XCIgeTE9XCIxMlwiIHgyPVwiMTlcIiB5Mj1cIjEyXCI+PC9saW5lPjxwb2x5bGluZSBwb2ludHM9XCIxMiA1IDE5IDEyIDEyIDE5XCI+PC9wb2x5bGluZT48L3N2Zz5cbiAgICAgICAgPC9idXR0b24+XG4gIGA7XG5cbiAgY29uc3QgbGVmdEFycm93ID0gY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLmxlZnRBcnJvd1wiKTtcbiAgbGVmdEFycm93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgc2xpZGVMZWZ0KCk7XG4gIH0pO1xuXG4gIGNvbnN0IGNhcmRXaW5kb3cgPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZFdpbmRvd1wiKTtcblxuICBsZXQgcmlnaHRBcnJvdyA9IGNvbnRlbnQucXVlcnlTZWxlY3RvcihcIi5yaWdodEFycm93XCIpO1xuICByaWdodEFycm93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgc2xpZGVSaWdodCgpO1xuICB9KTtcblxuICBmdW5jdGlvbiBzbGlkZUxlZnQoKSB7XG4gICAgbGV0IHsgcmVnaW9uV2lkdGgsIHNjcm9sbFBvc2l0aW9ufSA9IGdldFNsaWRlckRhdGEoKTtcblxuXG4gICAgaWYgKE1hdGguZmxvb3Ioc2Nyb2xsUG9zaXRpb24pICUgcmVnaW9uV2lkdGggIT09IDApIHtcbiAgICAgICAgY2FyZFdpbmRvdy5zY3JvbGwoe1xuICAgICAgICAgICAgbGVmdDogTWF0aC5mbG9vcihzY3JvbGxQb3NpdGlvbiAvIHJlZ2lvbldpZHRoKSAqIHJlZ2lvbldpZHRoLFxuICAgICAgICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCIsXG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNhcmRXaW5kb3cuc2Nyb2xsKHtcbiAgICAgICAgICAgIGxlZnQ6IHNjcm9sbFBvc2l0aW9uIC0gcmVnaW9uV2lkdGgsXG4gICAgICAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIixcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIC8vIGlmIChzY3JvbGxQb3NpdGlvbiAlIHBvc2l0aW9uUmFuZ2VzWzBdID09PSAwKSB7XG4gICAgLy8gICBsZXQgbGVmdCA9XG4gICAgLy8gICAgIChNYXRoLmZsb29yKHNjcm9sbFBvc2l0aW9uIC8gcG9zaXRpb25SYW5nZXNbMF0pIC0gMSkgKlxuICAgIC8vICAgICBwb3NpdGlvblJhbmdlc1swXTtcbiAgICAvLyAgIGNhcmRXaW5kb3cuc2Nyb2xsKHtcbiAgICAvLyAgICAgbGVmdDogbGVmdCxcbiAgICAvLyAgICAgYmVoYXZpb3I6IFwic21vb3RoXCIsXG4gICAgLy8gICB9KTtcbiAgICAvLyB9IGVsc2Uge1xuICAgIC8vICAgY2FyZFdpbmRvdy5zY3JvbGwoe1xuICAgIC8vICAgICBsZWZ0OlxuICAgIC8vICAgICAgIE1hdGguZmxvb3Ioc2Nyb2xsUG9zaXRpb24gLyBwb3NpdGlvblJhbmdlc1swXSkgKiBwb3NpdGlvblJhbmdlc1swXSAtXG4gICAgLy8gICAgICAgMSxcbiAgICAvLyAgICAgYmVoYXZpb3I6IFwic21vb3RoXCIsXG4gICAgLy8gICB9KTtcbiAgICAvLyB9XG4gIH1cblxuICBmdW5jdGlvbiBzbGlkZVJpZ2h0KCkge1xuXG4gICAgICBsZXQgeyByZWdpb25XaWR0aCwgc2Nyb2xsUG9zaXRpb259ID0gZ2V0U2xpZGVyRGF0YSgpO1xuXG5cbiAgICAgIGlmIChNYXRoLmZsb29yKHNjcm9sbFBvc2l0aW9uKSAlIHJlZ2lvbldpZHRoICE9PSAwKSB7XG4gICAgICAgICAgY2FyZFdpbmRvdy5zY3JvbGwoe1xuICAgICAgICAgICAgICBsZWZ0OiAoTWF0aC5mbG9vcihzY3JvbGxQb3NpdGlvbiAvIHJlZ2lvbldpZHRoKSsxKSAqIHJlZ2lvbldpZHRoLFxuICAgICAgICAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIixcbiAgICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2FyZFdpbmRvdy5zY3JvbGwoe1xuICAgICAgICAgICAgICBsZWZ0OiBzY3JvbGxQb3NpdGlvbiArIHJlZ2lvbldpZHRoLFxuICAgICAgICAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIixcbiAgICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgIC8vIGFsZXJ0KGBzY3JvbGxMZWZ0ID0gJHtzY3JvbGxQb3NpdGlvbn0gb2YgJHttYXhTY3JvbGxMZWZ0fWApO1xuXG4gICAgLy8gaWYgKHNjcm9sbFBvc2l0aW9uICUgcG9zaXRpb25SYW5nZXNbMF0gPT09IDApIHtcbiAgICAvLyAgIGNhcmRXaW5kb3cuc2Nyb2xsKHtcbiAgICAvLyAgICAgbGVmdDpcbiAgICAvLyAgICAgICAoTWF0aC5mbG9vcihzY3JvbGxQb3NpdGlvbiAvIHBvc2l0aW9uUmFuZ2VzWzBdKSArIDEpICpcbiAgICAvLyAgICAgICBwb3NpdGlvblJhbmdlc1swXSxcbiAgICAvLyAgICAgYmVoYXZpb3I6IFwic21vb3RoXCIsXG4gICAgLy8gICB9KTtcbiAgICAvLyAgIGFsZXJ0KHNjcm9sbFBvc2l0aW9uUmlnaHQpO1xuICAgIC8vIH0gZWxzZSB7XG4gICAgLy8gICBsZXQgbGVmdCA9IChNYXRoLmZsb29yKHNjcm9sbFBvc2l0aW9uIC8gcG9zaXRpb25SYW5nZXNbMF0pICsgMSkgKlxuICAgIC8vICAgcG9zaXRpb25SYW5nZXNbMF1cbiAgICAvLyAgIGlmKG1heFNjcm9sbExlZnQtc2Nyb2xsUG9zaXRpb24gPCAoY2FyZFdpZHRoICsgMikpIHtcbiAgICAvLyAgICAgbGVmdCA9IG1heFNjcm9sbExlZnQ7XG4gICAgLy8gICB9XG4gICAgLy8gICBjYXJkV2luZG93LnNjcm9sbCh7XG4gICAgLy8gICAgIGxlZnQ6XG4gICAgLy8gICAgICAgbGVmdCxcbiAgICAvLyAgICAgYmVoYXZpb3I6IFwic21vb3RoXCIsXG4gICAgLy8gICB9KTtcbiAgICAvLyB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRTbGlkZXJEYXRhKCkge1xuICAgIGxldCBjYXJkV2lkdGggPSBnZXRDYXJkV2lkdGgoKTtcbiAgICBsZXQgc2Nyb2xsUG9zaXRpb24gPSBjYXJkV2luZG93LnNjcm9sbExlZnQ7XG4gICAgbGV0IGNhcmRTbGlkZXJXaWR0aCA9IGdldENhcmRTbGlkZXJXaWR0aCgpO1xuICAgIGxldCBtYXhTY3JvbGxMZWZ0ID0gZ2V0TWF4U2Nyb2xsTGVmdCgpO1xuICAgIGxldCBsZWZ0VG9TY3JvbGwgPSBtYXhTY3JvbGxMZWZ0IC0gc2Nyb2xsUG9zaXRpb247XG4gICAgbGV0IG51bUNhcmRzID0gZ2V0TnVtQ2FyZHMoKTtcbiAgICBsZXQgZ2FwV2lkdGggPSAoY2FyZFNsaWRlcldpZHRoIC0gY2FyZFdpZHRoICogbnVtQ2FyZHMpIC8gKG51bUNhcmRzICsgMSk7XG4gICAgbGV0IHBvc2l0aW9uUmFuZ2VzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gbnVtQ2FyZHM7IGkrKykge1xuICAgICAgbGV0IHVwcGVyQm91bmQgPSBpICogY2FyZFdpZHRoICsgaSAqIGdhcFdpZHRoO1xuICAgICAgcG9zaXRpb25SYW5nZXMucHVzaCh1cHBlckJvdW5kKTtcbiAgICB9XG4gICAgbGV0IHJlZ2lvbldpZHRoID0gcG9zaXRpb25SYW5nZXNbMF07XG4gICAgcmV0dXJuIHtcbiAgICAgIHNjcm9sbFBvc2l0aW9uLFxuICAgICAgbGVmdFRvU2Nyb2xsLFxuICAgICAgbWF4U2Nyb2xsTGVmdCxcbiAgICAgIHBvc2l0aW9uUmFuZ2VzLFxuICAgICAgcmVnaW9uV2lkdGgsXG4gICAgICBudW1DYXJkcyxcbiAgICAgIGNhcmRXaWR0aCxcbiAgICAgIGdhcFdpZHRoLFxuICAgICAgY2FyZFNsaWRlcldpZHRoLFxuICAgIH07XG4gIH1cbiAgZnVuY3Rpb24gZ2V0TWF4U2Nyb2xsTGVmdCgpIHtcbiAgICByZXR1cm4gY2FyZFdpbmRvdy5zY3JvbGxXaWR0aCAtIGNhcmRXaW5kb3cuY2xpZW50V2lkdGg7XG4gIH1cbiAgZnVuY3Rpb24gZ2V0Q2FyZFdpZHRoKCkge1xuICAgIGxldCBjYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkXCIpO1xuICAgIGxldCB3aWR0aCA9IGNhcmQub2Zmc2V0V2lkdGg7XG4gICAgcmV0dXJuIHdpZHRoO1xuICB9XG4gIGZ1bmN0aW9uIGdldENhcmRTbGlkZXJXaWR0aCgpIHtcbiAgICBsZXQgY2FyZFNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZFNsaWRlclwiKTtcbiAgICBsZXQgd2lkdGggPSBjYXJkU2xpZGVyLm9mZnNldFdpZHRoO1xuICAgIHJldHVybiB3aWR0aDtcbiAgfVxuICBmdW5jdGlvbiBnZXROdW1DYXJkcygpIHtcbiAgICBsZXQgY2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhcmRcIik7XG4gICAgbGV0IG51bUNhcmRzID0gWy4uLmNhcmRzXS5sZW5ndGg7XG4gICAgcmV0dXJuIG51bUNhcmRzO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRlbnQ7XG59XG4iLCJpbXBvcnQgXCIuL2hlcm8uY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhlcm8oKSB7XG4gIGxldCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiaGVyb1wiKTtcbiAgY29udGVudC5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9J2hlcm9UZXh0Jz5cbiAgICAgICAgPGgxPlN0YXJ0aW5nIGF0ICQxMzwvaDE+XG4gICAgICAgIDxoMz5MaW1pdGVkIHRpbWUgb2ZmZXI8L2gzPlxuICAgICAgICA8ZGl2PlxuICAgICAgICA8aDE+RXBpYyBzdHVmZmVkIGNydXN0IHBpenphPC9oMT5cbiAgICAgICAgPGgzPjEtdG9wcGluZyBzcGVjaWFsPC9oMz5cbiAgICAgICAgPGg0PkNob29zZSB5b3VyIHRvcHBpbmcuIENoZWVzZSB5b3VyIGNydXN0LjwvaDQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9J2JsYWNrQnRuJz5PcmRlciBEZWxpdmVyeTwvYT5cbiAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPSd3aGl0ZUJ0bic+T3JkZXIgQ2FycnlvdXQ8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgYDtcbiAgcmV0dXJuIGNvbnRlbnQ7XG59XG4iLCJpbXBvcnQgXCIuL2hvbWUuY3NzXCI7XG5pbXBvcnQgaGVybyBmcm9tIFwiLi9oZXJvXCI7XG5pbXBvcnQgY2FyZFNsaWRlciBmcm9tIFwiLi9jYXJkU2xpZGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhvbWUoKSB7XG4gIGxldCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwibWFpbl9faG9tZVwiKTtcbiAgLy8gbGV0IGxpbmUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAvLyBsaW5lMS50ZXh0Q29udGVudCA9ICdTdGFydGluZyBhdCAkMTMnXG4gIC8vIGNvbnRlbnQuYXBwZW5kQ2hpbGQobGluZTEpXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVybygpKVxuICBjb250ZW50LmFwcGVuZENoaWxkKGNhcmRTbGlkZXIoKSlcbiAgLy8gY29udGVudC50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xuXG4gIHJldHVybiBjb250ZW50O1xufVxuIiwiaW1wb3J0IFwiLi9tZW51LmNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZW51KCkge1xuICBsZXQgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChcIm1haW5fX21lbnVcIik7XG4gIGNvbnRlbnQudGV4dENvbnRlbnQgPSBcIk1FTlVcIjtcbiAgcmV0dXJuIGNvbnRlbnQ7XG59XG4iLCJpbXBvcnQgXCIuL3BhcGFSZXdhcmRzLmNzc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFwYVJld2FyZHMoKSB7XG4gIGxldCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGVudC50ZXh0Q29udGVudCA9IFwiUEFQQSBSRVdBUkRTXCI7XG4gIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChcIm1haW5fX3BhcGFSZXdhcmRzXCIpO1xuICByZXR1cm4gY29udGVudDtcbn1cbiIsImltcG9ydCBcIi4vc3BlY2lhbHMuY3NzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzcGVjaWFscygpIHtcbiAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJtYWluX19zcGVjaWFsc1wiKTtcbiAgY29udGVudC50ZXh0Q29udGVudCA9IFwiU1BFQ0lBTFNcIjtcblxuICByZXR1cm4gY29udGVudDtcbn1cbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuXFxuLnNsaWRlclNlY3Rpb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3IxKTtcXG4gIGhlaWdodDogNTAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uY2FyZFdpbmRvdyB7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgd2lkdGg6IG1pbigxMDB2dywgY2FsYyg5NjBweCArIDZyZW0pKTtcXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcXG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcXG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50cmltV2luZG93OmZpcnN0LW9mLXR5cGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvcjEpO1xcbiAgICBoZWlnaHQ6NDAwcHg7XFxuICAgIHdpZHRoOjEycHg7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNnB4KTtcXG4gICAgei1pbmRleDogMTAwMDtcXG59XFxuLnRyaW1XaW5kb3c6bGFzdC1vZi10eXBlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3IxKTtcXG4gICAgaGVpZ2h0OjQwMHB4O1xcbiAgICB3aWR0aDoxMnB4O1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTZweCk7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB6LWluZGV4OiAxMDAwO1xcbn1cXG5cXG4vKiAuY2FyZFdpbmRvdzo6YmVmb3JlIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXG4gICAgaGVpZ2h0OjQwMHB4O1xcbiAgICB3aWR0aDoxMnB4O1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OjRweFxcbn1cXG4uY2FyZFdpbmRvdzo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcbiAgICBoZWlnaHQ6NDAwcHg7XFxuICAgIHdpZHRoOjEycHg7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OjRweDtcXG4gICAgei1pbmRleDogMjAwMDtcXG59ICovXFxuXFxuLmNhcmRTbGlkZXIge1xcbiAgaGVpZ2h0OiA0MDBweDtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIHBhZGRpbmc6IDAgMS41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3IxKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEuNXJlbTtcXG59XFxuXFxuLmNhcmQge1xcbiAgbWluLXdpZHRoOiAzMjBweDtcXG4gIG1pbi1oZWlnaHQ6IDM2MnB4O1xcbiAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93Z3JlZW47XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgzM3B4KSB7XFxuICAgIC5jYXJkU2xpZGVyIHtcXG4gICAgICAgIHBhZGRpbmc6IDAgLjc1cmVtO1xcbiAgICAgICAgZ2FwOi43NXJlbTtcXG4gICAgfVxcbiAgICAuY2FyZCB7XFxuICAgICAgICBtaW4td2lkdGg6IDI3MnB4O1xcbiAgICB9XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBjb2xvcjp3aGl0ZTtcXG4gICAgb3BhY2l0eTogLjQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVyZW07XFxuICAgIHBhZGRpbmc6LjVyZW07XFxuICAgIGN1cnNvcjpwb2ludGVyO1xcbiAgICB6LWluZGV4OiAxNTAwO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBjb2xvcjp3aGl0ZTtcXG59XFxuXFxuLmxlZnRBcnJvdyB7XFxuICAgIGxlZnQ6MnJlbTtcXG59XFxuXFxuLnJpZ2h0QXJyb3cge1xcbiAgICByaWdodDoycmVtO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvaG9tZS9jYXJkU2xpZGVyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLGFBQWE7RUFDYixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsWUFBWTtJQUNaLFVBQVU7SUFDVixjQUFjO0lBQ2QsMEJBQTBCO0lBQzFCLGFBQWE7QUFDakI7QUFDQTtJQUNJLCtCQUErQjtJQUMvQixZQUFZO0lBQ1osVUFBVTtJQUNWLDJCQUEyQjtJQUMzQixjQUFjO0lBQ2QsYUFBYTtBQUNqQjs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBa0JHOztBQUVIO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsK0JBQStCO0VBQy9CLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLDZCQUE2QjtBQUMvQjtBQUNBO0lBQ0k7UUFDSSxpQkFBaUI7UUFDakIsVUFBVTtJQUNkO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7QUFDSjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixjQUFjO0lBQ2QsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxVQUFVO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuXFxuLnNsaWRlclNlY3Rpb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3IxKTtcXG4gIGhlaWdodDogNTAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uY2FyZFdpbmRvdyB7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgd2lkdGg6IG1pbigxMDB2dywgY2FsYyg5NjBweCArIDZyZW0pKTtcXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcXG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcXG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50cmltV2luZG93OmZpcnN0LW9mLXR5cGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvcjEpO1xcbiAgICBoZWlnaHQ6NDAwcHg7XFxuICAgIHdpZHRoOjEycHg7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNnB4KTtcXG4gICAgei1pbmRleDogMTAwMDtcXG59XFxuLnRyaW1XaW5kb3c6bGFzdC1vZi10eXBlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3IxKTtcXG4gICAgaGVpZ2h0OjQwMHB4O1xcbiAgICB3aWR0aDoxMnB4O1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTZweCk7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB6LWluZGV4OiAxMDAwO1xcbn1cXG5cXG4vKiAuY2FyZFdpbmRvdzo6YmVmb3JlIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXG4gICAgaGVpZ2h0OjQwMHB4O1xcbiAgICB3aWR0aDoxMnB4O1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OjRweFxcbn1cXG4uY2FyZFdpbmRvdzo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcbiAgICBoZWlnaHQ6NDAwcHg7XFxuICAgIHdpZHRoOjEycHg7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OjRweDtcXG4gICAgei1pbmRleDogMjAwMDtcXG59ICovXFxuXFxuLmNhcmRTbGlkZXIge1xcbiAgaGVpZ2h0OiA0MDBweDtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIHBhZGRpbmc6IDAgMS41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3IxKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEuNXJlbTtcXG59XFxuXFxuLmNhcmQge1xcbiAgbWluLXdpZHRoOiAzMjBweDtcXG4gIG1pbi1oZWlnaHQ6IDM2MnB4O1xcbiAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93Z3JlZW47XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgzM3B4KSB7XFxuICAgIC5jYXJkU2xpZGVyIHtcXG4gICAgICAgIHBhZGRpbmc6IDAgLjc1cmVtO1xcbiAgICAgICAgZ2FwOi43NXJlbTtcXG4gICAgfVxcbiAgICAuY2FyZCB7XFxuICAgICAgICBtaW4td2lkdGg6IDI3MnB4O1xcbiAgICB9XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBjb2xvcjp3aGl0ZTtcXG4gICAgb3BhY2l0eTogLjQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVyZW07XFxuICAgIHBhZGRpbmc6LjVyZW07XFxuICAgIGN1cnNvcjpwb2ludGVyO1xcbiAgICB6LWluZGV4OiAxNTAwO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBjb2xvcjp3aGl0ZTtcXG59XFxuXFxuLmxlZnRBcnJvdyB7XFxuICAgIGxlZnQ6MnJlbTtcXG59XFxuXFxuLnJpZ2h0QXJyb3cge1xcbiAgICByaWdodDoycmVtO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuaGVybyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuICAgIGNvbG9yOndoaXRlO1xcbiAgICBoZWlnaHQ6NDUzcHg7XFxuICAgIHBhZGRpbmc6IDAgMTB2dztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XFxufVxcbi5oZXJvVGV4dCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHdpZHRoOmZpdC1jb250ZW50O1xcbiAgICBwYWRkaW5nOiAycmVtIDByZW07XFxuXFxufVxcblxcbi5oZXJvID4gZGl2ID4gKjpmaXJzdC1jaGlsZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBwYWRkaW5nOiAwcmVtIC41cmVtIDJweCAuNXJlbTtcXG4gICAgdHJhbnNmb3JtOiBza2V3WCgtNWRlZykgcm90YXRlWigtNWRlZykgdHJhbnNsYXRlWSgtNXB4KSB0cmFuc2xhdGVYKC0ycHgpO1xcbiAgICB3aWR0aDpmaXQtY29udGVudDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBhbmltYXRpb246IGhlcm9TbGlkZSA0MDBtcyBlYXNlLWluIGZvcndhcmRzO1xcblxcbn1cXG5Aa2V5ZnJhbWVzIGhlcm9TbGlkZSB7XFxuICAgIGZyb20ge1xcbiAgICAgICAgdHJhbnNmb3JtOiBza2V3WCgtNWRlZykgcm90YXRlWigtNWRlZykgdHJhbnNsYXRlWSgwcHgpIHRyYW5zbGF0ZVgoLTE1cmVtKTtcXG4gICAgfVxcbiAgICB0byB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNrZXdYKC01ZGVnKSByb3RhdGVaKC01ZGVnKSB0cmFuc2xhdGVZKC01cHgpIHRyYW5zbGF0ZVgoLTJweCk7XFxuICAgIH1cXG59XFxuXFxuLmhlcm8gPiBkaXYgPiAqOmZpcnN0LWNoaWxkOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICc5OSc7XFxuICAgIGZvbnQtc2l6ZTogMS4zNXJlbTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIG1hcmdpbjogMHJlbSAuMXJlbSAwcmVtIC4zNXJlbTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3R0b206IC41cmVtO1xcbiAgICBcXG59XFxuLmhlcm8gPiBkaXYgPiAqOm50aC1jaGlsZCgyKSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgzNTUsIDY4JSwgNDglKTtcXG4gICAgcGFkZGluZzogMHB4IC4zNXJlbSAycHggLjM1cmVtO1xcbiAgICB3aWR0aDpmaXQtY29udGVudDsgIFxcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcbiAgICAvKiB6LWluZGV4OiAxMDA7ICovXFxufVxcbi8qIC5oZXJvID4gZGl2ID4gKjpudGgtY2hpbGQoMik6OmFmdGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZWQ7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBoZWlnaHQ6MS42cmVtO1xcbiAgICB3aWR0aDogMS42cmVtO1xcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcXG4gICAgdHJhbnNmb3JtOiBza2V3WCgtMzBkZWcpIHRyYW5zbGF0ZVgoLTJweCk7XFxuICAgIHotaW5kZXg6IDE7XFxufSAqL1xcblxcblxcbi5oZXJvID4gZGl2ID4gKjpudGgtY2hpbGQoMykge1xcbiAgICBcXG4gICAgcGFkZGluZy1ib3R0b206IDJweDtcXG4gICAgd2lkdGg6Zml0LWNvbnRlbnQ7XFxuICAgIG1hcmdpbi1ib3R0b206IC43NXJlbTtcXG59XFxuLmhlcm8gPiBkaXYgPiAqOm50aC1jaGlsZCg0KSBhOmZpcnN0LWNoaWxkIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxLjVyZW07XFxufVxcblxcblxcblxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgzM3B4KSB7IFxcbiAgICAuaGVybyB7XFxuICAgICAgICBoZWlnaHQ6IDQwMHB4O1xcbiAgICAgICAgcGFkZGluZzogMXJlbTtcXG4gICAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvaG9tZS9oZXJvLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjs7QUFFdEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsNkJBQTZCO0lBQzdCLHdFQUF3RTtJQUN4RSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLDJDQUEyQzs7QUFFL0M7QUFDQTtJQUNJO1FBQ0kseUVBQXlFO0lBQzdFO0lBQ0E7UUFDSSx3RUFBd0U7SUFDNUU7QUFDSjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsMEJBQTBCO0lBQzFCLDhCQUE4QjtJQUM5QixrQkFBa0I7SUFDbEIsYUFBYTs7QUFFakI7QUFDQTtJQUNJLG9DQUFvQztJQUNwQyw4QkFBOEI7SUFDOUIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCO0FBQ0E7Ozs7Ozs7O0dBUUc7OztBQUdIOztJQUVJLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxvQkFBb0I7QUFDeEI7Ozs7O0FBS0E7SUFDSTtRQUNJLGFBQWE7UUFDYixhQUFhO0lBQ2pCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmhlcm8ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbiAgICBjb2xvcjp3aGl0ZTtcXG4gICAgaGVpZ2h0OjQ1M3B4O1xcbiAgICBwYWRkaW5nOiAwIDEwdnc7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbn1cXG4uaGVyb1RleHQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB3aWR0aDpmaXQtY29udGVudDtcXG4gICAgcGFkZGluZzogMnJlbSAwcmVtO1xcblxcbn1cXG5cXG4uaGVybyA+IGRpdiA+ICo6Zmlyc3QtY2hpbGQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgcGFkZGluZzogMHJlbSAuNXJlbSAycHggLjVyZW07XFxuICAgIHRyYW5zZm9ybTogc2tld1goLTVkZWcpIHJvdGF0ZVooLTVkZWcpIHRyYW5zbGF0ZVkoLTVweCkgdHJhbnNsYXRlWCgtMnB4KTtcXG4gICAgd2lkdGg6Zml0LWNvbnRlbnQ7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYW5pbWF0aW9uOiBoZXJvU2xpZGUgNDAwbXMgZWFzZS1pbiBmb3J3YXJkcztcXG5cXG59XFxuQGtleWZyYW1lcyBoZXJvU2xpZGUge1xcbiAgICBmcm9tIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2tld1goLTVkZWcpIHJvdGF0ZVooLTVkZWcpIHRyYW5zbGF0ZVkoMHB4KSB0cmFuc2xhdGVYKC0xNXJlbSk7XFxuICAgIH1cXG4gICAgdG8ge1xcbiAgICAgICAgdHJhbnNmb3JtOiBza2V3WCgtNWRlZykgcm90YXRlWigtNWRlZykgdHJhbnNsYXRlWSgtNXB4KSB0cmFuc2xhdGVYKC0ycHgpO1xcbiAgICB9XFxufVxcblxcbi5oZXJvID4gZGl2ID4gKjpmaXJzdC1jaGlsZDo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnOTknO1xcbiAgICBmb250LXNpemU6IDEuMzVyZW07XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICBtYXJnaW46IDByZW0gLjFyZW0gMHJlbSAuMzVyZW07XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm90dG9tOiAuNXJlbTtcXG4gICAgXFxufVxcbi5oZXJvID4gZGl2ID4gKjpudGgtY2hpbGQoMikge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMzU1LCA2OCUsIDQ4JSk7XFxuICAgIHBhZGRpbmc6IDBweCAuMzVyZW0gMnB4IC4zNXJlbTtcXG4gICAgd2lkdGg6Zml0LWNvbnRlbnQ7ICBcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXG4gICAgLyogei1pbmRleDogMTAwOyAqL1xcbn1cXG4vKiAuaGVybyA+IGRpdiA+ICo6bnRoLWNoaWxkKDIpOjphZnRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmVkO1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgaGVpZ2h0OjEuNnJlbTtcXG4gICAgd2lkdGg6IDEuNnJlbTtcXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XFxuICAgIHRyYW5zZm9ybTogc2tld1goLTMwZGVnKSB0cmFuc2xhdGVYKC0ycHgpO1xcbiAgICB6LWluZGV4OiAxO1xcbn0gKi9cXG5cXG5cXG4uaGVybyA+IGRpdiA+ICo6bnRoLWNoaWxkKDMpIHtcXG4gICAgXFxuICAgIHBhZGRpbmctYm90dG9tOiAycHg7XFxuICAgIHdpZHRoOmZpdC1jb250ZW50O1xcbiAgICBtYXJnaW4tYm90dG9tOiAuNzVyZW07XFxufVxcbi5oZXJvID4gZGl2ID4gKjpudGgtY2hpbGQoNCkgYTpmaXJzdC1jaGlsZCB7XFxuICAgIG1hcmdpbi1yaWdodDogMS41cmVtO1xcbn1cXG5cXG5cXG5cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MzNweCkgeyBcXG4gICAgLmhlcm8ge1xcbiAgICAgICAgaGVpZ2h0OiA0MDBweDtcXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLm1haW5fX2hvbWUge1xcbiAgaGVpZ2h0OjMwNzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJpc3F1ZTtcXG59XFxuXFxuLndoaXRlQnRuIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHBhZGRpbmc6IC4zNXJlbSAuNzVyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG59XFxuLndoaXRlQnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjcsIDIyNywgMjI3KTtcXG59XFxuLmJsYWNrQnRuIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IC4zNXJlbSAuNzVyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG59XFxuLmJsYWNrQnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0NiwgNDYsIDQ2KTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2hvbWUvaG9tZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2Isd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usb0NBQW9DO0FBQ3RDO0FBQ0E7RUFDRSxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxpQ0FBaUM7QUFDbkNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm1haW5fX2hvbWUge1xcbiAgaGVpZ2h0OjMwNzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJpc3F1ZTtcXG59XFxuXFxuLndoaXRlQnRuIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHBhZGRpbmc6IC4zNXJlbSAuNzVyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG59XFxuLndoaXRlQnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjcsIDIyNywgMjI3KTtcXG59XFxuLmJsYWNrQnRuIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IC4zNXJlbSAuNzVyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG59XFxuLmJsYWNrQnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0NiwgNDYsIDQ2KTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLm1haW5fX21lbnUge1xcbiAgY29sb3I6IGJsdWU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9tZW51L21lbnUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsV0FBVztBQUNiXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5tYWluX19tZW51IHtcXG4gIGNvbG9yOiBibHVlO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIubWFpbl9fcGFwYVJld2FyZHMge1xcbiAgY29sb3I6IG9yYW5nZTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3BhcGFSZXdhcmRzL3BhcGFSZXdhcmRzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubWFpbl9fcGFwYVJld2FyZHMge1xcbiAgY29sb3I6IG9yYW5nZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLm1haW5fX3NwZWNpYWxzIHtcXG4gIGNvbG9yOiBwdXJwbGU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zcGVjaWFscy9zcGVjaWFscy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm1haW5fX3NwZWNpYWxzIHtcXG4gIGNvbG9yOiBwdXJwbGU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiYXNzZXRzL2NoZXZyb24tZG93bi5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9zd2FsZDp3Z2h0QDUwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG46cm9vdCB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgLS1jb2xvcjA6IHJnYigyMDksIDIwOSwgMjA5KTtcXG4gIC0tY29sb3IxOiB3aGl0ZTtcXG4gIC0tY29sb3IyOiBibGFjaztcXG4gIC0tY29sb3IzOiAjMzhhNTc1O1xcbiAgLS1jb2xvcjQ6IGhzbCgzNTUsIDY4JSwgNDglKTtcXG4gIC0tY29sb3I1OiByZ2IoMjMwLCAyMzAsIDIzMCk7XFxuICAtLWNvbG9yNjogcmdiKDQ2LCA0NiwgNDYpO1xcbiAgLS1jb2xvcjc6IHJnYig5OCwgOTgsIDk4KTtcXG4gIC0tbWFpbkZvbnQ6IFxcXCJPc3dhbGRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgLS1zZWNvbmRhcnlGb250OiBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4vKiBtYWtlIHRoZXNlIGl0ZW1zIHJlc3BvbnNpdmUgKi9cXG5pbWcsXFxucGljdHVyZSxcXG5zdmcsXFxudmlkZW8ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcblxcbi8qIG1ha2UgdGhlIGZvcm0gZWxlbWVudHMgaW5oZXJpdCBmb250IHByb3BlcnRpZXMgdGhlIHdheSBldmVyeXRoaW5nIGVsc2UgZG9lcyAqL1xcbmlucHV0LFxcbnRleHRhcmVhLFxcbmJ1dHRvbixcXG5zZWxlY3Qge1xcbiAgZm9udDogaW5oZXJpdDtcXG59XFxuXFxuYm9keSB7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1haW5Gb250KTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcblxcbnVsIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbmxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG4ubmF2Q29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMjhweDtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMTQ5LCAxNTcsIDE2NSwgMC4yKSAwcHggOHB4IDI0cHg7XFxufVxcbi5uYXZDb250YWluZXIgdWwsXFxuLm5hdkNvbnRhaW5lciBsaSxcXG4ubmF2Q29udGFpbmVyIGEge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi50b3BOYXYge1xcbiAgaGVpZ2h0OiA1MCU7XFxufVxcbi50b3BOYXYgbGkge1xcbiAgbWFyZ2luOiAwLjVyZW07XFxufVxcbi50b3BOYXYgbGk6Zmlyc3QtY2hpbGQge1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG4udG9wTmF2IGEge1xcbiAgaGVpZ2h0OiA1MCU7XFxuICBjb2xvcjogdmFyKC0tY29sb3IyKTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXG59XFxuLnN0YXJ0WW91ck9yZGVyID4gYSxcXG4ubGFuZ3VhZ2UgPiBhLFxcbi5sb2dpbiA+IGEge1xcbiAgZ2FwOiAwLjI1cmVtO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxNTBtcyBlYXNlLWluO1xcbn1cXG4uc3RhcnRZb3VyT3JkZXIgPiBhOmhvdmVyLFxcbi5sYW5ndWFnZSA+IGE6aG92ZXIsXFxuLmxvZ2luID4gYTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvcjUpO1xcbiAgei1pbmRleDogMTAwO1xcbn1cXG4uc3RhcnRZb3VyT3JkZXIgPiBhOmZvY3VzLFxcbi5sYW5ndWFnZSA+IGE6Zm9jdXMsXFxuLmxvZ2luID4gYTpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvcjUpO1xcbn1cXG4uc2lnblVwID4gYSB7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3IyKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yMik7XFxuICBjb2xvcjogdmFyKC0tY29sb3IxKTtcXG59XFxuLmxvZ28ge1xcbiAgaGVpZ2h0OiAxLjZyZW07XFxuICBwYWRkaW5nLWxlZnQ6IDR2dztcXG59XFxuLmxvZ29JTUcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvYmplY3QtZml0OiBjb250YWluO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uZmlsdGVyZWQge1xcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDApIHNhdHVyYXRlKDEwMCUpIGludmVydCgyOSUpIHNlcGlhKDY3JSkgc2F0dXJhdGUoNTE5OCUpXFxuICAgIGh1ZS1yb3RhdGUoMzQxZGVnKSBicmlnaHRuZXNzKDgzJSkgY29udHJhc3QoOTQlKTtcXG4gIC8qIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzIyMjUyNDcyL2hvdy1jYW4taS1jaGFuZ2UtdGhlLWNvbG9yLW9mLWFuLXN2Zy1lbGVtZW50Ki9cXG59XFxuLnNpZ25VcCA+IGE6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3I2KTtcXG59XFxuLnNpZ25VcCB7XFxuICBtYXJnaW4tcmlnaHQ6IDR2dyAhaW1wb3J0YW50O1xcbn1cXG5cXG4vKmxhbmd1YWdlIHBvcHVwIHN0eWxpbmcqL1xcbi5sYW5ndWFnZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5sYW5ndWFnZS1wb3B1cCB7XFxuICB6LWluZGV4OiA5OTtcXG4gIG9wYWNpdHk6IDE7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvcjEpO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI1KSAwcHggNTRweCA1NXB4LFxcbiAgICByZ2JhKDAsIDAsIDAsIDAuMTIpIDBweCAtMTJweCAzMHB4LCByZ2JhKDAsIDAsIDAsIDAuMTIpIDBweCA0cHggNnB4LFxcbiAgICByZ2JhKDAsIDAsIDAsIDAuMTcpIDBweCAxMnB4IDEzcHgsIHJnYmEoMCwgMCwgMCwgMC4wOSkgMHB4IC0zcHggNXB4O1xcbiAgdG9wOiAxMDAlO1xcbiAgcmlnaHQ6IC0xMDRweDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgaGVpZ2h0OiAxNDhweDtcXG4gIHdpZHRoOiAyODhweDtcXG4gIHBhZGRpbmc6IDFyZW0gMS43NXJlbSAxLjVyZW0gMS43NXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuLmxhbmd1YWdlLXBvcHVwOjphZnRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3IxKTtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDU1ZGVnKSBza2V3KDIwZGVnKTtcXG4gIHRvcDogLTAuMXJlbTtcXG4gIGxlZnQ6IDQ1JTtcXG59XFxuXFxuLmxhbmd1YWdlLXBvcHVwIGgzIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1zaXplOiAxLjE1cmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDAuNTVyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWNvbG9yMCk7XFxufVxcbi5sYW5ndWFnZS1wb3B1cCB1bCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5sYW5ndWFnZS1wb3B1cCBsaSB7XFxuICBtYXJnaW46IDA7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLmxhbmd1YWdlLXBvcHVwIGEge1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLXNlY29uZGFyeUZvbnQpO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yMyk7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcXG59XFxuLmxhbmd1YWdlLXBvcHVwIGE6aG92ZXIge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi8qbG9naW4gcG9wdXAgc3R5bGluZyBORUVEUyBXT1JLKi9cXG4ubG9naW4ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ubG9naW4tcG9wdXAge1xcbiAgei1pbmRleDogOTk7XFxuICBvcGFjaXR5OiAxO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3IxKTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNSkgMHB4IDU0cHggNTVweCxcXG4gICAgcmdiYSgwLCAwLCAwLCAwLjEyKSAwcHggLTEycHggMzBweCwgcmdiYSgwLCAwLCAwLCAwLjEyKSAwcHggNHB4IDZweCxcXG4gICAgcmdiYSgwLCAwLCAwLCAwLjE3KSAwcHggMTJweCAxM3B4LCByZ2JhKDAsIDAsIDAsIDAuMDkpIDBweCAtM3B4IDVweDtcXG4gIHRvcDogMTAwJTtcXG4gIHJpZ2h0OiAwO1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxuICBjb2xvcjogYmxhY2s7XFxuICBoZWlnaHQ6IDM0MHB4O1xcbiAgd2lkdGg6IDI4OHB4O1xcbiAgcGFkZGluZzogMXJlbSAxLjc1cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDAuNzVyZW07XFxufVxcbi5sb2dpbi1wb3B1cDo6YWZ0ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yMSk7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg1NWRlZykgc2tldygyMGRlZyk7XFxuICB0b3A6IC0wLjFyZW07XFxuICBsZWZ0OiA4MC41JTtcXG59XFxuLmxvZ2luLXBvcHVwIGgzIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1zaXplOiAxLjE1cmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDAuNTVyZW07XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tY29sb3IwKTtcXG59XFxuLmxvZ2luRm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMS4xNXJlbTtcXG59XFxuLmxvZ2luRm9ybVNlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5sb2dpbkZvcm1TZWN0aW9uIGxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1zZWNvbmRhcnlGb250KTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvcjcpO1xcbn1cXG4ubG9naW5Gb3JtIGlucHV0Om5vdChbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSkge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yNyk7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBwYWRkaW5nOiAwLjI1cmVtO1xcbiAgbWFyZ2luLXRvcDogNHB4O1xcbn1cXG4ubG9naW5Gb3JtIGlucHV0Om5vdChbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSk6Zm9jdXMge1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3IzKTtcXG59XFxuLmxvZ2luRm9ybVNlY3Rpb246bnRoLWNoaWxkKDIpIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmxvZ2luRm9ybVNlY3Rpb246bnRoLWNoaWxkKDIpIGEge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMzguNSU7XFxuICBib3R0b206IDE4cHg7XFxufVxcbi5sb2dpbkZvcm1TZWN0aW9uOm50aC1jaGlsZCgzKSBsYWJlbDpmaXJzdC1jaGlsZCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBmb250LXNpemU6IDAuODVyZW07XFxuICBsZWZ0OiA1MHB4O1xcbiAgYm90dG9tOiAxMjFweDtcXG59XFxuLnJlbWVtYmVyTWUge1xcbiAgYWNjZW50LWNvbG9yOiB2YXIoLS1jb2xvcjMpO1xcbiAgd2lkdGg6IDFyZW07XFxuICBoZWlnaHQ6IDFyZW07XFxufVxcbi5yZW1lbWJlck1lICsgbGFiZWwge1xcbiAgbWFyZ2luLXRvcDogNHB4O1xcbn1cXG4ubG9naW5Gb3JtU2VjdGlvbjpudGgtY2hpbGQoNCkgYnV0dG9uIHtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvcjEpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3IyKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yMik7XFxuICBwYWRkaW5nOiAwLjI1cmVtIDAuNjVyZW07XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmxvZ2luRm9ybVNlY3Rpb246bnRoLWNoaWxkKDQpIGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvcjYpO1xcbn1cXG4ubG9naW5Gb3JtU2VjdGlvbjpudGgtY2hpbGQoNCkgZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmb250LWZhbWlseTogdmFyKC0tc2Vjb25kYXJ5Rm9udCk7XFxuICBjb2xvcjogdmFyKC0tY29sb3I3KTtcXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcXG59XFxuLmxvZ2luRm9ybVNlY3Rpb246bnRoLWNoaWxkKDQpIGEge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW4tbGVmdDogMC41cmVtO1xcbn1cXG5cXG4ubG9naW4tcG9wdXAgYSB7XFxuICBmb250LWZhbWlseTogdmFyKC0tc2Vjb25kYXJ5Rm9udCk7XFxuICBjb2xvcjogdmFyKC0tY29sb3IzKTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xcbn1cXG4ubG9naW4tcG9wdXAgYTpob3ZlciB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuLypmb3IgbGFuZ3VhZ2UgQU5EIGxvZ2luIHBvcHVwcyovXFxuLmhpZGUtcG9wdXAge1xcbiAgb3BhY2l0eTogMDtcXG4gIHotaW5kZXg6IDE7XFxufVxcbi8qSGFtYnVyZ2VyIE1vYmlsZSBNZW51IHN0eWxpbmcgaGlkZGVuIG9uIGRlc2t0b3AqL1xcbi5tb2JpbGVNZW51IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5wYWdlV3JhcHBlciB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG4ucGFnZU92ZXJsYXkge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuXFxuLmJvdHRvbU5hdiB7XFxuICBoZWlnaHQ6IDUwJTtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1jb2xvcjApO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWNvbG9yMCk7XFxufVxcbi5ib3R0b21OYXYgbGkge1xcbiAgbWFyZ2luOiAwcmVtO1xcbn1cXG4uYm90dG9tTmF2IGxpOm50aC1jaGlsZCgzKSB7XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcbi5ib3R0b21OYXYgYSB7XFxuICBjb2xvcjogdmFyKC0tY29sb3IyKTtcXG59XFxuLm1lbnUgPiBhLFxcbi5zcGVjaWFscyA+IGEsXFxuLnBhcGFSZXdhcmRzID4gYSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbn1cXG4ubWVudSA+IGE6aG92ZXIsXFxuLnNwZWNpYWxzID4gYTpob3ZlcixcXG4ucGFwYVJld2FyZHMgPiBhOmhvdmVyIHtcXG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCB2YXIoLS1jb2xvcjMpO1xcbiAgcGFkZGluZy10b3A6IDMuOXB4OyAvKnN0b3BzIHRleHQgZnJvbSBtb3ZpbmcgdXB3YXJkcyB3aGVuIGJvcmRlciBpcyBhZGRlZCBvbiBob3ZlciovXFxufVxcbi5hY3RpdmUge1xcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIHZhcigtLWNvbG9yMyk7XFxuICBwYWRkaW5nLXRvcDogMy45cHg7XFxufVxcbi5tZW51IHtcXG4gIHBhZGRpbmctbGVmdDogNHZ3O1xcbn1cXG4ubG9naW4yID4gYSB7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yMSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvcjIpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3IyKTtcXG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxufVxcbi5wcm9tb0NvZGVGb3JtIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDUwO1xcbn1cXG4ucHJvbW9Db2RlRm9ybSA+IGlucHV0IHtcXG4gIHBhZGRpbmc6IDAuMzVyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvcjIpO1xcbn1cXG4ucHJvbW9Db2RlRm9ybSA+IGlucHV0OmZpcnN0LWNoaWxkIHtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAuM3JlbTtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDAuM3JlbTtcXG4gIGJvcmRlci1yaWdodDogbm9uZTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLnByb21vQ29kZUZvcm0gPiBpbnB1dDpmaXJzdC1jaGlsZDpmb2N1cyB7XFxuICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yMyk7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG4ucHJvbW9Db2RlRm9ybSA+IGlucHV0OmZpcnN0LWNoaWxkOjpwbGFjZWhvbGRlciB7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LWZhbWlseTogQ2FtYnJpYSwgR2VvcmdpYSwgVGltZXMsIFxcXCJUaW1lcyBOZXcgUm9tYW5cXFwiLCBzZXJpZjtcXG4gIGZvbnQtc2l6ZTogc21hbGxlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMC42cmVtO1xcbn1cXG5cXG4ucHJvbW9Db2RlRm9ybSA+IGlucHV0OmZpcnN0LWNoaWxkIHtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAuM3JlbTtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDAuM3JlbTtcXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbn1cXG5cXG4ucHJvbW9Db2RlRm9ybSA+IGlucHV0Om50aC1jaGlsZCgyKSB7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC4zcmVtO1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDAuM3JlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yMik7XFxuICBjb2xvcjogdmFyKC0tY29sb3IxKTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHJpZ2h0OiA0cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcXG59XFxuXFxuLmNhcnQge1xcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS1jb2xvcjApO1xcbiAgcGFkZGluZzogMXJlbSAwcmVtIDFyZW0gMXJlbTtcXG4gIG1hcmdpbi1yaWdodDogNHZ3ICFpbXBvcnRhbnQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5jYXJ0ID4gc3ZnIHtcXG4gIG1hcmdpbi1yaWdodDogMC4yNXJlbTtcXG59XFxuLmNhcnQgPiBzcGFuIHtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvcjQpO1xcbiAgZm9udC1zaXplOiAxLjM3NXJlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmNhcnQgPiBzcGFuOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIiRcXFwiO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yNCk7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3R0b206IDVweDtcXG59XFxuLmxvZ2luMiA+IGE6aG92ZXIsXFxuLnByb21vQ29kZUZvcm0gaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl06aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3I2KTtcXG59XFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuXFxuZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBib3JkZXItdG9wOiB2YXIoLS1jb2xvcjApIDFweCBzb2xpZDtcXG4gIHBhZGRpbmc6IDEuNXJlbSBtYXgoNHJlbSwgOHZ3KTtcXG59XFxuLmZvb3RlckNvbnRlbnRXaWR0aENvbnRyb2wge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5mb290ZXJMaW5rcyB7XFxuICB3aWR0aDogY2FsYygxMDAlIC0gbWluKDYwMHB4LCA0MiUpKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxufVxcbi5mb290ZXJMaW5rcyA+IGRpdiB7XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcbmZvb3RlciBhIHtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvcjcpO1xcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxuICBmb250LWZhbWlseTogdmFyKC0tc2Vjb25kYXJ5Rm9udCk7XFxuICBsZXR0ZXItc3BhY2luZzogMHB4O1xcbn1cXG5mb290ZXIgYTpob3ZlciB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuLmZvb3RlckxpbmtzIGg0IHtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvcjIpO1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuLmZyYW5jaGlzZSB7XFxuICB3aWR0aDogbWluKDYwMHB4LCA0MiUpO1xcbn1cXG4uZnJhbmNoaXNlID4gYSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxuICBjb2xvcjogYmxhY2s7XFxuICBnYXA6IDEuNXJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yMCk7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAxNTBtcyBlYXNlLWluO1xcbn1cXG4uZnJhbmNoaXNlIGEge1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1haW5Gb250KTtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG59XFxuLmZyYW5jaGlzZSBhOmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNCkgMHB4IDNweCA4cHg7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcbi5mb290ZXJCb3R0b20ge1xcbiAgbWFyZ2luLXRvcDogMnJlbTtcXG4gIHBhZGRpbmctdG9wOiAxLjc1cmVtO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWNvbG9yMCk7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rOyAqL1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXG59XFxuLmNvdW50cnlTZWxlY3Qge1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLXNlY29uZGFyeUZvbnQpO1xcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbn1cXG4uY291bnRyeVNlbGVjdDpmb2N1cyB7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvcjMpO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuLmxlZ2FsTGlua3Mge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMC43NXJlbTtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIG1hcmdpbjogMC41cmVtIGF1dG8gMXJlbSAwcmVtO1xcbn1cXG4ubGVnYWxMaW5rcyBsaSB7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lOyAqL1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLmZvb3RlckJvdHRvbSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5zb2NpYWxNZWRpYUxpbmtJY29ucyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICByaWdodDogMDtcXG4gIHRvcDogNnB4O1xcbiAgLyogYWxpZ24tc2VsZjogYmFzZWxpbmU7ICovXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC43NXJlbTtcXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogIzM4YTU3NTsgKi9cXG59XFxuLnNvY2lhbE1lZGlhTGlua0ljb25zIHN2ZyB7XFxuICB0cmFuc2l0aW9uOiBjb2xvciA0MDBtcyBlYXNlLWluLW91dDtcXG59XFxuLnNvY2lhbE1lZGlhTGlua0ljb25zIHN2Zzpob3ZlciB7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcblxcbi8qIFdoZW4gdGhlIGJyb3dzZXIgaXMgODMzcHggb3Igd2lkZXIgKi9cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4MzNweCkge1xcbiAgLm1vYmlsZSB7XFxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47ICovXFxuICB9XFxuICAuZGVza3RvcCB7XFxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcXG4gIH1cXG59XFxuLyogV2hlbiB0aGUgYnJvd3NlciBpcyBsZXNzIHRoYW4gODMzcHggd2lkZSAqL1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgzM3B4KSB7XFxuICAubW9iaWxlIHtcXG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmRlc2t0b3Age1xcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubmF2Q29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiAxMTRweDtcXG4gIH1cXG4gIC50b3BOYXYge1xcbiAgICBoZWlnaHQ6IDU1JTtcXG4gIH1cXG4gIC5ib3R0b21OYXYge1xcbiAgICBoZWlnaHQ6IDQ1JTtcXG4gIH1cXG4gIC5tZW51ID4gYSxcXG4gIC5zcGVjaWFscyA+IGEsXFxuICAucGFwYVJld2FyZHMgPiBhIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgfVxcbiAgLm1lbnUgPiBhOmhvdmVyLFxcbiAgLnNwZWNpYWxzID4gYTpob3ZlcixcXG4gIC5wYXBhUmV3YXJkcyA+IGE6aG92ZXIge1xcbiAgICBwYWRkaW5nLXRvcDogMy43cHg7IC8qc3RvcHMgdGV4dCBmcm9tIG1vdmluZyB1cHdhcmRzIHdoZW4gYm9yZGVyIGlzIGFkZGVkIG9uIGhvdmVyKi9cXG4gIH1cXG4gIC5hY3RpdmUge1xcbiAgICBwYWRkaW5nLXRvcDogMy43cHg7XFxuICB9XFxuICAubWVudSB7XFxuICAgIHBhZGRpbmctbGVmdDogMHJlbTtcXG4gIH1cXG4gIC5sb2dvIHtcXG4gICAgaGVpZ2h0OiAxLjZyZW07XFxuICAgIHBhZGRpbmctbGVmdDogMHJlbTtcXG4gIH1cXG4gIC5sb2dvIGltZyB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC43NSkgdHJhbnNsYXRlWCgtMjFweCk7XFxuICB9XFxuICBmb290ZXIge1xcbiAgICBwYWRkaW5nOiAxLjVyZW07XFxuICB9XFxuICAuZm9vdGVyQ29udGVudFdpZHRoQ29udHJvbCB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuICAuZm9vdGVyTGlua3Mge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG4gIC5mcmFuY2hpc2Uge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZy10b3A6IDEuNXJlbTtcXG4gIH1cXG4gIC5sZWdhbExpbmtzIHtcXG4gICAgbWFyZ2luLXRvcDogMS41cmVtO1xcbiAgfVxcbiAgLnNvY2lhbE1lZGlhTGlua0ljb25zIHtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gICAgbWFyZ2luLWxlZnQ6IDA7XFxuICB9XFxuICAvKioqKioqKioqKioqKioqKiogSGFtYnVyZ2VyKi9cXG4gIC5wYWdlV3JhcHBlciB7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSA1MDBtcztcXG4gIH1cXG4gIC5zbGlkZVBhZ2VXcmFwcGVyTCB7XFxuICAgIGFuaW1hdGlvbjogc2xpZGVQYWdlTCA1MDBtcyBmb3J3YXJkcztcXG4gIH1cXG4gIEBrZXlmcmFtZXMgc2xpZGVQYWdlTCB7XFxuICAgIHRvIHtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTg1JSk7XFxuICAgIH1cXG4gIH1cXG4gIC5zbGlkUGFnZSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtODUlKTtcXG4gIH1cXG4gIC5zbGlkZVBhZ2VXcmFwcGVyUiB7XFxuICAgIGFuaW1hdGlvbjogc2xpZGVQYWdlUiA1MDBtcyBmb3J3YXJkcztcXG4gIH1cXG4gIEBrZXlmcmFtZXMgc2xpZGVQYWdlUiB7XFxuICAgIHRvIHtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5zaG93TW9iaWxlTWVudSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHdpZHRoOiA4NSU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcXG4gICAgei1pbmRleDogNTAwO1xcbiAgICByaWdodDogMDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xcbiAgfVxcbiAgLnNsaWRlTW9iaWxlTWVudUwge1xcbiAgICBhbmltYXRpb246IHNsaWRlTWVudUwgNTAwbXMgZm9yd2FyZHM7XFxuICB9XFxuICBAa2V5ZnJhbWVzIHNsaWRlTWVudUwge1xcbiAgICB0byB7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgICB9XFxuICB9XFxuICAuc2xpZE1lbnUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICB9XFxuICAuc2xpZGVNb2JpbGVNZW51UiB7XFxuICAgIGFuaW1hdGlvbjogc2xpZGVNZW51UiA1MDBtcyBmb3J3YXJkcztcXG4gIH1cXG4gIEBrZXlmcmFtZXMgc2xpZGVNZW51UiB7XFxuICAgIHRvIHtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5kYXJrZW5PdmVybGF5IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgaW5zZXQ6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yNyk7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgei1pbmRleDogNTAwMDtcXG4gIH1cXG5cXG4gIC5tb2JpbGVNZW51IHVsIHtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogY2hhcnRyZXVzZTsgKi9cXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgbWFyZ2luOiAxLjI1cmVtIDEuNzVyZW07XFxuICB9XFxuICAubW9iaWxlTWVudSBsaSB7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHBpbms7ICovXFxuICAgIHBhZGRpbmc6IDFyZW0gMHJlbTtcXG4gIH1cXG4gIC5tb2JpbGVNZW51IGxpOm5vdCg6bGFzdC1jaGlsZCkge1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tY29sb3IwKTtcXG4gIH1cXG4gIC5tb2JpbGVNZW51IGEge1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7ICovXFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvcjIpO1xcbiAgICBwYWRkaW5nOiAwLjNyZW0gMC41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgfVxcbiAgLm1vYmlsZVNpZ25VcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yNCk7XFxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDE1MG1zIGVhc2UtaW47XFxuICB9XFxuICAubW9iaWxlU2lnblVwOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDM1NSwgNjglLCAyOCUpO1xcbiAgfVxcbiAgLm1vYmlsZU1lbnUgLnByb21vQ29kZUZvcm0ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG4gIC5tb2JpbGVNZW51IC5wcm9tb0NvZGVGb3JtIGlucHV0OmZpcnN0LWNoaWxkIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDA7XFxuICAgIHdpZHRoOiBjbGFtcCgxNjBweCwgNzAlLCA1MDBweCk7XFxuICB9XFxuXFxuICAvKioqKioqKioqKioqKioqKiogRW5kIG9mICBTdHlsaW5nIEhhbWJ1cmdlciovXFxufVxcbi8qIFdoZW4gdGhlIGJyb3dzZXIgaXMgbGVzcyB0aGFuIDYzOXB4IHdpZGUgKi9cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MzlweCkge1xcbiAgLm91ckNvbXBhbnkgdWwsXFxuICAub3VyUGl6emEgdWwsXFxuICAuaGVscCB1bCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGdhcDogMXB4O1xcbiAgICBtYXgtaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDUwMG1zO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgfVxcbiAgLm91ckNvbXBhbnkgbGksXFxuICAub3VyUGl6emEgbGksXFxuICAuaGVscCBsaSB7XFxuICAgIGFuaW1hdGlvbjogZHJvcGRvd24gNDAwbXMgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XFxuICB9XFxuXFxuICBAa2V5ZnJhbWVzIGRyb3Bkb3duIHtcXG4gICAgZnJvbSB7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMjBweCk7XFxuICAgIH1cXG4gICAgdG8ge1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xcbiAgICB9XFxuICB9XFxuXFxuICAuaGlkZGVuT25TbWFsbFNjcmVlbnMge1xcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuZm9vdGVyTGlua3Mge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbiAgLmZvb3RlckxpbmtzIGg0IHtcXG4gICAgbWFyZ2luOiAwLjc1cmVtIDByZW0gMC4yNXJlbSAwcmVtO1xcbiAgICBwYWRkaW5nOiAwLjI1cmVtIDByZW07XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1jb2xvcjApO1xcbiAgfVxcbiAgLm91ckNvbXBhbnksXFxuICAub3VyUGl6emEsXFxuICAuaGVscCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XFxuICAgIG1hcmdpbi10b3A6IDJweDtcXG4gIH1cXG5cXG4gIC5mb290ZXJMaW5rcyBoNDo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAtNXB4O1xcbiAgICB0b3A6IDFyZW07XFxuICB9XFxuICAuZm9vdGVyTGlua3MgbGkge1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICB9XFxufVxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi8qaG9tZS5jc3MqL1xcblxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7OztFQUdFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLDRCQUE0QjtFQUM1QixlQUFlO0VBQ2YsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQiw0QkFBNEI7RUFDNUIsNEJBQTRCO0VBQzVCLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsZ0NBQWdDO0VBQ2hDLDZDQUE2QztBQUMvQzs7QUFFQSxnQ0FBZ0M7QUFDaEM7Ozs7RUFJRSxjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQSxnRkFBZ0Y7QUFDaEY7Ozs7RUFJRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsNEJBQTRCO0VBQzVCLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsa0JBQWtCO0FBQ3BCO0FBQ0EsNEZBQTRGOztBQUU1RjtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsWUFBWTtBQUNkO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsaURBQWlEO0FBQ25EO0FBQ0E7OztFQUdFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixxQkFBcUI7QUFDdkI7QUFDQTs7O0VBR0UsWUFBWTtFQUNaLDBDQUEwQztBQUM1QztBQUNBOzs7RUFHRSwrQkFBK0I7RUFDL0IsWUFBWTtBQUNkO0FBQ0E7OztFQUdFLCtCQUErQjtBQUNqQztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLCtCQUErQjtFQUMvQiwrQkFBK0I7RUFDL0Isb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRTtvREFDa0Q7RUFDbEQsNkZBQTZGO0FBQy9GO0FBQ0E7RUFDRSwrQkFBK0I7QUFDakM7QUFDQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQSx5QkFBeUI7QUFDekI7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLCtCQUErQjtFQUMvQjs7dUVBRXFFO0VBQ3JFLFNBQVM7RUFDVCxhQUFhO0VBQ2IsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7RUFDWixvQ0FBb0M7RUFDcEMsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osK0JBQStCO0VBQy9CLG9DQUFvQztFQUNwQyxZQUFZO0VBQ1osU0FBUztBQUNYOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixzQ0FBc0M7QUFDeEM7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLFdBQVc7QUFDYjtBQUNBO0VBQ0UsU0FBUztFQUNULFdBQVc7QUFDYjtBQUNBO0VBQ0UsaUNBQWlDO0VBQ2pDLG9CQUFvQjtFQUNwQixZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBLGlDQUFpQztBQUNqQztFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsV0FBVztFQUNYLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsK0JBQStCO0VBQy9COzt1RUFFcUU7RUFDckUsU0FBUztFQUNULFFBQVE7RUFDUixvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osK0JBQStCO0VBQy9CLG9DQUFvQztFQUNwQyxZQUFZO0VBQ1osV0FBVztBQUNiO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsc0NBQXNDO0FBQ3hDO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlDQUFpQztFQUNqQyxvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLGFBQWE7RUFDYiwrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSwrQkFBK0I7QUFDakM7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGFBQWE7QUFDZjtBQUNBO0VBQ0UsMkJBQTJCO0VBQzNCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLCtCQUErQjtFQUMvQiwrQkFBK0I7RUFDL0Isd0JBQXdCO0VBQ3hCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7QUFDQTtFQUNFLCtCQUErQjtBQUNqQztBQUNBO0VBQ0UsYUFBYTtFQUNiLGlDQUFpQztFQUNqQyxvQkFBb0I7RUFDcEIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLG9CQUFvQjtFQUNwQixZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBLGdDQUFnQztBQUNoQztFQUNFLFVBQVU7RUFDVixVQUFVO0FBQ1o7QUFDQSxrREFBa0Q7QUFDbEQ7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsYUFBYTtBQUNmOztBQUVBLDRGQUE0Rjs7QUFFNUY7RUFDRSxXQUFXO0VBQ1gsbUNBQW1DO0VBQ25DLHNDQUFzQztBQUN4QztBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLG9CQUFvQjtBQUN0QjtBQUNBOzs7RUFHRSxZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQixpQkFBaUI7QUFDbkI7QUFDQTs7O0VBR0Usc0NBQXNDO0VBQ3RDLGtCQUFrQixFQUFFLCtEQUErRDtBQUNyRjtBQUNBO0VBQ0Usc0NBQXNDO0VBQ3RDLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQiwrQkFBK0I7RUFDL0IsK0JBQStCO0VBQy9CLG9CQUFvQjtFQUNwQixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQiwrQkFBK0I7QUFDakM7QUFDQTtFQUNFLDhCQUE4QjtFQUM5QixpQ0FBaUM7RUFDakMsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsMkJBQTJCO0VBQzNCLGFBQWE7QUFDZjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLDhEQUE4RDtFQUM5RCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixpQ0FBaUM7RUFDakMsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLGtDQUFrQztFQUNsQywrQkFBK0I7RUFDL0Isb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsNEJBQTRCO0VBQzVCLDRCQUE0QjtFQUM1QixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsV0FBVztBQUNiO0FBQ0E7O0VBRUUsK0JBQStCO0FBQ2pDOztBQUVBLDRGQUE0Rjs7QUFFNUY7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQ0FBbUM7RUFDbkMsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsbUNBQW1DO0VBQ25DLGFBQWE7RUFDYixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsaUNBQWlDO0VBQ2pDLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsMEJBQTBCO0FBQzVCO0FBQ0E7RUFDRSxvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLFlBQVk7RUFDWixXQUFXO0VBQ1gsK0JBQStCO0VBQy9CLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2Isb0NBQW9DO0FBQ3RDO0FBQ0E7RUFDRSw0QkFBNEI7RUFDNUIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSwyQ0FBMkM7RUFDM0MscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLG1DQUFtQztFQUNuQyw0QkFBNEI7RUFDNUIsYUFBYTtFQUNiLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlDQUFpQztFQUNqQyxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLCtCQUErQjtFQUMvQixhQUFhO0FBQ2Y7QUFDQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osZUFBZTtFQUNmLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0Usa0NBQWtDO0VBQ2xDLGFBQWE7QUFDZjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFFBQVE7RUFDUiwwQkFBMEI7RUFDMUIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLCtCQUErQjtBQUNqQztBQUNBO0VBQ0UsbUNBQW1DO0FBQ3JDO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7O0FBRUEsNEZBQTRGOztBQUU1Rix1Q0FBdUM7QUFDdkM7RUFDRTtJQUNFLHdCQUF3QjtJQUN4Qiw2QkFBNkI7RUFDL0I7RUFDQTtJQUNFLHdCQUF3QjtFQUMxQjtBQUNGO0FBQ0EsNkNBQTZDO0FBQzdDO0VBQ0U7SUFDRSx3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLHdCQUF3QjtFQUMxQjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxXQUFXO0VBQ2I7RUFDQTtJQUNFLFdBQVc7RUFDYjtFQUNBOzs7SUFHRSxlQUFlO0VBQ2pCO0VBQ0E7OztJQUdFLGtCQUFrQixFQUFFLCtEQUErRDtFQUNyRjtFQUNBO0lBQ0Usa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGNBQWM7SUFDZCxrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLHdDQUF3QztFQUMxQztFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0Usc0JBQXNCO0VBQ3hCO0VBQ0E7SUFDRSxXQUFXO0VBQ2I7RUFDQTtJQUNFLFdBQVc7SUFDWCxtQkFBbUI7RUFDckI7RUFDQTtJQUNFLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0Usc0JBQXNCO0lBQ3RCLGNBQWM7RUFDaEI7RUFDQSw2QkFBNkI7RUFDN0I7SUFDRSwyQkFBMkI7RUFDN0I7RUFDQTtJQUNFLG9DQUFvQztFQUN0QztFQUNBO0lBQ0U7TUFDRSwyQkFBMkI7SUFDN0I7RUFDRjtFQUNBO0lBQ0UsMkJBQTJCO0VBQzdCO0VBQ0E7SUFDRSxvQ0FBb0M7RUFDdEM7RUFDQTtJQUNFO01BQ0Usd0JBQXdCO0lBQzFCO0VBQ0Y7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsZUFBZTtJQUNmLFVBQVU7SUFDVixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixRQUFRO0lBQ1IsMkJBQTJCO0VBQzdCO0VBQ0E7SUFDRSxvQ0FBb0M7RUFDdEM7RUFDQTtJQUNFO01BQ0Usd0JBQXdCO0lBQzFCO0VBQ0Y7RUFDQTtJQUNFLHdCQUF3QjtFQUMxQjtFQUNBO0lBQ0Usb0NBQW9DO0VBQ3RDO0VBQ0E7SUFDRTtNQUNFLDJCQUEyQjtJQUM3QjtFQUNGOztFQUVBO0lBQ0UsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsK0JBQStCO0lBQy9CLFlBQVk7SUFDWixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxrQ0FBa0M7SUFDbEMsbUJBQW1CO0lBQ25CLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UsNEJBQTRCO0lBQzVCLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsbUNBQW1DO0VBQ3JDO0VBQ0E7SUFDRSw4QkFBOEI7SUFDOUIsb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0QixtQkFBbUI7RUFDckI7RUFDQTtJQUNFLCtCQUErQjtJQUMvQix1QkFBdUI7SUFDdkIsMENBQTBDO0VBQzVDO0VBQ0E7SUFDRSxvQ0FBb0M7RUFDdEM7RUFDQTtJQUNFLGNBQWM7RUFDaEI7RUFDQTtJQUNFLGNBQWM7SUFDZCwrQkFBK0I7RUFDakM7O0VBRUEsNkNBQTZDO0FBQy9DO0FBQ0EsNkNBQTZDO0FBQzdDO0VBQ0U7OztJQUdFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLDJCQUEyQjtJQUMzQixRQUFRO0lBQ1IsdUJBQXVCO0lBQ3ZCLDJCQUEyQjtJQUMzQixnQkFBZ0I7RUFDbEI7RUFDQTs7O0lBR0UsOENBQThDO0VBQ2hEOztFQUVBO0lBQ0U7TUFDRSw2QkFBNkI7SUFDL0I7SUFDQTtNQUNFLDBCQUEwQjtJQUM1QjtFQUNGOztFQUVBO0lBQ0Usd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSxzQkFBc0I7RUFDeEI7RUFDQTtJQUNFLGlDQUFpQztJQUNqQyxxQkFBcUI7SUFDckIsc0NBQXNDO0VBQ3hDO0VBQ0E7OztJQUdFLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZ0RBQXFDO0lBQ3JDLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsU0FBUztFQUNYO0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7QUFDRjtBQUNBLDRGQUE0RjtBQUM1RixXQUFXOztBQUVYLDRGQUE0RlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Pc3dhbGQ6d2dodEA1MDAmZGlzcGxheT1zd2FwXFxcIik7XFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG46cm9vdCB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgLS1jb2xvcjA6IHJnYigyMDksIDIwOSwgMjA5KTtcXG4gIC0tY29sb3IxOiB3aGl0ZTtcXG4gIC0tY29sb3IyOiBibGFjaztcXG4gIC0tY29sb3IzOiAjMzhhNTc1O1xcbiAgLS1jb2xvcjQ6IGhzbCgzNTUsIDY4JSwgNDglKTtcXG4gIC0tY29sb3I1OiByZ2IoMjMwLCAyMzAsIDIzMCk7XFxuICAtLWNvbG9yNjogcmdiKDQ2LCA0NiwgNDYpO1xcbiAgLS1jb2xvcjc6IHJnYig5OCwgOTgsIDk4KTtcXG4gIC0tbWFpbkZvbnQ6IFxcXCJPc3dhbGRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgLS1zZWNvbmRhcnlGb250OiBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4vKiBtYWtlIHRoZXNlIGl0ZW1zIHJlc3BvbnNpdmUgKi9cXG5pbWcsXFxucGljdHVyZSxcXG5zdmcsXFxudmlkZW8ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcblxcbi8qIG1ha2UgdGhlIGZvcm0gZWxlbWVudHMgaW5oZXJpdCBmb250IHByb3BlcnRpZXMgdGhlIHdheSBldmVyeXRoaW5nIGVsc2UgZG9lcyAqL1xcbmlucHV0LFxcbnRleHRhcmVhLFxcbmJ1dHRvbixcXG5zZWxlY3Qge1xcbiAgZm9udDogaW5oZXJpdDtcXG59XFxuXFxuYm9keSB7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1haW5Gb250KTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcblxcbnVsIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbmxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG4ubmF2Q29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMjhweDtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMTQ5LCAxNTcsIDE2NSwgMC4yKSAwcHggOHB4IDI0cHg7XFxufVxcbi5uYXZDb250YWluZXIgdWwsXFxuLm5hdkNvbnRhaW5lciBsaSxcXG4ubmF2Q29udGFpbmVyIGEge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi50b3BOYXYge1xcbiAgaGVpZ2h0OiA1MCU7XFxufVxcbi50b3BOYXYgbGkge1xcbiAgbWFyZ2luOiAwLjVyZW07XFxufVxcbi50b3BOYXYgbGk6Zmlyc3QtY2hpbGQge1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG4udG9wTmF2IGEge1xcbiAgaGVpZ2h0OiA1MCU7XFxuICBjb2xvcjogdmFyKC0tY29sb3IyKTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXG59XFxuLnN0YXJ0WW91ck9yZGVyID4gYSxcXG4ubGFuZ3VhZ2UgPiBhLFxcbi5sb2dpbiA+IGEge1xcbiAgZ2FwOiAwLjI1cmVtO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxNTBtcyBlYXNlLWluO1xcbn1cXG4uc3RhcnRZb3VyT3JkZXIgPiBhOmhvdmVyLFxcbi5sYW5ndWFnZSA+IGE6aG92ZXIsXFxuLmxvZ2luID4gYTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvcjUpO1xcbiAgei1pbmRleDogMTAwO1xcbn1cXG4uc3RhcnRZb3VyT3JkZXIgPiBhOmZvY3VzLFxcbi5sYW5ndWFnZSA+IGE6Zm9jdXMsXFxuLmxvZ2luID4gYTpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvcjUpO1xcbn1cXG4uc2lnblVwID4gYSB7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3IyKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yMik7XFxuICBjb2xvcjogdmFyKC0tY29sb3IxKTtcXG59XFxuLmxvZ28ge1xcbiAgaGVpZ2h0OiAxLjZyZW07XFxuICBwYWRkaW5nLWxlZnQ6IDR2dztcXG59XFxuLmxvZ29JTUcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvYmplY3QtZml0OiBjb250YWluO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uZmlsdGVyZWQge1xcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDApIHNhdHVyYXRlKDEwMCUpIGludmVydCgyOSUpIHNlcGlhKDY3JSkgc2F0dXJhdGUoNTE5OCUpXFxuICAgIGh1ZS1yb3RhdGUoMzQxZGVnKSBicmlnaHRuZXNzKDgzJSkgY29udHJhc3QoOTQlKTtcXG4gIC8qIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzIyMjUyNDcyL2hvdy1jYW4taS1jaGFuZ2UtdGhlLWNvbG9yLW9mLWFuLXN2Zy1lbGVtZW50Ki9cXG59XFxuLnNpZ25VcCA+IGE6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3I2KTtcXG59XFxuLnNpZ25VcCB7XFxuICBtYXJnaW4tcmlnaHQ6IDR2dyAhaW1wb3J0YW50O1xcbn1cXG5cXG4vKmxhbmd1YWdlIHBvcHVwIHN0eWxpbmcqL1xcbi5sYW5ndWFnZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5sYW5ndWFnZS1wb3B1cCB7XFxuICB6LWluZGV4OiA5OTtcXG4gIG9wYWNpdHk6IDE7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvcjEpO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI1KSAwcHggNTRweCA1NXB4LFxcbiAgICByZ2JhKDAsIDAsIDAsIDAuMTIpIDBweCAtMTJweCAzMHB4LCByZ2JhKDAsIDAsIDAsIDAuMTIpIDBweCA0cHggNnB4LFxcbiAgICByZ2JhKDAsIDAsIDAsIDAuMTcpIDBweCAxMnB4IDEzcHgsIHJnYmEoMCwgMCwgMCwgMC4wOSkgMHB4IC0zcHggNXB4O1xcbiAgdG9wOiAxMDAlO1xcbiAgcmlnaHQ6IC0xMDRweDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgaGVpZ2h0OiAxNDhweDtcXG4gIHdpZHRoOiAyODhweDtcXG4gIHBhZGRpbmc6IDFyZW0gMS43NXJlbSAxLjVyZW0gMS43NXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuLmxhbmd1YWdlLXBvcHVwOjphZnRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3IxKTtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDU1ZGVnKSBza2V3KDIwZGVnKTtcXG4gIHRvcDogLTAuMXJlbTtcXG4gIGxlZnQ6IDQ1JTtcXG59XFxuXFxuLmxhbmd1YWdlLXBvcHVwIGgzIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1zaXplOiAxLjE1cmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDAuNTVyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWNvbG9yMCk7XFxufVxcbi5sYW5ndWFnZS1wb3B1cCB1bCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5sYW5ndWFnZS1wb3B1cCBsaSB7XFxuICBtYXJnaW46IDA7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLmxhbmd1YWdlLXBvcHVwIGEge1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLXNlY29uZGFyeUZvbnQpO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yMyk7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcXG59XFxuLmxhbmd1YWdlLXBvcHVwIGE6aG92ZXIge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi8qbG9naW4gcG9wdXAgc3R5bGluZyBORUVEUyBXT1JLKi9cXG4ubG9naW4ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ubG9naW4tcG9wdXAge1xcbiAgei1pbmRleDogOTk7XFxuICBvcGFjaXR5OiAxO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3IxKTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNSkgMHB4IDU0cHggNTVweCxcXG4gICAgcmdiYSgwLCAwLCAwLCAwLjEyKSAwcHggLTEycHggMzBweCwgcmdiYSgwLCAwLCAwLCAwLjEyKSAwcHggNHB4IDZweCxcXG4gICAgcmdiYSgwLCAwLCAwLCAwLjE3KSAwcHggMTJweCAxM3B4LCByZ2JhKDAsIDAsIDAsIDAuMDkpIDBweCAtM3B4IDVweDtcXG4gIHRvcDogMTAwJTtcXG4gIHJpZ2h0OiAwO1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxuICBjb2xvcjogYmxhY2s7XFxuICBoZWlnaHQ6IDM0MHB4O1xcbiAgd2lkdGg6IDI4OHB4O1xcbiAgcGFkZGluZzogMXJlbSAxLjc1cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDAuNzVyZW07XFxufVxcbi5sb2dpbi1wb3B1cDo6YWZ0ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yMSk7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg1NWRlZykgc2tldygyMGRlZyk7XFxuICB0b3A6IC0wLjFyZW07XFxuICBsZWZ0OiA4MC41JTtcXG59XFxuLmxvZ2luLXBvcHVwIGgzIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1zaXplOiAxLjE1cmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDAuNTVyZW07XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tY29sb3IwKTtcXG59XFxuLmxvZ2luRm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMS4xNXJlbTtcXG59XFxuLmxvZ2luRm9ybVNlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5sb2dpbkZvcm1TZWN0aW9uIGxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1zZWNvbmRhcnlGb250KTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvcjcpO1xcbn1cXG4ubG9naW5Gb3JtIGlucHV0Om5vdChbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSkge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yNyk7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBwYWRkaW5nOiAwLjI1cmVtO1xcbiAgbWFyZ2luLXRvcDogNHB4O1xcbn1cXG4ubG9naW5Gb3JtIGlucHV0Om5vdChbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSk6Zm9jdXMge1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3IzKTtcXG59XFxuLmxvZ2luRm9ybVNlY3Rpb246bnRoLWNoaWxkKDIpIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmxvZ2luRm9ybVNlY3Rpb246bnRoLWNoaWxkKDIpIGEge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMzguNSU7XFxuICBib3R0b206IDE4cHg7XFxufVxcbi5sb2dpbkZvcm1TZWN0aW9uOm50aC1jaGlsZCgzKSBsYWJlbDpmaXJzdC1jaGlsZCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBmb250LXNpemU6IDAuODVyZW07XFxuICBsZWZ0OiA1MHB4O1xcbiAgYm90dG9tOiAxMjFweDtcXG59XFxuLnJlbWVtYmVyTWUge1xcbiAgYWNjZW50LWNvbG9yOiB2YXIoLS1jb2xvcjMpO1xcbiAgd2lkdGg6IDFyZW07XFxuICBoZWlnaHQ6IDFyZW07XFxufVxcbi5yZW1lbWJlck1lICsgbGFiZWwge1xcbiAgbWFyZ2luLXRvcDogNHB4O1xcbn1cXG4ubG9naW5Gb3JtU2VjdGlvbjpudGgtY2hpbGQoNCkgYnV0dG9uIHtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvcjEpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3IyKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yMik7XFxuICBwYWRkaW5nOiAwLjI1cmVtIDAuNjVyZW07XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmxvZ2luRm9ybVNlY3Rpb246bnRoLWNoaWxkKDQpIGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvcjYpO1xcbn1cXG4ubG9naW5Gb3JtU2VjdGlvbjpudGgtY2hpbGQoNCkgZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmb250LWZhbWlseTogdmFyKC0tc2Vjb25kYXJ5Rm9udCk7XFxuICBjb2xvcjogdmFyKC0tY29sb3I3KTtcXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcXG59XFxuLmxvZ2luRm9ybVNlY3Rpb246bnRoLWNoaWxkKDQpIGEge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW4tbGVmdDogMC41cmVtO1xcbn1cXG5cXG4ubG9naW4tcG9wdXAgYSB7XFxuICBmb250LWZhbWlseTogdmFyKC0tc2Vjb25kYXJ5Rm9udCk7XFxuICBjb2xvcjogdmFyKC0tY29sb3IzKTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xcbn1cXG4ubG9naW4tcG9wdXAgYTpob3ZlciB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuLypmb3IgbGFuZ3VhZ2UgQU5EIGxvZ2luIHBvcHVwcyovXFxuLmhpZGUtcG9wdXAge1xcbiAgb3BhY2l0eTogMDtcXG4gIHotaW5kZXg6IDE7XFxufVxcbi8qSGFtYnVyZ2VyIE1vYmlsZSBNZW51IHN0eWxpbmcgaGlkZGVuIG9uIGRlc2t0b3AqL1xcbi5tb2JpbGVNZW51IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5wYWdlV3JhcHBlciB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG4ucGFnZU92ZXJsYXkge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuXFxuLmJvdHRvbU5hdiB7XFxuICBoZWlnaHQ6IDUwJTtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1jb2xvcjApO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWNvbG9yMCk7XFxufVxcbi5ib3R0b21OYXYgbGkge1xcbiAgbWFyZ2luOiAwcmVtO1xcbn1cXG4uYm90dG9tTmF2IGxpOm50aC1jaGlsZCgzKSB7XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcbi5ib3R0b21OYXYgYSB7XFxuICBjb2xvcjogdmFyKC0tY29sb3IyKTtcXG59XFxuLm1lbnUgPiBhLFxcbi5zcGVjaWFscyA+IGEsXFxuLnBhcGFSZXdhcmRzID4gYSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbn1cXG4ubWVudSA+IGE6aG92ZXIsXFxuLnNwZWNpYWxzID4gYTpob3ZlcixcXG4ucGFwYVJld2FyZHMgPiBhOmhvdmVyIHtcXG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCB2YXIoLS1jb2xvcjMpO1xcbiAgcGFkZGluZy10b3A6IDMuOXB4OyAvKnN0b3BzIHRleHQgZnJvbSBtb3ZpbmcgdXB3YXJkcyB3aGVuIGJvcmRlciBpcyBhZGRlZCBvbiBob3ZlciovXFxufVxcbi5hY3RpdmUge1xcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIHZhcigtLWNvbG9yMyk7XFxuICBwYWRkaW5nLXRvcDogMy45cHg7XFxufVxcbi5tZW51IHtcXG4gIHBhZGRpbmctbGVmdDogNHZ3O1xcbn1cXG4ubG9naW4yID4gYSB7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yMSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvcjIpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3IyKTtcXG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxufVxcbi5wcm9tb0NvZGVGb3JtIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDUwO1xcbn1cXG4ucHJvbW9Db2RlRm9ybSA+IGlucHV0IHtcXG4gIHBhZGRpbmc6IDAuMzVyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvcjIpO1xcbn1cXG4ucHJvbW9Db2RlRm9ybSA+IGlucHV0OmZpcnN0LWNoaWxkIHtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAuM3JlbTtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDAuM3JlbTtcXG4gIGJvcmRlci1yaWdodDogbm9uZTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLnByb21vQ29kZUZvcm0gPiBpbnB1dDpmaXJzdC1jaGlsZDpmb2N1cyB7XFxuICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yMyk7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG4ucHJvbW9Db2RlRm9ybSA+IGlucHV0OmZpcnN0LWNoaWxkOjpwbGFjZWhvbGRlciB7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LWZhbWlseTogQ2FtYnJpYSwgR2VvcmdpYSwgVGltZXMsIFxcXCJUaW1lcyBOZXcgUm9tYW5cXFwiLCBzZXJpZjtcXG4gIGZvbnQtc2l6ZTogc21hbGxlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMC42cmVtO1xcbn1cXG5cXG4ucHJvbW9Db2RlRm9ybSA+IGlucHV0OmZpcnN0LWNoaWxkIHtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAuM3JlbTtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDAuM3JlbTtcXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbn1cXG5cXG4ucHJvbW9Db2RlRm9ybSA+IGlucHV0Om50aC1jaGlsZCgyKSB7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC4zcmVtO1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDAuM3JlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yMik7XFxuICBjb2xvcjogdmFyKC0tY29sb3IxKTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHJpZ2h0OiA0cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcXG59XFxuXFxuLmNhcnQge1xcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS1jb2xvcjApO1xcbiAgcGFkZGluZzogMXJlbSAwcmVtIDFyZW0gMXJlbTtcXG4gIG1hcmdpbi1yaWdodDogNHZ3ICFpbXBvcnRhbnQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5jYXJ0ID4gc3ZnIHtcXG4gIG1hcmdpbi1yaWdodDogMC4yNXJlbTtcXG59XFxuLmNhcnQgPiBzcGFuIHtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvcjQpO1xcbiAgZm9udC1zaXplOiAxLjM3NXJlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmNhcnQgPiBzcGFuOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIiRcXFwiO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yNCk7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3R0b206IDVweDtcXG59XFxuLmxvZ2luMiA+IGE6aG92ZXIsXFxuLnByb21vQ29kZUZvcm0gaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl06aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3I2KTtcXG59XFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuXFxuZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBib3JkZXItdG9wOiB2YXIoLS1jb2xvcjApIDFweCBzb2xpZDtcXG4gIHBhZGRpbmc6IDEuNXJlbSBtYXgoNHJlbSwgOHZ3KTtcXG59XFxuLmZvb3RlckNvbnRlbnRXaWR0aENvbnRyb2wge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5mb290ZXJMaW5rcyB7XFxuICB3aWR0aDogY2FsYygxMDAlIC0gbWluKDYwMHB4LCA0MiUpKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxufVxcbi5mb290ZXJMaW5rcyA+IGRpdiB7XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcbmZvb3RlciBhIHtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvcjcpO1xcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxuICBmb250LWZhbWlseTogdmFyKC0tc2Vjb25kYXJ5Rm9udCk7XFxuICBsZXR0ZXItc3BhY2luZzogMHB4O1xcbn1cXG5mb290ZXIgYTpob3ZlciB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuLmZvb3RlckxpbmtzIGg0IHtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvcjIpO1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuLmZyYW5jaGlzZSB7XFxuICB3aWR0aDogbWluKDYwMHB4LCA0MiUpO1xcbn1cXG4uZnJhbmNoaXNlID4gYSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxuICBjb2xvcjogYmxhY2s7XFxuICBnYXA6IDEuNXJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yMCk7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAxNTBtcyBlYXNlLWluO1xcbn1cXG4uZnJhbmNoaXNlIGEge1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1haW5Gb250KTtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG59XFxuLmZyYW5jaGlzZSBhOmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNCkgMHB4IDNweCA4cHg7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcbi5mb290ZXJCb3R0b20ge1xcbiAgbWFyZ2luLXRvcDogMnJlbTtcXG4gIHBhZGRpbmctdG9wOiAxLjc1cmVtO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWNvbG9yMCk7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rOyAqL1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXG59XFxuLmNvdW50cnlTZWxlY3Qge1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLXNlY29uZGFyeUZvbnQpO1xcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbn1cXG4uY291bnRyeVNlbGVjdDpmb2N1cyB7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvcjMpO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuLmxlZ2FsTGlua3Mge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMC43NXJlbTtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIG1hcmdpbjogMC41cmVtIGF1dG8gMXJlbSAwcmVtO1xcbn1cXG4ubGVnYWxMaW5rcyBsaSB7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lOyAqL1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLmZvb3RlckJvdHRvbSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5zb2NpYWxNZWRpYUxpbmtJY29ucyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICByaWdodDogMDtcXG4gIHRvcDogNnB4O1xcbiAgLyogYWxpZ24tc2VsZjogYmFzZWxpbmU7ICovXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC43NXJlbTtcXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogIzM4YTU3NTsgKi9cXG59XFxuLnNvY2lhbE1lZGlhTGlua0ljb25zIHN2ZyB7XFxuICB0cmFuc2l0aW9uOiBjb2xvciA0MDBtcyBlYXNlLWluLW91dDtcXG59XFxuLnNvY2lhbE1lZGlhTGlua0ljb25zIHN2Zzpob3ZlciB7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcblxcbi8qIFdoZW4gdGhlIGJyb3dzZXIgaXMgODMzcHggb3Igd2lkZXIgKi9cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4MzNweCkge1xcbiAgLm1vYmlsZSB7XFxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47ICovXFxuICB9XFxuICAuZGVza3RvcCB7XFxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcXG4gIH1cXG59XFxuLyogV2hlbiB0aGUgYnJvd3NlciBpcyBsZXNzIHRoYW4gODMzcHggd2lkZSAqL1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgzM3B4KSB7XFxuICAubW9iaWxlIHtcXG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmRlc2t0b3Age1xcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubmF2Q29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiAxMTRweDtcXG4gIH1cXG4gIC50b3BOYXYge1xcbiAgICBoZWlnaHQ6IDU1JTtcXG4gIH1cXG4gIC5ib3R0b21OYXYge1xcbiAgICBoZWlnaHQ6IDQ1JTtcXG4gIH1cXG4gIC5tZW51ID4gYSxcXG4gIC5zcGVjaWFscyA+IGEsXFxuICAucGFwYVJld2FyZHMgPiBhIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgfVxcbiAgLm1lbnUgPiBhOmhvdmVyLFxcbiAgLnNwZWNpYWxzID4gYTpob3ZlcixcXG4gIC5wYXBhUmV3YXJkcyA+IGE6aG92ZXIge1xcbiAgICBwYWRkaW5nLXRvcDogMy43cHg7IC8qc3RvcHMgdGV4dCBmcm9tIG1vdmluZyB1cHdhcmRzIHdoZW4gYm9yZGVyIGlzIGFkZGVkIG9uIGhvdmVyKi9cXG4gIH1cXG4gIC5hY3RpdmUge1xcbiAgICBwYWRkaW5nLXRvcDogMy43cHg7XFxuICB9XFxuICAubWVudSB7XFxuICAgIHBhZGRpbmctbGVmdDogMHJlbTtcXG4gIH1cXG4gIC5sb2dvIHtcXG4gICAgaGVpZ2h0OiAxLjZyZW07XFxuICAgIHBhZGRpbmctbGVmdDogMHJlbTtcXG4gIH1cXG4gIC5sb2dvIGltZyB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC43NSkgdHJhbnNsYXRlWCgtMjFweCk7XFxuICB9XFxuICBmb290ZXIge1xcbiAgICBwYWRkaW5nOiAxLjVyZW07XFxuICB9XFxuICAuZm9vdGVyQ29udGVudFdpZHRoQ29udHJvbCB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuICAuZm9vdGVyTGlua3Mge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG4gIC5mcmFuY2hpc2Uge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZy10b3A6IDEuNXJlbTtcXG4gIH1cXG4gIC5sZWdhbExpbmtzIHtcXG4gICAgbWFyZ2luLXRvcDogMS41cmVtO1xcbiAgfVxcbiAgLnNvY2lhbE1lZGlhTGlua0ljb25zIHtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gICAgbWFyZ2luLWxlZnQ6IDA7XFxuICB9XFxuICAvKioqKioqKioqKioqKioqKiogSGFtYnVyZ2VyKi9cXG4gIC5wYWdlV3JhcHBlciB7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSA1MDBtcztcXG4gIH1cXG4gIC5zbGlkZVBhZ2VXcmFwcGVyTCB7XFxuICAgIGFuaW1hdGlvbjogc2xpZGVQYWdlTCA1MDBtcyBmb3J3YXJkcztcXG4gIH1cXG4gIEBrZXlmcmFtZXMgc2xpZGVQYWdlTCB7XFxuICAgIHRvIHtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTg1JSk7XFxuICAgIH1cXG4gIH1cXG4gIC5zbGlkUGFnZSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtODUlKTtcXG4gIH1cXG4gIC5zbGlkZVBhZ2VXcmFwcGVyUiB7XFxuICAgIGFuaW1hdGlvbjogc2xpZGVQYWdlUiA1MDBtcyBmb3J3YXJkcztcXG4gIH1cXG4gIEBrZXlmcmFtZXMgc2xpZGVQYWdlUiB7XFxuICAgIHRvIHtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5zaG93TW9iaWxlTWVudSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHdpZHRoOiA4NSU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcXG4gICAgei1pbmRleDogNTAwO1xcbiAgICByaWdodDogMDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xcbiAgfVxcbiAgLnNsaWRlTW9iaWxlTWVudUwge1xcbiAgICBhbmltYXRpb246IHNsaWRlTWVudUwgNTAwbXMgZm9yd2FyZHM7XFxuICB9XFxuICBAa2V5ZnJhbWVzIHNsaWRlTWVudUwge1xcbiAgICB0byB7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgICB9XFxuICB9XFxuICAuc2xpZE1lbnUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICB9XFxuICAuc2xpZGVNb2JpbGVNZW51UiB7XFxuICAgIGFuaW1hdGlvbjogc2xpZGVNZW51UiA1MDBtcyBmb3J3YXJkcztcXG4gIH1cXG4gIEBrZXlmcmFtZXMgc2xpZGVNZW51UiB7XFxuICAgIHRvIHtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5kYXJrZW5PdmVybGF5IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgaW5zZXQ6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yNyk7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgei1pbmRleDogNTAwMDtcXG4gIH1cXG5cXG4gIC5tb2JpbGVNZW51IHVsIHtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogY2hhcnRyZXVzZTsgKi9cXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgbWFyZ2luOiAxLjI1cmVtIDEuNzVyZW07XFxuICB9XFxuICAubW9iaWxlTWVudSBsaSB7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHBpbms7ICovXFxuICAgIHBhZGRpbmc6IDFyZW0gMHJlbTtcXG4gIH1cXG4gIC5tb2JpbGVNZW51IGxpOm5vdCg6bGFzdC1jaGlsZCkge1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tY29sb3IwKTtcXG4gIH1cXG4gIC5tb2JpbGVNZW51IGEge1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7ICovXFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvcjIpO1xcbiAgICBwYWRkaW5nOiAwLjNyZW0gMC41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgfVxcbiAgLm1vYmlsZVNpZ25VcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yNCk7XFxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDE1MG1zIGVhc2UtaW47XFxuICB9XFxuICAubW9iaWxlU2lnblVwOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDM1NSwgNjglLCAyOCUpO1xcbiAgfVxcbiAgLm1vYmlsZU1lbnUgLnByb21vQ29kZUZvcm0ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG4gIC5tb2JpbGVNZW51IC5wcm9tb0NvZGVGb3JtIGlucHV0OmZpcnN0LWNoaWxkIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDA7XFxuICAgIHdpZHRoOiBjbGFtcCgxNjBweCwgNzAlLCA1MDBweCk7XFxuICB9XFxuXFxuICAvKioqKioqKioqKioqKioqKiogRW5kIG9mICBTdHlsaW5nIEhhbWJ1cmdlciovXFxufVxcbi8qIFdoZW4gdGhlIGJyb3dzZXIgaXMgbGVzcyB0aGFuIDYzOXB4IHdpZGUgKi9cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MzlweCkge1xcbiAgLm91ckNvbXBhbnkgdWwsXFxuICAub3VyUGl6emEgdWwsXFxuICAuaGVscCB1bCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGdhcDogMXB4O1xcbiAgICBtYXgtaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDUwMG1zO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgfVxcbiAgLm91ckNvbXBhbnkgbGksXFxuICAub3VyUGl6emEgbGksXFxuICAuaGVscCBsaSB7XFxuICAgIGFuaW1hdGlvbjogZHJvcGRvd24gNDAwbXMgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XFxuICB9XFxuXFxuICBAa2V5ZnJhbWVzIGRyb3Bkb3duIHtcXG4gICAgZnJvbSB7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMjBweCk7XFxuICAgIH1cXG4gICAgdG8ge1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xcbiAgICB9XFxuICB9XFxuXFxuICAuaGlkZGVuT25TbWFsbFNjcmVlbnMge1xcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuZm9vdGVyTGlua3Mge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbiAgLmZvb3RlckxpbmtzIGg0IHtcXG4gICAgbWFyZ2luOiAwLjc1cmVtIDByZW0gMC4yNXJlbSAwcmVtO1xcbiAgICBwYWRkaW5nOiAwLjI1cmVtIDByZW07XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1jb2xvcjApO1xcbiAgfVxcbiAgLm91ckNvbXBhbnksXFxuICAub3VyUGl6emEsXFxuICAuaGVscCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XFxuICAgIG1hcmdpbi10b3A6IDJweDtcXG4gIH1cXG5cXG4gIC5mb290ZXJMaW5rcyBoNDo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiB1cmwoYXNzZXRzL2NoZXZyb24tZG93bi5zdmcpO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAtNXB4O1xcbiAgICB0b3A6IDFyZW07XFxuICB9XFxuICAuZm9vdGVyTGlua3MgbGkge1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICB9XFxufVxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi8qaG9tZS5jc3MqL1xcblxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jYXJkU2xpZGVyLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY2FyZFNsaWRlci5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaGVyby5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hlcm8uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hvbWUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ob21lLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tZW51LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWVudS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcGFwYVJld2FyZHMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wYXBhUmV3YXJkcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3BlY2lhbHMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zcGVjaWFscy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgaG9tZSBmcm9tIFwiLi9ob21lL2hvbWVcIjtcbmltcG9ydCBtZW51IGZyb20gXCIuL21lbnUvbWVudVwiO1xuaW1wb3J0IHNwZWNpYWxzIGZyb20gXCIuL3NwZWNpYWxzL3NwZWNpYWxzXCI7XG5pbXBvcnQgcGFwYVJld2FyZHMgZnJvbSBcIi4vcGFwYVJld2FyZHMvcGFwYVJld2FyZHNcIjtcblxuLy8gaW1wb3J0IE1vdW50YWlucyBmcm9tIFwiLi9Nb3VudGFpbnMuanBnXCI7XG5cbmNvbnN0IG1haW4gPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbkNvbnRlbnRcIik7XG5cbmZ1bmN0aW9uIGNoYW5nZU1haW4ocGFnZSkge1xuICBtYWluLmlubmVySFRNTCA9IFwiXCI7XG4gIGxldCBjb250ZW50RWxlbWVudDtcbiAgaWYgKHBhZ2UgPT0gXCJob21lXCIpIHtcbiAgICBjb250ZW50RWxlbWVudCA9IGhvbWUoKTtcbiAgfSBlbHNlIGlmIChwYWdlID09IFwibWVudVwiKSB7XG4gICAgY29udGVudEVsZW1lbnQgPSBtZW51KCk7XG4gICAgbWVudVRhcmdldC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIHNwZWNpYWxzVGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgcGFwYVJld2FyZHNUYXJnZXQuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgfSBlbHNlIGlmIChwYWdlID09IFwic3BlY2lhbHNcIikge1xuICAgIGNvbnRlbnRFbGVtZW50ID0gc3BlY2lhbHMoKTtcbiAgICBzcGVjaWFsc1RhcmdldC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIG1lbnVUYXJnZXQuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICBwYXBhUmV3YXJkc1RhcmdldC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICB9IGVsc2UgaWYgKHBhZ2UgPT0gXCJwYXBhIHJld2FyZHNcIikge1xuICAgIGNvbnRlbnRFbGVtZW50ID0gcGFwYVJld2FyZHMoKTtcbiAgICBwYXBhUmV3YXJkc1RhcmdldC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIHNwZWNpYWxzVGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgbWVudVRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICB9XG4gIG1haW4uYXBwZW5kQ2hpbGQoY29udGVudEVsZW1lbnQpO1xufVxuXG5jb25zdCBsb2dvVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2dvIGltZ1wiKTtcbmxvZ29UYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY2hhbmdlTWFpbihcImhvbWVcIik7XG59KTtcblxuY29uc3Qgc3lvVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdGFydFlvdXJPcmRlciBhXCIpO1xuc3lvVGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNoYW5nZU1haW4oXCJzcGVjaWFsc1wiKTtcbn0pO1xuXG5jb25zdCBsYW5ndWFnZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGFuZ3VhZ2UgYVwiKTtcbmNvbnN0IGxhbmd1YWdlUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxhbmd1YWdlLXBvcHVwXCIpO1xubGFuZ3VhZ2VUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgLy9pZiB0aGUgbG9naW4gcG9wdXAgaXMgc3RpbGwgb3BlbiwgY2xvc2UgdGhlIGxvZ2luIHBvcHVwIGFuZCB0aGVuIG9wZW4gdGhlIGxhbmd1YWdlIHBvcHVwXG4gIGlmICghbG9naW5Qb3B1cC5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRlLXBvcHVwXCIpKSB7XG4gICAgbG9naW5Qb3B1cC5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZS1wb3B1cFwiKTtcbiAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmJsdXIoKTtcbiAgfVxuICBsYW5ndWFnZVBvcHVwLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlLXBvcHVwXCIpO1xuICBsYW5ndWFnZVRhcmdldC5mb2N1cygpO1xufSk7XG5cbmNvbnN0IGxvZ2luVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2dpbiBhXCIpO1xuY29uc3QgbG9naW5Qb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9naW4tcG9wdXBcIik7XG5sb2dpblRhcmdldC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAvL2lmIHRoZSBsYW5ndWFnZSBwb3B1cCBpcyBzdGlsbCBvcGVuLCBjbG9zZSB0aGUgbGFuZ3VhZ2UgcG9wdXAgYW5kIHRoZW4gb3BlbiB0aGUgbG9naW4gcG9wdXBcbiAgaWYgKCFsYW5ndWFnZVBvcHVwLmNsYXNzTGlzdC5jb250YWlucyhcImhpZGUtcG9wdXBcIikpIHtcbiAgICBsYW5ndWFnZVBvcHVwLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlLXBvcHVwXCIpO1xuICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1cigpO1xuICB9XG4gIGxvZ2luUG9wdXAuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGUtcG9wdXBcIik7XG4gIGxvZ2luVGFyZ2V0LmZvY3VzKCk7XG59KTtcblxuLy9wcm9jZXNzIGNsb3NpbmcgdGhlIHBvcHVwcyB3aGVuIHRoZSB1c2VyIGNsaWNrcyBlbHNld2hlcmUgYmVzaWRlcyB0aGUgcG9wdXBzXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgLy9pZiBib3RoIHBvcHVwcyBhcmUgaGlkZGVuXG4gIGlmIChcbiAgICBsYW5ndWFnZVBvcHVwLmNsYXNzTGlzdC5jb250YWlucyhcImhpZGUtcG9wdXBcIikgJiZcbiAgICBsb2dpblBvcHVwLmNsYXNzTGlzdC5jb250YWlucyhcImhpZGUtcG9wdXBcIilcbiAgKSB7XG4gICAgcmV0dXJuOyAvL2RvIG5vdGhpbmdcbiAgfSBlbHNlIHtcbiAgICAvL2lmIGl0J3MgdGhlIGxhbmd1YWdlIHBvcHVwIHRoYXQgb3BlbixcbiAgICBpZiAobG9naW5Qb3B1cC5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRlLXBvcHVwXCIpKSB7XG4gICAgICAvL2FuZCB0aGUgY2xpY2sgaXNudCBvbiB0aGUgbGFuZ3VhZ2UgcG9wdXAsIGl0cyBjaGlsZHJlbiBvciBpdHMgdGFyZ2V0XG4gICAgICBpZiAoXG4gICAgICAgIGUudGFyZ2V0ICE9PSBsYW5ndWFnZVBvcHVwICYmXG4gICAgICAgIGUudGFyZ2V0LmNsb3Nlc3QoXCIubGFuZ3VhZ2UtcG9wdXBcIikgIT09IGxhbmd1YWdlUG9wdXAgJiZcbiAgICAgICAgZS50YXJnZXQuY2xvc2VzdChcImFcIikgIT09IGxhbmd1YWdlVGFyZ2V0XG4gICAgICApIHtcbiAgICAgICAgLy9jbG9zZSB0aGUgbGFuZ3VhZ2UgcG9wdXAgYW5kIHVuZm9jdXMgdGhlIHRyaWdnZXJcbiAgICAgICAgbGFuZ3VhZ2VQb3B1cC5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZS1wb3B1cFwiKTtcbiAgICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyKCk7XG4gICAgICB9XG4gICAgICAvL2lmIGl0J3MgdGhlIGxvZ2luIHBvcHVwIHRoYXQgb3BlbixcbiAgICB9IGVsc2UgaWYgKGxhbmd1YWdlUG9wdXAuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGlkZS1wb3B1cFwiKSkge1xuICAgICAgLy9hbmQgdGhlIGNsaWNrIGlzbnQgb24gdGhlIGxvZ2luIHBvcHVwLCBpdHMgY2hpbGRyZW4gb3IgaXRzIHRhcmdldFxuICAgICAgaWYgKFxuICAgICAgICBlLnRhcmdldCAhPT0gbG9naW5Qb3B1cCAmJlxuICAgICAgICBlLnRhcmdldC5jbG9zZXN0KFwiLmxvZ2luLXBvcHVwXCIpICE9PSBsb2dpblBvcHVwICYmXG4gICAgICAgIGUudGFyZ2V0LmNsb3Nlc3QoXCJhXCIpICE9PSBsb2dpblRhcmdldFxuICAgICAgKSB7XG4gICAgICAgIC8vY2xvc2UgdGhlIGxvZ2luIHBvcHVwIGFuZCB1bmZvY3VzIHRoZSB0cmlnZ2VyXG4gICAgICAgIGxvZ2luUG9wdXAuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGUtcG9wdXBcIik7XG4gICAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1cigpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufSk7XG5cbmNvbnN0IHNpZ25VcFRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lnblVwIGFcIik7XG5zaWduVXBUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY2hhbmdlTWFpbihcImhvbWVcIik7XG59KTtcblxuLy9IYW1idXJnZXIgTW9iaWxlIE1lbnUgRnVuY3Rpb25hbGl0XG5jb25zdCBoYW1idXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhhbWJ1cmdlciBhXCIpO1xuY29uc3QgbW9iaWxlTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9iaWxlTWVudVwiKTtcbmNvbnN0IHBhZ2VPdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYWdlT3ZlcmxheVwiKTtcbmNvbnN0IHBhZ2VXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYWdlV3JhcHBlclwiKTtcblxuaGFtYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIG1vYmlsZU1lbnUuY2xhc3NMaXN0LmFkZChcInNob3dNb2JpbGVNZW51XCIpO1xuICBtb2JpbGVNZW51LmNsYXNzTGlzdC5hZGQoXCJzbGlkZU1vYmlsZU1lbnVMXCIpO1xuICBwYWdlT3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwiZGFya2VuT3ZlcmxheVwiKTtcbiAgcGFnZVdyYXBwZXIuY2xhc3NMaXN0LmFkZChcInNsaWRlUGFnZVdyYXBwZXJMXCIpO1xuICBwYWdlT3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKFxuICAgIFwiY2xpY2tcIixcbiAgICAoKSA9PiB7XG4gICAgICBwYWdlT3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKFwiZGFya2VuT3ZlcmxheVwiKTtcblxuICAgICAgcGFnZVdyYXBwZXIuY2xhc3NMaXN0LmFkZChcInNsaWRQYWdlXCIpO1xuICAgICAgcGFnZVdyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZShcInNsaWRlUGFnZVdyYXBwZXJMXCIpO1xuICAgICAgcGFnZVdyYXBwZXIuY2xhc3NMaXN0LmFkZChcInNsaWRlUGFnZVdyYXBwZXJSXCIpO1xuXG4gICAgICBtb2JpbGVNZW51LmNsYXNzTGlzdC5hZGQoXCJzbGlkTWVudVwiKTtcbiAgICAgIG1vYmlsZU1lbnUuY2xhc3NMaXN0LnJlbW92ZShcInNsaWRlTW9iaWxlTWVudUxcIik7XG4gICAgICBtb2JpbGVNZW51LmNsYXNzTGlzdC5hZGQoXCJzbGlkZU1vYmlsZU1lbnVSXCIpO1xuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgcGFnZVdyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZShcInNsaWRQYWdlXCIpO1xuICAgICAgICBwYWdlV3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKFwic2xpZGVQYWdlV3JhcHBlclJcIik7XG4gICAgICAgIG1vYmlsZU1lbnUuY2xhc3NMaXN0LnJlbW92ZShcInNsaWRNZW51XCIpO1xuICAgICAgICBtb2JpbGVNZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJzbGlkZU1vYmlsZU1lbnVSXCIpO1xuICAgICAgICBtb2JpbGVNZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93TW9iaWxlTWVudVwiKTtcbiAgICAgIH0sIDUwMCk7XG4gICAgfSxcbiAgICB7IG9uY2U6IHRydWUgfVxuICApO1xufSk7XG5cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5jb25zdCBtZW51VGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51IGFcIik7XG5tZW51VGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNoYW5nZU1haW4oXCJtZW51XCIpO1xuICBtZW51VGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoXCIuYWN0aXZlXCIpO1xufSk7XG5cbmNvbnN0IHNwZWNpYWxzVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zcGVjaWFscyBhXCIpO1xuc3BlY2lhbHNUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY2hhbmdlTWFpbihcInNwZWNpYWxzXCIpO1xufSk7XG5cbmNvbnN0IHBhcGFSZXdhcmRzVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYXBhUmV3YXJkcyBhXCIpO1xucGFwYVJld2FyZHNUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY2hhbmdlTWFpbihcInBhcGEgcmV3YXJkc1wiKTtcbn0pO1xuXG5jb25zdCBzaG9wcGluZ0NhcnRUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcnRcIik7XG5zaG9wcGluZ0NhcnRUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY2hhbmdlTWFpbihcInNwZWNpYWxzXCIpO1xufSk7XG5cbmNvbnN0IGZvb3RlckxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mb290ZXJMaW5rcyA+IGRpdlwiKTtcblxuLy8gZm9vdGVyTGlua3MuZm9yRWFjaCgobGluaykgPT4ge1xuLy8gICBsZXQgaGlkZGVuTGlua3MgPSBsaW5rLnF1ZXJ5U2VsZWN0b3IoXCJ1bFwiKTtcbi8vICAgbGluay5xdWVyeVNlbGVjdG9yKFwiaDRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbi8vICAgICBoaWRkZW5MaW5rcy5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuT25TbWFsbFNjcmVlbnNcIik7XG4vLyAgIH0pO1xuLy8gfSk7XG5cbmxldCBvdXJDb21wYW55ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdXJDb21wYW55XCIpO1xub3VyQ29tcGFueS5xdWVyeVNlbGVjdG9yKFwiaDRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgb3VyQ29tcGFueS5xdWVyeVNlbGVjdG9yKFwidWxcIikuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlbk9uU21hbGxTY3JlZW5zXCIpO1xuICBvdXJQaXp6YS5xdWVyeVNlbGVjdG9yKFwidWxcIikuY2xhc3NMaXN0LmFkZChcImhpZGRlbk9uU21hbGxTY3JlZW5zXCIpO1xuICBoZWxwLnF1ZXJ5U2VsZWN0b3IoXCJ1bFwiKS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuT25TbWFsbFNjcmVlbnNcIik7XG59KTtcbmxldCBvdXJQaXp6YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3VyUGl6emFcIik7XG5vdXJQaXp6YS5xdWVyeVNlbGVjdG9yKFwiaDRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgb3VyUGl6emEucXVlcnlTZWxlY3RvcihcInVsXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5PblNtYWxsU2NyZWVuc1wiKTtcbiAgb3VyQ29tcGFueS5xdWVyeVNlbGVjdG9yKFwidWxcIikuY2xhc3NMaXN0LmFkZChcImhpZGRlbk9uU21hbGxTY3JlZW5zXCIpO1xuICBoZWxwLnF1ZXJ5U2VsZWN0b3IoXCJ1bFwiKS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuT25TbWFsbFNjcmVlbnNcIik7XG59KTtcbmxldCBoZWxwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWxwXCIpO1xuaGVscC5xdWVyeVNlbGVjdG9yKFwiaDRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgaGVscC5xdWVyeVNlbGVjdG9yKFwidWxcIikuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlbk9uU21hbGxTY3JlZW5zXCIpO1xuICBvdXJQaXp6YS5xdWVyeVNlbGVjdG9yKFwidWxcIikuY2xhc3NMaXN0LmFkZChcImhpZGRlbk9uU21hbGxTY3JlZW5zXCIpO1xuICBvdXJDb21wYW55LnF1ZXJ5U2VsZWN0b3IoXCJ1bFwiKS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuT25TbWFsbFNjcmVlbnNcIik7XG59KTtcblxuLy9pbml0aWFsIHN0YXRlXG5jaGFuZ2VNYWluKFwiaG9tZVwiKTtcbiJdLCJuYW1lcyI6WyJjYXJkU2xpZGVyIiwiY29udGVudCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImlubmVySFRNTCIsImxlZnRBcnJvdyIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwic2xpZGVMZWZ0IiwiY2FyZFdpbmRvdyIsInJpZ2h0QXJyb3ciLCJzbGlkZVJpZ2h0IiwiZ2V0U2xpZGVyRGF0YSIsInJlZ2lvbldpZHRoIiwic2Nyb2xsUG9zaXRpb24iLCJNYXRoIiwiZmxvb3IiLCJzY3JvbGwiLCJsZWZ0IiwiYmVoYXZpb3IiLCJjYXJkV2lkdGgiLCJnZXRDYXJkV2lkdGgiLCJzY3JvbGxMZWZ0IiwiY2FyZFNsaWRlcldpZHRoIiwiZ2V0Q2FyZFNsaWRlcldpZHRoIiwibWF4U2Nyb2xsTGVmdCIsImdldE1heFNjcm9sbExlZnQiLCJsZWZ0VG9TY3JvbGwiLCJudW1DYXJkcyIsImdldE51bUNhcmRzIiwiZ2FwV2lkdGgiLCJwb3NpdGlvblJhbmdlcyIsImkiLCJ1cHBlckJvdW5kIiwicHVzaCIsInNjcm9sbFdpZHRoIiwiY2xpZW50V2lkdGgiLCJjYXJkIiwid2lkdGgiLCJvZmZzZXRXaWR0aCIsImNhcmRzIiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmd0aCIsImhlcm8iLCJob21lIiwiYXBwZW5kQ2hpbGQiLCJtZW51IiwidGV4dENvbnRlbnQiLCJwYXBhUmV3YXJkcyIsInNwZWNpYWxzIiwibWFpbiIsImJvZHkiLCJjaGFuZ2VNYWluIiwicGFnZSIsImNvbnRlbnRFbGVtZW50IiwibWVudVRhcmdldCIsInNwZWNpYWxzVGFyZ2V0IiwicmVtb3ZlIiwicGFwYVJld2FyZHNUYXJnZXQiLCJsb2dvVGFyZ2V0Iiwic3lvVGFyZ2V0IiwibGFuZ3VhZ2VUYXJnZXQiLCJsYW5ndWFnZVBvcHVwIiwibG9naW5Qb3B1cCIsImNvbnRhaW5zIiwidG9nZ2xlIiwiYWN0aXZlRWxlbWVudCIsImJsdXIiLCJmb2N1cyIsImxvZ2luVGFyZ2V0IiwiZSIsInRhcmdldCIsImNsb3Nlc3QiLCJzaWduVXBUYXJnZXQiLCJoYW1idXJnZXIiLCJtb2JpbGVNZW51IiwicGFnZU92ZXJsYXkiLCJwYWdlV3JhcHBlciIsInNldFRpbWVvdXQiLCJvbmNlIiwic2hvcHBpbmdDYXJ0VGFyZ2V0IiwiZm9vdGVyTGlua3MiLCJvdXJDb21wYW55Iiwib3VyUGl6emEiLCJoZWxwIl0sInNvdXJjZVJvb3QiOiIifQ==