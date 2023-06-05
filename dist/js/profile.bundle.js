/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/profile.js":
/*!***********************!*\
  !*** ./js/profile.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_effects_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/effects.mjs */ \"./js/modules/effects.mjs\");\n/* harmony import */ var _modules_modify_interface_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modify_interface.mjs */ \"./js/modules/modify_interface.mjs\");\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n  const effects = new _modules_effects_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\r\n  const modifyInterface = new _modules_modify_interface_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\r\n\r\n  effects.addDeleteClass('.header__avatar', '.header__upload', 'header__upload_active');\r\n  effects.addDeleteClass('.header__upload', '.header__upload-btn', 'header__upload-btn_active');\r\n\r\n  modifyInterface.formToUploadPhoto('.header__upload-btn', '.header__input', '.header__form');\r\n\r\n});\n\n//# sourceURL=webpack:///./js/profile.js?");

/***/ }),

/***/ "./js/modules/effects.mjs":
/*!********************************!*\
  !*** ./js/modules/effects.mjs ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Effects)\n/* harmony export */ });\nclass Effects {\r\n  addDeleteClass(hoverElementSelector, changeElementSelector, addClass) {\r\n    const hoverElement = document.querySelector(hoverElementSelector);\r\n    const changeElement = document.querySelector(changeElementSelector);\r\n    hoverElement.addEventListener('mouseenter', () => {\r\n      changeElement.classList.add(addClass);\r\n    });\r\n    hoverElement.addEventListener('mouseleave', () => {\r\n      changeElement.classList.remove(addClass);\r\n    })\r\n  }\r\n} \n\n//# sourceURL=webpack:///./js/modules/effects.mjs?");

/***/ }),

/***/ "./js/modules/modify_interface.mjs":
/*!*****************************************!*\
  !*** ./js/modules/modify_interface.mjs ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ModifyInterface)\n/* harmony export */ });\nclass ModifyInterface {\r\n  formToUploadPhoto(btnSelector, inputSelector, formSelector) {\r\n    const btn = document.querySelector(btnSelector);\r\n    const input = document.querySelector(inputSelector);\r\n    const form = document.querySelector(formSelector)\r\n    btn.addEventListener('click', (e) => {\r\n      e.preventDefault();\r\n      input.click();\r\n    });\r\n    input.addEventListener('change', () => {\r\n      form.submit();\r\n    })\r\n  }\r\n}\n\n//# sourceURL=webpack:///./js/modules/modify_interface.mjs?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/profile.js");
/******/ 	
/******/ })()
;