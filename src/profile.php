<?php
  session_start();
  if(!$_SESSION['user']) {
    header('Location: ../../login.html');
  }

?>

<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Мой профиль | HypeFans</title>
</head>
<body>
  <h1>Привет <?= $_SESSION['user']['name'] ?></h1>
  <a href="php/inc/logout.php">Выход</a>

</body>
</html>
