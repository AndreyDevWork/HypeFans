<?php
  session_start();
  require_once 'php/inc/connect.php';
  require_once 'php/inc/auth.php';


  if(!$row = auth($connect)) {
    header('Location: ../../login.php');
  }

?>


<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Мой профиль | HypeFans</title>
  <link rel="stylesheet" href="css/style.min.css?v=4">
</head>
<body>
  <header class="header">
    <div class="header__logo">
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

    <div class="header__profile">

      <div class="header__avatar">
        <img class="header__img" src="<?php echo $_SESSION['user']['avatar']; ?>" alt="">
        <div class="header__upload">
          <form class="header__form" action="php/inc/upload.php" method="POST" enctype="multipart/form-data">
            <button class="header__upload-btn">Обновить фото</button>
            <input class="header__input" type="file" name="avatar" accept="Обновить">
          </form>
        </div>
      </div>

      <h1 class="header_name title title__fz32 title_bold900"><?php echo $_SESSION['user']['name'];?></h1>
      <div class="header__status title__fz19"><?php echo $_SESSION['user']['statustext'];?> </div>
      <div class="header__statistics">
        <div class="header__followers">  
          <span class="title title__fz32 title_bold900">342</span>
          <span class="title title__fz12">Подписчика</span>
        </div>
        <div class="header__posts">
          <span class="title title__fz32 title_bold900">52</span>
          <span class="title title__fz12">Публикации</span>
        </div>
      </div>
    </div>

    <div class="header__btn">
      <div class="header__sircle"></div>
      <div class="header__sircle"></div>
      <div class="header__sircle"></div>
    </div>

  </header>

  <aside class="menu">
    <ul class="menu__modal">
      <li class="title title__fz16 menu__item">Редактировать профиль</li>
      <li class="title title__fz16 menu__item">Настройки и конфиденкциальность</li>
      <li class="title title__fz16 menu__item">Безопасность</li>
      <li class="title title__fz16 menu__item"><a class="menu__exit" href="php/inc/logout.php">Выйти</a></li>
      <li id="cancel" class="title title__fz16 menu__item">Отмена</li>
    </ul>
    <div class="menu__overlay"></div>
  </aside>

  <main class="content">

      <div class="content__wrapper">
        <div class="content__element">
          <img src="./upload/-piliZztxHY.jpg" alt="img" class="content__img">
        </div>
        <div class="content__element">
          <img src="./upload/16dfYdWATq0.jpg" alt="img" class="content__img">
        </div>
        <div class="content__element">
          <img src="./upload/3muN9Z8_hqo.jpg" alt="img" class="content__img">
        </div>
        <div class="content__element">
        <img src="./upload/5kC7zCR2xBc.jpg" alt="img" class="content__img">
        </div>
        <div class="content__element">
        <img src="./upload/A6cRt3BABd4.jpg" alt="img" class="content__img">
        </div>
        <div class="content__element">
        <img src="./upload/fAetkmx7luU.jpg" alt="img" class="content__img">
        </div>
        <div class="content__element">
        <img src="./upload/jOvwFZiDtNY.jpg" alt="img" class="content__img">
        </div>
      </div>

    <div class="panel">
      <form class="upload" action="php/inc/upload_Content.php">
        <button class="upload__btn">
          <div class="upload__img">
            <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="3" width="74" height="74" rx="15" stroke="black" stroke-width="6"/>
            <path d="M24 40H56" stroke="black" stroke-width="6" stroke-linecap="round"/>
            <path d="M40 24L40 56" stroke="black" stroke-width="6" stroke-linecap="round"/>
            </svg>
          </div>
        </button>
        <input class="upload__input" type="file" name="avatar" accept="Обновить">
      </form>
      
    </div>
  </main>


    


    <script src="js/profile.bundle.js"></script>
</body>
</html>
