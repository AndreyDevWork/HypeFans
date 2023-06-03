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

/***/ "./js/signup.js":
/*!**********************!*\
  !*** ./js/signup.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_form_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/form.mjs */ \"./js/modules/form.mjs\");\n/* harmony import */ var _modules_cookies_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/cookies.mjs */ \"./js/modules/cookies.mjs\");\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', () =>{\r\n  const form = new _modules_form_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\r\n  const cookie = new _modules_cookies_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\r\n  form.showHidePassword({\r\n    openedEyeSelector: '#opened',\r\n    closedEyeSelector: '#closed',\r\n    activeSelector: 'form__password-eye_active',\r\n    InputSelector: '#password'\r\n  });\r\n  form.validInput('#name', /^[a-zA-Zа-яА-Я\\s]{2,32}$/);\r\n  form.validInput('#email', /^[\\w.\\s-]{1,120}@[a-zA-Z0-9_-]{1,120}(?:\\.[a-zA-Z0-9_-]{1,120}){1,2}$/);\r\n  form.validInput('#password', /^(?=.*[a-zA-Zа-яА-Я])(?=.*[0-9])(?!.*\\s).{8,48}$/, false);\r\n  form.sendForm('.form', 'php/signup.php')\r\n  .then(data => {\r\n    if(data.registration === 'success') {\r\n      cookie.setCookie(\"UserRegistered\", \"yes\", 600);\r\n    }\r\n  });\r\n  \r\n\r\n\r\n});\n\n//# sourceURL=webpack:///./js/signup.js?");

/***/ }),

/***/ "./js/modules/cookies.mjs":
/*!********************************!*\
  !*** ./js/modules/cookies.mjs ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Cookies)\n/* harmony export */ });\nclass Cookies {\r\n  setCookie(name, value, maxAge) {\r\n    const cookieValue = encodeURIComponent(value) + \"; max-age=\" + maxAge;\r\n    document.cookie = name + \"=\" + cookieValue + \"; path=/\";\r\n  }\r\n\r\n  getCookie(name) {\r\n    const cookies = document.cookie.split(';'); \r\n    for (let i = 0; i < cookies.length; i++) {\r\n      const cookie = cookies[i].trim();\r\n      const [cookieName, cookieValue] = cookie.split('=');\r\n      if (name === cookieName) {\r\n        return cookieValue;\r\n      }\r\n    }\r\n  }\r\n}\n\n//# sourceURL=webpack:///./js/modules/cookies.mjs?");

/***/ }),

/***/ "./js/modules/form.mjs":
/*!*****************************!*\
  !*** ./js/modules/form.mjs ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Form)\n/* harmony export */ });\nclass Form {\r\n  constructor (noValidCssClass = 'form__input_no-valid') {\r\n    this.noValidCssClass = noValidCssClass;\r\n  }\r\n\r\n  sendForm(formSelector, url) {\r\n    return new Promise((resolve, reject) => {\r\n      const form = document.querySelector(formSelector);\r\n      form.addEventListener('submit', (event) => {\r\n        event.preventDefault();\r\n        const formData = new FormData(form);\r\n        fetch(url, {\r\n          method: \"POST\",\r\n          body: formData\r\n        })\r\n        .then(data => data.json())\r\n        .then(data => {\r\n          console.log(data);\r\n          form.reset();\r\n          resolve(data); // Разрешаем обещание с данными\r\n        })\r\n        .catch(error => {\r\n          console.error('Произошла ошибка ', error);\r\n          reject(error); // Отклоняем обещание с ошибкой\r\n        });\r\n      });\r\n    });\r\n  }\r\n\r\n  validInput(inputSelector, regularExpressions, lastSpaceRemoveTrueFalse = true) {\r\n    const input = document.querySelector(inputSelector);\r\n\r\n    input.addEventListener('blur', () => {\r\n      let inputValue = input.value;\r\n\r\n      if (lastSpaceRemoveTrueFalse) {\r\n        inputValue = input.value.trim();\r\n      }\r\n\r\n      if(!regularExpressions.test(inputValue)) {\r\n        input.classList.add(this.noValidCssClass);\r\n        input.setAttribute('data-valid', 'false');\r\n      }\r\n      if(regularExpressions.test(inputValue)) {\r\n        input.classList.remove(this.noValidCssClass);\r\n        input.setAttribute('data-valid', 'true');\r\n      }\r\n    });\r\n  }\r\n\r\n  showHidePassword({openedEyeSelector, closedEyeSelector, activeSelector, InputSelector}) {\r\n    const openedEye = document.querySelector(openedEyeSelector);\r\n    const closedEye = document.querySelector(closedEyeSelector);\r\n    const input = document.querySelector(InputSelector);\r\n\r\n    openedEye.addEventListener('click', () => {\r\n      if (/Mobi/.test(navigator.userAgent)) {\r\n        input.focus();\r\n        setTimeout( () => {\r\n          input.selectionStart = input.value.length;\r\n          input.selectionEnd = input.value.length;\r\n        });\r\n      }    \r\n\r\n      input.setAttribute('type', 'text');\r\n      openedEye.classList.toggle(activeSelector);\r\n      closedEye.classList.toggle(activeSelector);\r\n    }); \r\n\r\n    closedEye.addEventListener('click', () => {\r\n      if (/Mobi/.test(navigator.userAgent)) {\r\n        input.focus();\r\n        setTimeout( () => {\r\n          input.selectionStart = input.value.length;\r\n          input.selectionEnd = input.value.length;\r\n        });\r\n      } \r\n\r\n      input.setAttribute('type', 'password');\r\n      closedEye.classList.toggle(activeSelector);\r\n      openedEye.classList.toggle(activeSelector);\r\n    }); \r\n  }\r\n}\n\n//# sourceURL=webpack:///./js/modules/form.mjs?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./js/signup.js");
/******/ 	
/******/ })()
;