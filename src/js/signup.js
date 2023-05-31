import Form from './modules/form.mjs'
document.addEventListener('DOMContentLoaded', () =>{
  
  const form = new Form;
  form.showHidePassword('#opened', '#closed', 'form__password-eye_active', '#password');

  form.validInput('#name', /^[a-zA-Zа-яА-Я\s]{2,32}$/, 'form__input_no-valid');
  form.validInput('#email', /^[\w.\s-]{1,120}@[a-zA-Z0-9_-]{1,120}(?:\.[a-zA-Z0-9_-]{1,120}){1,2}$/, 'form__input_no-valid');
  form.validInput('#password', /^(?=.*[a-zA-Zа-яА-Я])(?=.*[0-9]).{8,48}$/, 'form__input_no-valid');
  
  form.sendForm('.form', 'ddd.php');
});