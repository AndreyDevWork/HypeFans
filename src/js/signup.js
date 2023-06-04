import Form from './modules/form.mjs'
import Cookies from './modules/cookies.mjs';
document.addEventListener('DOMContentLoaded', () =>{

  const form = new Form;
  const cookie = new Cookies;

  form.showHidePassword({
    openedEyeSelector: '#opened',
    closedEyeSelector: '#closed',
    activeSelector: 'form__password-eye_active',
    InputSelector: '#password'
  });

  form.validInput('#name', /^[a-zA-Zа-яА-Я\s]{2,32}$/);
  form.validInput('#email', /^[\w.\s-]{1,120}@[a-zA-Z0-9_-]{1,120}(?:\.[a-zA-Z0-9_-]{1,120}){1,2}$/);
  form.validInput('#password', /^(?=.*[a-zA-Zа-яА-Я])(?=.*[0-9])(?!.*\s).{8,48}$/, false);

  try {
    document.querySelector('.form').addEventListener('submit', (e) => {
      e.preventDefault();
      form.sendForm('.form', 'php/signup.php')
      .then(data => {
      if(data.registration === 'success') {
        cookie.setCookie("UserRegistered", "yes", 120);
        window.location.href = "../login.php";
      }
      });
    })
    
  } catch {
    alert('Произошла ошибка, попробуйте позже или сообщите в техническую поддержку')
  }


});


