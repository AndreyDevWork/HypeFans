import Form from './modules/form.mjs'
document.addEventListener('DOMContentLoaded', () =>{
  
  const form = new Form;
  form.showHidePassword('#opened', '#closed', 'form__password-eye_active', '#password');
});