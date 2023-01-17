/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ home)
/* harmony export */ });
function home() {
  var content = document.createElement('div');
  content.textContent = 'HOME';
  return content;
}

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menu)
/* harmony export */ });
function menu() {
  var content = document.createElement('div');
  content.textContent = 'MENU';
  return content;
}

/***/ }),

/***/ "./src/papaRewards.js":
/*!****************************!*\
  !*** ./src/papaRewards.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ papaRewards)
/* harmony export */ });
function papaRewards() {
  var content = document.createElement('div');
  content.textContent = 'PAPA REWARDS';
  return content;
}

/***/ }),

/***/ "./src/specials.js":
/*!*************************!*\
  !*** ./src/specials.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ specials)
/* harmony export */ });
function specials() {
  var content = document.createElement('div');
  content.textContent = 'SPECIALS';
  return content;
}

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
___CSS_LOADER_EXPORT___.push([module.id, "/* @import url(\"https://fonts.googleapis.com/css2?family=Zen+Dots&display=swap\"); */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\n:root {\n  height: 100vh;\n  font-size: 16px;\n  --color0: rgb(209, 209, 209);\n  --color1: white;\n  --color2: black;\n  --color3: #38a575;\n  --color4: #ce2735;\n  --color5: rgb(230, 230, 230);\n  --color6: rgb(46, 46, 46);\n  --color7: rgb(98, 98, 98);\n  --mainFont: \"Oswald\", sans-serif;\n  --secondaryFont: Helvetica, Arial, sans-serif;\n}\n\n/* make these items responsive */\nimg,\npicture,\nsvg,\nvideo {\n  display: block;\n  max-width: 100%;\n}\n\n/* make the form elements inherit font properties the way everything else does */\ninput,\ntextarea,\nbutton,\nselect {\n  font: inherit;\n}\n\nbody {\n  min-height: 100%;\n  /* font-family: Impact, Haettenschweiler, \"Arial Narrow Bold\", sans-serif; */\n  font-family: var(--mainFont);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n/*******************************************************************************************/\nul {\n  margin: 0;\n  padding: 0;\n  height: 100%;\n}\nli {\n  list-style: none;\n  height: 100%;\n  /* background-color: orange; */\n}\na {\n  text-decoration: none;\n  /* background-color: pink; */\n}\n.navContainer {\n  width: 100%;\n  height: 128px;\n  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n}\n.navContainer ul,\n.navContainer li,\n.navContainer a {\n  display: flex;\n  align-items: center;\n}\n.topNav {\n  height: 50%;\n}\n.topNav li {\n  margin: 0.5rem;\n}\n\n.topNav li:first-child {\n  margin-right: auto;\n}\n.topNav a {\n  height: 50%;\n  color: var(--color2);\n  padding: 0.5rem;\n  border-radius: 0.3rem;\n}\n.startYourOrder > a,\n.language > a,\n.login > a {\n  gap: 0.25rem;\n  transition: background-color 150ms ease-in;\n}\n.startYourOrder > a:hover,\n.language > a:hover,\n.login > a:hover {\n  background-color: var(--color5);\n}\n.signUp > a {\n  border-radius: 1rem;\n  border: 1px solid var(--color2);\n  background-color: var(--color2);\n  color: var(--color1);\n}\n.logo {\n  /* width: 8rem; */\n  height: 1.6rem;\n  padding-left: 4vw;\n}\n.logoIMG {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  cursor: pointer;\n}\n.filtered {\n  filter: brightness(0) saturate(100%) invert(29%) sepia(67%) saturate(5198%)\n    hue-rotate(341deg) brightness(83%) contrast(94%);\n  /* https://stackoverflow.com/questions/22252472/how-can-i-change-the-color-of-an-svg-element*/\n}\n.signUp > a:hover {\n  background-color: var(--color6);\n}\n.signUp {\n  /* background-color: pink; */\n  margin-right: 4vw !important;\n}\n\n/*******************************************************************************************/\n\n.bottomNav {\n  height: 50%;\n  border-top: 1px solid var(--color0);\n  border-bottom: 1px solid var(--color0);\n}\n.bottomNav li {\n  margin: 0rem;\n}\n.bottomNav li:nth-child(3) {\n  margin-right: auto;\n}\n.bottomNav a {\n  color: var(--color2);\n}\n.menu > a,\n.specials > a,\n.papaRewards > a {\n  height: 100%;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n  font-size: larger;\n}\n.menu > a:hover,\n.specials > a:hover,\n.papaRewards > a:hover {\n  border-bottom: 4px solid var(--color3);\n  padding-top: 4px; /*stops text from moving upwards when border is added on hover*/\n}\n.menu {\n  padding-left: 4vw;\n}\n.login2 > a {\n  padding: 0.5rem;\n  border-radius: 2rem;\n  color: var(--color1);\n  background-color: var(--color2);\n  border: 1px solid var(--color2);\n  margin-right: 0.5rem;\n  font-size: 0.8rem;\n}\n.promoCodeForm {\n  position: relative;\n}\n.promoCodeForm > input {\n  padding: 0.35rem;\n  border: 1px solid var(--color2);\n}\n.promoCodeForm > input:first-child {\n  border-top-left-radius: 0.3rem;\n  border-bottom-left-radius: 0.3rem;\n  border-right: none;\n  position: relative;\n}\n.promoCodeForm > input:first-child:focus {\n  border-color: var(--color3);\n  outline: none;\n}\n.promoCodeForm > input:first-child::placeholder {\n  font-style: italic;\n  font-family: Cambria, Georgia, Times, \"Times New Roman\", serif;\n  font-size: smaller;\n  position: absolute;\n  top: 0.6rem;\n}\n\n.promoCodeForm > input:first-child {\n  border-top-left-radius: 0.3rem;\n  border-bottom-left-radius: 0.3rem;\n  margin-left: 1rem;\n}\n\n.promoCodeForm > input:nth-child(2) {\n  border-top-right-radius: 0.3rem;\n  border-bottom-right-radius: 0.3rem;\n  background-color: var(--color2);\n  color: var(--color1);\n  position: relative;\n  right: 4px;\n  margin-right: 1rem;\n}\n\n.cart {\n  border-left: 1px solid var(--color0);\n  padding: 1rem 0rem 1rem 1rem;\n  margin-right:4vw !important;\n}\n.cart > svg {\n  margin-right: 0.25rem;\n}\n.cart > span {\n  color: var(--color4);\n  font-size: 1.375rem;\n  position: relative;\n}\n.cart > span::before {\n  content: \"$\";\n  color: var(--color4);\n  font-size: 1rem;\n  position: relative;\n  bottom: 5px;\n}\n.login2 > a:hover,\n.promoCodeForm input[type=\"submit\"]:hover {\n  background-color: var(--color6);\n}\n\n/*******************************************************************************************/\n\nfooter {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  border-top: var(--color0) 1px solid;\n  padding: 1.5rem max(4rem, 8vw);\n}\n.footerContentWidthControl {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n.footerLinks {\n  width: calc(100% - min(600px, 42%));\n  display: flex;\n  align-items: baseline;\n}\n.footerLinks > div {\n  margin-right: auto;\n}\nfooter a {\n  color: grey;\n  font-size: 0.75rem;\n  text-transform: none;\n  font-family: var(--secondaryFont);\n  letter-spacing: 0px;\n}\nfooter a:hover {\n  text-decoration: underline;\n}\n.footerLinks h4 {\n  color: var(--color2);\n  font-size: 0.9rem;\n  text-transform: none;\n}\n.franchise {\n  width: min(600px, 42%);\n}\n.franchise > a {\n  width: 100%;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  text-transform: none;\n  color: black;\n  gap: 1.5rem;\n  border: 1px solid var(--color0);\n  border-radius: 0.5rem;\n  padding: 1rem;\n  transition: box-shadow 150ms ease-in;\n}\n.franchise a:hover {\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n}\n.footerBottom {\n  margin-top: 2rem;\n  padding-top:1.75rem;\n  border-top: 1px solid var(--color0);\n  /* background-color: pink; */\n  display: flex;\n  align-items: baseline;\n}\n.countrySelect {\n  width: fit-content;\n  font-family: var(--secondaryFont);\n  font-size: .75rem;\n  padding: .5rem;\n  border-radius:5px;\n  margin-right: 1rem;\n}\n.countrySelect:focus {\n  border: 1px solid var(--color3);\n  outline: none;\n}\n.legalLinks{\n display:flex;\n gap:.75rem;\n flex-wrap: wrap;\n margin: .5rem auto 1rem 0rem;\n}\n.legalLinks li {\n  /* background-color: aquamarine; */\n  display: flex;\n}\n.footerBottom {\n  position:relative;\n}\n.socialMediaLinkIcons {\n  position:relative;\n  right:0;\n  top:6px;\n  /* align-self: baseline; */\n  display: flex;\n  align-items: center;\n  gap:.75rem;\n  margin-left: 1rem;\n  /* background-color: #38a575; */\n}\n.socialMediaLinkIcons svg {\n  transition: color 400ms ease-in-out;\n}\n.socialMediaLinkIcons svg:hover {\n  color:black;\n}\n\n/*******************************************************************************************/\n\n/* When the browser is 833px or wider */\n@media screen and (min-width: 833px) {\n  .mobile {\n    display: none !important;\n    /* background-color: green; */\n  }\n  .desktop {\n    display: flex !important;\n  }\n}\n/* When the browser is less than 833px wide */\n@media screen and (max-width: 833px) {\n  .mobile {\n    display: flex !important;\n    /* background-color: burlywood; */\n  }\n  .desktop {\n    display: none !important;\n  }\n  .navContainer {\n    height: 114px;\n  }\n  .topNav {\n    height: 55%;\n  }\n  .bottomNav {\n    height: 45%;\n  }\n  .menu > a,\n  .specials > a,\n  .papaRewards > a {\n    font-size: 1rem;\n  }\n  .menu {\n    padding-left: 0rem;\n  }\n  .logo {\n    height: 1.6rem;\n    padding-left: 0rem;\n  }\n  .logo img {\n    transform: scale(0.75) translateX(-21px);\n  }\n  footer {\n    padding: 1.5rem;\n  }\n  .footerContentWidthControl {\n    flex-direction: column;\n  }\n  .footerLinks {\n    width: 100%;\n  }\n  .franchise {\n    width: 100%;\n    padding-top: 1.5rem;\n    /* border-bottom: 1px solid var(--color0); */\n  }\n  .legalLinks {\n    margin-top:1.5rem;\n  }\n  .socialMediaLinkIcons {\n    align-self: flex-start;\n    margin-left: 0;\n  }\n}\n\n@media screen and (max-width: 639px) {\n  .ourCompany ul,\n  .ourPizza ul,\n  .help ul {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: flex-start;\n    gap: 1px;\n  }\n  .hiddenOnSmallScreens {\n    display: none !important;\n  }\n  .footerLinks {\n    /* background-color: peachpuff; */\n    flex-direction: column;\n  }\n  .footerLinks h4 {\n    /* background-color: #38a575; */\n    margin: 0.75rem 0rem 0.25rem 0rem;\n    padding: 0.25rem 0rem;\n    border-bottom: 1px solid var(--color0);\n  }\n  .ourCompany,\n  .ourPizza,\n  .help {\n    /* background-color: pink; */\n    width: 100%;\n    height: fit-content;\n    position: relative;\n    padding-bottom: 0.5rem;\n    margin-top: 2px;\n  }\n  h4::after {\n    content: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    position: absolute;\n    right: -5px;\n    top: 1rem;\n  }\n  .footerLinks li {\n    height: auto;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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CnB,oBAAoB;EACpB,YAAY;EACZ,WAAW;EACX,+BAA+B;EAC/B,qBAAqB;EACrB,aAAa;EACb,oCAAoC;AACtC;AACA;EACE,2CAA2C;AAC7C;AACA;EACE,gBAAgB;EAChB,mBAAmB;EACnB,mCAAmC;EACnC,4BAA4B;EAC5B,aAAa;EACb,qBAAqB;AACvB;AACA;EACE,kBAAkB;EAClB,iCAAiC;EACjC,iBAAiB;EACjB,cAAc;EACd,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,+BAA+B;EAC/B,aAAa;AACf;AACA;CACC,YAAY;CACZ,UAAU;CACV,eAAe;CACf,4BAA4B;AAC7B;AACA;EACE,kCAAkC;EAClC,aAAa;AACf;AACA;EACE,iBAAiB;AACnB;AACA;EACE,iBAAiB;EACjB,OAAO;EACP,OAAO;EACP,0BAA0B;EAC1B,aAAa;EACb,mBAAmB;EACnB,UAAU;EACV,iBAAiB;EACjB,+BAA+B;AACjC;AACA;EACE,mCAAmC;AACrC;AACA;EACE,WAAW;AACb;;AAEA,4FAA4F;;AAE5F,uCAAuC;AACvC;EACE;IACE,wBAAwB;IACxB,6BAA6B;EAC/B;EACA;IACE,wBAAwB;EAC1B;AACF;AACA,6CAA6C;AAC7C;EACE;IACE,wBAAwB;IACxB,iCAAiC;EACnC;EACA;IACE,wBAAwB;EAC1B;EACA;IACE,aAAa;EACf;EACA;IACE,WAAW;EACb;EACA;IACE,WAAW;EACb;EACA;;;IAGE,eAAe;EACjB;EACA;IACE,kBAAkB;EACpB;EACA;IACE,cAAc;IACd,kBAAkB;EACpB;EACA;IACE,wCAAwC;EAC1C;EACA;IACE,eAAe;EACjB;EACA;IACE,sBAAsB;EACxB;EACA;IACE,WAAW;EACb;EACA;IACE,WAAW;IACX,mBAAmB;IACnB,4CAA4C;EAC9C;EACA;IACE,iBAAiB;EACnB;EACA;IACE,sBAAsB;IACtB,cAAc;EAChB;AACF;;AAEA;EACE;;;IAGE,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,2BAA2B;IAC3B,QAAQ;EACV;EACA;IACE,wBAAwB;EAC1B;EACA;IACE,iCAAiC;IACjC,sBAAsB;EACxB;EACA;IACE,+BAA+B;IAC/B,iCAAiC;IACjC,qBAAqB;IACrB,sCAAsC;EACxC;EACA;;;IAGE,4BAA4B;IAC5B,WAAW;IACX,mBAAmB;IACnB,kBAAkB;IAClB,sBAAsB;IACtB,eAAe;EACjB;EACA;IACE,gDAAqC;IACrC,kBAAkB;IAClB,WAAW;IACX,SAAS;EACX;EACA;IACE,YAAY;EACd;AACF","sourcesContent":["/* @import url(\"https://fonts.googleapis.com/css2?family=Zen+Dots&display=swap\"); */\n@import url(\"https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap\");\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\n:root {\n  height: 100vh;\n  font-size: 16px;\n  --color0: rgb(209, 209, 209);\n  --color1: white;\n  --color2: black;\n  --color3: #38a575;\n  --color4: #ce2735;\n  --color5: rgb(230, 230, 230);\n  --color6: rgb(46, 46, 46);\n  --color7: rgb(98, 98, 98);\n  --mainFont: \"Oswald\", sans-serif;\n  --secondaryFont: Helvetica, Arial, sans-serif;\n}\n\n/* make these items responsive */\nimg,\npicture,\nsvg,\nvideo {\n  display: block;\n  max-width: 100%;\n}\n\n/* make the form elements inherit font properties the way everything else does */\ninput,\ntextarea,\nbutton,\nselect {\n  font: inherit;\n}\n\nbody {\n  min-height: 100%;\n  /* font-family: Impact, Haettenschweiler, \"Arial Narrow Bold\", sans-serif; */\n  font-family: var(--mainFont);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n/*******************************************************************************************/\nul {\n  margin: 0;\n  padding: 0;\n  height: 100%;\n}\nli {\n  list-style: none;\n  height: 100%;\n  /* background-color: orange; */\n}\na {\n  text-decoration: none;\n  /* background-color: pink; */\n}\n.navContainer {\n  width: 100%;\n  height: 128px;\n  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n}\n.navContainer ul,\n.navContainer li,\n.navContainer a {\n  display: flex;\n  align-items: center;\n}\n.topNav {\n  height: 50%;\n}\n.topNav li {\n  margin: 0.5rem;\n}\n\n.topNav li:first-child {\n  margin-right: auto;\n}\n.topNav a {\n  height: 50%;\n  color: var(--color2);\n  padding: 0.5rem;\n  border-radius: 0.3rem;\n}\n.startYourOrder > a,\n.language > a,\n.login > a {\n  gap: 0.25rem;\n  transition: background-color 150ms ease-in;\n}\n.startYourOrder > a:hover,\n.language > a:hover,\n.login > a:hover {\n  background-color: var(--color5);\n}\n.signUp > a {\n  border-radius: 1rem;\n  border: 1px solid var(--color2);\n  background-color: var(--color2);\n  color: var(--color1);\n}\n.logo {\n  /* width: 8rem; */\n  height: 1.6rem;\n  padding-left: 4vw;\n}\n.logoIMG {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  cursor: pointer;\n}\n.filtered {\n  filter: brightness(0) saturate(100%) invert(29%) sepia(67%) saturate(5198%)\n    hue-rotate(341deg) brightness(83%) contrast(94%);\n  /* https://stackoverflow.com/questions/22252472/how-can-i-change-the-color-of-an-svg-element*/\n}\n.signUp > a:hover {\n  background-color: var(--color6);\n}\n.signUp {\n  /* background-color: pink; */\n  margin-right: 4vw !important;\n}\n\n/*******************************************************************************************/\n\n.bottomNav {\n  height: 50%;\n  border-top: 1px solid var(--color0);\n  border-bottom: 1px solid var(--color0);\n}\n.bottomNav li {\n  margin: 0rem;\n}\n.bottomNav li:nth-child(3) {\n  margin-right: auto;\n}\n.bottomNav a {\n  color: var(--color2);\n}\n.menu > a,\n.specials > a,\n.papaRewards > a {\n  height: 100%;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n  font-size: larger;\n}\n.menu > a:hover,\n.specials > a:hover,\n.papaRewards > a:hover {\n  border-bottom: 4px solid var(--color3);\n  padding-top: 4px; /*stops text from moving upwards when border is added on hover*/\n}\n.menu {\n  padding-left: 4vw;\n}\n.login2 > a {\n  padding: 0.5rem;\n  border-radius: 2rem;\n  color: var(--color1);\n  background-color: var(--color2);\n  border: 1px solid var(--color2);\n  margin-right: 0.5rem;\n  font-size: 0.8rem;\n}\n.promoCodeForm {\n  position: relative;\n}\n.promoCodeForm > input {\n  padding: 0.35rem;\n  border: 1px solid var(--color2);\n}\n.promoCodeForm > input:first-child {\n  border-top-left-radius: 0.3rem;\n  border-bottom-left-radius: 0.3rem;\n  border-right: none;\n  position: relative;\n}\n.promoCodeForm > input:first-child:focus {\n  border-color: var(--color3);\n  outline: none;\n}\n.promoCodeForm > input:first-child::placeholder {\n  font-style: italic;\n  font-family: Cambria, Georgia, Times, \"Times New Roman\", serif;\n  font-size: smaller;\n  position: absolute;\n  top: 0.6rem;\n}\n\n.promoCodeForm > input:first-child {\n  border-top-left-radius: 0.3rem;\n  border-bottom-left-radius: 0.3rem;\n  margin-left: 1rem;\n}\n\n.promoCodeForm > input:nth-child(2) {\n  border-top-right-radius: 0.3rem;\n  border-bottom-right-radius: 0.3rem;\n  background-color: var(--color2);\n  color: var(--color1);\n  position: relative;\n  right: 4px;\n  margin-right: 1rem;\n}\n\n.cart {\n  border-left: 1px solid var(--color0);\n  padding: 1rem 0rem 1rem 1rem;\n  margin-right:4vw !important;\n}\n.cart > svg {\n  margin-right: 0.25rem;\n}\n.cart > span {\n  color: var(--color4);\n  font-size: 1.375rem;\n  position: relative;\n}\n.cart > span::before {\n  content: \"$\";\n  color: var(--color4);\n  font-size: 1rem;\n  position: relative;\n  bottom: 5px;\n}\n.login2 > a:hover,\n.promoCodeForm input[type=\"submit\"]:hover {\n  background-color: var(--color6);\n}\n\n/*******************************************************************************************/\n\nfooter {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  border-top: var(--color0) 1px solid;\n  padding: 1.5rem max(4rem, 8vw);\n}\n.footerContentWidthControl {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n.footerLinks {\n  width: calc(100% - min(600px, 42%));\n  display: flex;\n  align-items: baseline;\n}\n.footerLinks > div {\n  margin-right: auto;\n}\nfooter a {\n  color: grey;\n  font-size: 0.75rem;\n  text-transform: none;\n  font-family: var(--secondaryFont);\n  letter-spacing: 0px;\n}\nfooter a:hover {\n  text-decoration: underline;\n}\n.footerLinks h4 {\n  color: var(--color2);\n  font-size: 0.9rem;\n  text-transform: none;\n}\n.franchise {\n  width: min(600px, 42%);\n}\n.franchise > a {\n  width: 100%;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  text-transform: none;\n  color: black;\n  gap: 1.5rem;\n  border: 1px solid var(--color0);\n  border-radius: 0.5rem;\n  padding: 1rem;\n  transition: box-shadow 150ms ease-in;\n}\n.franchise a:hover {\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n}\n.footerBottom {\n  margin-top: 2rem;\n  padding-top:1.75rem;\n  border-top: 1px solid var(--color0);\n  /* background-color: pink; */\n  display: flex;\n  align-items: baseline;\n}\n.countrySelect {\n  width: fit-content;\n  font-family: var(--secondaryFont);\n  font-size: .75rem;\n  padding: .5rem;\n  border-radius:5px;\n  margin-right: 1rem;\n}\n.countrySelect:focus {\n  border: 1px solid var(--color3);\n  outline: none;\n}\n.legalLinks{\n display:flex;\n gap:.75rem;\n flex-wrap: wrap;\n margin: .5rem auto 1rem 0rem;\n}\n.legalLinks li {\n  /* background-color: aquamarine; */\n  display: flex;\n}\n.footerBottom {\n  position:relative;\n}\n.socialMediaLinkIcons {\n  position:relative;\n  right:0;\n  top:6px;\n  /* align-self: baseline; */\n  display: flex;\n  align-items: center;\n  gap:.75rem;\n  margin-left: 1rem;\n  /* background-color: #38a575; */\n}\n.socialMediaLinkIcons svg {\n  transition: color 400ms ease-in-out;\n}\n.socialMediaLinkIcons svg:hover {\n  color:black;\n}\n\n/*******************************************************************************************/\n\n/* When the browser is 833px or wider */\n@media screen and (min-width: 833px) {\n  .mobile {\n    display: none !important;\n    /* background-color: green; */\n  }\n  .desktop {\n    display: flex !important;\n  }\n}\n/* When the browser is less than 833px wide */\n@media screen and (max-width: 833px) {\n  .mobile {\n    display: flex !important;\n    /* background-color: burlywood; */\n  }\n  .desktop {\n    display: none !important;\n  }\n  .navContainer {\n    height: 114px;\n  }\n  .topNav {\n    height: 55%;\n  }\n  .bottomNav {\n    height: 45%;\n  }\n  .menu > a,\n  .specials > a,\n  .papaRewards > a {\n    font-size: 1rem;\n  }\n  .menu {\n    padding-left: 0rem;\n  }\n  .logo {\n    height: 1.6rem;\n    padding-left: 0rem;\n  }\n  .logo img {\n    transform: scale(0.75) translateX(-21px);\n  }\n  footer {\n    padding: 1.5rem;\n  }\n  .footerContentWidthControl {\n    flex-direction: column;\n  }\n  .footerLinks {\n    width: 100%;\n  }\n  .franchise {\n    width: 100%;\n    padding-top: 1.5rem;\n    /* border-bottom: 1px solid var(--color0); */\n  }\n  .legalLinks {\n    margin-top:1.5rem;\n  }\n  .socialMediaLinkIcons {\n    align-self: flex-start;\n    margin-left: 0;\n  }\n}\n\n@media screen and (max-width: 639px) {\n  .ourCompany ul,\n  .ourPizza ul,\n  .help ul {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: flex-start;\n    gap: 1px;\n  }\n  .hiddenOnSmallScreens {\n    display: none !important;\n  }\n  .footerLinks {\n    /* background-color: peachpuff; */\n    flex-direction: column;\n  }\n  .footerLinks h4 {\n    /* background-color: #38a575; */\n    margin: 0.75rem 0rem 0.25rem 0rem;\n    padding: 0.25rem 0rem;\n    border-bottom: 1px solid var(--color0);\n  }\n  .ourCompany,\n  .ourPizza,\n  .help {\n    /* background-color: pink; */\n    width: 100%;\n    height: fit-content;\n    position: relative;\n    padding-bottom: 0.5rem;\n    margin-top: 2px;\n  }\n  h4::after {\n    content: url(assets/chevron-down.svg);\n    position: absolute;\n    right: -5px;\n    top: 1rem;\n  }\n  .footerLinks li {\n    height: auto;\n  }\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _specials__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./specials */ "./src/specials.js");
/* harmony import */ var _papaRewards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./papaRewards */ "./src/papaRewards.js");






// import Mountains from "./Mountains.jpg";

var main = document.body.querySelector(".mainContent");
function changeMain(page) {
  main.removeChild(main.firstChild);
  var contentElement;
  if (page == "home") {
    contentElement = (0,_home__WEBPACK_IMPORTED_MODULE_1__["default"])();
  } else if (page == "menu") {
    contentElement = (0,_menu__WEBPACK_IMPORTED_MODULE_2__["default"])();
  } else if (page == "specials") {
    contentElement = (0,_specials__WEBPACK_IMPORTED_MODULE_3__["default"])();
  } else if (page == "papa rewards") {
    contentElement = (0,_papaRewards__WEBPACK_IMPORTED_MODULE_4__["default"])();
  }
  main.appendChild(contentElement);
}
changeMain("home");
var logoTarget = document.querySelector(".logo img");
logoTarget.addEventListener("click", function () {
  changeMain("home");
});
var syoTarget = document.querySelector(".startYourOrder a");
syoTarget.addEventListener("click", function () {
  changeMain("specials");
});
var signUpTarget = document.querySelector(".signUp a");
signUpTarget.addEventListener("click", function () {
  changeMain("home");
});
var menuTarget = document.querySelector(".menu a");
menuTarget.addEventListener("click", function () {
  changeMain("menu");
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
var footerLinks = document.querySelectorAll('.footerLinks > div');
footerLinks.forEach(function (link) {
  var hiddenLinks = link.querySelector('ul');
  hiddenLinks.classList.add('hiddenOnSmallScreens');
  link.querySelector('h4').addEventListener('click', function () {
    console.log(link.querySelector('h4'));
    hiddenLinks.classList.toggle('hiddenOnSmallScreens');
  });
});
// const logoTarget = document.querySelector(".logo img");
// logoTarget.onClick = () => {changeMain('specials')}
// logoTarget.addEventListener("click", changeMain("specials"));
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLE9BQU8sVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE1BQU0sT0FBTyxVQUFVLFlBQVksTUFBTSxPQUFPLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxLQUFLLE9BQU8sYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sT0FBTyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sT0FBTyxZQUFZLHlCQUF5QixNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLEtBQUssTUFBTSxZQUFZLE9BQU8sYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLE9BQU8sVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sTUFBTSxLQUFLLE9BQU8sVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxPQUFPLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssNkdBQTZHLDJGQUEyRiw0QkFBNEIsMkJBQTJCLEdBQUcsT0FBTyxjQUFjLGVBQWUsR0FBRyxXQUFXLGtCQUFrQixvQkFBb0IsaUNBQWlDLG9CQUFvQixvQkFBb0Isc0JBQXNCLHNCQUFzQixpQ0FBaUMsOEJBQThCLDhCQUE4Qix1Q0FBdUMsa0RBQWtELEdBQUcsb0VBQW9FLG1CQUFtQixvQkFBb0IsR0FBRywySEFBMkgsa0JBQWtCLEdBQUcsVUFBVSxxQkFBcUIsaUZBQWlGLG1DQUFtQyw4QkFBOEIsMEJBQTBCLEdBQUcscUdBQXFHLGNBQWMsZUFBZSxpQkFBaUIsR0FBRyxNQUFNLHFCQUFxQixpQkFBaUIsaUNBQWlDLEtBQUssS0FBSywwQkFBMEIsK0JBQStCLEtBQUssaUJBQWlCLGdCQUFnQixrQkFBa0Isc0RBQXNELEdBQUcseURBQXlELGtCQUFrQix3QkFBd0IsR0FBRyxXQUFXLGdCQUFnQixHQUFHLGNBQWMsbUJBQW1CLEdBQUcsNEJBQTRCLHVCQUF1QixHQUFHLGFBQWEsZ0JBQWdCLHlCQUF5QixvQkFBb0IsMEJBQTBCLEdBQUcsb0RBQW9ELGlCQUFpQiwrQ0FBK0MsR0FBRyxzRUFBc0Usb0NBQW9DLEdBQUcsZUFBZSx3QkFBd0Isb0NBQW9DLG9DQUFvQyx5QkFBeUIsR0FBRyxTQUFTLG9CQUFvQixxQkFBcUIsc0JBQXNCLEdBQUcsWUFBWSxnQkFBZ0IsaUJBQWlCLHdCQUF3QixvQkFBb0IsR0FBRyxhQUFhLHNJQUFzSSxxR0FBcUcscUJBQXFCLG9DQUFvQyxHQUFHLFdBQVcsK0JBQStCLG1DQUFtQyxHQUFHLGlIQUFpSCxnQkFBZ0Isd0NBQXdDLDJDQUEyQyxHQUFHLGlCQUFpQixpQkFBaUIsR0FBRyw4QkFBOEIsdUJBQXVCLEdBQUcsZ0JBQWdCLHlCQUF5QixHQUFHLGdEQUFnRCxpQkFBaUIseUJBQXlCLDBCQUEwQixzQkFBc0IsR0FBRyxrRUFBa0UsMkNBQTJDLHNCQUFzQixtRUFBbUUsU0FBUyxzQkFBc0IsR0FBRyxlQUFlLG9CQUFvQix3QkFBd0IseUJBQXlCLG9DQUFvQyxvQ0FBb0MseUJBQXlCLHNCQUFzQixHQUFHLGtCQUFrQix1QkFBdUIsR0FBRywwQkFBMEIscUJBQXFCLG9DQUFvQyxHQUFHLHNDQUFzQyxtQ0FBbUMsc0NBQXNDLHVCQUF1Qix1QkFBdUIsR0FBRyw0Q0FBNEMsZ0NBQWdDLGtCQUFrQixHQUFHLG1EQUFtRCx1QkFBdUIscUVBQXFFLHVCQUF1Qix1QkFBdUIsZ0JBQWdCLEdBQUcsd0NBQXdDLG1DQUFtQyxzQ0FBc0Msc0JBQXNCLEdBQUcseUNBQXlDLG9DQUFvQyx1Q0FBdUMsb0NBQW9DLHlCQUF5Qix1QkFBdUIsZUFBZSx1QkFBdUIsR0FBRyxXQUFXLHlDQUF5QyxpQ0FBaUMsZ0NBQWdDLEdBQUcsZUFBZSwwQkFBMEIsR0FBRyxnQkFBZ0IseUJBQXlCLHdCQUF3Qix1QkFBdUIsR0FBRyx3QkFBd0IsbUJBQW1CLHlCQUF5QixvQkFBb0IsdUJBQXVCLGdCQUFnQixHQUFHLG1FQUFtRSxvQ0FBb0MsR0FBRyw2R0FBNkcsa0JBQWtCLDJCQUEyQiw0QkFBNEIsd0NBQXdDLG1DQUFtQyxHQUFHLDhCQUE4QixnQkFBZ0Isa0JBQWtCLDRCQUE0QixHQUFHLGdCQUFnQix3Q0FBd0Msa0JBQWtCLDBCQUEwQixHQUFHLHNCQUFzQix1QkFBdUIsR0FBRyxZQUFZLGdCQUFnQix1QkFBdUIseUJBQXlCLHNDQUFzQyx3QkFBd0IsR0FBRyxrQkFBa0IsK0JBQStCLEdBQUcsbUJBQW1CLHlCQUF5QixzQkFBc0IseUJBQXlCLEdBQUcsY0FBYywyQkFBMkIsR0FBRyxrQkFBa0IsZ0JBQWdCLGtCQUFrQixnQ0FBZ0Msd0JBQXdCLHlCQUF5QixpQkFBaUIsZ0JBQWdCLG9DQUFvQywwQkFBMEIsa0JBQWtCLHlDQUF5QyxHQUFHLHNCQUFzQixnREFBZ0QsR0FBRyxpQkFBaUIscUJBQXFCLHdCQUF3Qix3Q0FBd0MsK0JBQStCLG9CQUFvQiwwQkFBMEIsR0FBRyxrQkFBa0IsdUJBQXVCLHNDQUFzQyxzQkFBc0IsbUJBQW1CLHNCQUFzQix1QkFBdUIsR0FBRyx3QkFBd0Isb0NBQW9DLGtCQUFrQixHQUFHLGNBQWMsZ0JBQWdCLGNBQWMsbUJBQW1CLGdDQUFnQyxHQUFHLGtCQUFrQixxQ0FBcUMsb0JBQW9CLEdBQUcsaUJBQWlCLHNCQUFzQixHQUFHLHlCQUF5QixzQkFBc0IsWUFBWSxZQUFZLDZCQUE2QixvQkFBb0Isd0JBQXdCLGVBQWUsc0JBQXNCLGtDQUFrQyxLQUFLLDZCQUE2Qix3Q0FBd0MsR0FBRyxtQ0FBbUMsZ0JBQWdCLEdBQUcscUxBQXFMLGFBQWEsK0JBQStCLGtDQUFrQyxPQUFPLGNBQWMsK0JBQStCLEtBQUssR0FBRyx3RkFBd0YsYUFBYSwrQkFBK0Isc0NBQXNDLE9BQU8sY0FBYywrQkFBK0IsS0FBSyxtQkFBbUIsb0JBQW9CLEtBQUssYUFBYSxrQkFBa0IsS0FBSyxnQkFBZ0Isa0JBQWtCLEtBQUssc0RBQXNELHNCQUFzQixLQUFLLFdBQVcseUJBQXlCLEtBQUssV0FBVyxxQkFBcUIseUJBQXlCLEtBQUssZUFBZSwrQ0FBK0MsS0FBSyxZQUFZLHNCQUFzQixLQUFLLGdDQUFnQyw2QkFBNkIsS0FBSyxrQkFBa0Isa0JBQWtCLEtBQUssZ0JBQWdCLGtCQUFrQiwwQkFBMEIsaURBQWlELE9BQU8saUJBQWlCLHdCQUF3QixLQUFLLDJCQUEyQiw2QkFBNkIscUJBQXFCLEtBQUssR0FBRywwQ0FBMEMsa0RBQWtELG9CQUFvQiw2QkFBNkIsOEJBQThCLGtDQUFrQyxlQUFlLEtBQUssMkJBQTJCLCtCQUErQixLQUFLLGtCQUFrQixzQ0FBc0MsK0JBQStCLEtBQUsscUJBQXFCLG9DQUFvQywwQ0FBMEMsNEJBQTRCLDZDQUE2QyxLQUFLLHlDQUF5QyxpQ0FBaUMsb0JBQW9CLDBCQUEwQix5QkFBeUIsNkJBQTZCLHNCQUFzQixLQUFLLGVBQWUsNENBQTRDLHlCQUF5QixrQkFBa0IsZ0JBQWdCLEtBQUsscUJBQXFCLG1CQUFtQixLQUFLLEdBQUcscUJBQXFCO0FBQ3hpdEI7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNYMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDekJhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQkEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7VUNmQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDSztBQUNBO0FBQ1E7QUFDTTs7QUFFeEM7O0FBRUEsSUFBSU8sSUFBSSxHQUFHTixRQUFRLENBQUNPLElBQUksQ0FBQ0MsYUFBYSxDQUFDLGNBQWMsQ0FBQztBQUV0RCxTQUFTQyxVQUFVLENBQUNDLElBQUksRUFBRTtFQUN4QkosSUFBSSxDQUFDSyxXQUFXLENBQUNMLElBQUksQ0FBQ00sVUFBVSxDQUFDO0VBQ2pDLElBQUlDLGNBQWM7RUFDbEIsSUFBSUgsSUFBSSxJQUFJLE1BQU0sRUFBRTtJQUNsQkcsY0FBYyxHQUFHZixpREFBSSxFQUFFO0VBQ3pCLENBQUMsTUFBTSxJQUFJWSxJQUFJLElBQUksTUFBTSxFQUFFO0lBQ3pCRyxjQUFjLEdBQUdWLGlEQUFJLEVBQUU7RUFDekIsQ0FBQyxNQUFNLElBQUlPLElBQUksSUFBSSxVQUFVLEVBQUU7SUFDN0JHLGNBQWMsR0FBR1IscURBQVEsRUFBRTtFQUM3QixDQUFDLE1BQU0sSUFBSUssSUFBSSxJQUFJLGNBQWMsRUFBRTtJQUNqQ0csY0FBYyxHQUFHVCx3REFBVyxFQUFFO0VBQ2hDO0VBQ0FFLElBQUksQ0FBQ1EsV0FBVyxDQUFDRCxjQUFjLENBQUM7QUFDbEM7QUFFQUosVUFBVSxDQUFDLE1BQU0sQ0FBQztBQUVsQixJQUFJTSxVQUFVLEdBQUdmLFFBQVEsQ0FBQ1EsYUFBYSxDQUFDLFdBQVcsQ0FBQztBQUNwRE8sVUFBVSxDQUFDQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtFQUN6Q1AsVUFBVSxDQUFDLE1BQU0sQ0FBQztBQUNwQixDQUFDLENBQUM7QUFFRixJQUFJUSxTQUFTLEdBQUdqQixRQUFRLENBQUNRLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQztBQUMzRFMsU0FBUyxDQUFDRCxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtFQUN4Q1AsVUFBVSxDQUFDLFVBQVUsQ0FBQztBQUN4QixDQUFDLENBQUM7QUFFRixJQUFJUyxZQUFZLEdBQUdsQixRQUFRLENBQUNRLGFBQWEsQ0FBQyxXQUFXLENBQUM7QUFDdERVLFlBQVksQ0FBQ0YsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07RUFDM0NQLFVBQVUsQ0FBQyxNQUFNLENBQUM7QUFDcEIsQ0FBQyxDQUFDO0FBRUYsSUFBSVUsVUFBVSxHQUFHbkIsUUFBUSxDQUFDUSxhQUFhLENBQUMsU0FBUyxDQUFDO0FBQ2xEVyxVQUFVLENBQUNILGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO0VBQ3pDUCxVQUFVLENBQUMsTUFBTSxDQUFDO0FBQ3BCLENBQUMsQ0FBQztBQUVGLElBQUlXLGNBQWMsR0FBR3BCLFFBQVEsQ0FBQ1EsYUFBYSxDQUFDLGFBQWEsQ0FBQztBQUMxRFksY0FBYyxDQUFDSixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtFQUM3Q1AsVUFBVSxDQUFDLFVBQVUsQ0FBQztBQUN4QixDQUFDLENBQUM7QUFFRixJQUFJWSxpQkFBaUIsR0FBR3JCLFFBQVEsQ0FBQ1EsYUFBYSxDQUFDLGdCQUFnQixDQUFDO0FBQ2hFYSxpQkFBaUIsQ0FBQ0wsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07RUFDaERQLFVBQVUsQ0FBQyxjQUFjLENBQUM7QUFDNUIsQ0FBQyxDQUFDO0FBRUYsSUFBSWEsa0JBQWtCLEdBQUd0QixRQUFRLENBQUNRLGFBQWEsQ0FBQyxPQUFPLENBQUM7QUFDeERjLGtCQUFrQixDQUFDTixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtFQUNqRFAsVUFBVSxDQUFDLFVBQVUsQ0FBQztBQUN4QixDQUFDLENBQUM7QUFFRixJQUFJYyxXQUFXLEdBQUd2QixRQUFRLENBQUN3QixnQkFBZ0IsQ0FBQyxvQkFBb0IsQ0FBQztBQUVqRUQsV0FBVyxDQUFDRSxPQUFPLENBQUMsVUFBQ0MsSUFBSSxFQUFLO0VBQzVCLElBQUlDLFdBQVcsR0FBR0QsSUFBSSxDQUFDbEIsYUFBYSxDQUFDLElBQUksQ0FBQztFQUMxQ21CLFdBQVcsQ0FBQ0MsU0FBUyxDQUFDQyxHQUFHLENBQUMsc0JBQXNCLENBQUM7RUFDakRILElBQUksQ0FBQ2xCLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQ1EsZ0JBQWdCLENBQUMsT0FBTyxFQUFDLFlBQU07SUFDdERjLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTCxJQUFJLENBQUNsQixhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckNtQixXQUFXLENBQUNDLFNBQVMsQ0FBQ0ksTUFBTSxDQUFDLHNCQUFzQixDQUFDO0VBQ3RELENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUNGO0FBQ0E7QUFDQSxnRSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2tfZGVtby8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3dlYnBhY2tfZGVtby8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3dlYnBhY2tfZGVtby8uL3NyYy9wYXBhUmV3YXJkcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX2RlbW8vLi9zcmMvc3BlY2lhbHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFja19kZW1vLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrX2RlbW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2tfZGVtby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VicGFja19kZW1vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFja19kZW1vLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYnBhY2tfZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX2RlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2tfZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX2RlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFja19kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFja19kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFja19kZW1vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2tfZGVtby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWJwYWNrX2RlbW8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2tfZGVtby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYnBhY2tfZGVtby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2tfZGVtby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2tfZGVtby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWJwYWNrX2RlbW8vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2VicGFja19kZW1vL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWJwYWNrX2RlbW8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaG9tZSgpIHtcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29udGVudC50ZXh0Q29udGVudCA9ICdIT01FJ1xuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG59XG5cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lbnUoKSB7XG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnRlbnQudGV4dENvbnRlbnQgPSAnTUVOVSdcblxuICAgIHJldHVybiBjb250ZW50O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhcGFSZXdhcmRzKCkge1xuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250ZW50LnRleHRDb250ZW50ID0gJ1BBUEEgUkVXQVJEUydcbiAgICByZXR1cm4gY29udGVudDtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNwZWNpYWxzKCkge1xuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250ZW50LnRleHRDb250ZW50ID0gJ1NQRUNJQUxTJ1xuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG59IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcImFzc2V0cy9jaGV2cm9uLWRvd24uc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Pc3dhbGQ6d2dodEA1MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIEBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVplbitEb3RzJmRpc3BsYXk9c3dhcFxcXCIpOyAqL1xcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIC0tY29sb3IwOiByZ2IoMjA5LCAyMDksIDIwOSk7XFxuICAtLWNvbG9yMTogd2hpdGU7XFxuICAtLWNvbG9yMjogYmxhY2s7XFxuICAtLWNvbG9yMzogIzM4YTU3NTtcXG4gIC0tY29sb3I0OiAjY2UyNzM1O1xcbiAgLS1jb2xvcjU6IHJnYigyMzAsIDIzMCwgMjMwKTtcXG4gIC0tY29sb3I2OiByZ2IoNDYsIDQ2LCA0Nik7XFxuICAtLWNvbG9yNzogcmdiKDk4LCA5OCwgOTgpO1xcbiAgLS1tYWluRm9udDogXFxcIk9zd2FsZFxcXCIsIHNhbnMtc2VyaWY7XFxuICAtLXNlY29uZGFyeUZvbnQ6IEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxufVxcblxcbi8qIG1ha2UgdGhlc2UgaXRlbXMgcmVzcG9uc2l2ZSAqL1xcbmltZyxcXG5waWN0dXJlLFxcbnN2ZyxcXG52aWRlbyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuLyogbWFrZSB0aGUgZm9ybSBlbGVtZW50cyBpbmhlcml0IGZvbnQgcHJvcGVydGllcyB0aGUgd2F5IGV2ZXJ5dGhpbmcgZWxzZSBkb2VzICovXFxuaW5wdXQsXFxudGV4dGFyZWEsXFxuYnV0dG9uLFxcbnNlbGVjdCB7XFxuICBmb250OiBpbmhlcml0O1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICAvKiBmb250LWZhbWlseTogSW1wYWN0LCBIYWV0dGVuc2Nod2VpbGVyLCBcXFwiQXJpYWwgTmFycm93IEJvbGRcXFwiLCBzYW5zLXNlcmlmOyAqL1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1haW5Gb250KTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XFxufVxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbnVsIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbmxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7ICovXFxufVxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcGluazsgKi9cXG59XFxuLm5hdkNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTI4cHg7XFxuICBib3gtc2hhZG93OiByZ2JhKDE0OSwgMTU3LCAxNjUsIDAuMikgMHB4IDhweCAyNHB4O1xcbn1cXG4ubmF2Q29udGFpbmVyIHVsLFxcbi5uYXZDb250YWluZXIgbGksXFxuLm5hdkNvbnRhaW5lciBhIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4udG9wTmF2IHtcXG4gIGhlaWdodDogNTAlO1xcbn1cXG4udG9wTmF2IGxpIHtcXG4gIG1hcmdpbjogMC41cmVtO1xcbn1cXG5cXG4udG9wTmF2IGxpOmZpcnN0LWNoaWxkIHtcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuLnRvcE5hdiBhIHtcXG4gIGhlaWdodDogNTAlO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yMik7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjNyZW07XFxufVxcbi5zdGFydFlvdXJPcmRlciA+IGEsXFxuLmxhbmd1YWdlID4gYSxcXG4ubG9naW4gPiBhIHtcXG4gIGdhcDogMC4yNXJlbTtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMTUwbXMgZWFzZS1pbjtcXG59XFxuLnN0YXJ0WW91ck9yZGVyID4gYTpob3ZlcixcXG4ubGFuZ3VhZ2UgPiBhOmhvdmVyLFxcbi5sb2dpbiA+IGE6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3I1KTtcXG59XFxuLnNpZ25VcCA+IGEge1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yMik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvcjIpO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yMSk7XFxufVxcbi5sb2dvIHtcXG4gIC8qIHdpZHRoOiA4cmVtOyAqL1xcbiAgaGVpZ2h0OiAxLjZyZW07XFxuICBwYWRkaW5nLWxlZnQ6IDR2dztcXG59XFxuLmxvZ29JTUcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvYmplY3QtZml0OiBjb250YWluO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uZmlsdGVyZWQge1xcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDApIHNhdHVyYXRlKDEwMCUpIGludmVydCgyOSUpIHNlcGlhKDY3JSkgc2F0dXJhdGUoNTE5OCUpXFxuICAgIGh1ZS1yb3RhdGUoMzQxZGVnKSBicmlnaHRuZXNzKDgzJSkgY29udHJhc3QoOTQlKTtcXG4gIC8qIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzIyMjUyNDcyL2hvdy1jYW4taS1jaGFuZ2UtdGhlLWNvbG9yLW9mLWFuLXN2Zy1lbGVtZW50Ki9cXG59XFxuLnNpZ25VcCA+IGE6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3I2KTtcXG59XFxuLnNpZ25VcCB7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rOyAqL1xcbiAgbWFyZ2luLXJpZ2h0OiA0dncgIWltcG9ydGFudDtcXG59XFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuXFxuLmJvdHRvbU5hdiB7XFxuICBoZWlnaHQ6IDUwJTtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1jb2xvcjApO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWNvbG9yMCk7XFxufVxcbi5ib3R0b21OYXYgbGkge1xcbiAgbWFyZ2luOiAwcmVtO1xcbn1cXG4uYm90dG9tTmF2IGxpOm50aC1jaGlsZCgzKSB7XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcbi5ib3R0b21OYXYgYSB7XFxuICBjb2xvcjogdmFyKC0tY29sb3IyKTtcXG59XFxuLm1lbnUgPiBhLFxcbi5zcGVjaWFscyA+IGEsXFxuLnBhcGFSZXdhcmRzID4gYSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbn1cXG4ubWVudSA+IGE6aG92ZXIsXFxuLnNwZWNpYWxzID4gYTpob3ZlcixcXG4ucGFwYVJld2FyZHMgPiBhOmhvdmVyIHtcXG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCB2YXIoLS1jb2xvcjMpO1xcbiAgcGFkZGluZy10b3A6IDRweDsgLypzdG9wcyB0ZXh0IGZyb20gbW92aW5nIHVwd2FyZHMgd2hlbiBib3JkZXIgaXMgYWRkZWQgb24gaG92ZXIqL1xcbn1cXG4ubWVudSB7XFxuICBwYWRkaW5nLWxlZnQ6IDR2dztcXG59XFxuLmxvZ2luMiA+IGEge1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvcjEpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3IyKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yMik7XFxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cXG4ucHJvbW9Db2RlRm9ybSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5wcm9tb0NvZGVGb3JtID4gaW5wdXQge1xcbiAgcGFkZGluZzogMC4zNXJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yMik7XFxufVxcbi5wcm9tb0NvZGVGb3JtID4gaW5wdXQ6Zmlyc3QtY2hpbGQge1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMC4zcmVtO1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMC4zcmVtO1xcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ucHJvbW9Db2RlRm9ybSA+IGlucHV0OmZpcnN0LWNoaWxkOmZvY3VzIHtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3IzKTtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcbi5wcm9tb0NvZGVGb3JtID4gaW5wdXQ6Zmlyc3QtY2hpbGQ6OnBsYWNlaG9sZGVyIHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtZmFtaWx5OiBDYW1icmlhLCBHZW9yZ2lhLCBUaW1lcywgXFxcIlRpbWVzIE5ldyBSb21hblxcXCIsIHNlcmlmO1xcbiAgZm9udC1zaXplOiBzbWFsbGVyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwLjZyZW07XFxufVxcblxcbi5wcm9tb0NvZGVGb3JtID4gaW5wdXQ6Zmlyc3QtY2hpbGQge1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMC4zcmVtO1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMC4zcmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XFxufVxcblxcbi5wcm9tb0NvZGVGb3JtID4gaW5wdXQ6bnRoLWNoaWxkKDIpIHtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwLjNyZW07XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMC4zcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3IyKTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvcjEpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcmlnaHQ6IDRweDtcXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcXG59XFxuXFxuLmNhcnQge1xcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS1jb2xvcjApO1xcbiAgcGFkZGluZzogMXJlbSAwcmVtIDFyZW0gMXJlbTtcXG4gIG1hcmdpbi1yaWdodDo0dncgIWltcG9ydGFudDtcXG59XFxuLmNhcnQgPiBzdmcge1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjI1cmVtO1xcbn1cXG4uY2FydCA+IHNwYW4ge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yNCk7XFxuICBmb250LXNpemU6IDEuMzc1cmVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uY2FydCA+IHNwYW46OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiJFxcXCI7XFxuICBjb2xvcjogdmFyKC0tY29sb3I0KTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvdHRvbTogNXB4O1xcbn1cXG4ubG9naW4yID4gYTpob3ZlcixcXG4ucHJvbW9Db2RlRm9ybSBpbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvcjYpO1xcbn1cXG5cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG5cXG5mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJvcmRlci10b3A6IHZhcigtLWNvbG9yMCkgMXB4IHNvbGlkO1xcbiAgcGFkZGluZzogMS41cmVtIG1heCg0cmVtLCA4dncpO1xcbn1cXG4uZm9vdGVyQ29udGVudFdpZHRoQ29udHJvbCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmZvb3RlckxpbmtzIHtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSBtaW4oNjAwcHgsIDQyJSkpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXG59XFxuLmZvb3RlckxpbmtzID4gZGl2IHtcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuZm9vdGVyIGEge1xcbiAgY29sb3I6IGdyZXk7XFxuICBmb250LXNpemU6IDAuNzVyZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1zZWNvbmRhcnlGb250KTtcXG4gIGxldHRlci1zcGFjaW5nOiAwcHg7XFxufVxcbmZvb3RlciBhOmhvdmVyIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG4uZm9vdGVyTGlua3MgaDQge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yMik7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG4uZnJhbmNoaXNlIHtcXG4gIHdpZHRoOiBtaW4oNjAwcHgsIDQyJSk7XFxufVxcbi5mcmFuY2hpc2UgPiBhIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGdhcDogMS41cmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3IwKTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDE1MG1zIGVhc2UtaW47XFxufVxcbi5mcmFuY2hpc2UgYTpob3ZlciB7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjQpIDBweCAzcHggOHB4O1xcbn1cXG4uZm9vdGVyQm90dG9tIHtcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxuICBwYWRkaW5nLXRvcDoxLjc1cmVtO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWNvbG9yMCk7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rOyAqL1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXG59XFxuLmNvdW50cnlTZWxlY3Qge1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLXNlY29uZGFyeUZvbnQpO1xcbiAgZm9udC1zaXplOiAuNzVyZW07XFxuICBwYWRkaW5nOiAuNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6NXB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbn1cXG4uY291bnRyeVNlbGVjdDpmb2N1cyB7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvcjMpO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuLmxlZ2FsTGlua3N7XFxuIGRpc3BsYXk6ZmxleDtcXG4gZ2FwOi43NXJlbTtcXG4gZmxleC13cmFwOiB3cmFwO1xcbiBtYXJnaW46IC41cmVtIGF1dG8gMXJlbSAwcmVtO1xcbn1cXG4ubGVnYWxMaW5rcyBsaSB7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lOyAqL1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLmZvb3RlckJvdHRvbSB7XFxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcXG59XFxuLnNvY2lhbE1lZGlhTGlua0ljb25zIHtcXG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xcbiAgcmlnaHQ6MDtcXG4gIHRvcDo2cHg7XFxuICAvKiBhbGlnbi1zZWxmOiBiYXNlbGluZTsgKi9cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOi43NXJlbTtcXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogIzM4YTU3NTsgKi9cXG59XFxuLnNvY2lhbE1lZGlhTGlua0ljb25zIHN2ZyB7XFxuICB0cmFuc2l0aW9uOiBjb2xvciA0MDBtcyBlYXNlLWluLW91dDtcXG59XFxuLnNvY2lhbE1lZGlhTGlua0ljb25zIHN2Zzpob3ZlciB7XFxuICBjb2xvcjpibGFjaztcXG59XFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuXFxuLyogV2hlbiB0aGUgYnJvd3NlciBpcyA4MzNweCBvciB3aWRlciAqL1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgzM3B4KSB7XFxuICAubW9iaWxlIHtcXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjsgKi9cXG4gIH1cXG4gIC5kZXNrdG9wIHtcXG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xcbiAgfVxcbn1cXG4vKiBXaGVuIHRoZSBicm93c2VyIGlzIGxlc3MgdGhhbiA4MzNweCB3aWRlICovXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODMzcHgpIHtcXG4gIC5tb2JpbGUge1xcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGJ1cmx5d29vZDsgKi9cXG4gIH1cXG4gIC5kZXNrdG9wIHtcXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm5hdkNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogMTE0cHg7XFxuICB9XFxuICAudG9wTmF2IHtcXG4gICAgaGVpZ2h0OiA1NSU7XFxuICB9XFxuICAuYm90dG9tTmF2IHtcXG4gICAgaGVpZ2h0OiA0NSU7XFxuICB9XFxuICAubWVudSA+IGEsXFxuICAuc3BlY2lhbHMgPiBhLFxcbiAgLnBhcGFSZXdhcmRzID4gYSB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gIH1cXG4gIC5tZW51IHtcXG4gICAgcGFkZGluZy1sZWZ0OiAwcmVtO1xcbiAgfVxcbiAgLmxvZ28ge1xcbiAgICBoZWlnaHQ6IDEuNnJlbTtcXG4gICAgcGFkZGluZy1sZWZ0OiAwcmVtO1xcbiAgfVxcbiAgLmxvZ28gaW1nIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjc1KSB0cmFuc2xhdGVYKC0yMXB4KTtcXG4gIH1cXG4gIGZvb3RlciB7XFxuICAgIHBhZGRpbmc6IDEuNXJlbTtcXG4gIH1cXG4gIC5mb290ZXJDb250ZW50V2lkdGhDb250cm9sIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG4gIC5mb290ZXJMaW5rcyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbiAgLmZyYW5jaGlzZSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nLXRvcDogMS41cmVtO1xcbiAgICAvKiBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tY29sb3IwKTsgKi9cXG4gIH1cXG4gIC5sZWdhbExpbmtzIHtcXG4gICAgbWFyZ2luLXRvcDoxLjVyZW07XFxuICB9XFxuICAuc29jaWFsTWVkaWFMaW5rSWNvbnMge1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgICBtYXJnaW4tbGVmdDogMDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjM5cHgpIHtcXG4gIC5vdXJDb21wYW55IHVsLFxcbiAgLm91clBpenphIHVsLFxcbiAgLmhlbHAgdWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBnYXA6IDFweDtcXG4gIH1cXG4gIC5oaWRkZW5PblNtYWxsU2NyZWVucyB7XFxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5mb290ZXJMaW5rcyB7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHBlYWNocHVmZjsgKi9cXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG4gIC5mb290ZXJMaW5rcyBoNCB7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICMzOGE1NzU7ICovXFxuICAgIG1hcmdpbjogMC43NXJlbSAwcmVtIDAuMjVyZW0gMHJlbTtcXG4gICAgcGFkZGluZzogMC4yNXJlbSAwcmVtO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tY29sb3IwKTtcXG4gIH1cXG4gIC5vdXJDb21wYW55LFxcbiAgLm91clBpenphLFxcbiAgLmhlbHAge1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rOyAqL1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xcbiAgICBtYXJnaW4tdG9wOiAycHg7XFxuICB9XFxuICBoNDo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAtNXB4O1xcbiAgICB0b3A6IDFyZW07XFxuICB9XFxuICAuZm9vdGVyTGlua3MgbGkge1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsbUZBQW1GO0FBRW5GOzs7RUFHRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZiw0QkFBNEI7RUFDNUIsZUFBZTtFQUNmLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLDRCQUE0QjtFQUM1Qix5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLGdDQUFnQztFQUNoQyw2Q0FBNkM7QUFDL0M7O0FBRUEsZ0NBQWdDO0FBQ2hDOzs7O0VBSUUsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUEsZ0ZBQWdGO0FBQ2hGOzs7O0VBSUUsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLDRFQUE0RTtFQUM1RSw0QkFBNEI7RUFDNUIseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2QjtBQUNBLDRGQUE0RjtBQUM1RjtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsWUFBWTtBQUNkO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixpREFBaUQ7QUFDbkQ7QUFDQTs7O0VBR0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixxQkFBcUI7QUFDdkI7QUFDQTs7O0VBR0UsWUFBWTtFQUNaLDBDQUEwQztBQUM1QztBQUNBOzs7RUFHRSwrQkFBK0I7QUFDakM7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQiwrQkFBK0I7RUFDL0IsK0JBQStC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O0lBQ3RCLHVCQUF1QjtJQUN2QiwyQkFBMkI7SUFDM0IsUUFBUTtFQUNWO0VBQ0E7SUFDRSx3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLGlDQUFpQztJQUNqQyxzQkFBc0I7RUFDeEI7RUFDQTtJQUNFLCtCQUErQjtJQUMvQixpQ0FBaUM7SUFDakMscUJBQXFCO0lBQ3JCLHNDQUFzQztFQUN4QztFQUNBOzs7SUFHRSw0QkFBNEI7SUFDNUIsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGVBQWU7RUFDakI7RUFDQTtJQUNFLGdEQUFxQztJQUNyQyxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFNBQVM7RUFDWDtFQUNBO0lBQ0UsWUFBWTtFQUNkO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9WmVuK0RvdHMmZGlzcGxheT1zd2FwXFxcIik7ICovXFxuQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3N3YWxkOndnaHRANTAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIC0tY29sb3IwOiByZ2IoMjA5LCAyMDksIDIwOSk7XFxuICAtLWNvbG9yMTogd2hpdGU7XFxuICAtLWNvbG9yMjogYmxhY2s7XFxuICAtLWNvbG9yMzogIzM4YTU3NTtcXG4gIC0tY29sb3I0OiAjY2UyNzM1O1xcbiAgLS1jb2xvcjU6IHJnYigyMzAsIDIzMCwgMjMwKTtcXG4gIC0tY29sb3I2OiByZ2IoNDYsIDQ2LCA0Nik7XFxuICAtLWNvbG9yNzogcmdiKDk4LCA5OCwgOTgpO1xcbiAgLS1tYWluRm9udDogXFxcIk9zd2FsZFxcXCIsIHNhbnMtc2VyaWY7XFxuICAtLXNlY29uZGFyeUZvbnQ6IEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxufVxcblxcbi8qIG1ha2UgdGhlc2UgaXRlbXMgcmVzcG9uc2l2ZSAqL1xcbmltZyxcXG5waWN0dXJlLFxcbnN2ZyxcXG52aWRlbyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuLyogbWFrZSB0aGUgZm9ybSBlbGVtZW50cyBpbmhlcml0IGZvbnQgcHJvcGVydGllcyB0aGUgd2F5IGV2ZXJ5dGhpbmcgZWxzZSBkb2VzICovXFxuaW5wdXQsXFxudGV4dGFyZWEsXFxuYnV0dG9uLFxcbnNlbGVjdCB7XFxuICBmb250OiBpbmhlcml0O1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICAvKiBmb250LWZhbWlseTogSW1wYWN0LCBIYWV0dGVuc2Nod2VpbGVyLCBcXFwiQXJpYWwgTmFycm93IEJvbGRcXFwiLCBzYW5zLXNlcmlmOyAqL1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1haW5Gb250KTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XFxufVxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbnVsIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbmxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7ICovXFxufVxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcGluazsgKi9cXG59XFxuLm5hdkNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTI4cHg7XFxuICBib3gtc2hhZG93OiByZ2JhKDE0OSwgMTU3LCAxNjUsIDAuMikgMHB4IDhweCAyNHB4O1xcbn1cXG4ubmF2Q29udGFpbmVyIHVsLFxcbi5uYXZDb250YWluZXIgbGksXFxuLm5hdkNvbnRhaW5lciBhIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4udG9wTmF2IHtcXG4gIGhlaWdodDogNTAlO1xcbn1cXG4udG9wTmF2IGxpIHtcXG4gIG1hcmdpbjogMC41cmVtO1xcbn1cXG5cXG4udG9wTmF2IGxpOmZpcnN0LWNoaWxkIHtcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuLnRvcE5hdiBhIHtcXG4gIGhlaWdodDogNTAlO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yMik7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjNyZW07XFxufVxcbi5zdGFydFlvdXJPcmRlciA+IGEsXFxuLmxhbmd1YWdlID4gYSxcXG4ubG9naW4gPiBhIHtcXG4gIGdhcDogMC4yNXJlbTtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMTUwbXMgZWFzZS1pbjtcXG59XFxuLnN0YXJ0WW91ck9yZGVyID4gYTpob3ZlcixcXG4ubGFuZ3VhZ2UgPiBhOmhvdmVyLFxcbi5sb2dpbiA+IGE6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3I1KTtcXG59XFxuLnNpZ25VcCA+IGEge1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yMik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvcjIpO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yMSk7XFxufVxcbi5sb2dvIHtcXG4gIC8qIHdpZHRoOiA4cmVtOyAqL1xcbiAgaGVpZ2h0OiAxLjZyZW07XFxuICBwYWRkaW5nLWxlZnQ6IDR2dztcXG59XFxuLmxvZ29JTUcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvYmplY3QtZml0OiBjb250YWluO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uZmlsdGVyZWQge1xcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDApIHNhdHVyYXRlKDEwMCUpIGludmVydCgyOSUpIHNlcGlhKDY3JSkgc2F0dXJhdGUoNTE5OCUpXFxuICAgIGh1ZS1yb3RhdGUoMzQxZGVnKSBicmlnaHRuZXNzKDgzJSkgY29udHJhc3QoOTQlKTtcXG4gIC8qIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzIyMjUyNDcyL2hvdy1jYW4taS1jaGFuZ2UtdGhlLWNvbG9yLW9mLWFuLXN2Zy1lbGVtZW50Ki9cXG59XFxuLnNpZ25VcCA+IGE6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3I2KTtcXG59XFxuLnNpZ25VcCB7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rOyAqL1xcbiAgbWFyZ2luLXJpZ2h0OiA0dncgIWltcG9ydGFudDtcXG59XFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuXFxuLmJvdHRvbU5hdiB7XFxuICBoZWlnaHQ6IDUwJTtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1jb2xvcjApO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWNvbG9yMCk7XFxufVxcbi5ib3R0b21OYXYgbGkge1xcbiAgbWFyZ2luOiAwcmVtO1xcbn1cXG4uYm90dG9tTmF2IGxpOm50aC1jaGlsZCgzKSB7XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcbi5ib3R0b21OYXYgYSB7XFxuICBjb2xvcjogdmFyKC0tY29sb3IyKTtcXG59XFxuLm1lbnUgPiBhLFxcbi5zcGVjaWFscyA+IGEsXFxuLnBhcGFSZXdhcmRzID4gYSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbn1cXG4ubWVudSA+IGE6aG92ZXIsXFxuLnNwZWNpYWxzID4gYTpob3ZlcixcXG4ucGFwYVJld2FyZHMgPiBhOmhvdmVyIHtcXG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCB2YXIoLS1jb2xvcjMpO1xcbiAgcGFkZGluZy10b3A6IDRweDsgLypzdG9wcyB0ZXh0IGZyb20gbW92aW5nIHVwd2FyZHMgd2hlbiBib3JkZXIgaXMgYWRkZWQgb24gaG92ZXIqL1xcbn1cXG4ubWVudSB7XFxuICBwYWRkaW5nLWxlZnQ6IDR2dztcXG59XFxuLmxvZ2luMiA+IGEge1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvcjEpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3IyKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yMik7XFxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cXG4ucHJvbW9Db2RlRm9ybSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5wcm9tb0NvZGVGb3JtID4gaW5wdXQge1xcbiAgcGFkZGluZzogMC4zNXJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yMik7XFxufVxcbi5wcm9tb0NvZGVGb3JtID4gaW5wdXQ6Zmlyc3QtY2hpbGQge1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMC4zcmVtO1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMC4zcmVtO1xcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ucHJvbW9Db2RlRm9ybSA+IGlucHV0OmZpcnN0LWNoaWxkOmZvY3VzIHtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3IzKTtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcbi5wcm9tb0NvZGVGb3JtID4gaW5wdXQ6Zmlyc3QtY2hpbGQ6OnBsYWNlaG9sZGVyIHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtZmFtaWx5OiBDYW1icmlhLCBHZW9yZ2lhLCBUaW1lcywgXFxcIlRpbWVzIE5ldyBSb21hblxcXCIsIHNlcmlmO1xcbiAgZm9udC1zaXplOiBzbWFsbGVyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwLjZyZW07XFxufVxcblxcbi5wcm9tb0NvZGVGb3JtID4gaW5wdXQ6Zmlyc3QtY2hpbGQge1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMC4zcmVtO1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMC4zcmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XFxufVxcblxcbi5wcm9tb0NvZGVGb3JtID4gaW5wdXQ6bnRoLWNoaWxkKDIpIHtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwLjNyZW07XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMC4zcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3IyKTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvcjEpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcmlnaHQ6IDRweDtcXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcXG59XFxuXFxuLmNhcnQge1xcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS1jb2xvcjApO1xcbiAgcGFkZGluZzogMXJlbSAwcmVtIDFyZW0gMXJlbTtcXG4gIG1hcmdpbi1yaWdodDo0dncgIWltcG9ydGFudDtcXG59XFxuLmNhcnQgPiBzdmcge1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjI1cmVtO1xcbn1cXG4uY2FydCA+IHNwYW4ge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yNCk7XFxuICBmb250LXNpemU6IDEuMzc1cmVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uY2FydCA+IHNwYW46OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiJFxcXCI7XFxuICBjb2xvcjogdmFyKC0tY29sb3I0KTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvdHRvbTogNXB4O1xcbn1cXG4ubG9naW4yID4gYTpob3ZlcixcXG4ucHJvbW9Db2RlRm9ybSBpbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvcjYpO1xcbn1cXG5cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG5cXG5mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJvcmRlci10b3A6IHZhcigtLWNvbG9yMCkgMXB4IHNvbGlkO1xcbiAgcGFkZGluZzogMS41cmVtIG1heCg0cmVtLCA4dncpO1xcbn1cXG4uZm9vdGVyQ29udGVudFdpZHRoQ29udHJvbCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmZvb3RlckxpbmtzIHtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSBtaW4oNjAwcHgsIDQyJSkpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXG59XFxuLmZvb3RlckxpbmtzID4gZGl2IHtcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuZm9vdGVyIGEge1xcbiAgY29sb3I6IGdyZXk7XFxuICBmb250LXNpemU6IDAuNzVyZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1zZWNvbmRhcnlGb250KTtcXG4gIGxldHRlci1zcGFjaW5nOiAwcHg7XFxufVxcbmZvb3RlciBhOmhvdmVyIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG4uZm9vdGVyTGlua3MgaDQge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yMik7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG4uZnJhbmNoaXNlIHtcXG4gIHdpZHRoOiBtaW4oNjAwcHgsIDQyJSk7XFxufVxcbi5mcmFuY2hpc2UgPiBhIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGdhcDogMS41cmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3IwKTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDE1MG1zIGVhc2UtaW47XFxufVxcbi5mcmFuY2hpc2UgYTpob3ZlciB7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjQpIDBweCAzcHggOHB4O1xcbn1cXG4uZm9vdGVyQm90dG9tIHtcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxuICBwYWRkaW5nLXRvcDoxLjc1cmVtO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWNvbG9yMCk7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rOyAqL1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXG59XFxuLmNvdW50cnlTZWxlY3Qge1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLXNlY29uZGFyeUZvbnQpO1xcbiAgZm9udC1zaXplOiAuNzVyZW07XFxuICBwYWRkaW5nOiAuNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6NXB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbn1cXG4uY291bnRyeVNlbGVjdDpmb2N1cyB7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvcjMpO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuLmxlZ2FsTGlua3N7XFxuIGRpc3BsYXk6ZmxleDtcXG4gZ2FwOi43NXJlbTtcXG4gZmxleC13cmFwOiB3cmFwO1xcbiBtYXJnaW46IC41cmVtIGF1dG8gMXJlbSAwcmVtO1xcbn1cXG4ubGVnYWxMaW5rcyBsaSB7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lOyAqL1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLmZvb3RlckJvdHRvbSB7XFxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcXG59XFxuLnNvY2lhbE1lZGlhTGlua0ljb25zIHtcXG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xcbiAgcmlnaHQ6MDtcXG4gIHRvcDo2cHg7XFxuICAvKiBhbGlnbi1zZWxmOiBiYXNlbGluZTsgKi9cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOi43NXJlbTtcXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogIzM4YTU3NTsgKi9cXG59XFxuLnNvY2lhbE1lZGlhTGlua0ljb25zIHN2ZyB7XFxuICB0cmFuc2l0aW9uOiBjb2xvciA0MDBtcyBlYXNlLWluLW91dDtcXG59XFxuLnNvY2lhbE1lZGlhTGlua0ljb25zIHN2Zzpob3ZlciB7XFxuICBjb2xvcjpibGFjaztcXG59XFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuXFxuLyogV2hlbiB0aGUgYnJvd3NlciBpcyA4MzNweCBvciB3aWRlciAqL1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgzM3B4KSB7XFxuICAubW9iaWxlIHtcXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjsgKi9cXG4gIH1cXG4gIC5kZXNrdG9wIHtcXG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xcbiAgfVxcbn1cXG4vKiBXaGVuIHRoZSBicm93c2VyIGlzIGxlc3MgdGhhbiA4MzNweCB3aWRlICovXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODMzcHgpIHtcXG4gIC5tb2JpbGUge1xcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGJ1cmx5d29vZDsgKi9cXG4gIH1cXG4gIC5kZXNrdG9wIHtcXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm5hdkNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogMTE0cHg7XFxuICB9XFxuICAudG9wTmF2IHtcXG4gICAgaGVpZ2h0OiA1NSU7XFxuICB9XFxuICAuYm90dG9tTmF2IHtcXG4gICAgaGVpZ2h0OiA0NSU7XFxuICB9XFxuICAubWVudSA+IGEsXFxuICAuc3BlY2lhbHMgPiBhLFxcbiAgLnBhcGFSZXdhcmRzID4gYSB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gIH1cXG4gIC5tZW51IHtcXG4gICAgcGFkZGluZy1sZWZ0OiAwcmVtO1xcbiAgfVxcbiAgLmxvZ28ge1xcbiAgICBoZWlnaHQ6IDEuNnJlbTtcXG4gICAgcGFkZGluZy1sZWZ0OiAwcmVtO1xcbiAgfVxcbiAgLmxvZ28gaW1nIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjc1KSB0cmFuc2xhdGVYKC0yMXB4KTtcXG4gIH1cXG4gIGZvb3RlciB7XFxuICAgIHBhZGRpbmc6IDEuNXJlbTtcXG4gIH1cXG4gIC5mb290ZXJDb250ZW50V2lkdGhDb250cm9sIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG4gIC5mb290ZXJMaW5rcyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbiAgLmZyYW5jaGlzZSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nLXRvcDogMS41cmVtO1xcbiAgICAvKiBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tY29sb3IwKTsgKi9cXG4gIH1cXG4gIC5sZWdhbExpbmtzIHtcXG4gICAgbWFyZ2luLXRvcDoxLjVyZW07XFxuICB9XFxuICAuc29jaWFsTWVkaWFMaW5rSWNvbnMge1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgICBtYXJnaW4tbGVmdDogMDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjM5cHgpIHtcXG4gIC5vdXJDb21wYW55IHVsLFxcbiAgLm91clBpenphIHVsLFxcbiAgLmhlbHAgdWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBnYXA6IDFweDtcXG4gIH1cXG4gIC5oaWRkZW5PblNtYWxsU2NyZWVucyB7XFxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5mb290ZXJMaW5rcyB7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHBlYWNocHVmZjsgKi9cXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG4gIC5mb290ZXJMaW5rcyBoNCB7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICMzOGE1NzU7ICovXFxuICAgIG1hcmdpbjogMC43NXJlbSAwcmVtIDAuMjVyZW0gMHJlbTtcXG4gICAgcGFkZGluZzogMC4yNXJlbSAwcmVtO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tY29sb3IwKTtcXG4gIH1cXG4gIC5vdXJDb21wYW55LFxcbiAgLm91clBpenphLFxcbiAgLmhlbHAge1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rOyAqL1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xcbiAgICBtYXJnaW4tdG9wOiAycHg7XFxuICB9XFxuICBoNDo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiB1cmwoYXNzZXRzL2NoZXZyb24tZG93bi5zdmcpO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAtNXB4O1xcbiAgICB0b3A6IDFyZW07XFxuICB9XFxuICAuZm9vdGVyTGlua3MgbGkge1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBob21lIGZyb20gXCIuL2hvbWVcIjtcbmltcG9ydCBtZW51IGZyb20gXCIuL21lbnVcIjtcbmltcG9ydCBzcGVjaWFscyBmcm9tIFwiLi9zcGVjaWFsc1wiO1xuaW1wb3J0IHBhcGFSZXdhcmRzIGZyb20gXCIuL3BhcGFSZXdhcmRzXCI7XG5cbi8vIGltcG9ydCBNb3VudGFpbnMgZnJvbSBcIi4vTW91bnRhaW5zLmpwZ1wiO1xuXG5sZXQgbWFpbiA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcihcIi5tYWluQ29udGVudFwiKTtcblxuZnVuY3Rpb24gY2hhbmdlTWFpbihwYWdlKSB7XG4gIG1haW4ucmVtb3ZlQ2hpbGQobWFpbi5maXJzdENoaWxkKTtcbiAgbGV0IGNvbnRlbnRFbGVtZW50O1xuICBpZiAocGFnZSA9PSBcImhvbWVcIikge1xuICAgIGNvbnRlbnRFbGVtZW50ID0gaG9tZSgpO1xuICB9IGVsc2UgaWYgKHBhZ2UgPT0gXCJtZW51XCIpIHtcbiAgICBjb250ZW50RWxlbWVudCA9IG1lbnUoKTtcbiAgfSBlbHNlIGlmIChwYWdlID09IFwic3BlY2lhbHNcIikge1xuICAgIGNvbnRlbnRFbGVtZW50ID0gc3BlY2lhbHMoKTtcbiAgfSBlbHNlIGlmIChwYWdlID09IFwicGFwYSByZXdhcmRzXCIpIHtcbiAgICBjb250ZW50RWxlbWVudCA9IHBhcGFSZXdhcmRzKCk7XG4gIH1cbiAgbWFpbi5hcHBlbmRDaGlsZChjb250ZW50RWxlbWVudCk7XG59XG5cbmNoYW5nZU1haW4oXCJob21lXCIpO1xuXG5sZXQgbG9nb1RhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9nbyBpbWdcIik7XG5sb2dvVGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNoYW5nZU1haW4oXCJob21lXCIpO1xufSk7XG5cbmxldCBzeW9UYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN0YXJ0WW91ck9yZGVyIGFcIik7XG5zeW9UYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY2hhbmdlTWFpbihcInNwZWNpYWxzXCIpO1xufSk7XG5cbmxldCBzaWduVXBUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZ25VcCBhXCIpO1xuc2lnblVwVGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNoYW5nZU1haW4oXCJob21lXCIpO1xufSk7XG5cbmxldCBtZW51VGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51IGFcIik7XG5tZW51VGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNoYW5nZU1haW4oXCJtZW51XCIpO1xufSk7XG5cbmxldCBzcGVjaWFsc1RhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3BlY2lhbHMgYVwiKTtcbnNwZWNpYWxzVGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNoYW5nZU1haW4oXCJzcGVjaWFsc1wiKTtcbn0pO1xuXG5sZXQgcGFwYVJld2FyZHNUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBhcGFSZXdhcmRzIGFcIik7XG5wYXBhUmV3YXJkc1RhcmdldC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjaGFuZ2VNYWluKFwicGFwYSByZXdhcmRzXCIpO1xufSk7XG5cbmxldCBzaG9wcGluZ0NhcnRUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcnRcIik7XG5zaG9wcGluZ0NhcnRUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY2hhbmdlTWFpbihcInNwZWNpYWxzXCIpO1xufSk7XG5cbmxldCBmb290ZXJMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb290ZXJMaW5rcyA+IGRpdicpO1xuXG5mb290ZXJMaW5rcy5mb3JFYWNoKChsaW5rKSA9PiB7XG4gIGxldCBoaWRkZW5MaW5rcyA9IGxpbmsucXVlcnlTZWxlY3RvcigndWwnKVxuICBoaWRkZW5MaW5rcy5jbGFzc0xpc3QuYWRkKCdoaWRkZW5PblNtYWxsU2NyZWVucycpXG4gIGxpbmsucXVlcnlTZWxlY3RvcignaDQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGxpbmsucXVlcnlTZWxlY3RvcignaDQnKSlcbiAgICBoaWRkZW5MaW5rcy5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW5PblNtYWxsU2NyZWVucycpXG4gIH0pXG59KVxuLy8gY29uc3QgbG9nb1RhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9nbyBpbWdcIik7XG4vLyBsb2dvVGFyZ2V0Lm9uQ2xpY2sgPSAoKSA9PiB7Y2hhbmdlTWFpbignc3BlY2lhbHMnKX1cbi8vIGxvZ29UYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNoYW5nZU1haW4oXCJzcGVjaWFsc1wiKSk7XG4iXSwibmFtZXMiOlsiaG9tZSIsImNvbnRlbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsIm1lbnUiLCJwYXBhUmV3YXJkcyIsInNwZWNpYWxzIiwibWFpbiIsImJvZHkiLCJxdWVyeVNlbGVjdG9yIiwiY2hhbmdlTWFpbiIsInBhZ2UiLCJyZW1vdmVDaGlsZCIsImZpcnN0Q2hpbGQiLCJjb250ZW50RWxlbWVudCIsImFwcGVuZENoaWxkIiwibG9nb1RhcmdldCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzeW9UYXJnZXQiLCJzaWduVXBUYXJnZXQiLCJtZW51VGFyZ2V0Iiwic3BlY2lhbHNUYXJnZXQiLCJwYXBhUmV3YXJkc1RhcmdldCIsInNob3BwaW5nQ2FydFRhcmdldCIsImZvb3RlckxpbmtzIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJsaW5rIiwiaGlkZGVuTGlua3MiLCJjbGFzc0xpc3QiLCJhZGQiLCJjb25zb2xlIiwibG9nIiwidG9nZ2xlIl0sInNvdXJjZVJvb3QiOiIifQ==