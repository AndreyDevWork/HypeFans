<?php
  session_start();
  if($_SESSION['user']) {
    header('Location: my_profile.php');
  }
?>


<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Вход | HypeFans</title>
  <link rel="stylesheet" href="css/style.min.css?v=4">
</head>
<body>
  <main class="signup">
    <div class="container">
      <div class="signup__wrapper">

        <div class="signup__logo">
          <svg viewBox="0 0 118 149" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M38.4497 0H9.49438V53.0998L38.4497 30.4773V0ZM105.91 25.799L38.4497 78.5046V97.7244H9.49438V64.101L10.6311 63.2129L10.6267 63.2078L79.2738 9.57446H105.378L105.91 10.2558V25.799ZM76.4714 60.129L105.91 37.129V68.5408V97.725H76.4714V68.5408V60.129Z" fill="url(#paint0_linear_202_52)"/>
            <path d="M0 143.453H3.27756V134.982H12.606V143.453H15.8836V124.544H12.606V131.957H3.27756V124.544H0V143.453ZM18.5328 130.847L23.903 143.453L21.7852 149H24.8862L31.8448 130.847H28.6933L25.4913 139.545L21.886 130.847H18.5328ZM33.8639 130.847V149H36.8893V142.016C37.8978 143.075 39.234 143.705 40.8224 143.705C44.3268 143.705 46.9993 140.932 46.9993 137.15C46.9993 133.368 44.3268 130.595 40.8224 130.595C39.1836 130.595 37.7969 131.251 36.7885 132.385L36.6372 130.847H33.8639ZM40.3686 133.368C42.4612 133.368 43.8478 134.881 43.8478 137.15C43.8478 139.419 42.4612 140.932 40.3686 140.932C38.276 140.932 36.8893 139.419 36.8893 137.15C36.8893 134.881 38.276 133.368 40.3686 133.368ZM48.8606 137.201C48.8606 140.957 51.3313 143.705 55.4409 143.705C58.4159 143.705 60.9371 142.218 61.4918 139.671L58.6933 139.167C58.3655 140.302 57.1301 141.058 55.4409 141.058C53.55 141.058 52.1885 140.075 51.9364 137.932H61.4414C61.517 137.478 61.5674 136.999 61.5674 136.57C61.5674 133.015 59.0462 130.595 55.3905 130.595C51.5583 130.595 48.8606 133.394 48.8606 137.201ZM55.4157 133.116C57.1553 133.116 58.2394 133.948 58.5924 135.537H52.0373C52.3902 133.948 53.55 133.116 55.4157 133.116ZM65.123 143.453H68.4005V135.31H74.7287V132.36H68.4005V127.494H76.9978V124.544H65.123V143.453ZM86.0924 143.453H88.7649V135.461C88.7649 132.461 86.7227 130.595 83.42 130.595C80.0668 130.595 77.9742 132.284 77.596 134.604L80.3693 135.133C80.6719 133.822 81.6047 133.141 83.1931 133.141C84.6049 133.141 85.5378 133.696 85.7899 135.108L82.4115 135.789C79.7138 136.343 77.6212 137.402 77.6212 139.974C77.6212 142.369 79.4112 143.705 81.7055 143.705C83.4704 143.705 84.9327 142.924 85.8907 141.638L86.0924 143.453ZM80.6719 139.797C80.6719 138.814 81.3778 138.386 82.5123 138.133L85.8403 137.377V137.68C85.8403 140.05 83.9998 141.184 82.235 141.184C81.2769 141.184 80.6719 140.705 80.6719 139.797ZM92.2896 143.453H95.315V136.318C95.315 134.074 96.8782 133.394 98.2396 133.394C99.7523 133.394 100.887 134.377 100.887 136.318V143.453H103.912V135.864C103.912 132.385 101.643 130.595 98.9708 130.595C97.3572 130.595 96.0966 131.251 95.2142 132.183L95.0629 130.847H92.2896V143.453ZM111.744 143.705C115.299 143.705 117.139 141.89 117.139 139.571C117.139 136.621 114.643 136.041 112.525 135.713C110.987 135.486 109.626 135.36 109.626 134.326C109.626 133.545 110.282 132.99 111.593 132.99C113.181 132.99 113.811 133.797 113.988 134.654L116.811 134.049C116.509 131.982 114.694 130.595 111.693 130.595C108.618 130.595 106.601 132.234 106.601 134.478C106.601 137.428 108.92 138.033 110.987 138.335C112.601 138.587 114.089 138.663 114.089 139.747C114.089 140.73 113.282 141.26 111.895 141.26C110.382 141.26 109.45 140.604 109.223 139.369L106.222 139.974C106.727 142.344 108.491 143.705 111.744 143.705Z" fill="white"/>
            <defs>
            <linearGradient id="paint0_linear_202_52" x1="6.00485" y1="3.22372e-06" x2="148.457" y2="101.666" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FF6644"/>
            <stop offset="0.796432" stop-color="#FF485C"/>
            <stop offset="1" stop-color="#FF1A6C"/>
            </linearGradient>
            </defs>
          </svg>        
        </div>

        <div class="form-block">
          <h1 class="title title__fz32 title_bold">Вход</h1>
          <div class="title title__fz16 form-block__subtitle">Нет аккаунта? <a class="title title__fz16 title_bold" href="../">Зарегестрироваться</a></div>
          <div class="form-block__logo-mobile">
            <svg viewBox="0 0 193 199" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M72.3958 0.476685H36.1436V66.9576L72.3958 38.6343V0.476685ZM156.856 32.7775L72.3958 98.7654V122.828H36.1436V80.7316L37.5665 79.6199L37.5613 79.6133L123.508 12.4641H156.19L156.856 13.3173V32.7775ZM119.999 75.7579L156.856 46.9618V86.2897H156.856V122.828H119.999V86.2897H119.999V75.7579Z" fill="url(#paint0_linear_73_82)"/>
              <path d="M4.95313 186.828H10.1531V173.388H24.9531V186.828H30.1531V156.828H24.9531V168.588H10.1531V156.828H4.95313V186.828ZM34.3563 166.828L42.8763 186.828L39.5163 195.628H44.4362L55.4763 166.828H50.4763L45.3963 180.628L39.6763 166.828H34.3563ZM58.6797 166.828V195.628H63.4797V184.548C65.0797 186.228 67.1997 187.228 69.7197 187.228C75.2797 187.228 79.5197 182.828 79.5197 176.828C79.5197 170.828 75.2797 166.428 69.7197 166.428C67.1197 166.428 64.9197 167.468 63.3197 169.268L63.0797 166.828H58.6797ZM68.9997 170.828C72.3197 170.828 74.5197 173.228 74.5197 176.828C74.5197 180.428 72.3197 182.828 68.9997 182.828C65.6797 182.828 63.4797 180.428 63.4797 176.828C63.4797 173.228 65.6797 170.828 68.9997 170.828ZM82.4722 176.908C82.4722 182.868 86.3922 187.228 92.9122 187.228C97.6322 187.228 101.632 184.868 102.512 180.828L98.0722 180.028C97.5522 181.828 95.5922 183.028 92.9122 183.028C89.9122 183.028 87.7522 181.468 87.3522 178.068H102.432C102.552 177.348 102.632 176.588 102.632 175.908C102.632 170.268 98.6322 166.428 92.8322 166.428C86.7522 166.428 82.4722 170.868 82.4722 176.908ZM92.8722 170.428C95.6322 170.428 97.3522 171.748 97.9122 174.268H87.5122C88.0722 171.748 89.9122 170.428 92.8722 170.428ZM108.273 186.828H113.473V173.908H123.513V169.228H113.473V161.508H127.113V156.828H108.273V186.828ZM141.543 186.828H145.783V174.148C145.783 169.388 142.543 166.428 137.303 166.428C131.983 166.428 128.663 169.108 128.063 172.788L132.463 173.628C132.943 171.548 134.423 170.468 136.943 170.468C139.183 170.468 140.663 171.348 141.063 173.588L135.703 174.668C131.423 175.548 128.103 177.228 128.103 181.308C128.103 185.108 130.943 187.228 134.583 187.228C137.383 187.228 139.703 185.988 141.223 183.948L141.543 186.828ZM132.943 181.028C132.943 179.468 134.063 178.788 135.863 178.388L141.143 177.188V177.668C141.143 181.428 138.223 183.228 135.423 183.228C133.903 183.228 132.943 182.468 132.943 181.028ZM151.375 186.828H156.175V175.508C156.175 171.948 158.655 170.868 160.815 170.868C163.215 170.868 165.015 172.428 165.015 175.508V186.828H169.815V174.788C169.815 169.268 166.215 166.428 161.975 166.428C159.415 166.428 157.415 167.468 156.015 168.948L155.775 166.828H151.375V186.828ZM182.239 187.228C187.879 187.228 190.799 184.348 190.799 180.668C190.799 175.988 186.839 175.068 183.479 174.548C181.039 174.188 178.879 173.988 178.879 172.348C178.879 171.108 179.919 170.228 181.999 170.228C184.519 170.228 185.519 171.508 185.799 172.868L190.279 171.908C189.799 168.628 186.919 166.428 182.159 166.428C177.279 166.428 174.079 169.028 174.079 172.588C174.079 177.268 177.759 178.228 181.039 178.708C183.599 179.108 185.959 179.228 185.959 180.948C185.959 182.508 184.679 183.348 182.479 183.348C180.079 183.348 178.599 182.308 178.239 180.348L173.479 181.308C174.279 185.068 177.079 187.228 182.239 187.228Z" fill="black"/>
              <defs>
              <linearGradient id="paint0_linear_73_82" x1="31.7746" y1="0.476687" x2="210.125" y2="127.763" gradientUnits="userSpaceOnUse">
              <stop stop-color="#FF6644"/>
              <stop offset="0.796432" stop-color="#FF485C"/>
              <stop offset="1" stop-color="#FF1A6C"/>
              </linearGradient>
              </defs>
            </svg>    
          </div>    
          <form class="form" action="">
            <div class="form__input-block">

              <label class="title title__fz16 title_bold form__label" for="email">Email</label>
              <input class="form__input title title__fz16" maxlength="120" required id="email" name="email" type="email" placeholder="Email" pattern="^[\w.\s\-]{1,120}@[a-zA-Z0-9_\-]{1,120}(?:\.[a-zA-Z0-9_\-]{1,120}){1,2}$" title="Введите адрес электронной почты в формате example@mail.com" data-valid="true">

            </div>
            <div class="form__input-block">

              <label class="title title__fz16 title_bold form__label" for="password">Пароль</label>
              <input class="form__input form__input-password title title__fz16 title_letter-spacing" maxlength="48" required id="password" name="password" type="password" placeholder="Пароль" pattern="^(?=.*[a-zA-Zа-яА-Я])(?=.*[0-9])(?!.*\s).{8,48}$" title="Пароль должен содержать как минимум одну букву и одну цифру, и быть длиной от 8 до 48 символов, без пробелов" data-valid="true" >

              <div id="opened" class="form__password-eye form__password-eye_active">
                <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 12C22 12 18.3636 19 12 19C5.63636 19 2 12 2 12C2 12 5.63636 5 12 5C14.8779 5 17.198 6.43162 18.8762 8M9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9" stroke="#ABABAB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>                        
              </div>
              <div id="closed" class="form__password-eye">
                <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 12C22 12 21.3082 13.3317 20 14.8335M10 5.23552C10.3244 5.15822 10.6578 5.09828 11 5.05822C11.3254 5.02013 11.6588 5 12 5C14.8779 5 17.198 6.43162 18.8762 8M12 9C12.3506 9 12.6872 9.06015 13 9.17071C13.8524 9.47199 14.528 10.1476 14.8293 11C14.9398 11.3128 15 11.6494 15 12M3 3L21 21M12 15C11.6494 15 11.3128 14.9398 11 14.8293C10.1476 14.528 9.47202 13.8524 9.17073 13C9.11389 12.8392 9.07037 12.6721 9.0415 12.5M4.14701 9C3.83877 9.34451 3.56234 9.68241 3.31864 10C2.45286 11.1282 2 12 2 12C2 12 5.63636 19 12 19C12.3412 19 12.6746 18.9799 13 18.9418" stroke="#ABABAB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>                       
              </div>
            </div>
            <button class="title title__fz16 form__button">Продолжить</button>
          </form>

          <div class="title title__fz12 form-block__lower-sub-title">Войти через</div>
          <div class="form-block__social">
            <a class="form-block__social-item" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/></svg>
            </a>
            <a class="form-block__social-item" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>
            </a>
            <a class="form-block__social-item" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
            </a>
          </div>

          <p class="title title__fz10 form-block__policy">
            Нажимая «Продолжить», вы принимаете <a href="#">пользовательское соглашение</a> и <a href="#">политику конфиденциальности</a>, и подтверждаете, что вам не менее 18 лет.
          </p>
        </div>

      </div>
    </div>
  </main>

  <script src="js/login.bundle.js"></script>
</body>
</html>