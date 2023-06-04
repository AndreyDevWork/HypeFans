<?php
  session_start();
  require_once 'inc/connect.php';

  $email = $_POST['email'];
  $password = $_POST['password'];

  $check_user = mysqli_query($connect, "SELECT * FROM `userLogin` WHERE `email` = '$email' AND `password` = '$password'");
  if (mysqli_num_rows($check_user) > 0) {
    $token = generateToken();
    $user = mysqli_fetch_assoc($check_user);
    $_SESSION['user'] = [
      "id" => $user['id'],
      "name" => $user['name'],
      "email" => $user['email'],
      "token" => $token
    ];

    
    $query = "UPDATE `userLogin` SET `token` = '$token' WHERE `email` = '$email' AND `password` = '$password'";
    $result = mysqli_query($connect, $query);


    $auth['auth'] = 'success';
    echo json_encode($auth);
  } else {
    echo json_encode('Не верный логин или пароль');
  }



  function generateToken() {
    return bin2hex(random_bytes(32));
  }
?>

