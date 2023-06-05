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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_interface_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/interface.mjs */ \"./js/modules/interface.mjs\");\n/* harmony import */ var _modules_form_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/form.mjs */ \"./js/modules/form.mjs\");\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n  const interfacee = new _modules_interface_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\r\n  const form = new _modules_form_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\r\n\r\n  interfacee.hover('.header__avatar', '.header__upload', 'header__upload_active');\r\n  interfacee.hover('.header__upload', '.header__upload-btn', 'header__upload-btn_active');\r\n\r\n  form.modifyUploadPhoto('.header__upload-btn', '.header__input', '.header__form');\r\n\r\n  interfacee.modalOpen(\r\n    '.header__btn', \r\n    ['.menu__modal', 'menu__modal_active'], \r\n    ['.menu__overlay', 'menu__overlay_active']\r\n  );\r\n  interfacee.modalOpen('#сancel', 'menu__modal_active', 'menu__overlay_active');\r\n\r\n});\n\n//# sourceURL=webpack:///./js/profile.js?");

/***/ }),

/***/ "./js/modules/form.mjs":
/*!*****************************!*\
  !*** ./js/modules/form.mjs ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Form)\n/* harmony export */ });\nclass Form {\r\n  constructor (noValidCssClass = 'form__input_no-valid') {\r\n    this.noValidCssClass = noValidCssClass;\r\n  }\r\n  modifyUploadPhoto(btnSelector, inputSelector, formSelector) {\r\n    const btn = document.querySelector(btnSelector);\r\n    const input = document.querySelector(inputSelector);\r\n    const form = document.querySelector(formSelector)\r\n    btn.addEventListener('click', (e) => {\r\n      e.preventDefault();\r\n      input.click();\r\n    });\r\n    input.addEventListener('change', () => {\r\n      form.submit();\r\n    })\r\n  }\r\n  \r\n  sendForm(formSelector, url) {\r\n    return new Promise((resolve, reject) => {\r\n      const form = document.querySelector(formSelector);\r\n      const formData = new FormData(form);\r\n\r\n      fetch(url, {\r\n        method: \"POST\",\r\n        body: formData\r\n      })\r\n      .then(data => data.json())\r\n      .then(data => {\r\n        console.log(data);\r\n        form.reset();\r\n        resolve(data); // Разрешаем обещание с данными\r\n      })\r\n      .catch(error => {\r\n        console.error('Произошла ошибка ', error);\r\n        reject(error); // Отклоняем обещание с ошибкой\r\n      });\r\n    });\r\n  }\r\n\r\n  validInput(inputSelector, regularExpressions, lastSpaceRemoveTrueFalse = true) {\r\n    const input = document.querySelector(inputSelector);\r\n\r\n    input.addEventListener('blur', () => {\r\n      let inputValue = input.value;\r\n\r\n      if (lastSpaceRemoveTrueFalse) {\r\n        inputValue = input.value.trim();\r\n      }\r\n\r\n      if(!regularExpressions.test(inputValue)) {\r\n        input.classList.add(this.noValidCssClass);\r\n        input.setAttribute('data-valid', 'false');\r\n      }\r\n      if(regularExpressions.test(inputValue)) {\r\n        input.classList.remove(this.noValidCssClass);\r\n        input.setAttribute('data-valid', 'true');\r\n      }\r\n    });\r\n  }\r\n\r\n  showHidePassword({openedEyeSelector, closedEyeSelector, activeSelector, InputSelector}) {\r\n    const openedEye = document.querySelector(openedEyeSelector);\r\n    const closedEye = document.querySelector(closedEyeSelector);\r\n    const input = document.querySelector(InputSelector);\r\n\r\n    openedEye.addEventListener('click', () => {\r\n      if (/Mobi/.test(navigator.userAgent)) {\r\n        input.focus();\r\n        setTimeout( () => {\r\n          input.selectionStart = input.value.length;\r\n          input.selectionEnd = input.value.length;\r\n        });\r\n      }    \r\n\r\n      input.setAttribute('type', 'text');\r\n      openedEye.classList.toggle(activeSelector);\r\n      closedEye.classList.toggle(activeSelector);\r\n    }); \r\n\r\n    closedEye.addEventListener('click', () => {\r\n      if (/Mobi/.test(navigator.userAgent)) {\r\n        input.focus();\r\n        setTimeout( () => {\r\n          input.selectionStart = input.value.length;\r\n          input.selectionEnd = input.value.length;\r\n        });\r\n      } \r\n\r\n      input.setAttribute('type', 'password');\r\n      closedEye.classList.toggle(activeSelector);\r\n      openedEye.classList.toggle(activeSelector);\r\n    }); \r\n  }\r\n}\n\n//# sourceURL=webpack:///./js/modules/form.mjs?");

/***/ }),

/***/ "./js/modules/interface.mjs":
/*!**********************************!*\
  !*** ./js/modules/interface.mjs ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Interface)\n/* harmony export */ });\nclass Interface {\r\n  hover(hoverElementSelector, changeElementSelector, addClass) {\r\n    const hoverElement = document.querySelector(hoverElementSelector);\r\n    const changeElement = document.querySelector(changeElementSelector);\r\n    hoverElement.addEventListener('mouseenter', () => {\r\n      changeElement.classList.add(addClass);\r\n    });\r\n    hoverElement.addEventListener('mouseleave', () => {\r\n      changeElement.classList.remove(addClass);\r\n    })\r\n  }\r\n\r\n  modalOpen(btnSelector, ...pairSelectorClass) {\r\n    const btn = document.querySelector(btnSelector);\r\n    btn.addEventListener('click', () => {\r\n      pairSelectorClass.forEach(pair => {\r\n        const [elementSelector, adClass] = pair; \r\n        document.querySelector(elementSelector).classList.add(adClass);\r\n      });\r\n    });\r\n  }\r\n} \n\n//# sourceURL=webpack:///./js/modules/interface.mjs?");

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