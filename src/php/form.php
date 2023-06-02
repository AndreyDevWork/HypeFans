<?php
  $name = $_POST['name'];
  $email = $_POST['email'];
  $password = $_POST['password'];

  $nameRegularExpressions = '/^[a-zA-Zа-яА-Я\s]{2,32}$/u';
  $emailRegularExpressions = '/^[\w.\s-]{1,120}@[a-zA-Z0-9_-]{1,120}(?:\.[a-zA-Z0-9_-]{1,120}){1,2}$/';
  $passwordRegularExpressions = '/^(?=.*[a-zA-Zа-яА-Я])(?=.*[0-9])(?!.*\s).{8,48}$/u';

  $errors = [];
  if (!preg_match($nameRegularExpressions, $name)) {
    $errors[] = 'Error validation name';
  }

  if (!preg_match($emailRegularExpressions, $email)) {
    $errors[] = 'Error validation email';
  }

  if (!preg_match($passwordRegularExpressions, $password)) {
    $errors[] = 'Error validation password';
  }
  
  if($errors) {
    echo json_encode($errors);
    exit;
  }
  echo json_encode('validation succes');
?>