export default class ModifyInterface {
  formToUploadPhoto(btnSelector, inputSelector, formSelector) {
    const btn = document.querySelector(btnSelector);
    const input = document.querySelector(inputSelector);
    const form = document.querySelector(formSelector)
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      input.click();
    });
    input.addEventListener('change', () => {
      form.submit();
    })
  }
}