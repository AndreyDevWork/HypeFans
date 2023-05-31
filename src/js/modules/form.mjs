export default class Form {
  

  validInput(inputSelector, regularExpressions, noValidCssClass) {
    const input = document.querySelector(inputSelector);

    input.addEventListener('blur', () => {
      const inputValue = input.value.trim();

      if(!regularExpressions.test(inputValue)) {
        input.classList.add(noValidCssClass);
        input.setAttribute('data-valid', 'false');
      }
      if(regularExpressions.test(inputValue)) {
        input.classList.remove(noValidCssClass);
        input.setAttribute('data-valid', 'true');
      }
    });
  }

  showHidePassword(openedEyeSelector, closedEyeSelector, activeSelector, InputSelector) {
    const openedEye = document.querySelector(openedEyeSelector);
    const closedEye = document.querySelector(closedEyeSelector);
    const input = document.querySelector(InputSelector);

    openedEye.addEventListener('click', () => {
      if (/Mobi/.test(navigator.userAgent)) {
        input.focus();
      }
      input.setAttribute('type', 'text');
      openedEye.classList.toggle(activeSelector);
      closedEye.classList.toggle(activeSelector);
    }); 

    closedEye.addEventListener('click', () => {
      if (/Mobi/.test(navigator.userAgent)) {
        input.focus();
      }
      input.setAttribute('type', 'password');
      closedEye.classList.toggle(activeSelector);
      openedEye.classList.toggle(activeSelector);
    }); 
  }
}