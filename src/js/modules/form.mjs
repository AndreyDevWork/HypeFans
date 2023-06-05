export default class Form {
  constructor (noValidCssClass = 'form__input_no-valid') {
    this.noValidCssClass = noValidCssClass;
  }
  modifyUploadPhoto(btnSelector, inputSelector, formSelector) {
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
  
  sendForm(formSelector, url) {
    return new Promise((resolve, reject) => {
      const form = document.querySelector(formSelector);
      const formData = new FormData(form);

      fetch(url, {
        method: "POST",
        body: formData
      })
      .then(data => data.json())
      .then(data => {
        console.log(data);
        form.reset();
        resolve(data); // Разрешаем обещание с данными
      })
      .catch(error => {
        console.error('Произошла ошибка ', error);
        reject(error); // Отклоняем обещание с ошибкой
      });
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