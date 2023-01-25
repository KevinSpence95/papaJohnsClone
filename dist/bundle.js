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

function cardSlider() {
  var content = document.createElement("section");
  content.classList.add("sliderSection");
  content.innerHTML = "\n        <button class='leftArrow'>\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-arrow-left\"><line x1=\"19\" y1=\"12\" x2=\"5\" y2=\"12\"></line><polyline points=\"12 19 5 12 12 5\"></polyline></svg>\n        </button>\n        <div class='cardWindow'>\n            <div class='cardSlider'>\n                <div class='card'></div>\n                <div class='card'></div>\n                <div class='card'></div>\n                <div class='card'></div>\n                <div class='card'></div>\n                <div class='card'></div>\n            </div>\n        </div>\n        <button class='rightArrow'>\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-arrow-right\"><line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"></line><polyline points=\"12 5 19 12 12 19\"></polyline></svg>\n        </button>\n  ";
  var leftArrow = content.querySelector('.leftArrow');
  leftArrow.addEventListener('click', function () {
    slideLeft();
  });
  function slideLeft() {
    alert('left');
  }
  var rightArrow = content.querySelector('.rightArrow');
  rightArrow.addEventListener('click', function () {
    slideLeft();
  });
  function slideLeft() {
    alert('right');
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
___CSS_LOADER_EXPORT___.push([module.id, ".sliderSection {\n  background-color: cornflowerblue;\n  height: 500px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n}\n\n.cardWindow {\n  height: 400px;\n  width: min(100vw, calc(960px + 6rem));\n  background-color: azure;\n  overflow-x: scroll;\n\n  position:relative;\n}\n\n.cardSlider {\n  height: 400px;\n  width: fit-content;\n  padding: 0 1.5rem;\n  background-color: azure;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1.5rem;\n\n  \n  \n}\n\n.card {\n  min-width: 320px;\n  min-height: 362px;\n  border-radius: 1.5rem;\n  background-color: yellowgreen;\n}\n@media screen and (max-width: 833px) {\n    .cardSlider {\n        gap:.75rem;\n    }\n    .card {\n        min-width: 272px;\n    }\n}\n\nbutton {\n    position: absolute;\n    background-color: black;\n    border: 1px solid black;\n    color:white;\n    opacity: .4;\n    border-radius: 5rem;\n    padding:.5rem;\n    cursor:pointer;\n    z-index: 100;\n}\n\nbutton:hover {\n    opacity: 1;\n    color:white;\n}\n\n.leftArrow {\n    left:2rem;\n}\n\n.rightArrow {\n    right:2rem;\n}", "",{"version":3,"sources":["webpack://./src/home/cardSlider.css"],"names":[],"mappings":"AAAA;EACE,gCAAgC;EAChC,aAAa;EACb,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,qCAAqC;EACrC,uBAAuB;EACvB,kBAAkB;;EAElB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,iBAAiB;EACjB,uBAAuB;EACvB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;;;;AAIb;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,qBAAqB;EACrB,6BAA6B;AAC/B;AACA;IACI;QACI,UAAU;IACd;IACA;QACI,gBAAgB;IACpB;AACJ;;AAEA;IACI,kBAAkB;IAClB,uBAAuB;IACvB,uBAAuB;IACvB,WAAW;IACX,WAAW;IACX,mBAAmB;IACnB,aAAa;IACb,cAAc;IACd,YAAY;AAChB;;AAEA;IACI,UAAU;IACV,WAAW;AACf;;AAEA;IACI,SAAS;AACb;;AAEA;IACI,UAAU;AACd","sourcesContent":[".sliderSection {\n  background-color: cornflowerblue;\n  height: 500px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n}\n\n.cardWindow {\n  height: 400px;\n  width: min(100vw, calc(960px + 6rem));\n  background-color: azure;\n  overflow-x: scroll;\n\n  position:relative;\n}\n\n.cardSlider {\n  height: 400px;\n  width: fit-content;\n  padding: 0 1.5rem;\n  background-color: azure;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1.5rem;\n\n  \n  \n}\n\n.card {\n  min-width: 320px;\n  min-height: 362px;\n  border-radius: 1.5rem;\n  background-color: yellowgreen;\n}\n@media screen and (max-width: 833px) {\n    .cardSlider {\n        gap:.75rem;\n    }\n    .card {\n        min-width: 272px;\n    }\n}\n\nbutton {\n    position: absolute;\n    background-color: black;\n    border: 1px solid black;\n    color:white;\n    opacity: .4;\n    border-radius: 5rem;\n    padding:.5rem;\n    cursor:pointer;\n    z-index: 100;\n}\n\nbutton:hover {\n    opacity: 1;\n    color:white;\n}\n\n.leftArrow {\n    left:2rem;\n}\n\n.rightArrow {\n    right:2rem;\n}"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\n:root {\n  height: 100vh;\n  font-size: 16px;\n  --color0: rgb(209, 209, 209);\n  --color1: white;\n  --color2: black;\n  --color3: #38a575;\n  --color4: hsl(355, 68%, 48%);\n  --color5: rgb(230, 230, 230);\n  --color6: rgb(46, 46, 46);\n  --color7: rgb(98, 98, 98);\n  --mainFont: \"Oswald\", sans-serif;\n  --secondaryFont: Helvetica, Arial, sans-serif;\n}\n\n/* make these items responsive */\nimg,\npicture,\nsvg,\nvideo {\n  display: block;\n  max-width: 100%;\n}\n\n/* make the form elements inherit font properties the way everything else does */\ninput,\ntextarea,\nbutton,\nselect {\n  font: inherit;\n}\n\nbody {\n  min-height: 100%;\n  font-family: var(--mainFont);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  position: relative;\n}\n/*******************************************************************************************/\n\nul {\n  margin: 0;\n  padding: 0;\n  height: 100%;\n}\nli {\n  list-style: none;\n  height: 100%;\n}\na {\n  text-decoration: none;\n}\n.navContainer {\n  width: 100%;\n  height: 128px;\n  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n}\n.navContainer ul,\n.navContainer li,\n.navContainer a {\n  display: flex;\n  align-items: center;\n}\n.topNav {\n  height: 50%;\n}\n.topNav li {\n  margin: 0.5rem;\n}\n.topNav li:first-child {\n  margin-right: auto;\n}\n.topNav a {\n  height: 50%;\n  color: var(--color2);\n  padding: 0.5rem;\n  border-radius: 0.3rem;\n}\n.startYourOrder > a,\n.language > a,\n.login > a {\n  gap: 0.25rem;\n  transition: background-color 150ms ease-in;\n}\n.startYourOrder > a:hover,\n.language > a:hover,\n.login > a:hover {\n  background-color: var(--color5);\n  z-index: 100;\n}\n.startYourOrder > a:focus,\n.language > a:focus,\n.login > a:focus {\n  background-color: var(--color5);\n}\n.signUp > a {\n  border-radius: 1rem;\n  border: 1px solid var(--color2);\n  background-color: var(--color2);\n  color: var(--color1);\n}\n.logo {\n  height: 1.6rem;\n  padding-left: 4vw;\n}\n.logoIMG {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  cursor: pointer;\n}\n.filtered {\n  filter: brightness(0) saturate(100%) invert(29%) sepia(67%) saturate(5198%)\n    hue-rotate(341deg) brightness(83%) contrast(94%);\n  /* https://stackoverflow.com/questions/22252472/how-can-i-change-the-color-of-an-svg-element*/\n}\n.signUp > a:hover {\n  background-color: var(--color6);\n}\n.signUp {\n  margin-right: 4vw !important;\n}\n\n/*language popup styling*/\n.language {\n  position: relative;\n}\n.language-popup {\n  z-index: 99;\n  opacity: 1;\n  position: absolute;\n  background-color: var(--color1);\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,\n    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,\n    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;\n  top: 100%;\n  right: -104px;\n  font-size: 1rem;\n  text-transform: none;\n  color: black;\n  height: 148px;\n  width: 288px;\n  padding: 1rem 1.75rem 1.5rem 1.75rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n}\n.language-popup::after {\n  position: absolute;\n  content: \"\";\n  width: 20px;\n  height: 20px;\n  background-color: var(--color1);\n  transform: rotate(55deg) skew(20deg);\n  top: -0.1rem;\n  left: 45%;\n}\n\n.language-popup h3 {\n  display: inline-block;\n  width: 100%;\n  font-size: 1.15rem;\n  padding-bottom: 0.55rem;\n  margin-bottom: 1rem;\n  border-bottom: 1px solid var(--color0);\n}\n.language-popup ul {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n}\n.language-popup li {\n  margin: 0;\n  width: 100%;\n}\n.language-popup a {\n  font-family: var(--secondaryFont);\n  color: var(--color3);\n  height: 100%;\n  width: 100%;\n  font-size: 0.75rem;\n}\n.language-popup a:hover {\n  text-decoration: underline;\n}\n\n/*login popup styling NEEDS WORK*/\n.login {\n  position: relative;\n}\n.login-popup {\n  z-index: 99;\n  opacity: 1;\n  position: absolute;\n  background-color: var(--color1);\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,\n    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,\n    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;\n  top: 100%;\n  right: 0;\n  text-transform: none;\n  color: black;\n  height: 340px;\n  width: 288px;\n  padding: 1rem 1.75rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.login-popup::after {\n  position: absolute;\n  content: \"\";\n  width: 20px;\n  height: 20px;\n  background-color: var(--color1);\n  transform: rotate(55deg) skew(20deg);\n  top: -0.1rem;\n  left: 80.5%;\n}\n.login-popup h3 {\n  display: inline-block;\n  width: 100%;\n  font-size: 1.15rem;\n  padding-bottom: 0.55rem;\n  border-bottom: 1px solid var(--color0);\n}\n.loginForm {\n  display: flex;\n  flex-direction: column;\n  gap: 1.15rem;\n}\n.loginFormSection {\n  display: flex;\n  flex-direction: column;\n}\n.loginFormSection label {\n  font-size: 0.75rem;\n  font-family: var(--secondaryFont);\n  color: var(--color7);\n}\n.loginForm input:not([type=\"checkbox\"]) {\n  outline: none;\n  border: 1px solid var(--color7);\n  border-radius: 6px;\n  padding: 0.25rem;\n  margin-top: 4px;\n}\n.loginForm input:not([type=\"checkbox\"]):focus {\n  border: 1px solid var(--color3);\n}\n.loginFormSection:nth-child(2) {\n  position: relative;\n}\n.loginFormSection:nth-child(2) a {\n  position: absolute;\n  left: 38.5%;\n  bottom: 18px;\n}\n.loginFormSection:nth-child(3) label:first-child {\n  position: absolute;\n  font-size: 0.85rem;\n  left: 50px;\n  bottom: 121px;\n}\n.rememberMe {\n  accent-color: var(--color3);\n  width: 1rem;\n  height: 1rem;\n}\n.rememberMe + label {\n  margin-top: 4px;\n}\n.loginFormSection:nth-child(4) button {\n  text-transform: uppercase;\n  font-size: 0.9rem;\n  color: var(--color1);\n  background-color: var(--color2);\n  border: 1px solid var(--color2);\n  padding: 0.25rem 0.65rem;\n  border-radius: 1rem;\n  width: fit-content;\n  margin-bottom: 1rem;\n  cursor: pointer;\n}\n.loginFormSection:nth-child(4) button:hover {\n  background-color: var(--color6);\n}\n.loginFormSection:nth-child(4) div {\n  display: flex;\n  font-family: var(--secondaryFont);\n  color: var(--color7);\n  font-size: 0.75rem;\n}\n.loginFormSection:nth-child(4) a {\n  display: inline-block;\n  height: fit-content;\n  width: fit-content;\n  padding: 0;\n  margin-left: 0.5rem;\n}\n\n.login-popup a {\n  font-family: var(--secondaryFont);\n  color: var(--color3);\n  height: 100%;\n  width: 100%;\n  font-size: 0.75rem;\n}\n.login-popup a:hover {\n  text-decoration: underline;\n}\n\n/*for language AND login popups*/\n.hide-popup {\n  opacity: 0;\n  z-index: 1;\n}\n/*Hamburger Mobile Menu styling hidden on desktop*/\n.mobileMenu {\n  display: none;\n}\n.pageWrapper {\n  height: 100vh;\n}\n.pageOverlay {\n  display: none;\n}\n\n/*******************************************************************************************/\n\n.bottomNav {\n  height: 50%;\n  border-top: 1px solid var(--color0);\n  border-bottom: 1px solid var(--color0);\n}\n.bottomNav li {\n  margin: 0rem;\n}\n.bottomNav li:nth-child(3) {\n  margin-right: auto;\n}\n.bottomNav a {\n  color: var(--color2);\n}\n.menu > a,\n.specials > a,\n.papaRewards > a {\n  height: 100%;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n  font-size: larger;\n}\n.menu > a:hover,\n.specials > a:hover,\n.papaRewards > a:hover {\n  border-bottom: 4px solid var(--color3);\n  padding-top: 3.9px; /*stops text from moving upwards when border is added on hover*/\n}\n.active {\n  border-bottom: 4px solid var(--color3);\n  padding-top: 3.9px;\n}\n.menu {\n  padding-left: 4vw;\n}\n.login2 > a {\n  padding: 0.5rem;\n  border-radius: 2rem;\n  color: var(--color1);\n  background-color: var(--color2);\n  border: 1px solid var(--color2);\n  margin-right: 0.5rem;\n  font-size: 0.8rem;\n}\n.promoCodeForm {\n  position: relative;\n  z-index: 50;\n}\n.promoCodeForm > input {\n  padding: 0.35rem;\n  border: 1px solid var(--color2);\n}\n.promoCodeForm > input:first-child {\n  border-top-left-radius: 0.3rem;\n  border-bottom-left-radius: 0.3rem;\n  border-right: none;\n  position: relative;\n}\n.promoCodeForm > input:first-child:focus {\n  border-color: var(--color3);\n  outline: none;\n}\n.promoCodeForm > input:first-child::placeholder {\n  font-style: italic;\n  font-family: Cambria, Georgia, Times, \"Times New Roman\", serif;\n  font-size: smaller;\n  position: absolute;\n  top: 0.6rem;\n}\n\n.promoCodeForm > input:first-child {\n  border-top-left-radius: 0.3rem;\n  border-bottom-left-radius: 0.3rem;\n  margin-left: 1rem;\n}\n\n.promoCodeForm > input:nth-child(2) {\n  border-top-right-radius: 0.3rem;\n  border-bottom-right-radius: 0.3rem;\n  background-color: var(--color2);\n  color: var(--color1);\n  position: relative;\n  right: 4px;\n  margin-right: 1rem;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\n\n.cart {\n  border-left: 1px solid var(--color0);\n  padding: 1rem 0rem 1rem 1rem;\n  margin-right: 4vw !important;\n  cursor: pointer;\n}\n.cart > svg {\n  margin-right: 0.25rem;\n}\n.cart > span {\n  color: var(--color4);\n  font-size: 1.375rem;\n  position: relative;\n}\n.cart > span::before {\n  content: \"$\";\n  color: var(--color4);\n  font-size: 1rem;\n  position: relative;\n  bottom: 5px;\n}\n.login2 > a:hover,\n.promoCodeForm input[type=\"submit\"]:hover {\n  background-color: var(--color6);\n}\n\n/*******************************************************************************************/\n\nfooter {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  border-top: var(--color0) 1px solid;\n  padding: 1.5rem max(4rem, 8vw);\n}\n.footerContentWidthControl {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n.footerLinks {\n  width: calc(100% - min(600px, 42%));\n  display: flex;\n  align-items: baseline;\n}\n.footerLinks > div {\n  margin-right: auto;\n}\nfooter a {\n  color: var(--color7);\n  font-size: 0.75rem;\n  text-transform: none;\n  font-family: var(--secondaryFont);\n  letter-spacing: 0px;\n}\nfooter a:hover {\n  text-decoration: underline;\n}\n.footerLinks h4 {\n  color: var(--color2);\n  font-size: 0.9rem;\n  text-transform: none;\n}\n.franchise {\n  width: min(600px, 42%);\n}\n.franchise > a {\n  width: 100%;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  text-transform: none;\n  color: black;\n  gap: 1.5rem;\n  border: 1px solid var(--color0);\n  border-radius: 0.5rem;\n  padding: 1rem;\n  transition: box-shadow 150ms ease-in;\n}\n.franchise a {\n  font-family: var(--mainFont);\n  font-size: 1.25rem;\n}\n.franchise a:hover {\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n  text-decoration: none;\n}\n.footerBottom {\n  margin-top: 2rem;\n  padding-top: 1.75rem;\n  border-top: 1px solid var(--color0);\n  /* background-color: pink; */\n  display: flex;\n  align-items: baseline;\n}\n.countrySelect {\n  width: fit-content;\n  font-family: var(--secondaryFont);\n  font-size: 0.75rem;\n  padding: 0.5rem;\n  border-radius: 5px;\n  margin-right: 1rem;\n}\n.countrySelect:focus {\n  border: 1px solid var(--color3);\n  outline: none;\n}\n.legalLinks {\n  display: flex;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n  margin: 0.5rem auto 1rem 0rem;\n}\n.legalLinks li {\n  /* background-color: aquamarine; */\n  display: flex;\n}\n.footerBottom {\n  position: relative;\n}\n.socialMediaLinkIcons {\n  position: relative;\n  right: 0;\n  top: 6px;\n  /* align-self: baseline; */\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-left: 1rem;\n  /* background-color: #38a575; */\n}\n.socialMediaLinkIcons svg {\n  transition: color 400ms ease-in-out;\n}\n.socialMediaLinkIcons svg:hover {\n  color: black;\n}\n\n/*******************************************************************************************/\n\n/* When the browser is 833px or wider */\n@media screen and (min-width: 833px) {\n  .mobile {\n    display: none !important;\n    /* background-color: green; */\n  }\n  .desktop {\n    display: flex !important;\n  }\n}\n/* When the browser is less than 833px wide */\n@media screen and (max-width: 833px) {\n  .mobile {\n    display: flex !important;\n  }\n  .desktop {\n    display: none !important;\n  }\n  .navContainer {\n    height: 114px;\n  }\n  .topNav {\n    height: 55%;\n  }\n  .bottomNav {\n    height: 45%;\n  }\n  .menu > a,\n  .specials > a,\n  .papaRewards > a {\n    font-size: 1rem;\n  }\n  .menu > a:hover,\n  .specials > a:hover,\n  .papaRewards > a:hover {\n    padding-top: 3.7px; /*stops text from moving upwards when border is added on hover*/\n  }\n  .active {\n    padding-top: 3.7px;\n  }\n  .menu {\n    padding-left: 0rem;\n  }\n  .logo {\n    height: 1.6rem;\n    padding-left: 0rem;\n  }\n  .logo img {\n    transform: scale(0.75) translateX(-21px);\n  }\n  footer {\n    padding: 1.5rem;\n  }\n  .footerContentWidthControl {\n    flex-direction: column;\n  }\n  .footerLinks {\n    width: 100%;\n  }\n  .franchise {\n    width: 100%;\n    padding-top: 1.5rem;\n  }\n  .legalLinks {\n    margin-top: 1.5rem;\n  }\n  .socialMediaLinkIcons {\n    align-self: flex-start;\n    margin-left: 0;\n  }\n  /***************** Hamburger*/\n  .pageWrapper {\n    transition: transform 500ms;\n  }\n  .slidePageWrapperL {\n    animation: slidePageL 500ms forwards;\n  }\n  @keyframes slidePageL {\n    to {\n      transform: translateX(-85%);\n    }\n  }\n  .slidPage {\n    transform: translateX(-85%);\n  }\n  .slidePageWrapperR {\n    animation: slidePageR 500ms forwards;\n  }\n  @keyframes slidePageR {\n    to {\n      transform: translateX(0);\n    }\n  }\n\n  .showMobileMenu {\n    display: block;\n    position: fixed;\n    width: 85%;\n    height: 100%;\n    background-color: #e6e6e6;\n    z-index: 500;\n    right: 0;\n    transform: translateX(100%);\n  }\n  .slideMobileMenuL {\n    animation: slideMenuL 500ms forwards;\n  }\n  @keyframes slideMenuL {\n    to {\n      transform: translateX(0);\n    }\n  }\n  .slidMenu {\n    transform: translateX(0);\n  }\n  .slideMobileMenuR {\n    animation: slideMenuR 500ms forwards;\n  }\n  @keyframes slideMenuR {\n    to {\n      transform: translateX(100%);\n    }\n  }\n\n  .darkenOverlay {\n    display: block;\n    position: absolute;\n    inset: 0;\n    background-color: var(--color7);\n    opacity: 0.5;\n    z-index: 5000;\n  }\n\n  .mobileMenu ul {\n    /* background-color: chartreuse; */\n    height: fit-content;\n    margin: 1.25rem 1.75rem;\n  }\n  .mobileMenu li {\n    /* background-color: pink; */\n    padding: 1rem 0rem;\n  }\n  .mobileMenu li:not(:last-child) {\n    border-top: 1px solid var(--color0);\n  }\n  .mobileMenu a {\n    /* background-color: orange; */\n    color: var(--color2);\n    padding: 0.3rem 0.5rem;\n    border-radius: 1rem;\n  }\n  .mobileSignUp {\n    background-color: var(--color4);\n    color: white !important;\n    transition: background-color 150ms ease-in;\n  }\n  .mobileSignUp:hover {\n    background-color: hsl(355, 68%, 28%);\n  }\n  .mobileMenu .promoCodeForm {\n    display: block;\n  }\n  .mobileMenu .promoCodeForm input:first-child {\n    margin-left: 0;\n    width: clamp(160px, 70%, 500px);\n  }\n\n  /***************** End of  Styling Hamburger*/\n}\n/* When the browser is less than 639px wide */\n@media screen and (max-width: 639px) {\n  .ourCompany ul,\n  .ourPizza ul,\n  .help ul {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: flex-start;\n    gap: 1px;\n    max-height: fit-content;\n    transition: transform 500ms;\n    overflow: hidden;\n  }\n  .ourCompany li,\n  .ourPizza li,\n  .help li {\n    animation: dropdown 400ms ease-in-out forwards;\n  }\n\n  @keyframes dropdown {\n    from {\n      transform: translateY(-120px);\n    }\n    to {\n      transform: translateY(0px);\n    }\n  }\n\n  .hiddenOnSmallScreens {\n    display: none !important;\n  }\n  .footerLinks {\n    flex-direction: column;\n  }\n  .footerLinks h4 {\n    margin: 0.75rem 0rem 0.25rem 0rem;\n    padding: 0.25rem 0rem;\n    border-bottom: 1px solid var(--color0);\n  }\n  .ourCompany,\n  .ourPizza,\n  .help {\n    width: 100%;\n    height: fit-content;\n    position: relative;\n    padding-bottom: 0.5rem;\n    margin-top: 2px;\n  }\n\n  h4::after {\n    content: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    position: absolute;\n    right: -5px;\n    top: 1rem;\n  }\n  .footerLinks li {\n    height: auto;\n  }\n}\n/*******************************************************************************************/\n/*home.css*/\n\n/*******************************************************************************************/\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AACA;;;EAGE,sBAAsB;AACxB;;AAEA;EACE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,eAAe;EACf,4BAA4B;EAC5B,eAAe;EACf,eAAe;EACf,iBAAiB;EACjB,4BAA4B;EAC5B,4BAA4B;EAC5B,yBAAyB;EACzB,yBAAyB;EACzB,gCAAgC;EAChC,6CAA6C;AAC/C;;AAEA,gCAAgC;AAChC;;;;EAIE,cAAc;EACd,eAAe;AACjB;;AAEA,gFAAgF;AAChF;;;;EAIE,aAAa;AACf;;AAEA;EACE,gBAAgB;EAChB,4BAA4B;EAC5B,yBAAyB;EACzB,qBAAqB;EACrB,kBAAkB;AACpB;AACA,4FAA4F;;AAE5F;EACE,SAAS;EACT,UAAU;EACV,YAAY;AACd;AACA;EACE,gBAAgB;EAChB,YAAY;AACd;AACA;EACE,qBAAqB;AACvB;AACA;EACE,WAAW;EACX,aAAa;EACb,iDAAiD;AACnD;AACA;;;EAGE,aAAa;EACb,mBAAmB;AACrB;AACA;EACE,WAAW;AACb;AACA;EACE,cAAc;AAChB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,WAAW;EACX,oBAAoB;EACpB,eAAe;EACf,qBAAqB;AACvB;AACA;;;EAGE,YAAY;EACZ,0CAA0C;AAC5C;AACA;;;EAGE,+BAA+B;EAC/B,YAAY;AACd;AACA;;;EAGE,+BAA+B;AACjC;AACA;EACE,mBAAmB;EACnB,+BAA+B;EAC/B,+BAA+B;EAC/B,oBAAoB;AACtB;AACA;EACE,cAAc;EACd,iBAAiB;AACnB;AACA;EACE,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,eAAe;AACjB;AACA;EACE;oDACkD;EAClD,6FAA6F;AAC/F;AACA;EACE,+BAA+B;AACjC;AACA;EACE,4BAA4B;AAC9B;;AAEA,yBAAyB;AACzB;EACE,kBAAkB;AACpB;AACA;EACE,WAAW;EACX,UAAU;EACV,kBAAkB;EAClB,+BAA+B;EAC/B;;uEAEqE;EACrE,SAAS;EACT,aAAa;EACb,eAAe;EACf,oBAAoB;EACpB,YAAY;EACZ,aAAa;EACb,YAAY;EACZ,oCAAoC;EACpC,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,uBAAuB;AACzB;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,WAAW;EACX,YAAY;EACZ,+BAA+B;EAC/B,oCAAoC;EACpC,YAAY;EACZ,SAAS;AACX;;AAEA;EACE,qBAAqB;EACrB,WAAW;EACX,kBAAkB;EAClB,uBAAuB;EACvB,mBAAmB;EACnB,sCAAsC;AACxC;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,WAAW;AACb;AACA;EACE,SAAS;EACT,WAAW;AACb;AACA;EACE,iCAAiC;EACjC,oBAAoB;EACpB,YAAY;EACZ,WAAW;EACX,kBAAkB;AACpB;AACA;EACE,0BAA0B;AAC5B;;AAEA,iCAAiC;AACjC;EACE,kBAAkB;AACpB;AACA;EACE,WAAW;EACX,UAAU;EACV,kBAAkB;EAClB,+BAA+B;EAC/B;;uEAEqE;EACrE,SAAS;EACT,QAAQ;EACR,oBAAoB;EACpB,YAAY;EACZ,aAAa;EACb,YAAY;EACZ,qBAAqB;EACrB,aAAa;EACb,sBAAsB;EACtB,YAAY;AACd;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,WAAW;EACX,YAAY;EACZ,+BAA+B;EAC/B,oCAAoC;EACpC,YAAY;EACZ,WAAW;AACb;AACA;EACE,qBAAqB;EACrB,WAAW;EACX,kBAAkB;EAClB,uBAAuB;EACvB,sCAAsC;AACxC;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;AACd;AACA;EACE,aAAa;EACb,sBAAsB;AACxB;AACA;EACE,kBAAkB;EAClB,iCAAiC;EACjC,oBAAoB;AACtB;AACA;EACE,aAAa;EACb,+BAA+B;EAC/B,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;AACjB;AACA;EACE,+BAA+B;AACjC;AACA;EACE,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;AACd;AACA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,UAAU;EACV,aAAa;AACf;AACA;EACE,2BAA2B;EAC3B,WAAW;EACX,YAAY;AACd;AACA;EACE,eAAe;AACj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;AACA;EACE,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,QAAQ;EACR,QAAQ;EACR,0BAA0B;EAC1B,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,iBAAiB;EACjB,+BAA+B;AACjC;AACA;EACE,mCAAmC;AACrC;AACA;EACE,YAAY;AACd;;AAEA,4FAA4F;;AAE5F,uCAAuC;AACvC;EACE;IACE,wBAAwB;IACxB,6BAA6B;EAC/B;EACA;IACE,wBAAwB;EAC1B;AACF;AACA,6CAA6C;AAC7C;EACE;IACE,wBAAwB;EAC1B;EACA;IACE,wBAAwB;EAC1B;EACA;IACE,aAAa;EACf;EACA;IACE,WAAW;EACb;EACA;IACE,WAAW;EACb;EACA;;;IAGE,eAAe;EACjB;EACA;;;IAGE,kBAAkB,EAAE,+DAA+D;EACrF;EACA;IACE,kBAAkB;EACpB;EACA;IACE,kBAAkB;EACpB;EACA;IACE,cAAc;IACd,kBAAkB;EACpB;EACA;IACE,wCAAwC;EAC1C;EACA;IACE,eAAe;EACjB;EACA;IACE,sBAAsB;EACxB;EACA;IACE,WAAW;EACb;EACA;IACE,WAAW;IACX,mBAAmB;EACrB;EACA;IACE,kBAAkB;EACpB;EACA;IACE,sBAAsB;IACtB,cAAc;EAChB;EACA,6BAA6B;EAC7B;IACE,2BAA2B;EAC7B;EACA;IACE,oCAAoC;EACtC;EACA;IACE;MACE,2BAA2B;IAC7B;EACF;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,oCAAoC;EACtC;EACA;IACE;MACE,wBAAwB;IAC1B;EACF;;EAEA;IACE,cAAc;IACd,eAAe;IACf,UAAU;IACV,YAAY;IACZ,yBAAyB;IACzB,YAAY;IACZ,QAAQ;IACR,2BAA2B;EAC7B;EACA;IACE,oCAAoC;EACtC;EACA;IACE;MACE,wBAAwB;IAC1B;EACF;EACA;IACE,wBAAwB;EAC1B;EACA;IACE,oCAAoC;EACtC;EACA;IACE;MACE,2BAA2B;IAC7B;EACF;;EAEA;IACE,cAAc;IACd,kBAAkB;IAClB,QAAQ;IACR,+BAA+B;IAC/B,YAAY;IACZ,aAAa;EACf;;EAEA;IACE,kCAAkC;IAClC,mBAAmB;IACnB,uBAAuB;EACzB;EACA;IACE,4BAA4B;IAC5B,kBAAkB;EACpB;EACA;IACE,mCAAmC;EACrC;EACA;IACE,8BAA8B;IAC9B,oBAAoB;IACpB,sBAAsB;IACtB,mBAAmB;EACrB;EACA;IACE,+BAA+B;IAC/B,uBAAuB;IACvB,0CAA0C;EAC5C;EACA;IACE,oCAAoC;EACtC;EACA;IACE,cAAc;EAChB;EACA;IACE,cAAc;IACd,+BAA+B;EACjC;;EAEA,6CAA6C;AAC/C;AACA,6CAA6C;AAC7C;EACE;;;IAGE,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,2BAA2B;IAC3B,QAAQ;IACR,uBAAuB;IACvB,2BAA2B;IAC3B,gBAAgB;EAClB;EACA;;;IAGE,8CAA8C;EAChD;;EAEA;IACE;MACE,6BAA6B;IAC/B;IACA;MACE,0BAA0B;IAC5B;EACF;;EAEA;IACE,wBAAwB;EAC1B;EACA;IACE,sBAAsB;EACxB;EACA;IACE,iCAAiC;IACjC,qBAAqB;IACrB,sCAAsC;EACxC;EACA;;;IAGE,WAAW;IACX,mBAAmB;IACnB,kBAAkB;IAClB,sBAAsB;IACtB,eAAe;EACjB;;EAEA;IACE,gDAAqC;IACrC,kBAAkB;IAClB,WAAW;IACX,SAAS;EACX;EACA;IACE,YAAY;EACd;AACF;AACA,4FAA4F;AAC5F,WAAW;;AAEX,4FAA4F","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap\");\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\n:root {\n  height: 100vh;\n  font-size: 16px;\n  --color0: rgb(209, 209, 209);\n  --color1: white;\n  --color2: black;\n  --color3: #38a575;\n  --color4: hsl(355, 68%, 48%);\n  --color5: rgb(230, 230, 230);\n  --color6: rgb(46, 46, 46);\n  --color7: rgb(98, 98, 98);\n  --mainFont: \"Oswald\", sans-serif;\n  --secondaryFont: Helvetica, Arial, sans-serif;\n}\n\n/* make these items responsive */\nimg,\npicture,\nsvg,\nvideo {\n  display: block;\n  max-width: 100%;\n}\n\n/* make the form elements inherit font properties the way everything else does */\ninput,\ntextarea,\nbutton,\nselect {\n  font: inherit;\n}\n\nbody {\n  min-height: 100%;\n  font-family: var(--mainFont);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  position: relative;\n}\n/*******************************************************************************************/\n\nul {\n  margin: 0;\n  padding: 0;\n  height: 100%;\n}\nli {\n  list-style: none;\n  height: 100%;\n}\na {\n  text-decoration: none;\n}\n.navContainer {\n  width: 100%;\n  height: 128px;\n  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n}\n.navContainer ul,\n.navContainer li,\n.navContainer a {\n  display: flex;\n  align-items: center;\n}\n.topNav {\n  height: 50%;\n}\n.topNav li {\n  margin: 0.5rem;\n}\n.topNav li:first-child {\n  margin-right: auto;\n}\n.topNav a {\n  height: 50%;\n  color: var(--color2);\n  padding: 0.5rem;\n  border-radius: 0.3rem;\n}\n.startYourOrder > a,\n.language > a,\n.login > a {\n  gap: 0.25rem;\n  transition: background-color 150ms ease-in;\n}\n.startYourOrder > a:hover,\n.language > a:hover,\n.login > a:hover {\n  background-color: var(--color5);\n  z-index: 100;\n}\n.startYourOrder > a:focus,\n.language > a:focus,\n.login > a:focus {\n  background-color: var(--color5);\n}\n.signUp > a {\n  border-radius: 1rem;\n  border: 1px solid var(--color2);\n  background-color: var(--color2);\n  color: var(--color1);\n}\n.logo {\n  height: 1.6rem;\n  padding-left: 4vw;\n}\n.logoIMG {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  cursor: pointer;\n}\n.filtered {\n  filter: brightness(0) saturate(100%) invert(29%) sepia(67%) saturate(5198%)\n    hue-rotate(341deg) brightness(83%) contrast(94%);\n  /* https://stackoverflow.com/questions/22252472/how-can-i-change-the-color-of-an-svg-element*/\n}\n.signUp > a:hover {\n  background-color: var(--color6);\n}\n.signUp {\n  margin-right: 4vw !important;\n}\n\n/*language popup styling*/\n.language {\n  position: relative;\n}\n.language-popup {\n  z-index: 99;\n  opacity: 1;\n  position: absolute;\n  background-color: var(--color1);\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,\n    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,\n    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;\n  top: 100%;\n  right: -104px;\n  font-size: 1rem;\n  text-transform: none;\n  color: black;\n  height: 148px;\n  width: 288px;\n  padding: 1rem 1.75rem 1.5rem 1.75rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n}\n.language-popup::after {\n  position: absolute;\n  content: \"\";\n  width: 20px;\n  height: 20px;\n  background-color: var(--color1);\n  transform: rotate(55deg) skew(20deg);\n  top: -0.1rem;\n  left: 45%;\n}\n\n.language-popup h3 {\n  display: inline-block;\n  width: 100%;\n  font-size: 1.15rem;\n  padding-bottom: 0.55rem;\n  margin-bottom: 1rem;\n  border-bottom: 1px solid var(--color0);\n}\n.language-popup ul {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n}\n.language-popup li {\n  margin: 0;\n  width: 100%;\n}\n.language-popup a {\n  font-family: var(--secondaryFont);\n  color: var(--color3);\n  height: 100%;\n  width: 100%;\n  font-size: 0.75rem;\n}\n.language-popup a:hover {\n  text-decoration: underline;\n}\n\n/*login popup styling NEEDS WORK*/\n.login {\n  position: relative;\n}\n.login-popup {\n  z-index: 99;\n  opacity: 1;\n  position: absolute;\n  background-color: var(--color1);\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,\n    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,\n    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;\n  top: 100%;\n  right: 0;\n  text-transform: none;\n  color: black;\n  height: 340px;\n  width: 288px;\n  padding: 1rem 1.75rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.login-popup::after {\n  position: absolute;\n  content: \"\";\n  width: 20px;\n  height: 20px;\n  background-color: var(--color1);\n  transform: rotate(55deg) skew(20deg);\n  top: -0.1rem;\n  left: 80.5%;\n}\n.login-popup h3 {\n  display: inline-block;\n  width: 100%;\n  font-size: 1.15rem;\n  padding-bottom: 0.55rem;\n  border-bottom: 1px solid var(--color0);\n}\n.loginForm {\n  display: flex;\n  flex-direction: column;\n  gap: 1.15rem;\n}\n.loginFormSection {\n  display: flex;\n  flex-direction: column;\n}\n.loginFormSection label {\n  font-size: 0.75rem;\n  font-family: var(--secondaryFont);\n  color: var(--color7);\n}\n.loginForm input:not([type=\"checkbox\"]) {\n  outline: none;\n  border: 1px solid var(--color7);\n  border-radius: 6px;\n  padding: 0.25rem;\n  margin-top: 4px;\n}\n.loginForm input:not([type=\"checkbox\"]):focus {\n  border: 1px solid var(--color3);\n}\n.loginFormSection:nth-child(2) {\n  position: relative;\n}\n.loginFormSection:nth-child(2) a {\n  position: absolute;\n  left: 38.5%;\n  bottom: 18px;\n}\n.loginFormSection:nth-child(3) label:first-child {\n  position: absolute;\n  font-size: 0.85rem;\n  left: 50px;\n  bottom: 121px;\n}\n.rememberMe {\n  accent-color: var(--color3);\n  width: 1rem;\n  height: 1rem;\n}\n.rememberMe + label {\n  margin-top: 4px;\n}\n.loginFormSection:nth-child(4) button {\n  text-transform: uppercase;\n  font-size: 0.9rem;\n  color: var(--color1);\n  background-color: var(--color2);\n  border: 1px solid var(--color2);\n  padding: 0.25rem 0.65rem;\n  border-radius: 1rem;\n  width: fit-content;\n  margin-bottom: 1rem;\n  cursor: pointer;\n}\n.loginFormSection:nth-child(4) button:hover {\n  background-color: var(--color6);\n}\n.loginFormSection:nth-child(4) div {\n  display: flex;\n  font-family: var(--secondaryFont);\n  color: var(--color7);\n  font-size: 0.75rem;\n}\n.loginFormSection:nth-child(4) a {\n  display: inline-block;\n  height: fit-content;\n  width: fit-content;\n  padding: 0;\n  margin-left: 0.5rem;\n}\n\n.login-popup a {\n  font-family: var(--secondaryFont);\n  color: var(--color3);\n  height: 100%;\n  width: 100%;\n  font-size: 0.75rem;\n}\n.login-popup a:hover {\n  text-decoration: underline;\n}\n\n/*for language AND login popups*/\n.hide-popup {\n  opacity: 0;\n  z-index: 1;\n}\n/*Hamburger Mobile Menu styling hidden on desktop*/\n.mobileMenu {\n  display: none;\n}\n.pageWrapper {\n  height: 100vh;\n}\n.pageOverlay {\n  display: none;\n}\n\n/*******************************************************************************************/\n\n.bottomNav {\n  height: 50%;\n  border-top: 1px solid var(--color0);\n  border-bottom: 1px solid var(--color0);\n}\n.bottomNav li {\n  margin: 0rem;\n}\n.bottomNav li:nth-child(3) {\n  margin-right: auto;\n}\n.bottomNav a {\n  color: var(--color2);\n}\n.menu > a,\n.specials > a,\n.papaRewards > a {\n  height: 100%;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n  font-size: larger;\n}\n.menu > a:hover,\n.specials > a:hover,\n.papaRewards > a:hover {\n  border-bottom: 4px solid var(--color3);\n  padding-top: 3.9px; /*stops text from moving upwards when border is added on hover*/\n}\n.active {\n  border-bottom: 4px solid var(--color3);\n  padding-top: 3.9px;\n}\n.menu {\n  padding-left: 4vw;\n}\n.login2 > a {\n  padding: 0.5rem;\n  border-radius: 2rem;\n  color: var(--color1);\n  background-color: var(--color2);\n  border: 1px solid var(--color2);\n  margin-right: 0.5rem;\n  font-size: 0.8rem;\n}\n.promoCodeForm {\n  position: relative;\n  z-index: 50;\n}\n.promoCodeForm > input {\n  padding: 0.35rem;\n  border: 1px solid var(--color2);\n}\n.promoCodeForm > input:first-child {\n  border-top-left-radius: 0.3rem;\n  border-bottom-left-radius: 0.3rem;\n  border-right: none;\n  position: relative;\n}\n.promoCodeForm > input:first-child:focus {\n  border-color: var(--color3);\n  outline: none;\n}\n.promoCodeForm > input:first-child::placeholder {\n  font-style: italic;\n  font-family: Cambria, Georgia, Times, \"Times New Roman\", serif;\n  font-size: smaller;\n  position: absolute;\n  top: 0.6rem;\n}\n\n.promoCodeForm > input:first-child {\n  border-top-left-radius: 0.3rem;\n  border-bottom-left-radius: 0.3rem;\n  margin-left: 1rem;\n}\n\n.promoCodeForm > input:nth-child(2) {\n  border-top-right-radius: 0.3rem;\n  border-bottom-right-radius: 0.3rem;\n  background-color: var(--color2);\n  color: var(--color1);\n  position: relative;\n  right: 4px;\n  margin-right: 1rem;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\n\n.cart {\n  border-left: 1px solid var(--color0);\n  padding: 1rem 0rem 1rem 1rem;\n  margin-right: 4vw !important;\n  cursor: pointer;\n}\n.cart > svg {\n  margin-right: 0.25rem;\n}\n.cart > span {\n  color: var(--color4);\n  font-size: 1.375rem;\n  position: relative;\n}\n.cart > span::before {\n  content: \"$\";\n  color: var(--color4);\n  font-size: 1rem;\n  position: relative;\n  bottom: 5px;\n}\n.login2 > a:hover,\n.promoCodeForm input[type=\"submit\"]:hover {\n  background-color: var(--color6);\n}\n\n/*******************************************************************************************/\n\nfooter {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  border-top: var(--color0) 1px solid;\n  padding: 1.5rem max(4rem, 8vw);\n}\n.footerContentWidthControl {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n.footerLinks {\n  width: calc(100% - min(600px, 42%));\n  display: flex;\n  align-items: baseline;\n}\n.footerLinks > div {\n  margin-right: auto;\n}\nfooter a {\n  color: var(--color7);\n  font-size: 0.75rem;\n  text-transform: none;\n  font-family: var(--secondaryFont);\n  letter-spacing: 0px;\n}\nfooter a:hover {\n  text-decoration: underline;\n}\n.footerLinks h4 {\n  color: var(--color2);\n  font-size: 0.9rem;\n  text-transform: none;\n}\n.franchise {\n  width: min(600px, 42%);\n}\n.franchise > a {\n  width: 100%;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  text-transform: none;\n  color: black;\n  gap: 1.5rem;\n  border: 1px solid var(--color0);\n  border-radius: 0.5rem;\n  padding: 1rem;\n  transition: box-shadow 150ms ease-in;\n}\n.franchise a {\n  font-family: var(--mainFont);\n  font-size: 1.25rem;\n}\n.franchise a:hover {\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n  text-decoration: none;\n}\n.footerBottom {\n  margin-top: 2rem;\n  padding-top: 1.75rem;\n  border-top: 1px solid var(--color0);\n  /* background-color: pink; */\n  display: flex;\n  align-items: baseline;\n}\n.countrySelect {\n  width: fit-content;\n  font-family: var(--secondaryFont);\n  font-size: 0.75rem;\n  padding: 0.5rem;\n  border-radius: 5px;\n  margin-right: 1rem;\n}\n.countrySelect:focus {\n  border: 1px solid var(--color3);\n  outline: none;\n}\n.legalLinks {\n  display: flex;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n  margin: 0.5rem auto 1rem 0rem;\n}\n.legalLinks li {\n  /* background-color: aquamarine; */\n  display: flex;\n}\n.footerBottom {\n  position: relative;\n}\n.socialMediaLinkIcons {\n  position: relative;\n  right: 0;\n  top: 6px;\n  /* align-self: baseline; */\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-left: 1rem;\n  /* background-color: #38a575; */\n}\n.socialMediaLinkIcons svg {\n  transition: color 400ms ease-in-out;\n}\n.socialMediaLinkIcons svg:hover {\n  color: black;\n}\n\n/*******************************************************************************************/\n\n/* When the browser is 833px or wider */\n@media screen and (min-width: 833px) {\n  .mobile {\n    display: none !important;\n    /* background-color: green; */\n  }\n  .desktop {\n    display: flex !important;\n  }\n}\n/* When the browser is less than 833px wide */\n@media screen and (max-width: 833px) {\n  .mobile {\n    display: flex !important;\n  }\n  .desktop {\n    display: none !important;\n  }\n  .navContainer {\n    height: 114px;\n  }\n  .topNav {\n    height: 55%;\n  }\n  .bottomNav {\n    height: 45%;\n  }\n  .menu > a,\n  .specials > a,\n  .papaRewards > a {\n    font-size: 1rem;\n  }\n  .menu > a:hover,\n  .specials > a:hover,\n  .papaRewards > a:hover {\n    padding-top: 3.7px; /*stops text from moving upwards when border is added on hover*/\n  }\n  .active {\n    padding-top: 3.7px;\n  }\n  .menu {\n    padding-left: 0rem;\n  }\n  .logo {\n    height: 1.6rem;\n    padding-left: 0rem;\n  }\n  .logo img {\n    transform: scale(0.75) translateX(-21px);\n  }\n  footer {\n    padding: 1.5rem;\n  }\n  .footerContentWidthControl {\n    flex-direction: column;\n  }\n  .footerLinks {\n    width: 100%;\n  }\n  .franchise {\n    width: 100%;\n    padding-top: 1.5rem;\n  }\n  .legalLinks {\n    margin-top: 1.5rem;\n  }\n  .socialMediaLinkIcons {\n    align-self: flex-start;\n    margin-left: 0;\n  }\n  /***************** Hamburger*/\n  .pageWrapper {\n    transition: transform 500ms;\n  }\n  .slidePageWrapperL {\n    animation: slidePageL 500ms forwards;\n  }\n  @keyframes slidePageL {\n    to {\n      transform: translateX(-85%);\n    }\n  }\n  .slidPage {\n    transform: translateX(-85%);\n  }\n  .slidePageWrapperR {\n    animation: slidePageR 500ms forwards;\n  }\n  @keyframes slidePageR {\n    to {\n      transform: translateX(0);\n    }\n  }\n\n  .showMobileMenu {\n    display: block;\n    position: fixed;\n    width: 85%;\n    height: 100%;\n    background-color: #e6e6e6;\n    z-index: 500;\n    right: 0;\n    transform: translateX(100%);\n  }\n  .slideMobileMenuL {\n    animation: slideMenuL 500ms forwards;\n  }\n  @keyframes slideMenuL {\n    to {\n      transform: translateX(0);\n    }\n  }\n  .slidMenu {\n    transform: translateX(0);\n  }\n  .slideMobileMenuR {\n    animation: slideMenuR 500ms forwards;\n  }\n  @keyframes slideMenuR {\n    to {\n      transform: translateX(100%);\n    }\n  }\n\n  .darkenOverlay {\n    display: block;\n    position: absolute;\n    inset: 0;\n    background-color: var(--color7);\n    opacity: 0.5;\n    z-index: 5000;\n  }\n\n  .mobileMenu ul {\n    /* background-color: chartreuse; */\n    height: fit-content;\n    margin: 1.25rem 1.75rem;\n  }\n  .mobileMenu li {\n    /* background-color: pink; */\n    padding: 1rem 0rem;\n  }\n  .mobileMenu li:not(:last-child) {\n    border-top: 1px solid var(--color0);\n  }\n  .mobileMenu a {\n    /* background-color: orange; */\n    color: var(--color2);\n    padding: 0.3rem 0.5rem;\n    border-radius: 1rem;\n  }\n  .mobileSignUp {\n    background-color: var(--color4);\n    color: white !important;\n    transition: background-color 150ms ease-in;\n  }\n  .mobileSignUp:hover {\n    background-color: hsl(355, 68%, 28%);\n  }\n  .mobileMenu .promoCodeForm {\n    display: block;\n  }\n  .mobileMenu .promoCodeForm input:first-child {\n    margin-left: 0;\n    width: clamp(160px, 70%, 500px);\n  }\n\n  /***************** End of  Styling Hamburger*/\n}\n/* When the browser is less than 639px wide */\n@media screen and (max-width: 639px) {\n  .ourCompany ul,\n  .ourPizza ul,\n  .help ul {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: flex-start;\n    gap: 1px;\n    max-height: fit-content;\n    transition: transform 500ms;\n    overflow: hidden;\n  }\n  .ourCompany li,\n  .ourPizza li,\n  .help li {\n    animation: dropdown 400ms ease-in-out forwards;\n  }\n\n  @keyframes dropdown {\n    from {\n      transform: translateY(-120px);\n    }\n    to {\n      transform: translateY(0px);\n    }\n  }\n\n  .hiddenOnSmallScreens {\n    display: none !important;\n  }\n  .footerLinks {\n    flex-direction: column;\n  }\n  .footerLinks h4 {\n    margin: 0.75rem 0rem 0.25rem 0rem;\n    padding: 0.25rem 0rem;\n    border-bottom: 1px solid var(--color0);\n  }\n  .ourCompany,\n  .ourPizza,\n  .help {\n    width: 100%;\n    height: fit-content;\n    position: relative;\n    padding-bottom: 0.5rem;\n    margin-top: 2px;\n  }\n\n  h4::after {\n    content: url(assets/chevron-down.svg);\n    position: absolute;\n    right: -5px;\n    top: 1rem;\n  }\n  .footerLinks li {\n    height: auto;\n  }\n}\n/*******************************************************************************************/\n/*home.css*/\n\n/*******************************************************************************************/\n"],"sourceRoot":""}]);
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
  console.log(e.target.closest("a"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxPQUFPLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxLQUFLLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxLQUFLLEtBQUssWUFBWSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxLQUFLLFlBQVksTUFBTSxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sT0FBTyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sT0FBTyxZQUFZLHlCQUF5QixNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxLQUFLLE1BQU0sWUFBWSxPQUFPLGFBQWEsTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLE9BQU8sVUFBVSxNQUFNLE9BQU8sd0JBQXdCLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sWUFBWSxNQUFNLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZ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QUFDK0IsTUFBTSxDQUFDLHNCQUFzQixDQUFDO0VBQ2pFcUIsUUFBUSxDQUFDaEQsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDSixTQUFTLENBQUNDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQztFQUNsRWtELFVBQVUsQ0FBQy9DLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQ0osU0FBUyxDQUFDQyxHQUFHLENBQUMsc0JBQXNCLENBQUM7QUFDdEUsQ0FBQyxDQUFDOztBQUVGO0FBQ0FpQixVQUFVLENBQUMsTUFBTSxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrX2RlbW8vLi9zcmMvaG9tZS9jYXJkU2xpZGVyLmpzIiwid2VicGFjazovL3dlYnBhY2tfZGVtby8uL3NyYy9ob21lL2hlcm8uanMiLCJ3ZWJwYWNrOi8vd2VicGFja19kZW1vLy4vc3JjL2hvbWUvaG9tZS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX2RlbW8vLi9zcmMvbWVudS9tZW51LmpzIiwid2VicGFjazovL3dlYnBhY2tfZGVtby8uL3NyYy9wYXBhUmV3YXJkcy9wYXBhUmV3YXJkcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX2RlbW8vLi9zcmMvc3BlY2lhbHMvc3BlY2lhbHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFja19kZW1vLy4vc3JjL2hvbWUvY2FyZFNsaWRlci5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFja19kZW1vLy4vc3JjL2hvbWUvaGVyby5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFja19kZW1vLy4vc3JjL2hvbWUvaG9tZS5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFja19kZW1vLy4vc3JjL21lbnUvbWVudS5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFja19kZW1vLy4vc3JjL3BhcGFSZXdhcmRzL3BhcGFSZXdhcmRzLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrX2RlbW8vLi9zcmMvc3BlY2lhbHMvc3BlY2lhbHMuY3NzIiwid2VicGFjazovL3dlYnBhY2tfZGVtby8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFja19kZW1vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX2RlbW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYnBhY2tfZGVtby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYnBhY2tfZGVtby8uL3NyYy9ob21lL2NhcmRTbGlkZXIuY3NzP2RkZjciLCJ3ZWJwYWNrOi8vd2VicGFja19kZW1vLy4vc3JjL2hvbWUvaGVyby5jc3M/OGQ2NyIsIndlYnBhY2s6Ly93ZWJwYWNrX2RlbW8vLi9zcmMvaG9tZS9ob21lLmNzcz84ZDQxIiwid2VicGFjazovL3dlYnBhY2tfZGVtby8uL3NyYy9tZW51L21lbnUuY3NzP2ZlYjMiLCJ3ZWJwYWNrOi8vd2VicGFja19kZW1vLy4vc3JjL3BhcGFSZXdhcmRzL3BhcGFSZXdhcmRzLmNzcz9lMjE3Iiwid2VicGFjazovL3dlYnBhY2tfZGVtby8uL3NyYy9zcGVjaWFscy9zcGVjaWFscy5jc3M/MGUxZCIsIndlYnBhY2s6Ly93ZWJwYWNrX2RlbW8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VicGFja19kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2tfZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFja19kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYnBhY2tfZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX2RlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX2RlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX2RlbW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFja19kZW1vL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYnBhY2tfZGVtby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFja19kZW1vL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VicGFja19kZW1vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFja19kZW1vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFja19kZW1vL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYnBhY2tfZGVtby93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly93ZWJwYWNrX2RlbW8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYnBhY2tfZGVtby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuL2NhcmRTbGlkZXIuY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNhcmRTbGlkZXIoKSB7XG4gIGxldCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChcInNsaWRlclNlY3Rpb25cIik7XG4gIGNvbnRlbnQuaW5uZXJIVE1MID0gYFxuICAgICAgICA8YnV0dG9uIGNsYXNzPSdsZWZ0QXJyb3cnPlxuICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGNsYXNzPVwiZmVhdGhlciBmZWF0aGVyLWFycm93LWxlZnRcIj48bGluZSB4MT1cIjE5XCIgeTE9XCIxMlwiIHgyPVwiNVwiIHkyPVwiMTJcIj48L2xpbmU+PHBvbHlsaW5lIHBvaW50cz1cIjEyIDE5IDUgMTIgMTIgNVwiPjwvcG9seWxpbmU+PC9zdmc+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8ZGl2IGNsYXNzPSdjYXJkV2luZG93Jz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2NhcmRTbGlkZXInPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2NhcmQnPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2NhcmQnPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2NhcmQnPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2NhcmQnPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2NhcmQnPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2NhcmQnPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uIGNsYXNzPSdyaWdodEFycm93Jz5cbiAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBjbGFzcz1cImZlYXRoZXIgZmVhdGhlci1hcnJvdy1yaWdodFwiPjxsaW5lIHgxPVwiNVwiIHkxPVwiMTJcIiB4Mj1cIjE5XCIgeTI9XCIxMlwiPjwvbGluZT48cG9seWxpbmUgcG9pbnRzPVwiMTIgNSAxOSAxMiAxMiAxOVwiPjwvcG9seWxpbmU+PC9zdmc+XG4gICAgICAgIDwvYnV0dG9uPlxuICBgO1xuICBsZXQgbGVmdEFycm93ID0gY29udGVudC5xdWVyeVNlbGVjdG9yKCcubGVmdEFycm93Jyk7XG4gIGxlZnRBcnJvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCkgPT4ge3NsaWRlTGVmdCgpfSlcbiAgZnVuY3Rpb24gc2xpZGVMZWZ0KCkge1xuICAgICAgYWxlcnQoJ2xlZnQnKVxuICB9XG4gIGxldCByaWdodEFycm93ID0gY29udGVudC5xdWVyeVNlbGVjdG9yKCcucmlnaHRBcnJvdycpO1xuICByaWdodEFycm93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKSA9PiB7c2xpZGVMZWZ0KCl9KVxuICBmdW5jdGlvbiBzbGlkZUxlZnQoKSB7XG4gICAgICBhbGVydCgncmlnaHQnKVxuICB9XG5cblxuXG5cbiAgcmV0dXJuIGNvbnRlbnQ7XG59XG5cbiIsImltcG9ydCBcIi4vaGVyby5jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGVybygpIHtcbiAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJoZXJvXCIpO1xuICBjb250ZW50LmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz0naGVyb1RleHQnPlxuICAgICAgICA8aDE+U3RhcnRpbmcgYXQgJDEzPC9oMT5cbiAgICAgICAgPGgzPkxpbWl0ZWQgdGltZSBvZmZlcjwvaDM+XG4gICAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5FcGljIHN0dWZmZWQgY3J1c3QgcGl6emE8L2gxPlxuICAgICAgICA8aDM+MS10b3BwaW5nIHNwZWNpYWw8L2gzPlxuICAgICAgICA8aDQ+Q2hvb3NlIHlvdXIgdG9wcGluZy4gQ2hlZXNlIHlvdXIgY3J1c3QuPC9oND5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz0nYmxhY2tCdG4nPk9yZGVyIERlbGl2ZXJ5PC9hPlxuICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9J3doaXRlQnRuJz5PcmRlciBDYXJyeW91dDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICBgO1xuICByZXR1cm4gY29udGVudDtcbn1cbiIsImltcG9ydCBcIi4vaG9tZS5jc3NcIjtcbmltcG9ydCBoZXJvIGZyb20gXCIuL2hlcm9cIjtcbmltcG9ydCBjYXJkU2xpZGVyIGZyb20gXCIuL2NhcmRTbGlkZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaG9tZSgpIHtcbiAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJtYWluX19ob21lXCIpO1xuICAvLyBsZXQgbGluZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gIC8vIGxpbmUxLnRleHRDb250ZW50ID0gJ1N0YXJ0aW5nIGF0ICQxMydcbiAgLy8gY29udGVudC5hcHBlbmRDaGlsZChsaW5lMSlcbiAgY29udGVudC5hcHBlbmRDaGlsZChoZXJvKCkpXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY2FyZFNsaWRlcigpKVxuICAvLyBjb250ZW50LnRleHRDb250ZW50ID0gXCJIb21lXCI7XG5cbiAgcmV0dXJuIGNvbnRlbnQ7XG59XG4iLCJpbXBvcnQgXCIuL21lbnUuY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lbnUoKSB7XG4gIGxldCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwibWFpbl9fbWVudVwiKTtcbiAgY29udGVudC50ZXh0Q29udGVudCA9IFwiTUVOVVwiO1xuICByZXR1cm4gY29udGVudDtcbn1cbiIsImltcG9ydCBcIi4vcGFwYVJld2FyZHMuY3NzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYXBhUmV3YXJkcygpIHtcbiAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250ZW50LnRleHRDb250ZW50ID0gXCJQQVBBIFJFV0FSRFNcIjtcbiAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwibWFpbl9fcGFwYVJld2FyZHNcIik7XG4gIHJldHVybiBjb250ZW50O1xufVxuIiwiaW1wb3J0IFwiLi9zcGVjaWFscy5jc3NcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNwZWNpYWxzKCkge1xuICBsZXQgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChcIm1haW5fX3NwZWNpYWxzXCIpO1xuICBjb250ZW50LnRleHRDb250ZW50ID0gXCJTUEVDSUFMU1wiO1xuXG4gIHJldHVybiBjb250ZW50O1xufVxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuc2xpZGVyU2VjdGlvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcXG4gIGhlaWdodDogNTAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uY2FyZFdpbmRvdyB7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgd2lkdGg6IG1pbigxMDB2dywgY2FsYyg5NjBweCArIDZyZW0pKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGF6dXJlO1xcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xcblxcbiAgcG9zaXRpb246cmVsYXRpdmU7XFxufVxcblxcbi5jYXJkU2xpZGVyIHtcXG4gIGhlaWdodDogNDAwcHg7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBwYWRkaW5nOiAwIDEuNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGF6dXJlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMS41cmVtO1xcblxcbiAgXFxuICBcXG59XFxuXFxuLmNhcmQge1xcbiAgbWluLXdpZHRoOiAzMjBweDtcXG4gIG1pbi1oZWlnaHQ6IDM2MnB4O1xcbiAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93Z3JlZW47XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgzM3B4KSB7XFxuICAgIC5jYXJkU2xpZGVyIHtcXG4gICAgICAgIGdhcDouNzVyZW07XFxuICAgIH1cXG4gICAgLmNhcmQge1xcbiAgICAgICAgbWluLXdpZHRoOiAyNzJweDtcXG4gICAgfVxcbn1cXG5cXG5idXR0b24ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgY29sb3I6d2hpdGU7XFxuICAgIG9wYWNpdHk6IC40O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cmVtO1xcbiAgICBwYWRkaW5nOi41cmVtO1xcbiAgICBjdXJzb3I6cG9pbnRlcjtcXG4gICAgei1pbmRleDogMTAwO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBjb2xvcjp3aGl0ZTtcXG59XFxuXFxuLmxlZnRBcnJvdyB7XFxuICAgIGxlZnQ6MnJlbTtcXG59XFxuXFxuLnJpZ2h0QXJyb3cge1xcbiAgICByaWdodDoycmVtO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvaG9tZS9jYXJkU2xpZGVyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGdDQUFnQztFQUNoQyxhQUFhO0VBQ2IsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFDQUFxQztFQUNyQyx1QkFBdUI7RUFDdkIsa0JBQWtCOztFQUVsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsV0FBVzs7OztBQUliOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsNkJBQTZCO0FBQy9CO0FBQ0E7SUFDSTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0o7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsY0FBYztJQUNkLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztBQUNmOztBQUVBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0ksVUFBVTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5zbGlkZXJTZWN0aW9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xcbiAgaGVpZ2h0OiA1MDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5jYXJkV2luZG93IHtcXG4gIGhlaWdodDogNDAwcHg7XFxuICB3aWR0aDogbWluKDEwMHZ3LCBjYWxjKDk2MHB4ICsgNnJlbSkpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYXp1cmU7XFxuICBvdmVyZmxvdy14OiBzY3JvbGw7XFxuXFxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcXG59XFxuXFxuLmNhcmRTbGlkZXIge1xcbiAgaGVpZ2h0OiA0MDBweDtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIHBhZGRpbmc6IDAgMS41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYXp1cmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxLjVyZW07XFxuXFxuICBcXG4gIFxcbn1cXG5cXG4uY2FyZCB7XFxuICBtaW4td2lkdGg6IDMyMHB4O1xcbiAgbWluLWhlaWdodDogMzYycHg7XFxuICBib3JkZXItcmFkaXVzOiAxLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3dncmVlbjtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODMzcHgpIHtcXG4gICAgLmNhcmRTbGlkZXIge1xcbiAgICAgICAgZ2FwOi43NXJlbTtcXG4gICAgfVxcbiAgICAuY2FyZCB7XFxuICAgICAgICBtaW4td2lkdGg6IDI3MnB4O1xcbiAgICB9XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBjb2xvcjp3aGl0ZTtcXG4gICAgb3BhY2l0eTogLjQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVyZW07XFxuICAgIHBhZGRpbmc6LjVyZW07XFxuICAgIGN1cnNvcjpwb2ludGVyO1xcbiAgICB6LWluZGV4OiAxMDA7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIGNvbG9yOndoaXRlO1xcbn1cXG5cXG4ubGVmdEFycm93IHtcXG4gICAgbGVmdDoycmVtO1xcbn1cXG5cXG4ucmlnaHRBcnJvdyB7XFxuICAgIHJpZ2h0OjJyZW07XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5oZXJvIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG4gICAgY29sb3I6d2hpdGU7XFxuICAgIGhlaWdodDo0NTNweDtcXG4gICAgcGFkZGluZzogMCAxMHZ3O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG59XFxuLmhlcm9UZXh0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgd2lkdGg6Zml0LWNvbnRlbnQ7XFxuICAgIHBhZGRpbmc6IDJyZW0gMHJlbTtcXG5cXG59XFxuXFxuLmhlcm8gPiBkaXYgPiAqOmZpcnN0LWNoaWxkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIHBhZGRpbmc6IDByZW0gLjVyZW0gMnB4IC41cmVtO1xcbiAgICB0cmFuc2Zvcm06IHNrZXdYKC01ZGVnKSByb3RhdGVaKC01ZGVnKSB0cmFuc2xhdGVZKC01cHgpIHRyYW5zbGF0ZVgoLTJweCk7XFxuICAgIHdpZHRoOmZpdC1jb250ZW50O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGFuaW1hdGlvbjogaGVyb1NsaWRlIDQwMG1zIGVhc2UtaW4gZm9yd2FyZHM7XFxuXFxufVxcbkBrZXlmcmFtZXMgaGVyb1NsaWRlIHtcXG4gICAgZnJvbSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNrZXdYKC01ZGVnKSByb3RhdGVaKC01ZGVnKSB0cmFuc2xhdGVZKDBweCkgdHJhbnNsYXRlWCgtMTVyZW0pO1xcbiAgICB9XFxuICAgIHRvIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2tld1goLTVkZWcpIHJvdGF0ZVooLTVkZWcpIHRyYW5zbGF0ZVkoLTVweCkgdHJhbnNsYXRlWCgtMnB4KTtcXG4gICAgfVxcbn1cXG5cXG4uaGVybyA+IGRpdiA+ICo6Zmlyc3QtY2hpbGQ6OmFmdGVyIHtcXG4gICAgY29udGVudDogJzk5JztcXG4gICAgZm9udC1zaXplOiAxLjM1cmVtO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgbWFyZ2luOiAwcmVtIC4xcmVtIDByZW0gLjM1cmVtO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvdHRvbTogLjVyZW07XFxuICAgIFxcbn1cXG4uaGVybyA+IGRpdiA+ICo6bnRoLWNoaWxkKDIpIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDM1NSwgNjglLCA0OCUpO1xcbiAgICBwYWRkaW5nOiAwcHggLjM1cmVtIDJweCAuMzVyZW07XFxuICAgIHdpZHRoOmZpdC1jb250ZW50OyAgXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XFxuICAgIC8qIHotaW5kZXg6IDEwMDsgKi9cXG59XFxuLyogLmhlcm8gPiBkaXYgPiAqOm50aC1jaGlsZCgyKTo6YWZ0ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJlZDtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGhlaWdodDoxLjZyZW07XFxuICAgIHdpZHRoOiAxLjZyZW07XFxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgICB0cmFuc2Zvcm06IHNrZXdYKC0zMGRlZykgdHJhbnNsYXRlWCgtMnB4KTtcXG4gICAgei1pbmRleDogMTtcXG59ICovXFxuXFxuXFxuLmhlcm8gPiBkaXYgPiAqOm50aC1jaGlsZCgzKSB7XFxuICAgIFxcbiAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xcbiAgICB3aWR0aDpmaXQtY29udGVudDtcXG4gICAgbWFyZ2luLWJvdHRvbTogLjc1cmVtO1xcbn1cXG4uaGVybyA+IGRpdiA+ICo6bnRoLWNoaWxkKDQpIGE6Zmlyc3QtY2hpbGQge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEuNXJlbTtcXG59XFxuXFxuXFxuXFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODMzcHgpIHsgXFxuICAgIC5oZXJvIHtcXG4gICAgICAgIGhlaWdodDogNDAwcHg7XFxuICAgICAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9ob21lL2hlcm8uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtJQUNmLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsU0FBUztJQUNULGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCOztBQUV0Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2Qiw2QkFBNkI7SUFDN0Isd0VBQXdFO0lBQ3hFLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsMkNBQTJDOztBQUUvQztBQUNBO0lBQ0k7UUFDSSx5RUFBeUU7SUFDN0U7SUFDQTtRQUNJLHdFQUF3RTtJQUM1RTtBQUNKOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUIsOEJBQThCO0lBQzlCLGtCQUFrQjtJQUNsQixhQUFhOztBQUVqQjtBQUNBO0lBQ0ksb0NBQW9DO0lBQ3BDLDhCQUE4QjtJQUM5QixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7QUFDQTs7Ozs7Ozs7R0FRRzs7O0FBR0g7O0lBRUksbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLG9CQUFvQjtBQUN4Qjs7Ozs7QUFLQTtJQUNJO1FBQ0ksYUFBYTtRQUNiLGFBQWE7SUFDakI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuaGVybyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuICAgIGNvbG9yOndoaXRlO1xcbiAgICBoZWlnaHQ6NDUzcHg7XFxuICAgIHBhZGRpbmc6IDAgMTB2dztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XFxufVxcbi5oZXJvVGV4dCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHdpZHRoOmZpdC1jb250ZW50O1xcbiAgICBwYWRkaW5nOiAycmVtIDByZW07XFxuXFxufVxcblxcbi5oZXJvID4gZGl2ID4gKjpmaXJzdC1jaGlsZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBwYWRkaW5nOiAwcmVtIC41cmVtIDJweCAuNXJlbTtcXG4gICAgdHJhbnNmb3JtOiBza2V3WCgtNWRlZykgcm90YXRlWigtNWRlZykgdHJhbnNsYXRlWSgtNXB4KSB0cmFuc2xhdGVYKC0ycHgpO1xcbiAgICB3aWR0aDpmaXQtY29udGVudDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBhbmltYXRpb246IGhlcm9TbGlkZSA0MDBtcyBlYXNlLWluIGZvcndhcmRzO1xcblxcbn1cXG5Aa2V5ZnJhbWVzIGhlcm9TbGlkZSB7XFxuICAgIGZyb20ge1xcbiAgICAgICAgdHJhbnNmb3JtOiBza2V3WCgtNWRlZykgcm90YXRlWigtNWRlZykgdHJhbnNsYXRlWSgwcHgpIHRyYW5zbGF0ZVgoLTE1cmVtKTtcXG4gICAgfVxcbiAgICB0byB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNrZXdYKC01ZGVnKSByb3RhdGVaKC01ZGVnKSB0cmFuc2xhdGVZKC01cHgpIHRyYW5zbGF0ZVgoLTJweCk7XFxuICAgIH1cXG59XFxuXFxuLmhlcm8gPiBkaXYgPiAqOmZpcnN0LWNoaWxkOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICc5OSc7XFxuICAgIGZvbnQtc2l6ZTogMS4zNXJlbTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIG1hcmdpbjogMHJlbSAuMXJlbSAwcmVtIC4zNXJlbTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3R0b206IC41cmVtO1xcbiAgICBcXG59XFxuLmhlcm8gPiBkaXYgPiAqOm50aC1jaGlsZCgyKSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgzNTUsIDY4JSwgNDglKTtcXG4gICAgcGFkZGluZzogMHB4IC4zNXJlbSAycHggLjM1cmVtO1xcbiAgICB3aWR0aDpmaXQtY29udGVudDsgIFxcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcbiAgICAvKiB6LWluZGV4OiAxMDA7ICovXFxufVxcbi8qIC5oZXJvID4gZGl2ID4gKjpudGgtY2hpbGQoMik6OmFmdGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZWQ7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBoZWlnaHQ6MS42cmVtO1xcbiAgICB3aWR0aDogMS42cmVtO1xcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcXG4gICAgdHJhbnNmb3JtOiBza2V3WCgtMzBkZWcpIHRyYW5zbGF0ZVgoLTJweCk7XFxuICAgIHotaW5kZXg6IDE7XFxufSAqL1xcblxcblxcbi5oZXJvID4gZGl2ID4gKjpudGgtY2hpbGQoMykge1xcbiAgICBcXG4gICAgcGFkZGluZy1ib3R0b206IDJweDtcXG4gICAgd2lkdGg6Zml0LWNvbnRlbnQ7XFxuICAgIG1hcmdpbi1ib3R0b206IC43NXJlbTtcXG59XFxuLmhlcm8gPiBkaXYgPiAqOm50aC1jaGlsZCg0KSBhOmZpcnN0LWNoaWxkIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxLjVyZW07XFxufVxcblxcblxcblxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgzM3B4KSB7IFxcbiAgICAuaGVybyB7XFxuICAgICAgICBoZWlnaHQ6IDQwMHB4O1xcbiAgICAgICAgcGFkZGluZzogMXJlbTtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIubWFpbl9faG9tZSB7XFxuICBoZWlnaHQ6MzA3MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmlzcXVlO1xcbn1cXG5cXG4ud2hpdGVCdG4ge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgcGFkZGluZzogLjM1cmVtIC43NXJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcbn1cXG4ud2hpdGVCdG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNywgMjI3LCAyMjcpO1xcbn1cXG4uYmxhY2tCdG4ge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogLjM1cmVtIC43NXJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcbn1cXG4uYmxhY2tCdG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ2LCA0NiwgNDYpO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvaG9tZS9ob21lLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxvQ0FBb0M7QUFDdEM7QUFDQTtFQUNFLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGlDQUFpQztBQUNuQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubWFpbl9faG9tZSB7XFxuICBoZWlnaHQ6MzA3MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmlzcXVlO1xcbn1cXG5cXG4ud2hpdGVCdG4ge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgcGFkZGluZzogLjM1cmVtIC43NXJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcbn1cXG4ud2hpdGVCdG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNywgMjI3LCAyMjcpO1xcbn1cXG4uYmxhY2tCdG4ge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogLjM1cmVtIC43NXJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcbn1cXG4uYmxhY2tCdG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ2LCA0NiwgNDYpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIubWFpbl9fbWVudSB7XFxuICBjb2xvcjogYmx1ZTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL21lbnUvbWVudS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxXQUFXO0FBQ2JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm1haW5fX21lbnUge1xcbiAgY29sb3I6IGJsdWU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5tYWluX19wYXBhUmV3YXJkcyB7XFxuICBjb2xvcjogb3JhbmdlO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvcGFwYVJld2FyZHMvcGFwYVJld2FyZHMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5tYWluX19wYXBhUmV3YXJkcyB7XFxuICBjb2xvcjogb3JhbmdlO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIubWFpbl9fc3BlY2lhbHMge1xcbiAgY29sb3I6IHB1cnBsZTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3NwZWNpYWxzL3NwZWNpYWxzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubWFpbl9fc3BlY2lhbHMge1xcbiAgY29sb3I6IHB1cnBsZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJhc3NldHMvY2hldnJvbi1kb3duLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3N3YWxkOndnaHRANTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbjpyb290IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICAtLWNvbG9yMDogcmdiKDIwOSwgMjA5LCAyMDkpO1xcbiAgLS1jb2xvcjE6IHdoaXRlO1xcbiAgLS1jb2xvcjI6IGJsYWNrO1xcbiAgLS1jb2xvcjM6ICMzOGE1NzU7XFxuICAtLWNvbG9yNDogaHNsKDM1NSwgNjglLCA0OCUpO1xcbiAgLS1jb2xvcjU6IHJnYigyMzAsIDIzMCwgMjMwKTtcXG4gIC0tY29sb3I2OiByZ2IoNDYsIDQ2LCA0Nik7XFxuICAtLWNvbG9yNzogcmdiKDk4LCA5OCwgOTgpO1xcbiAgLS1tYWluRm9udDogXFxcIk9zd2FsZFxcXCIsIHNhbnMtc2VyaWY7XFxuICAtLXNlY29uZGFyeUZvbnQ6IEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxufVxcblxcbi8qIG1ha2UgdGhlc2UgaXRlbXMgcmVzcG9uc2l2ZSAqL1xcbmltZyxcXG5waWN0dXJlLFxcbnN2ZyxcXG52aWRlbyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuLyogbWFrZSB0aGUgZm9ybSBlbGVtZW50cyBpbmhlcml0IGZvbnQgcHJvcGVydGllcyB0aGUgd2F5IGV2ZXJ5dGhpbmcgZWxzZSBkb2VzICovXFxuaW5wdXQsXFxudGV4dGFyZWEsXFxuYnV0dG9uLFxcbnNlbGVjdCB7XFxuICBmb250OiBpbmhlcml0O1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICBmb250LWZhbWlseTogdmFyKC0tbWFpbkZvbnQpO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuXFxudWwge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxubGkge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcbi5uYXZDb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEyOHB4O1xcbiAgYm94LXNoYWRvdzogcmdiYSgxNDksIDE1NywgMTY1LCAwLjIpIDBweCA4cHggMjRweDtcXG59XFxuLm5hdkNvbnRhaW5lciB1bCxcXG4ubmF2Q29udGFpbmVyIGxpLFxcbi5uYXZDb250YWluZXIgYSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnRvcE5hdiB7XFxuICBoZWlnaHQ6IDUwJTtcXG59XFxuLnRvcE5hdiBsaSB7XFxuICBtYXJnaW46IDAuNXJlbTtcXG59XFxuLnRvcE5hdiBsaTpmaXJzdC1jaGlsZCB7XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcbi50b3BOYXYgYSB7XFxuICBoZWlnaHQ6IDUwJTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvcjIpO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xcbn1cXG4uc3RhcnRZb3VyT3JkZXIgPiBhLFxcbi5sYW5ndWFnZSA+IGEsXFxuLmxvZ2luID4gYSB7XFxuICBnYXA6IDAuMjVyZW07XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDE1MG1zIGVhc2UtaW47XFxufVxcbi5zdGFydFlvdXJPcmRlciA+IGE6aG92ZXIsXFxuLmxhbmd1YWdlID4gYTpob3ZlcixcXG4ubG9naW4gPiBhOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yNSk7XFxuICB6LWluZGV4OiAxMDA7XFxufVxcbi5zdGFydFlvdXJPcmRlciA+IGE6Zm9jdXMsXFxuLmxhbmd1YWdlID4gYTpmb2N1cyxcXG4ubG9naW4gPiBhOmZvY3VzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yNSk7XFxufVxcbi5zaWduVXAgPiBhIHtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvcjIpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3IyKTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvcjEpO1xcbn1cXG4ubG9nbyB7XFxuICBoZWlnaHQ6IDEuNnJlbTtcXG4gIHBhZGRpbmctbGVmdDogNHZ3O1xcbn1cXG4ubG9nb0lNRyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5maWx0ZXJlZCB7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMCkgc2F0dXJhdGUoMTAwJSkgaW52ZXJ0KDI5JSkgc2VwaWEoNjclKSBzYXR1cmF0ZSg1MTk4JSlcXG4gICAgaHVlLXJvdGF0ZSgzNDFkZWcpIGJyaWdodG5lc3MoODMlKSBjb250cmFzdCg5NCUpO1xcbiAgLyogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjIyNTI0NzIvaG93LWNhbi1pLWNoYW5nZS10aGUtY29sb3Itb2YtYW4tc3ZnLWVsZW1lbnQqL1xcbn1cXG4uc2lnblVwID4gYTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvcjYpO1xcbn1cXG4uc2lnblVwIHtcXG4gIG1hcmdpbi1yaWdodDogNHZ3ICFpbXBvcnRhbnQ7XFxufVxcblxcbi8qbGFuZ3VhZ2UgcG9wdXAgc3R5bGluZyovXFxuLmxhbmd1YWdlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmxhbmd1YWdlLXBvcHVwIHtcXG4gIHotaW5kZXg6IDk5O1xcbiAgb3BhY2l0eTogMTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yMSk7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjUpIDBweCA1NHB4IDU1cHgsXFxuICAgIHJnYmEoMCwgMCwgMCwgMC4xMikgMHB4IC0xMnB4IDMwcHgsIHJnYmEoMCwgMCwgMCwgMC4xMikgMHB4IDRweCA2cHgsXFxuICAgIHJnYmEoMCwgMCwgMCwgMC4xNykgMHB4IDEycHggMTNweCwgcmdiYSgwLCAwLCAwLCAwLjA5KSAwcHggLTNweCA1cHg7XFxuICB0b3A6IDEwMCU7XFxuICByaWdodDogLTEwNHB4O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxuICBjb2xvcjogYmxhY2s7XFxuICBoZWlnaHQ6IDE0OHB4O1xcbiAgd2lkdGg6IDI4OHB4O1xcbiAgcGFkZGluZzogMXJlbSAxLjc1cmVtIDEuNXJlbSAxLjc1cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG4ubGFuZ3VhZ2UtcG9wdXA6OmFmdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvcjEpO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNTVkZWcpIHNrZXcoMjBkZWcpO1xcbiAgdG9wOiAtMC4xcmVtO1xcbiAgbGVmdDogNDUlO1xcbn1cXG5cXG4ubGFuZ3VhZ2UtcG9wdXAgaDMge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXNpemU6IDEuMTVyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMC41NXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tY29sb3IwKTtcXG59XFxuLmxhbmd1YWdlLXBvcHVwIHVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLmxhbmd1YWdlLXBvcHVwIGxpIHtcXG4gIG1hcmdpbjogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ubGFuZ3VhZ2UtcG9wdXAgYSB7XFxuICBmb250LWZhbWlseTogdmFyKC0tc2Vjb25kYXJ5Rm9udCk7XFxuICBjb2xvcjogdmFyKC0tY29sb3IzKTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xcbn1cXG4ubGFuZ3VhZ2UtcG9wdXAgYTpob3ZlciB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuLypsb2dpbiBwb3B1cCBzdHlsaW5nIE5FRURTIFdPUksqL1xcbi5sb2dpbiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5sb2dpbi1wb3B1cCB7XFxuICB6LWluZGV4OiA5OTtcXG4gIG9wYWNpdHk6IDE7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvcjEpO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI1KSAwcHggNTRweCA1NXB4LFxcbiAgICByZ2JhKDAsIDAsIDAsIDAuMTIpIDBweCAtMTJweCAzMHB4LCByZ2JhKDAsIDAsIDAsIDAuMTIpIDBweCA0cHggNnB4LFxcbiAgICByZ2JhKDAsIDAsIDAsIDAuMTcpIDBweCAxMnB4IDEzcHgsIHJnYmEoMCwgMCwgMCwgMC4wOSkgMHB4IC0zcHggNXB4O1xcbiAgdG9wOiAxMDAlO1xcbiAgcmlnaHQ6IDA7XFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGhlaWdodDogMzQwcHg7XFxuICB3aWR0aDogMjg4cHg7XFxuICBwYWRkaW5nOiAxcmVtIDEuNzVyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMC43NXJlbTtcXG59XFxuLmxvZ2luLXBvcHVwOjphZnRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3IxKTtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDU1ZGVnKSBza2V3KDIwZGVnKTtcXG4gIHRvcDogLTAuMXJlbTtcXG4gIGxlZnQ6IDgwLjUlO1xcbn1cXG4ubG9naW4tcG9wdXAgaDMge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXNpemU6IDEuMTVyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMC41NXJlbTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1jb2xvcjApO1xcbn1cXG4ubG9naW5Gb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxLjE1cmVtO1xcbn1cXG4ubG9naW5Gb3JtU2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLmxvZ2luRm9ybVNlY3Rpb24gbGFiZWwge1xcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLXNlY29uZGFyeUZvbnQpO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yNyk7XFxufVxcbi5sb2dpbkZvcm0gaW5wdXQ6bm90KFt0eXBlPVxcXCJjaGVja2JveFxcXCJdKSB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3I3KTtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIHBhZGRpbmc6IDAuMjVyZW07XFxuICBtYXJnaW4tdG9wOiA0cHg7XFxufVxcbi5sb2dpbkZvcm0gaW5wdXQ6bm90KFt0eXBlPVxcXCJjaGVja2JveFxcXCJdKTpmb2N1cyB7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvcjMpO1xcbn1cXG4ubG9naW5Gb3JtU2VjdGlvbjpudGgtY2hpbGQoMikge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ubG9naW5Gb3JtU2VjdGlvbjpudGgtY2hpbGQoMikgYSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAzOC41JTtcXG4gIGJvdHRvbTogMThweDtcXG59XFxuLmxvZ2luRm9ybVNlY3Rpb246bnRoLWNoaWxkKDMpIGxhYmVsOmZpcnN0LWNoaWxkIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcXG4gIGxlZnQ6IDUwcHg7XFxuICBib3R0b206IDEyMXB4O1xcbn1cXG4ucmVtZW1iZXJNZSB7XFxuICBhY2NlbnQtY29sb3I6IHZhcigtLWNvbG9yMyk7XFxuICB3aWR0aDogMXJlbTtcXG4gIGhlaWdodDogMXJlbTtcXG59XFxuLnJlbWVtYmVyTWUgKyBsYWJlbCB7XFxuICBtYXJnaW4tdG9wOiA0cHg7XFxufVxcbi5sb2dpbkZvcm1TZWN0aW9uOm50aC1jaGlsZCg0KSBidXR0b24ge1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yMSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvcjIpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3IyKTtcXG4gIHBhZGRpbmc6IDAuMjVyZW0gMC42NXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubG9naW5Gb3JtU2VjdGlvbjpudGgtY2hpbGQoNCkgYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yNik7XFxufVxcbi5sb2dpbkZvcm1TZWN0aW9uOm50aC1jaGlsZCg0KSBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1zZWNvbmRhcnlGb250KTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvcjcpO1xcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xcbn1cXG4ubG9naW5Gb3JtU2VjdGlvbjpudGgtY2hpbGQoNCkgYSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XFxufVxcblxcbi5sb2dpbi1wb3B1cCBhIHtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1zZWNvbmRhcnlGb250KTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvcjMpO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXNpemU6IDAuNzVyZW07XFxufVxcbi5sb2dpbi1wb3B1cCBhOmhvdmVyIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4vKmZvciBsYW5ndWFnZSBBTkQgbG9naW4gcG9wdXBzKi9cXG4uaGlkZS1wb3B1cCB7XFxuICBvcGFjaXR5OiAwO1xcbiAgei1pbmRleDogMTtcXG59XFxuLypIYW1idXJnZXIgTW9iaWxlIE1lbnUgc3R5bGluZyBoaWRkZW4gb24gZGVza3RvcCovXFxuLm1vYmlsZU1lbnUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLnBhZ2VXcmFwcGVyIHtcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcbi5wYWdlT3ZlcmxheSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG5cXG4uYm90dG9tTmF2IHtcXG4gIGhlaWdodDogNTAlO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWNvbG9yMCk7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tY29sb3IwKTtcXG59XFxuLmJvdHRvbU5hdiBsaSB7XFxuICBtYXJnaW46IDByZW07XFxufVxcbi5ib3R0b21OYXYgbGk6bnRoLWNoaWxkKDMpIHtcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuLmJvdHRvbU5hdiBhIHtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvcjIpO1xcbn1cXG4ubWVudSA+IGEsXFxuLnNwZWNpYWxzID4gYSxcXG4ucGFwYVJld2FyZHMgPiBhIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xcbiAgcGFkZGluZy1yaWdodDogMC41cmVtO1xcbiAgZm9udC1zaXplOiBsYXJnZXI7XFxufVxcbi5tZW51ID4gYTpob3ZlcixcXG4uc3BlY2lhbHMgPiBhOmhvdmVyLFxcbi5wYXBhUmV3YXJkcyA+IGE6aG92ZXIge1xcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIHZhcigtLWNvbG9yMyk7XFxuICBwYWRkaW5nLXRvcDogMy45cHg7IC8qc3RvcHMgdGV4dCBmcm9tIG1vdmluZyB1cHdhcmRzIHdoZW4gYm9yZGVyIGlzIGFkZGVkIG9uIGhvdmVyKi9cXG59XFxuLmFjdGl2ZSB7XFxuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgdmFyKC0tY29sb3IzKTtcXG4gIHBhZGRpbmctdG9wOiAzLjlweDtcXG59XFxuLm1lbnUge1xcbiAgcGFkZGluZy1sZWZ0OiA0dnc7XFxufVxcbi5sb2dpbjIgPiBhIHtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICBjb2xvcjogdmFyKC0tY29sb3IxKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yMik7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvcjIpO1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuLnByb21vQ29kZUZvcm0ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogNTA7XFxufVxcbi5wcm9tb0NvZGVGb3JtID4gaW5wdXQge1xcbiAgcGFkZGluZzogMC4zNXJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yMik7XFxufVxcbi5wcm9tb0NvZGVGb3JtID4gaW5wdXQ6Zmlyc3QtY2hpbGQge1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMC4zcmVtO1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMC4zcmVtO1xcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ucHJvbW9Db2RlRm9ybSA+IGlucHV0OmZpcnN0LWNoaWxkOmZvY3VzIHtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3IzKTtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcbi5wcm9tb0NvZGVGb3JtID4gaW5wdXQ6Zmlyc3QtY2hpbGQ6OnBsYWNlaG9sZGVyIHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtZmFtaWx5OiBDYW1icmlhLCBHZW9yZ2lhLCBUaW1lcywgXFxcIlRpbWVzIE5ldyBSb21hblxcXCIsIHNlcmlmO1xcbiAgZm9udC1zaXplOiBzbWFsbGVyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwLjZyZW07XFxufVxcblxcbi5wcm9tb0NvZGVGb3JtID4gaW5wdXQ6Zmlyc3QtY2hpbGQge1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMC4zcmVtO1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMC4zcmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XFxufVxcblxcbi5wcm9tb0NvZGVGb3JtID4gaW5wdXQ6bnRoLWNoaWxkKDIpIHtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwLjNyZW07XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMC4zcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3IyKTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvcjEpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcmlnaHQ6IDRweDtcXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcXG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xcbiAgcGFkZGluZy1yaWdodDogMC41cmVtO1xcbn1cXG5cXG4uY2FydCB7XFxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhcigtLWNvbG9yMCk7XFxuICBwYWRkaW5nOiAxcmVtIDByZW0gMXJlbSAxcmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiA0dncgIWltcG9ydGFudDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmNhcnQgPiBzdmcge1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjI1cmVtO1xcbn1cXG4uY2FydCA+IHNwYW4ge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yNCk7XFxuICBmb250LXNpemU6IDEuMzc1cmVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uY2FydCA+IHNwYW46OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiJFxcXCI7XFxuICBjb2xvcjogdmFyKC0tY29sb3I0KTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvdHRvbTogNXB4O1xcbn1cXG4ubG9naW4yID4gYTpob3ZlcixcXG4ucHJvbW9Db2RlRm9ybSBpbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvcjYpO1xcbn1cXG5cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG5cXG5mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJvcmRlci10b3A6IHZhcigtLWNvbG9yMCkgMXB4IHNvbGlkO1xcbiAgcGFkZGluZzogMS41cmVtIG1heCg0cmVtLCA4dncpO1xcbn1cXG4uZm9vdGVyQ29udGVudFdpZHRoQ29udHJvbCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmZvb3RlckxpbmtzIHtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSBtaW4oNjAwcHgsIDQyJSkpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXG59XFxuLmZvb3RlckxpbmtzID4gZGl2IHtcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuZm9vdGVyIGEge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yNyk7XFxuICBmb250LXNpemU6IDAuNzVyZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1zZWNvbmRhcnlGb250KTtcXG4gIGxldHRlci1zcGFjaW5nOiAwcHg7XFxufVxcbmZvb3RlciBhOmhvdmVyIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG4uZm9vdGVyTGlua3MgaDQge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yMik7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG4uZnJhbmNoaXNlIHtcXG4gIHdpZHRoOiBtaW4oNjAwcHgsIDQyJSk7XFxufVxcbi5mcmFuY2hpc2UgPiBhIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGdhcDogMS41cmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3IwKTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDE1MG1zIGVhc2UtaW47XFxufVxcbi5mcmFuY2hpc2UgYSB7XFxuICBmb250LWZhbWlseTogdmFyKC0tbWFpbkZvbnQpO1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbn1cXG4uZnJhbmNoaXNlIGE6aG92ZXIge1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI0KSAwcHggM3B4IDhweDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuLmZvb3RlckJvdHRvbSB7XFxuICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgcGFkZGluZy10b3A6IDEuNzVyZW07XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tY29sb3IwKTtcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHBpbms7ICovXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xcbn1cXG4uY291bnRyeVNlbGVjdCB7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBmb250LWZhbWlseTogdmFyKC0tc2Vjb25kYXJ5Rm9udCk7XFxuICBmb250LXNpemU6IDAuNzVyZW07XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxufVxcbi5jb3VudHJ5U2VsZWN0OmZvY3VzIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yMyk7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG4ubGVnYWxMaW5rcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAwLjc1cmVtO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgbWFyZ2luOiAwLjVyZW0gYXV0byAxcmVtIDByZW07XFxufVxcbi5sZWdhbExpbmtzIGxpIHtcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7ICovXFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uZm9vdGVyQm90dG9tIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLnNvY2lhbE1lZGlhTGlua0ljb25zIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiA2cHg7XFxuICAvKiBhbGlnbi1zZWxmOiBiYXNlbGluZTsgKi9cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjc1cmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjMzhhNTc1OyAqL1xcbn1cXG4uc29jaWFsTWVkaWFMaW5rSWNvbnMgc3ZnIHtcXG4gIHRyYW5zaXRpb246IGNvbG9yIDQwMG1zIGVhc2UtaW4tb3V0O1xcbn1cXG4uc29jaWFsTWVkaWFMaW5rSWNvbnMgc3ZnOmhvdmVyIHtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuXFxuLyogV2hlbiB0aGUgYnJvd3NlciBpcyA4MzNweCBvciB3aWRlciAqL1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgzM3B4KSB7XFxuICAubW9iaWxlIHtcXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjsgKi9cXG4gIH1cXG4gIC5kZXNrdG9wIHtcXG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xcbiAgfVxcbn1cXG4vKiBXaGVuIHRoZSBicm93c2VyIGlzIGxlc3MgdGhhbiA4MzNweCB3aWRlICovXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODMzcHgpIHtcXG4gIC5tb2JpbGUge1xcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuZGVza3RvcCB7XFxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5uYXZDb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDExNHB4O1xcbiAgfVxcbiAgLnRvcE5hdiB7XFxuICAgIGhlaWdodDogNTUlO1xcbiAgfVxcbiAgLmJvdHRvbU5hdiB7XFxuICAgIGhlaWdodDogNDUlO1xcbiAgfVxcbiAgLm1lbnUgPiBhLFxcbiAgLnNwZWNpYWxzID4gYSxcXG4gIC5wYXBhUmV3YXJkcyA+IGEge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICB9XFxuICAubWVudSA+IGE6aG92ZXIsXFxuICAuc3BlY2lhbHMgPiBhOmhvdmVyLFxcbiAgLnBhcGFSZXdhcmRzID4gYTpob3ZlciB7XFxuICAgIHBhZGRpbmctdG9wOiAzLjdweDsgLypzdG9wcyB0ZXh0IGZyb20gbW92aW5nIHVwd2FyZHMgd2hlbiBib3JkZXIgaXMgYWRkZWQgb24gaG92ZXIqL1xcbiAgfVxcbiAgLmFjdGl2ZSB7XFxuICAgIHBhZGRpbmctdG9wOiAzLjdweDtcXG4gIH1cXG4gIC5tZW51IHtcXG4gICAgcGFkZGluZy1sZWZ0OiAwcmVtO1xcbiAgfVxcbiAgLmxvZ28ge1xcbiAgICBoZWlnaHQ6IDEuNnJlbTtcXG4gICAgcGFkZGluZy1sZWZ0OiAwcmVtO1xcbiAgfVxcbiAgLmxvZ28gaW1nIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjc1KSB0cmFuc2xhdGVYKC0yMXB4KTtcXG4gIH1cXG4gIGZvb3RlciB7XFxuICAgIHBhZGRpbmc6IDEuNXJlbTtcXG4gIH1cXG4gIC5mb290ZXJDb250ZW50V2lkdGhDb250cm9sIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG4gIC5mb290ZXJMaW5rcyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbiAgLmZyYW5jaGlzZSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nLXRvcDogMS41cmVtO1xcbiAgfVxcbiAgLmxlZ2FsTGlua3Mge1xcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW07XFxuICB9XFxuICAuc29jaWFsTWVkaWFMaW5rSWNvbnMge1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgICBtYXJnaW4tbGVmdDogMDtcXG4gIH1cXG4gIC8qKioqKioqKioqKioqKioqKiBIYW1idXJnZXIqL1xcbiAgLnBhZ2VXcmFwcGVyIHtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDUwMG1zO1xcbiAgfVxcbiAgLnNsaWRlUGFnZVdyYXBwZXJMIHtcXG4gICAgYW5pbWF0aW9uOiBzbGlkZVBhZ2VMIDUwMG1zIGZvcndhcmRzO1xcbiAgfVxcbiAgQGtleWZyYW1lcyBzbGlkZVBhZ2VMIHtcXG4gICAgdG8ge1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtODUlKTtcXG4gICAgfVxcbiAgfVxcbiAgLnNsaWRQYWdlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC04NSUpO1xcbiAgfVxcbiAgLnNsaWRlUGFnZVdyYXBwZXJSIHtcXG4gICAgYW5pbWF0aW9uOiBzbGlkZVBhZ2VSIDUwMG1zIGZvcndhcmRzO1xcbiAgfVxcbiAgQGtleWZyYW1lcyBzbGlkZVBhZ2VSIHtcXG4gICAgdG8ge1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gICAgfVxcbiAgfVxcblxcbiAgLnNob3dNb2JpbGVNZW51IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgd2lkdGg6IDg1JTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xcbiAgICB6LWluZGV4OiA1MDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XFxuICB9XFxuICAuc2xpZGVNb2JpbGVNZW51TCB7XFxuICAgIGFuaW1hdGlvbjogc2xpZGVNZW51TCA1MDBtcyBmb3J3YXJkcztcXG4gIH1cXG4gIEBrZXlmcmFtZXMgc2xpZGVNZW51TCB7XFxuICAgIHRvIHtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICAgIH1cXG4gIH1cXG4gIC5zbGlkTWVudSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gIH1cXG4gIC5zbGlkZU1vYmlsZU1lbnVSIHtcXG4gICAgYW5pbWF0aW9uOiBzbGlkZU1lbnVSIDUwMG1zIGZvcndhcmRzO1xcbiAgfVxcbiAgQGtleWZyYW1lcyBzbGlkZU1lbnVSIHtcXG4gICAgdG8ge1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcXG4gICAgfVxcbiAgfVxcblxcbiAgLmRhcmtlbk92ZXJsYXkge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBpbnNldDogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3I3KTtcXG4gICAgb3BhY2l0eTogMC41O1xcbiAgICB6LWluZGV4OiA1MDAwO1xcbiAgfVxcblxcbiAgLm1vYmlsZU1lbnUgdWwge1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBjaGFydHJldXNlOyAqL1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBtYXJnaW46IDEuMjVyZW0gMS43NXJlbTtcXG4gIH1cXG4gIC5tb2JpbGVNZW51IGxpIHtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcGluazsgKi9cXG4gICAgcGFkZGluZzogMXJlbSAwcmVtO1xcbiAgfVxcbiAgLm1vYmlsZU1lbnUgbGk6bm90KDpsYXN0LWNoaWxkKSB7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1jb2xvcjApO1xcbiAgfVxcbiAgLm1vYmlsZU1lbnUgYSB7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTsgKi9cXG4gICAgY29sb3I6IHZhcigtLWNvbG9yMik7XFxuICAgIHBhZGRpbmc6IDAuM3JlbSAwLjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICB9XFxuICAubW9iaWxlU2lnblVwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3I0KTtcXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMTUwbXMgZWFzZS1pbjtcXG4gIH1cXG4gIC5tb2JpbGVTaWduVXA6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMzU1LCA2OCUsIDI4JSk7XFxuICB9XFxuICAubW9iaWxlTWVudSAucHJvbW9Db2RlRm9ybSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcbiAgLm1vYmlsZU1lbnUgLnByb21vQ29kZUZvcm0gaW5wdXQ6Zmlyc3QtY2hpbGQge1xcbiAgICBtYXJnaW4tbGVmdDogMDtcXG4gICAgd2lkdGg6IGNsYW1wKDE2MHB4LCA3MCUsIDUwMHB4KTtcXG4gIH1cXG5cXG4gIC8qKioqKioqKioqKioqKioqKiBFbmQgb2YgIFN0eWxpbmcgSGFtYnVyZ2VyKi9cXG59XFxuLyogV2hlbiB0aGUgYnJvd3NlciBpcyBsZXNzIHRoYW4gNjM5cHggd2lkZSAqL1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYzOXB4KSB7XFxuICAub3VyQ29tcGFueSB1bCxcXG4gIC5vdXJQaXp6YSB1bCxcXG4gIC5oZWxwIHVsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgZ2FwOiAxcHg7XFxuICAgIG1heC1oZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNTAwbXM7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICB9XFxuICAub3VyQ29tcGFueSBsaSxcXG4gIC5vdXJQaXp6YSBsaSxcXG4gIC5oZWxwIGxpIHtcXG4gICAgYW5pbWF0aW9uOiBkcm9wZG93biA0MDBtcyBlYXNlLWluLW91dCBmb3J3YXJkcztcXG4gIH1cXG5cXG4gIEBrZXlmcmFtZXMgZHJvcGRvd24ge1xcbiAgICBmcm9tIHtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEyMHB4KTtcXG4gICAgfVxcbiAgICB0byB7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5oaWRkZW5PblNtYWxsU2NyZWVucyB7XFxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5mb290ZXJMaW5rcyB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuICAuZm9vdGVyTGlua3MgaDQge1xcbiAgICBtYXJnaW46IDAuNzVyZW0gMHJlbSAwLjI1cmVtIDByZW07XFxuICAgIHBhZGRpbmc6IDAuMjVyZW0gMHJlbTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWNvbG9yMCk7XFxuICB9XFxuICAub3VyQ29tcGFueSxcXG4gIC5vdXJQaXp6YSxcXG4gIC5oZWxwIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcXG4gICAgbWFyZ2luLXRvcDogMnB4O1xcbiAgfVxcblxcbiAgaDQ6OmFmdGVyIHtcXG4gICAgY29udGVudDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogLTVweDtcXG4gICAgdG9wOiAxcmVtO1xcbiAgfVxcbiAgLmZvb3RlckxpbmtzIGxpIHtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgfVxcbn1cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4vKmhvbWUuY3NzKi9cXG5cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBOzs7RUFHRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZiw0QkFBNEI7RUFDNUIsZUFBZTtFQUNmLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsNEJBQTRCO0VBQzVCLDRCQUE0QjtFQUM1Qix5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLGdDQUFnQztFQUNoQyw2Q0FBNkM7QUFDL0M7O0FBRUEsZ0NBQWdDO0FBQ2hDOzs7O0VBSUUsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUEsZ0ZBQWdGO0FBQ2hGOzs7O0VBSUUsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLDRCQUE0QjtFQUM1Qix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQUNwQjtBQUNBLDRGQUE0Rjs7QUFFNUY7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLFlBQVk7QUFDZDtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDtBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLGlEQUFpRDtBQUNuRDtBQUNBOzs7RUFHRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtF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Q1osYUFBYTtFQUNmOztFQUVBO0lBQ0Usa0NBQWtDO0lBQ2xDLG1CQUFtQjtJQUNuQix1QkFBdUI7RUFDekI7RUFDQTtJQUNFLDRCQUE0QjtJQUM1QixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLG1DQUFtQztFQUNyQztFQUNBO0lBQ0UsOEJBQThCO0lBQzlCLG9CQUFvQjtJQUNwQixzQkFBc0I7SUFDdEIsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSwrQkFBK0I7SUFDL0IsdUJBQXVCO0lBQ3ZCLDBDQUEwQztFQUM1QztFQUNBO0lBQ0Usb0NBQW9DO0VBQ3RDO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxjQUFjO0lBQ2QsK0JBQStCO0VBQ2pDOztFQUVBLDZDQUE2QztBQUMvQztBQUNBLDZDQUE2QztBQUM3QztFQUNFOzs7SUFHRSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QiwyQkFBMkI7SUFDM0IsUUFBUTtJQUNSLHVCQUF1QjtJQUN2QiwyQkFBMkI7SUFDM0IsZ0JBQWdCO0VBQ2xCO0VBQ0E7OztJQUdFLDhDQUE4QztFQUNoRDs7RUFFQTtJQUNFO01BQ0UsNkJBQTZCO0lBQy9CO0lBQ0E7TUFDRSwwQkFBMEI7SUFDNUI7RUFDRjs7RUFFQTtJQUNFLHdCQUF3QjtFQUMxQjtFQUNBO0lBQ0Usc0JBQXNCO0VBQ3hCO0VBQ0E7SUFDRSxpQ0FBaUM7SUFDakMscUJBQXFCO0lBQ3JCLHNDQUFzQztFQUN4QztFQUNBOzs7SUFHRSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGdEQUFxQztJQUNyQyxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFNBQVM7RUFDWDtFQUNBO0lBQ0UsWUFBWTtFQUNkO0FBQ0Y7QUFDQSw0RkFBNEY7QUFDNUYsV0FBVzs7QUFFWCw0RkFBNEZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3N3YWxkOndnaHRANTAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIC0tY29sb3IwOiByZ2IoMjA5LCAyMDksIDIwOSk7XFxuICAtLWNvbG9yMTogd2hpdGU7XFxuICAtLWNvbG9yMjogYmxhY2s7XFxuICAtLWNvbG9yMzogIzM4YTU3NTtcXG4gIC0tY29sb3I0OiBoc2woMzU1LCA2OCUsIDQ4JSk7XFxuICAtLWNvbG9yNTogcmdiKDIzMCwgMjMwLCAyMzApO1xcbiAgLS1jb2xvcjY6IHJnYig0NiwgNDYsIDQ2KTtcXG4gIC0tY29sb3I3OiByZ2IoOTgsIDk4LCA5OCk7XFxuICAtLW1haW5Gb250OiBcXFwiT3N3YWxkXFxcIiwgc2Fucy1zZXJpZjtcXG4gIC0tc2Vjb25kYXJ5Rm9udDogSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLyogbWFrZSB0aGVzZSBpdGVtcyByZXNwb25zaXZlICovXFxuaW1nLFxcbnBpY3R1cmUsXFxuc3ZnLFxcbnZpZGVvIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG4vKiBtYWtlIHRoZSBmb3JtIGVsZW1lbnRzIGluaGVyaXQgZm9udCBwcm9wZXJ0aWVzIHRoZSB3YXkgZXZlcnl0aGluZyBlbHNlIGRvZXMgKi9cXG5pbnB1dCxcXG50ZXh0YXJlYSxcXG5idXR0b24sXFxuc2VsZWN0IHtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxufVxcblxcbmJvZHkge1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluRm9udCk7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG5cXG51bCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5saSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuLm5hdkNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTI4cHg7XFxuICBib3gtc2hhZG93OiByZ2JhKDE0OSwgMTU3LCAxNjUsIDAuMikgMHB4IDhweCAyNHB4O1xcbn1cXG4ubmF2Q29udGFpbmVyIHVsLFxcbi5uYXZDb250YWluZXIgbGksXFxuLm5hdkNvbnRhaW5lciBhIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4udG9wTmF2IHtcXG4gIGhlaWdodDogNTAlO1xcbn1cXG4udG9wTmF2IGxpIHtcXG4gIG1hcmdpbjogMC41cmVtO1xcbn1cXG4udG9wTmF2IGxpOmZpcnN0LWNoaWxkIHtcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuLnRvcE5hdiBhIHtcXG4gIGhlaWdodDogNTAlO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yMik7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjNyZW07XFxufVxcbi5zdGFydFlvdXJPcmRlciA+IGEsXFxuLmxhbmd1YWdlID4gYSxcXG4ubG9naW4gPiBhIHtcXG4gIGdhcDogMC4yNXJlbTtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMTUwbXMgZWFzZS1pbjtcXG59XFxuLnN0YXJ0WW91ck9yZGVyID4gYTpob3ZlcixcXG4ubGFuZ3VhZ2UgPiBhOmhvdmVyLFxcbi5sb2dpbiA+IGE6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3I1KTtcXG4gIHotaW5kZXg6IDEwMDtcXG59XFxuLnN0YXJ0WW91ck9yZGVyID4gYTpmb2N1cyxcXG4ubGFuZ3VhZ2UgPiBhOmZvY3VzLFxcbi5sb2dpbiA+IGE6Zm9jdXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3I1KTtcXG59XFxuLnNpZ25VcCA+IGEge1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yMik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvcjIpO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yMSk7XFxufVxcbi5sb2dvIHtcXG4gIGhlaWdodDogMS42cmVtO1xcbiAgcGFkZGluZy1sZWZ0OiA0dnc7XFxufVxcbi5sb2dvSU1HIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmZpbHRlcmVkIHtcXG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwKSBzYXR1cmF0ZSgxMDAlKSBpbnZlcnQoMjklKSBzZXBpYSg2NyUpIHNhdHVyYXRlKDUxOTglKVxcbiAgICBodWUtcm90YXRlKDM0MWRlZykgYnJpZ2h0bmVzcyg4MyUpIGNvbnRyYXN0KDk0JSk7XFxuICAvKiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yMjI1MjQ3Mi9ob3ctY2FuLWktY2hhbmdlLXRoZS1jb2xvci1vZi1hbi1zdmctZWxlbWVudCovXFxufVxcbi5zaWduVXAgPiBhOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yNik7XFxufVxcbi5zaWduVXAge1xcbiAgbWFyZ2luLXJpZ2h0OiA0dncgIWltcG9ydGFudDtcXG59XFxuXFxuLypsYW5ndWFnZSBwb3B1cCBzdHlsaW5nKi9cXG4ubGFuZ3VhZ2Uge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ubGFuZ3VhZ2UtcG9wdXAge1xcbiAgei1pbmRleDogOTk7XFxuICBvcGFjaXR5OiAxO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3IxKTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNSkgMHB4IDU0cHggNTVweCxcXG4gICAgcmdiYSgwLCAwLCAwLCAwLjEyKSAwcHggLTEycHggMzBweCwgcmdiYSgwLCAwLCAwLCAwLjEyKSAwcHggNHB4IDZweCxcXG4gICAgcmdiYSgwLCAwLCAwLCAwLjE3KSAwcHggMTJweCAxM3B4LCByZ2JhKDAsIDAsIDAsIDAuMDkpIDBweCAtM3B4IDVweDtcXG4gIHRvcDogMTAwJTtcXG4gIHJpZ2h0OiAtMTA0cHg7XFxuICBmb250LXNpemU6IDFyZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGhlaWdodDogMTQ4cHg7XFxuICB3aWR0aDogMjg4cHg7XFxuICBwYWRkaW5nOiAxcmVtIDEuNzVyZW0gMS41cmVtIDEuNzVyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcbi5sYW5ndWFnZS1wb3B1cDo6YWZ0ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yMSk7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg1NWRlZykgc2tldygyMGRlZyk7XFxuICB0b3A6IC0wLjFyZW07XFxuICBsZWZ0OiA0NSU7XFxufVxcblxcbi5sYW5ndWFnZS1wb3B1cCBoMyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMS4xNXJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAwLjU1cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1jb2xvcjApO1xcbn1cXG4ubGFuZ3VhZ2UtcG9wdXAgdWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ubGFuZ3VhZ2UtcG9wdXAgbGkge1xcbiAgbWFyZ2luOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5sYW5ndWFnZS1wb3B1cCBhIHtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1zZWNvbmRhcnlGb250KTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvcjMpO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXNpemU6IDAuNzVyZW07XFxufVxcbi5sYW5ndWFnZS1wb3B1cCBhOmhvdmVyIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4vKmxvZ2luIHBvcHVwIHN0eWxpbmcgTkVFRFMgV09SSyovXFxuLmxvZ2luIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmxvZ2luLXBvcHVwIHtcXG4gIHotaW5kZXg6IDk5O1xcbiAgb3BhY2l0eTogMTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yMSk7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjUpIDBweCA1NHB4IDU1cHgsXFxuICAgIHJnYmEoMCwgMCwgMCwgMC4xMikgMHB4IC0xMnB4IDMwcHgsIHJnYmEoMCwgMCwgMCwgMC4xMikgMHB4IDRweCA2cHgsXFxuICAgIHJnYmEoMCwgMCwgMCwgMC4xNykgMHB4IDEycHggMTNweCwgcmdiYSgwLCAwLCAwLCAwLjA5KSAwcHggLTNweCA1cHg7XFxuICB0b3A6IDEwMCU7XFxuICByaWdodDogMDtcXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgaGVpZ2h0OiAzNDBweDtcXG4gIHdpZHRoOiAyODhweDtcXG4gIHBhZGRpbmc6IDFyZW0gMS43NXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjc1cmVtO1xcbn1cXG4ubG9naW4tcG9wdXA6OmFmdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvcjEpO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNTVkZWcpIHNrZXcoMjBkZWcpO1xcbiAgdG9wOiAtMC4xcmVtO1xcbiAgbGVmdDogODAuNSU7XFxufVxcbi5sb2dpbi1wb3B1cCBoMyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMS4xNXJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAwLjU1cmVtO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWNvbG9yMCk7XFxufVxcbi5sb2dpbkZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEuMTVyZW07XFxufVxcbi5sb2dpbkZvcm1TZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4ubG9naW5Gb3JtU2VjdGlvbiBsYWJlbCB7XFxuICBmb250LXNpemU6IDAuNzVyZW07XFxuICBmb250LWZhbWlseTogdmFyKC0tc2Vjb25kYXJ5Rm9udCk7XFxuICBjb2xvcjogdmFyKC0tY29sb3I3KTtcXG59XFxuLmxvZ2luRm9ybSBpbnB1dDpub3QoW3R5cGU9XFxcImNoZWNrYm94XFxcIl0pIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvcjcpO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgcGFkZGluZzogMC4yNXJlbTtcXG4gIG1hcmdpbi10b3A6IDRweDtcXG59XFxuLmxvZ2luRm9ybSBpbnB1dDpub3QoW3R5cGU9XFxcImNoZWNrYm94XFxcIl0pOmZvY3VzIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yMyk7XFxufVxcbi5sb2dpbkZvcm1TZWN0aW9uOm50aC1jaGlsZCgyKSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5sb2dpbkZvcm1TZWN0aW9uOm50aC1jaGlsZCgyKSBhIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDM4LjUlO1xcbiAgYm90dG9tOiAxOHB4O1xcbn1cXG4ubG9naW5Gb3JtU2VjdGlvbjpudGgtY2hpbGQoMykgbGFiZWw6Zmlyc3QtY2hpbGQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xcbiAgbGVmdDogNTBweDtcXG4gIGJvdHRvbTogMTIxcHg7XFxufVxcbi5yZW1lbWJlck1lIHtcXG4gIGFjY2VudC1jb2xvcjogdmFyKC0tY29sb3IzKTtcXG4gIHdpZHRoOiAxcmVtO1xcbiAgaGVpZ2h0OiAxcmVtO1xcbn1cXG4ucmVtZW1iZXJNZSArIGxhYmVsIHtcXG4gIG1hcmdpbi10b3A6IDRweDtcXG59XFxuLmxvZ2luRm9ybVNlY3Rpb246bnRoLWNoaWxkKDQpIGJ1dHRvbiB7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxuICBjb2xvcjogdmFyKC0tY29sb3IxKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yMik7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvcjIpO1xcbiAgcGFkZGluZzogMC4yNXJlbSAwLjY1cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5sb2dpbkZvcm1TZWN0aW9uOm50aC1jaGlsZCg0KSBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3I2KTtcXG59XFxuLmxvZ2luRm9ybVNlY3Rpb246bnRoLWNoaWxkKDQpIGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLXNlY29uZGFyeUZvbnQpO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yNyk7XFxuICBmb250LXNpemU6IDAuNzVyZW07XFxufVxcbi5sb2dpbkZvcm1TZWN0aW9uOm50aC1jaGlsZCg0KSBhIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcXG59XFxuXFxuLmxvZ2luLXBvcHVwIGEge1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLXNlY29uZGFyeUZvbnQpO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yMyk7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcXG59XFxuLmxvZ2luLXBvcHVwIGE6aG92ZXIge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi8qZm9yIGxhbmd1YWdlIEFORCBsb2dpbiBwb3B1cHMqL1xcbi5oaWRlLXBvcHVwIHtcXG4gIG9wYWNpdHk6IDA7XFxuICB6LWluZGV4OiAxO1xcbn1cXG4vKkhhbWJ1cmdlciBNb2JpbGUgTWVudSBzdHlsaW5nIGhpZGRlbiBvbiBkZXNrdG9wKi9cXG4ubW9iaWxlTWVudSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4ucGFnZVdyYXBwZXIge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuLnBhZ2VPdmVybGF5IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcblxcbi5ib3R0b21OYXYge1xcbiAgaGVpZ2h0OiA1MCU7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tY29sb3IwKTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1jb2xvcjApO1xcbn1cXG4uYm90dG9tTmF2IGxpIHtcXG4gIG1hcmdpbjogMHJlbTtcXG59XFxuLmJvdHRvbU5hdiBsaTpudGgtY2hpbGQoMykge1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG4uYm90dG9tTmF2IGEge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yMik7XFxufVxcbi5tZW51ID4gYSxcXG4uc3BlY2lhbHMgPiBhLFxcbi5wYXBhUmV3YXJkcyA+IGEge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XFxuICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XFxuICBmb250LXNpemU6IGxhcmdlcjtcXG59XFxuLm1lbnUgPiBhOmhvdmVyLFxcbi5zcGVjaWFscyA+IGE6aG92ZXIsXFxuLnBhcGFSZXdhcmRzID4gYTpob3ZlciB7XFxuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgdmFyKC0tY29sb3IzKTtcXG4gIHBhZGRpbmctdG9wOiAzLjlweDsgLypzdG9wcyB0ZXh0IGZyb20gbW92aW5nIHVwd2FyZHMgd2hlbiBib3JkZXIgaXMgYWRkZWQgb24gaG92ZXIqL1xcbn1cXG4uYWN0aXZlIHtcXG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCB2YXIoLS1jb2xvcjMpO1xcbiAgcGFkZGluZy10b3A6IDMuOXB4O1xcbn1cXG4ubWVudSB7XFxuICBwYWRkaW5nLWxlZnQ6IDR2dztcXG59XFxuLmxvZ2luMiA+IGEge1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvcjEpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3IyKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yMik7XFxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cXG4ucHJvbW9Db2RlRm9ybSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiA1MDtcXG59XFxuLnByb21vQ29kZUZvcm0gPiBpbnB1dCB7XFxuICBwYWRkaW5nOiAwLjM1cmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3IyKTtcXG59XFxuLnByb21vQ29kZUZvcm0gPiBpbnB1dDpmaXJzdC1jaGlsZCB7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwLjNyZW07XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwLjNyZW07XFxuICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5wcm9tb0NvZGVGb3JtID4gaW5wdXQ6Zmlyc3QtY2hpbGQ6Zm9jdXMge1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvcjMpO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuLnByb21vQ29kZUZvcm0gPiBpbnB1dDpmaXJzdC1jaGlsZDo6cGxhY2Vob2xkZXIge1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC1mYW1pbHk6IENhbWJyaWEsIEdlb3JnaWEsIFRpbWVzLCBcXFwiVGltZXMgTmV3IFJvbWFuXFxcIiwgc2VyaWY7XFxuICBmb250LXNpemU6IHNtYWxsZXI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDAuNnJlbTtcXG59XFxuXFxuLnByb21vQ29kZUZvcm0gPiBpbnB1dDpmaXJzdC1jaGlsZCB7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwLjNyZW07XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwLjNyZW07XFxuICBtYXJnaW4tbGVmdDogMXJlbTtcXG59XFxuXFxuLnByb21vQ29kZUZvcm0gPiBpbnB1dDpudGgtY2hpbGQoMikge1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAuM3JlbTtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwLjNyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvcjIpO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yMSk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICByaWdodDogNHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbiAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XFxuICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XFxufVxcblxcbi5jYXJ0IHtcXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0tY29sb3IwKTtcXG4gIHBhZGRpbmc6IDFyZW0gMHJlbSAxcmVtIDFyZW07XFxuICBtYXJnaW4tcmlnaHQ6IDR2dyAhaW1wb3J0YW50O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uY2FydCA+IHN2ZyB7XFxuICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW07XFxufVxcbi5jYXJ0ID4gc3BhbiB7XFxuICBjb2xvcjogdmFyKC0tY29sb3I0KTtcXG4gIGZvbnQtc2l6ZTogMS4zNzVyZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5jYXJ0ID4gc3Bhbjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCIkXFxcIjtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvcjQpO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm90dG9tOiA1cHg7XFxufVxcbi5sb2dpbjIgPiBhOmhvdmVyLFxcbi5wcm9tb0NvZGVGb3JtIGlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yNik7XFxufVxcblxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcblxcbmZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYm9yZGVyLXRvcDogdmFyKC0tY29sb3IwKSAxcHggc29saWQ7XFxuICBwYWRkaW5nOiAxLjVyZW0gbWF4KDRyZW0sIDh2dyk7XFxufVxcbi5mb290ZXJDb250ZW50V2lkdGhDb250cm9sIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uZm9vdGVyTGlua3Mge1xcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIG1pbig2MDBweCwgNDIlKSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xcbn1cXG4uZm9vdGVyTGlua3MgPiBkaXYge1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG5mb290ZXIgYSB7XFxuICBjb2xvcjogdmFyKC0tY29sb3I3KTtcXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLXNlY29uZGFyeUZvbnQpO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDBweDtcXG59XFxuZm9vdGVyIGE6aG92ZXIge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcbi5mb290ZXJMaW5rcyBoNCB7XFxuICBjb2xvcjogdmFyKC0tY29sb3IyKTtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcbi5mcmFuY2hpc2Uge1xcbiAgd2lkdGg6IG1pbig2MDBweCwgNDIlKTtcXG59XFxuLmZyYW5jaGlzZSA+IGEge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgZ2FwOiAxLjVyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvcjApO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMTUwbXMgZWFzZS1pbjtcXG59XFxuLmZyYW5jaGlzZSBhIHtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluRm9udCk7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxufVxcbi5mcmFuY2hpc2UgYTpob3ZlciB7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjQpIDBweCAzcHggOHB4O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG4uZm9vdGVyQm90dG9tIHtcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxuICBwYWRkaW5nLXRvcDogMS43NXJlbTtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1jb2xvcjApO1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcGluazsgKi9cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxufVxcbi5jb3VudHJ5U2VsZWN0IHtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1zZWNvbmRhcnlGb250KTtcXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcXG59XFxuLmNvdW50cnlTZWxlY3Q6Zm9jdXMge1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3IzKTtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcbi5sZWdhbExpbmtzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDAuNzVyZW07XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBtYXJnaW46IDAuNXJlbSBhdXRvIDFyZW0gMHJlbTtcXG59XFxuLmxlZ2FsTGlua3MgbGkge1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTsgKi9cXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5mb290ZXJCb3R0b20ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uc29jaWFsTWVkaWFMaW5rSWNvbnMge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDZweDtcXG4gIC8qIGFsaWduLXNlbGY6IGJhc2VsaW5lOyAqL1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDAuNzVyZW07XFxuICBtYXJnaW4tbGVmdDogMXJlbTtcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICMzOGE1NzU7ICovXFxufVxcbi5zb2NpYWxNZWRpYUxpbmtJY29ucyBzdmcge1xcbiAgdHJhbnNpdGlvbjogY29sb3IgNDAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcbi5zb2NpYWxNZWRpYUxpbmtJY29ucyBzdmc6aG92ZXIge1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG5cXG4vKiBXaGVuIHRoZSBicm93c2VyIGlzIDgzM3B4IG9yIHdpZGVyICovXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODMzcHgpIHtcXG4gIC5tb2JpbGUge1xcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGdyZWVuOyAqL1xcbiAgfVxcbiAgLmRlc2t0b3Age1xcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XFxuICB9XFxufVxcbi8qIFdoZW4gdGhlIGJyb3dzZXIgaXMgbGVzcyB0aGFuIDgzM3B4IHdpZGUgKi9cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MzNweCkge1xcbiAgLm1vYmlsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcXG4gIH1cXG4gIC5kZXNrdG9wIHtcXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm5hdkNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogMTE0cHg7XFxuICB9XFxuICAudG9wTmF2IHtcXG4gICAgaGVpZ2h0OiA1NSU7XFxuICB9XFxuICAuYm90dG9tTmF2IHtcXG4gICAgaGVpZ2h0OiA0NSU7XFxuICB9XFxuICAubWVudSA+IGEsXFxuICAuc3BlY2lhbHMgPiBhLFxcbiAgLnBhcGFSZXdhcmRzID4gYSB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gIH1cXG4gIC5tZW51ID4gYTpob3ZlcixcXG4gIC5zcGVjaWFscyA+IGE6aG92ZXIsXFxuICAucGFwYVJld2FyZHMgPiBhOmhvdmVyIHtcXG4gICAgcGFkZGluZy10b3A6IDMuN3B4OyAvKnN0b3BzIHRleHQgZnJvbSBtb3ZpbmcgdXB3YXJkcyB3aGVuIGJvcmRlciBpcyBhZGRlZCBvbiBob3ZlciovXFxuICB9XFxuICAuYWN0aXZlIHtcXG4gICAgcGFkZGluZy10b3A6IDMuN3B4O1xcbiAgfVxcbiAgLm1lbnUge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDByZW07XFxuICB9XFxuICAubG9nbyB7XFxuICAgIGhlaWdodDogMS42cmVtO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDByZW07XFxuICB9XFxuICAubG9nbyBpbWcge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNzUpIHRyYW5zbGF0ZVgoLTIxcHgpO1xcbiAgfVxcbiAgZm9vdGVyIHtcXG4gICAgcGFkZGluZzogMS41cmVtO1xcbiAgfVxcbiAgLmZvb3RlckNvbnRlbnRXaWR0aENvbnRyb2wge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbiAgLmZvb3RlckxpbmtzIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuICAuZnJhbmNoaXNlIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmctdG9wOiAxLjVyZW07XFxuICB9XFxuICAubGVnYWxMaW5rcyB7XFxuICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcXG4gIH1cXG4gIC5zb2NpYWxNZWRpYUxpbmtJY29ucyB7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICAgIG1hcmdpbi1sZWZ0OiAwO1xcbiAgfVxcbiAgLyoqKioqKioqKioqKioqKioqIEhhbWJ1cmdlciovXFxuICAucGFnZVdyYXBwZXIge1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNTAwbXM7XFxuICB9XFxuICAuc2xpZGVQYWdlV3JhcHBlckwge1xcbiAgICBhbmltYXRpb246IHNsaWRlUGFnZUwgNTAwbXMgZm9yd2FyZHM7XFxuICB9XFxuICBAa2V5ZnJhbWVzIHNsaWRlUGFnZUwge1xcbiAgICB0byB7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC04NSUpO1xcbiAgICB9XFxuICB9XFxuICAuc2xpZFBhZ2Uge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTg1JSk7XFxuICB9XFxuICAuc2xpZGVQYWdlV3JhcHBlclIge1xcbiAgICBhbmltYXRpb246IHNsaWRlUGFnZVIgNTAwbXMgZm9yd2FyZHM7XFxuICB9XFxuICBAa2V5ZnJhbWVzIHNsaWRlUGFnZVIge1xcbiAgICB0byB7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgICB9XFxuICB9XFxuXFxuICAuc2hvd01vYmlsZU1lbnUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB3aWR0aDogODUlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XFxuICAgIHotaW5kZXg6IDUwMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcXG4gIH1cXG4gIC5zbGlkZU1vYmlsZU1lbnVMIHtcXG4gICAgYW5pbWF0aW9uOiBzbGlkZU1lbnVMIDUwMG1zIGZvcndhcmRzO1xcbiAgfVxcbiAgQGtleWZyYW1lcyBzbGlkZU1lbnVMIHtcXG4gICAgdG8ge1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gICAgfVxcbiAgfVxcbiAgLnNsaWRNZW51IHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgfVxcbiAgLnNsaWRlTW9iaWxlTWVudVIge1xcbiAgICBhbmltYXRpb246IHNsaWRlTWVudVIgNTAwbXMgZm9yd2FyZHM7XFxuICB9XFxuICBAa2V5ZnJhbWVzIHNsaWRlTWVudVIge1xcbiAgICB0byB7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xcbiAgICB9XFxuICB9XFxuXFxuICAuZGFya2VuT3ZlcmxheSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGluc2V0OiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvcjcpO1xcbiAgICBvcGFjaXR5OiAwLjU7XFxuICAgIHotaW5kZXg6IDUwMDA7XFxuICB9XFxuXFxuICAubW9iaWxlTWVudSB1bCB7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGNoYXJ0cmV1c2U7ICovXFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIG1hcmdpbjogMS4yNXJlbSAxLjc1cmVtO1xcbiAgfVxcbiAgLm1vYmlsZU1lbnUgbGkge1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rOyAqL1xcbiAgICBwYWRkaW5nOiAxcmVtIDByZW07XFxuICB9XFxuICAubW9iaWxlTWVudSBsaTpub3QoOmxhc3QtY2hpbGQpIHtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWNvbG9yMCk7XFxuICB9XFxuICAubW9iaWxlTWVudSBhIHtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlOyAqL1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3IyKTtcXG4gICAgcGFkZGluZzogMC4zcmVtIDAuNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIH1cXG4gIC5tb2JpbGVTaWduVXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvcjQpO1xcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxNTBtcyBlYXNlLWluO1xcbiAgfVxcbiAgLm1vYmlsZVNpZ25VcDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgzNTUsIDY4JSwgMjglKTtcXG4gIH1cXG4gIC5tb2JpbGVNZW51IC5wcm9tb0NvZGVGb3JtIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuICAubW9iaWxlTWVudSAucHJvbW9Db2RlRm9ybSBpbnB1dDpmaXJzdC1jaGlsZCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwO1xcbiAgICB3aWR0aDogY2xhbXAoMTYwcHgsIDcwJSwgNTAwcHgpO1xcbiAgfVxcblxcbiAgLyoqKioqKioqKioqKioqKioqIEVuZCBvZiAgU3R5bGluZyBIYW1idXJnZXIqL1xcbn1cXG4vKiBXaGVuIHRoZSBicm93c2VyIGlzIGxlc3MgdGhhbiA2MzlweCB3aWRlICovXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjM5cHgpIHtcXG4gIC5vdXJDb21wYW55IHVsLFxcbiAgLm91clBpenphIHVsLFxcbiAgLmhlbHAgdWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBnYXA6IDFweDtcXG4gICAgbWF4LWhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSA1MDBtcztcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIH1cXG4gIC5vdXJDb21wYW55IGxpLFxcbiAgLm91clBpenphIGxpLFxcbiAgLmhlbHAgbGkge1xcbiAgICBhbmltYXRpb246IGRyb3Bkb3duIDQwMG1zIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xcbiAgfVxcblxcbiAgQGtleWZyYW1lcyBkcm9wZG93biB7XFxuICAgIGZyb20ge1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTIwcHgpO1xcbiAgICB9XFxuICAgIHRvIHtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcXG4gICAgfVxcbiAgfVxcblxcbiAgLmhpZGRlbk9uU21hbGxTY3JlZW5zIHtcXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmZvb3RlckxpbmtzIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG4gIC5mb290ZXJMaW5rcyBoNCB7XFxuICAgIG1hcmdpbjogMC43NXJlbSAwcmVtIDAuMjVyZW0gMHJlbTtcXG4gICAgcGFkZGluZzogMC4yNXJlbSAwcmVtO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tY29sb3IwKTtcXG4gIH1cXG4gIC5vdXJDb21wYW55LFxcbiAgLm91clBpenphLFxcbiAgLmhlbHAge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xcbiAgICBtYXJnaW4tdG9wOiAycHg7XFxuICB9XFxuXFxuICBoNDo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiB1cmwoYXNzZXRzL2NoZXZyb24tZG93bi5zdmcpO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAtNXB4O1xcbiAgICB0b3A6IDFyZW07XFxuICB9XFxuICAuZm9vdGVyTGlua3MgbGkge1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICB9XFxufVxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi8qaG9tZS5jc3MqL1xcblxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jYXJkU2xpZGVyLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY2FyZFNsaWRlci5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaGVyby5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hlcm8uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hvbWUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ob21lLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tZW51LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWVudS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcGFwYVJld2FyZHMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wYXBhUmV3YXJkcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3BlY2lhbHMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zcGVjaWFscy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgaG9tZSBmcm9tIFwiLi9ob21lL2hvbWVcIjtcbmltcG9ydCBtZW51IGZyb20gXCIuL21lbnUvbWVudVwiO1xuaW1wb3J0IHNwZWNpYWxzIGZyb20gXCIuL3NwZWNpYWxzL3NwZWNpYWxzXCI7XG5pbXBvcnQgcGFwYVJld2FyZHMgZnJvbSBcIi4vcGFwYVJld2FyZHMvcGFwYVJld2FyZHNcIjtcblxuLy8gaW1wb3J0IE1vdW50YWlucyBmcm9tIFwiLi9Nb3VudGFpbnMuanBnXCI7XG5cbmNvbnN0IG1haW4gPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbkNvbnRlbnRcIik7XG5cbmZ1bmN0aW9uIGNoYW5nZU1haW4ocGFnZSkge1xuICBtYWluLmlubmVySFRNTCA9IFwiXCI7XG4gIGxldCBjb250ZW50RWxlbWVudDtcbiAgaWYgKHBhZ2UgPT0gXCJob21lXCIpIHtcbiAgICBjb250ZW50RWxlbWVudCA9IGhvbWUoKTtcbiAgfSBlbHNlIGlmIChwYWdlID09IFwibWVudVwiKSB7XG4gICAgY29udGVudEVsZW1lbnQgPSBtZW51KCk7XG4gICAgbWVudVRhcmdldC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIHNwZWNpYWxzVGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgcGFwYVJld2FyZHNUYXJnZXQuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgfSBlbHNlIGlmIChwYWdlID09IFwic3BlY2lhbHNcIikge1xuICAgIGNvbnRlbnRFbGVtZW50ID0gc3BlY2lhbHMoKTtcbiAgICBzcGVjaWFsc1RhcmdldC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIG1lbnVUYXJnZXQuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICBwYXBhUmV3YXJkc1RhcmdldC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICB9IGVsc2UgaWYgKHBhZ2UgPT0gXCJwYXBhIHJld2FyZHNcIikge1xuICAgIGNvbnRlbnRFbGVtZW50ID0gcGFwYVJld2FyZHMoKTtcbiAgICBwYXBhUmV3YXJkc1RhcmdldC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIHNwZWNpYWxzVGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgbWVudVRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICB9XG4gIG1haW4uYXBwZW5kQ2hpbGQoY29udGVudEVsZW1lbnQpO1xufVxuXG5jb25zdCBsb2dvVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2dvIGltZ1wiKTtcbmxvZ29UYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY2hhbmdlTWFpbihcImhvbWVcIik7XG59KTtcblxuY29uc3Qgc3lvVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdGFydFlvdXJPcmRlciBhXCIpO1xuc3lvVGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNoYW5nZU1haW4oXCJzcGVjaWFsc1wiKTtcbn0pO1xuXG5jb25zdCBsYW5ndWFnZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGFuZ3VhZ2UgYVwiKTtcbmNvbnN0IGxhbmd1YWdlUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxhbmd1YWdlLXBvcHVwXCIpO1xubGFuZ3VhZ2VUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgLy9pZiB0aGUgbG9naW4gcG9wdXAgaXMgc3RpbGwgb3BlbiwgY2xvc2UgdGhlIGxvZ2luIHBvcHVwIGFuZCB0aGVuIG9wZW4gdGhlIGxhbmd1YWdlIHBvcHVwXG4gIGlmICghbG9naW5Qb3B1cC5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRlLXBvcHVwXCIpKSB7XG4gICAgbG9naW5Qb3B1cC5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZS1wb3B1cFwiKTtcbiAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmJsdXIoKTtcbiAgfVxuICBsYW5ndWFnZVBvcHVwLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlLXBvcHVwXCIpO1xuICBsYW5ndWFnZVRhcmdldC5mb2N1cygpO1xufSk7XG5cbmNvbnN0IGxvZ2luVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2dpbiBhXCIpO1xuY29uc3QgbG9naW5Qb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9naW4tcG9wdXBcIik7XG5sb2dpblRhcmdldC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAvL2lmIHRoZSBsYW5ndWFnZSBwb3B1cCBpcyBzdGlsbCBvcGVuLCBjbG9zZSB0aGUgbGFuZ3VhZ2UgcG9wdXAgYW5kIHRoZW4gb3BlbiB0aGUgbG9naW4gcG9wdXBcbiAgaWYgKCFsYW5ndWFnZVBvcHVwLmNsYXNzTGlzdC5jb250YWlucyhcImhpZGUtcG9wdXBcIikpIHtcbiAgICBsYW5ndWFnZVBvcHVwLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlLXBvcHVwXCIpO1xuICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1cigpO1xuICB9XG4gIGxvZ2luUG9wdXAuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGUtcG9wdXBcIik7XG4gIGxvZ2luVGFyZ2V0LmZvY3VzKCk7XG59KTtcblxuLy9wcm9jZXNzIGNsb3NpbmcgdGhlIHBvcHVwcyB3aGVuIHRoZSB1c2VyIGNsaWNrcyBlbHNld2hlcmUgYmVzaWRlcyB0aGUgcG9wdXBzXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgY29uc29sZS5sb2coZS50YXJnZXQuY2xvc2VzdChcImFcIikpO1xuICAvL2lmIGJvdGggcG9wdXBzIGFyZSBoaWRkZW5cbiAgaWYgKFxuICAgIGxhbmd1YWdlUG9wdXAuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGlkZS1wb3B1cFwiKSAmJlxuICAgIGxvZ2luUG9wdXAuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGlkZS1wb3B1cFwiKVxuICApIHtcbiAgICByZXR1cm47IC8vZG8gbm90aGluZ1xuICB9IGVsc2Uge1xuICAgIC8vaWYgaXQncyB0aGUgbGFuZ3VhZ2UgcG9wdXAgdGhhdCBvcGVuLFxuICAgIGlmIChsb2dpblBvcHVwLmNsYXNzTGlzdC5jb250YWlucyhcImhpZGUtcG9wdXBcIikpIHtcbiAgICAgIC8vYW5kIHRoZSBjbGljayBpc250IG9uIHRoZSBsYW5ndWFnZSBwb3B1cCwgaXRzIGNoaWxkcmVuIG9yIGl0cyB0YXJnZXRcbiAgICAgIGlmIChcbiAgICAgICAgZS50YXJnZXQgIT09IGxhbmd1YWdlUG9wdXAgJiZcbiAgICAgICAgZS50YXJnZXQuY2xvc2VzdChcIi5sYW5ndWFnZS1wb3B1cFwiKSAhPT0gbGFuZ3VhZ2VQb3B1cCAmJlxuICAgICAgICBlLnRhcmdldC5jbG9zZXN0KFwiYVwiKSAhPT0gbGFuZ3VhZ2VUYXJnZXRcbiAgICAgICkge1xuICAgICAgICAvL2Nsb3NlIHRoZSBsYW5ndWFnZSBwb3B1cCBhbmQgdW5mb2N1cyB0aGUgdHJpZ2dlclxuICAgICAgICBsYW5ndWFnZVBvcHVwLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlLXBvcHVwXCIpO1xuICAgICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmJsdXIoKTtcbiAgICAgIH1cbiAgICAgIC8vaWYgaXQncyB0aGUgbG9naW4gcG9wdXAgdGhhdCBvcGVuLFxuICAgIH0gZWxzZSBpZiAobGFuZ3VhZ2VQb3B1cC5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRlLXBvcHVwXCIpKSB7XG4gICAgICAvL2FuZCB0aGUgY2xpY2sgaXNudCBvbiB0aGUgbG9naW4gcG9wdXAsIGl0cyBjaGlsZHJlbiBvciBpdHMgdGFyZ2V0XG4gICAgICBpZiAoXG4gICAgICAgIGUudGFyZ2V0ICE9PSBsb2dpblBvcHVwICYmXG4gICAgICAgIGUudGFyZ2V0LmNsb3Nlc3QoXCIubG9naW4tcG9wdXBcIikgIT09IGxvZ2luUG9wdXAgJiZcbiAgICAgICAgZS50YXJnZXQuY2xvc2VzdChcImFcIikgIT09IGxvZ2luVGFyZ2V0XG4gICAgICApIHtcbiAgICAgICAgLy9jbG9zZSB0aGUgbG9naW4gcG9wdXAgYW5kIHVuZm9jdXMgdGhlIHRyaWdnZXJcbiAgICAgICAgbG9naW5Qb3B1cC5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZS1wb3B1cFwiKTtcbiAgICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59KTtcblxuY29uc3Qgc2lnblVwVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWduVXAgYVwiKTtcbnNpZ25VcFRhcmdldC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjaGFuZ2VNYWluKFwiaG9tZVwiKTtcbn0pO1xuXG4vL0hhbWJ1cmdlciBNb2JpbGUgTWVudSBGdW5jdGlvbmFsaXRcbmNvbnN0IGhhbWJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGFtYnVyZ2VyIGFcIik7XG5jb25zdCBtb2JpbGVNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2JpbGVNZW51XCIpO1xuY29uc3QgcGFnZU92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBhZ2VPdmVybGF5XCIpO1xuY29uc3QgcGFnZVdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBhZ2VXcmFwcGVyXCIpO1xuXG5oYW1idXJnZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgbW9iaWxlTWVudS5jbGFzc0xpc3QuYWRkKFwic2hvd01vYmlsZU1lbnVcIik7XG4gIG1vYmlsZU1lbnUuY2xhc3NMaXN0LmFkZChcInNsaWRlTW9iaWxlTWVudUxcIik7XG4gIHBhZ2VPdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJkYXJrZW5PdmVybGF5XCIpO1xuICBwYWdlV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwic2xpZGVQYWdlV3JhcHBlckxcIik7XG4gIHBhZ2VPdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgXCJjbGlja1wiLFxuICAgICgpID0+IHtcbiAgICAgIHBhZ2VPdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJkYXJrZW5PdmVybGF5XCIpO1xuXG4gICAgICBwYWdlV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwic2xpZFBhZ2VcIik7XG4gICAgICBwYWdlV3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKFwic2xpZGVQYWdlV3JhcHBlckxcIik7XG4gICAgICBwYWdlV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwic2xpZGVQYWdlV3JhcHBlclJcIik7XG5cbiAgICAgIG1vYmlsZU1lbnUuY2xhc3NMaXN0LmFkZChcInNsaWRNZW51XCIpO1xuICAgICAgbW9iaWxlTWVudS5jbGFzc0xpc3QucmVtb3ZlKFwic2xpZGVNb2JpbGVNZW51TFwiKTtcbiAgICAgIG1vYmlsZU1lbnUuY2xhc3NMaXN0LmFkZChcInNsaWRlTW9iaWxlTWVudVJcIik7XG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBwYWdlV3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKFwic2xpZFBhZ2VcIik7XG4gICAgICAgIHBhZ2VXcmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJzbGlkZVBhZ2VXcmFwcGVyUlwiKTtcbiAgICAgICAgbW9iaWxlTWVudS5jbGFzc0xpc3QucmVtb3ZlKFwic2xpZE1lbnVcIik7XG4gICAgICAgIG1vYmlsZU1lbnUuY2xhc3NMaXN0LnJlbW92ZShcInNsaWRlTW9iaWxlTWVudVJcIik7XG4gICAgICAgIG1vYmlsZU1lbnUuY2xhc3NMaXN0LnJlbW92ZShcInNob3dNb2JpbGVNZW51XCIpO1xuICAgICAgfSwgNTAwKTtcbiAgICB9LFxuICAgIHsgb25jZTogdHJ1ZSB9XG4gICk7XG59KTtcblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmNvbnN0IG1lbnVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUgYVwiKTtcbm1lbnVUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY2hhbmdlTWFpbihcIm1lbnVcIik7XG4gIG1lbnVUYXJnZXQuY2xhc3NMaXN0LnRvZ2dsZShcIi5hY3RpdmVcIik7XG59KTtcblxuY29uc3Qgc3BlY2lhbHNUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNwZWNpYWxzIGFcIik7XG5zcGVjaWFsc1RhcmdldC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjaGFuZ2VNYWluKFwic3BlY2lhbHNcIik7XG59KTtcblxuY29uc3QgcGFwYVJld2FyZHNUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBhcGFSZXdhcmRzIGFcIik7XG5wYXBhUmV3YXJkc1RhcmdldC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjaGFuZ2VNYWluKFwicGFwYSByZXdhcmRzXCIpO1xufSk7XG5cbmNvbnN0IHNob3BwaW5nQ2FydFRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FydFwiKTtcbnNob3BwaW5nQ2FydFRhcmdldC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjaGFuZ2VNYWluKFwic3BlY2lhbHNcIik7XG59KTtcblxuY29uc3QgZm9vdGVyTGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZvb3RlckxpbmtzID4gZGl2XCIpO1xuXG4vLyBmb290ZXJMaW5rcy5mb3JFYWNoKChsaW5rKSA9PiB7XG4vLyAgIGxldCBoaWRkZW5MaW5rcyA9IGxpbmsucXVlcnlTZWxlY3RvcihcInVsXCIpO1xuLy8gICBsaW5rLnF1ZXJ5U2VsZWN0b3IoXCJoNFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuLy8gICAgIGhpZGRlbkxpbmtzLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5PblNtYWxsU2NyZWVuc1wiKTtcbi8vICAgfSk7XG4vLyB9KTtcblxubGV0IG91ckNvbXBhbnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm91ckNvbXBhbnlcIik7XG5vdXJDb21wYW55LnF1ZXJ5U2VsZWN0b3IoXCJoNFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBvdXJDb21wYW55LnF1ZXJ5U2VsZWN0b3IoXCJ1bFwiKS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuT25TbWFsbFNjcmVlbnNcIik7XG4gIG91clBpenphLnF1ZXJ5U2VsZWN0b3IoXCJ1bFwiKS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuT25TbWFsbFNjcmVlbnNcIik7XG4gIGhlbHAucXVlcnlTZWxlY3RvcihcInVsXCIpLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5PblNtYWxsU2NyZWVuc1wiKTtcbn0pO1xubGV0IG91clBpenphID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdXJQaXp6YVwiKTtcbm91clBpenphLnF1ZXJ5U2VsZWN0b3IoXCJoNFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBvdXJQaXp6YS5xdWVyeVNlbGVjdG9yKFwidWxcIikuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlbk9uU21hbGxTY3JlZW5zXCIpO1xuICBvdXJDb21wYW55LnF1ZXJ5U2VsZWN0b3IoXCJ1bFwiKS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuT25TbWFsbFNjcmVlbnNcIik7XG4gIGhlbHAucXVlcnlTZWxlY3RvcihcInVsXCIpLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5PblNtYWxsU2NyZWVuc1wiKTtcbn0pO1xubGV0IGhlbHAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlbHBcIik7XG5oZWxwLnF1ZXJ5U2VsZWN0b3IoXCJoNFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBoZWxwLnF1ZXJ5U2VsZWN0b3IoXCJ1bFwiKS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuT25TbWFsbFNjcmVlbnNcIik7XG4gIG91clBpenphLnF1ZXJ5U2VsZWN0b3IoXCJ1bFwiKS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuT25TbWFsbFNjcmVlbnNcIik7XG4gIG91ckNvbXBhbnkucXVlcnlTZWxlY3RvcihcInVsXCIpLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5PblNtYWxsU2NyZWVuc1wiKTtcbn0pO1xuXG4vL2luaXRpYWwgc3RhdGVcbmNoYW5nZU1haW4oXCJob21lXCIpO1xuIl0sIm5hbWVzIjpbImNhcmRTbGlkZXIiLCJjb250ZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiaW5uZXJIVE1MIiwibGVmdEFycm93IiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJzbGlkZUxlZnQiLCJhbGVydCIsInJpZ2h0QXJyb3ciLCJoZXJvIiwiaG9tZSIsImFwcGVuZENoaWxkIiwibWVudSIsInRleHRDb250ZW50IiwicGFwYVJld2FyZHMiLCJzcGVjaWFscyIsIm1haW4iLCJib2R5IiwiY2hhbmdlTWFpbiIsInBhZ2UiLCJjb250ZW50RWxlbWVudCIsIm1lbnVUYXJnZXQiLCJzcGVjaWFsc1RhcmdldCIsInJlbW92ZSIsInBhcGFSZXdhcmRzVGFyZ2V0IiwibG9nb1RhcmdldCIsInN5b1RhcmdldCIsImxhbmd1YWdlVGFyZ2V0IiwibGFuZ3VhZ2VQb3B1cCIsImxvZ2luUG9wdXAiLCJjb250YWlucyIsInRvZ2dsZSIsImFjdGl2ZUVsZW1lbnQiLCJibHVyIiwiZm9jdXMiLCJsb2dpblRhcmdldCIsImUiLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwiY2xvc2VzdCIsInNpZ25VcFRhcmdldCIsImhhbWJ1cmdlciIsIm1vYmlsZU1lbnUiLCJwYWdlT3ZlcmxheSIsInBhZ2VXcmFwcGVyIiwic2V0VGltZW91dCIsIm9uY2UiLCJzaG9wcGluZ0NhcnRUYXJnZXQiLCJmb290ZXJMaW5rcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJvdXJDb21wYW55Iiwib3VyUGl6emEiLCJoZWxwIl0sInNvdXJjZVJvb3QiOiIifQ==