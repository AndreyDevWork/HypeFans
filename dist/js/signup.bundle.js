/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/form.mjs":
/*!*****************************!*\
  !*** ./js/modules/form.mjs ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Form)
/* harmony export */ });
class Form {
  constructor (noValidCssClass = 'form__input_no-valid') {
    this.noValidCssClass = noValidCssClass;
  }

  sendForm(formSelector, url) {  
    const form = document.querySelector(formSelector);
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      fetch(url, {
        method: "POST",
        body: formData
      })
      .then(data => data.text())
      .then(data => {
        console.log(data);
        form.reset();
      })
    });
  }

  validInput(inputSelector, regularExpressions, lastSpaceRemoveTrueFalse = true) {
    const input = document.querySelector(inputSelector);

    input.addEventListener('blur', () => {
      let inputValue = input.value;

      if (lastSpaceRemoveTrueFalse) {
        inputValue = input.value.trim();
      }

      if(!regularExpressions.test(inputValue)) {
        input.classList.add(this.noValidCssClass);
        input.setAttribute('data-valid', 'false');
      }
      if(regularExpressions.test(inputValue)) {
        input.classList.remove(this.noValidCssClass);
        input.setAttribute('data-valid', 'true');
      }
    });
  }

  showHidePassword({openedEyeSelector, closedEyeSelector, activeSelector, InputSelector}) {
    const openedEye = document.querySelector(openedEyeSelector);
    const closedEye = document.querySelector(closedEyeSelector);
    const input = document.querySelector(InputSelector);

    openedEye.addEventListener('click', () => {
      if (/Mobi/.test(navigator.userAgent)) {
        input.focus();
        setTimeout( () => {
          input.selectionStart = input.value.length;
          input.selectionEnd = input.value.length;
        });
      }    

      input.setAttribute('type', 'text');
      openedEye.classList.toggle(activeSelector);
      closedEye.classList.toggle(activeSelector);
    }); 

    closedEye.addEventListener('click', () => {
      if (/Mobi/.test(navigator.userAgent)) {
        input.focus();
        setTimeout( () => {
          input.selectionStart = input.value.length;
          input.selectionEnd = input.value.length;
        });
      } 

      input.setAttribute('type', 'password');
      closedEye.classList.toggle(activeSelector);
      openedEye.classList.toggle(activeSelector);
    }); 
  }
}

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/signup.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_form_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/form.mjs */ "./js/modules/form.mjs");

document.addEventListener('DOMContentLoaded', () =>{
  let o 
  const form = new _modules_form_mjs__WEBPACK_IMPORTED_MODULE_0__["default"];
  form.showHidePassword({
    openedEyeSelector: '#opened',
    closedEyeSelector: '#closed',
    activeSelector: 'form__password-eye_active',
    InputSelector: '#password'
  });

  form.validInput('#name', /^[a-zA-Zа-яА-Я\s]{2,32}$/);
  form.validInput('#email', /^[\w.\s-]{1,120}@[a-zA-Z0-9_-]{1,120}(?:\.[a-zA-Z0-9_-]{1,120}){1,2}$/);
  form.validInput('#password', /^(?=.*[a-zA-Zа-яА-Я])(?=.*[0-9])(?!.*\s).{8,48}$/, false);
  form.sendForm('.form', 'php/form.php');

});
})();

/******/ })()
;
//# sourceMappingURL=signup.bundle.js.map