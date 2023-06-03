import Form from "./modules/form.mjs";
import Cookies from "./modules/cookies.mjs";
document.addEventListener('DOMContentLoaded', () => {
  const form = new Form;
  const cookies = new Cookies;

  (function() {
    if(cookies.getCookie('UserRegistered') === 'yes') {
      const subtitle = document.querySelector('.form-block__subtitle');
      subtitle.innerHTML = 'Вы успешно зарегестрированы!</a>';
    } else {
      const subtitle = document.querySelector('.form-block__subtitle');
      subtitle.innerHTML = 'Нет аккаунта? <a class="title title__fz16 title_bold" href="../">Зарегестрироваться!</a>'
    }
  })();


  form.showHidePassword({
    openedEyeSelector: '#opened',
    closedEyeSelector: '#closed',
    activeSelector: 'form__password-eye_active',
    InputSelector: '#password'
  });
  form.validInput('#email', /^[\w.\s-]{1,120}@[a-zA-Z0-9_-]{1,120}(?:\.[a-zA-Z0-9_-]{1,120}){1,2}$/);
  form.validInput('#password', /^(?=.*[a-zA-Zа-яА-Я])(?=.*[0-9])(?!.*\s).{8,48}$/, false);

  try {
    document.querySelector('.form').addEventListener('submit', (e) => {
      e.preventDefault();
      form.sendForm('.form', 'php/login.php').
      then(data => {
        if(data.auth === 'success') {
          window.location.href = "../profile.php";
        }
      });     
    })
  } catch {
    alert('Произошла ошибка, попробуйте позже или сообщите в техническую поддержку');
  }


})