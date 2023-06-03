import Form from './modules/form.mjs'
document.addEventListener('DOMContentLoaded', () =>{

  const form = new Form;
  form.showHidePassword({
    openedEyeSelector: '#opened',
    closedEyeSelector: '#closed',
    activeSelector: 'form__password-eye_active',
    InputSelector: '#password'
  });

  form.validInput('#name', /^[a-zA-Zа-яА-Я\s]{2,32}$/);
  form.validInput('#email', /^[\w.\s-]{1,120}@[a-zA-Z0-9_-]{1,120}(?:\.[a-zA-Z0-9_-]{1,120}){1,2}$/);
  form.validInput('#password', /^(?=.*[a-zA-Zа-яА-Я])(?=.*[0-9])(?!.*\s).{8,48}$/, false);
  form.sendForm('.form', 'php/signup.php')
  .then(data => {
    if(data.registration === 'success') {
      setCookie("UserRegistered", "yes", 600);
      console.log(document.cookie);
    }
  });
  
  function setCookie(name, value, maxAge) {
    const cookieValue = encodeURIComponent(value) + "; max-age=" + maxAge;
    document.cookie = name + "=" + cookieValue + "; path=/";
  }
  


});