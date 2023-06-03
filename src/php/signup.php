<?php
  $name = htmlspecialchars($_POST['name'], ENT_QUOTES, 'UTF-8');
  $email = htmlspecialchars($_POST['email'], ENT_QUOTES, 'UTF-8');
  $password = htmlspecialchars($_POST['password'], ENT_QUOTES, 'UTF-8');

  $nameRegularExpressions = '/^[a-zA-Zа-яА-Я\s]{2,32}$/u';
  $emailRegularExpressions = '/^[\w.\s-]{1,120}@[a-zA-Z0-9_-]{1,120}(?:\.[a-zA-Z0-9_-]{1,120}){1,2}$/';
  $passwordRegularExpressions = '/^(?=.*[a-zA-Zа-яА-Я])(?=.*[0-9])(?!.*\s).{8,48}$/u';

  $responce = [
    'validation' => '',
    'dbconnect' => '',
    'registration' => ''
  ];

  validation($nameRegularExpressions, $name, $responce);
  validation($emailRegularExpressions, $email, $responce);
  validation($passwordRegularExpressions, $password, $responce);

  registration($name, $email, $password, $responce);

  echo json_encode($responce);
  
  


  function validation($regularExpressions, $inputValue, &$responce) {
    if (!preg_match($regularExpressions, $inputValue)) {
      $responce['validation'] = 'error';
      echo json_encode($responce);
      exit;
    }
    $responce['validation'] = 'success';
  }

  function mySqlConnect ($mysql, &$responce) {
    if ($mysql->connect_error) {
      $responce['DBConnect'] = 'error';
      echo json_encode($responce);
      exit;
    } 
    $responce['DBConnect'] = 'success';
  }
  
  function registration($name, $email, $password, &$responce) {
    $mysql = new mysqli("hypefans", "root", "", "users");
    mySqlConnect($mysql, $responce);
    $mysql->query("INSERT INTO `users` (`name`, `email`, `password`) VALUES('$name', '$email', '$password')");
    $responce['registration'] = 'success';
  }
?>