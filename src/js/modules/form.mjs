export default class Form {

  showHidePassword(openedEyeSelector, closedEyeSelector, activeSelector, idInput) {
    const openedEye = document.querySelector(openedEyeSelector);
    const closedEye = document.querySelector(closedEyeSelector);
    const input = document.querySelector(idInput);

    openedEye.addEventListener('click', () => {
      input.setAttribute('type', 'text');
      openedEye.classList.toggle(activeSelector);
      closedEye.classList.toggle(activeSelector);
    }); 
    closedEye.addEventListener('click', () => {
      input.setAttribute('type', 'password');
      closedEye.classList.toggle(activeSelector);
      openedEye.classList.toggle(activeSelector);
    }); 
  }
}