<?php
  session_start();
  require_once 'connect.php';
  require_once 'auth.php';

  if(!$row = auth($connect)) {
    header('Location: ../../login.php');
    exit;
  }

  $fileName = uniqid() . $_FILES['avatar']['name'];
  $avatarPath = 'upload/' . $fileName;
  $token = $_SESSION['user']['token'];
  

  if($connect) {
    if(move_uploaded_file($_FILES['avatar']['tmp_name'], '../../upload/' . $fileName)) {
      $updateQuery = "UPDATE userLogin SET avatar='$avatarPath' WHERE token='$token'";
      $result = mysqli_query($connect, $updateQuery);
      header("Location: ../../my_profile.php");
    } else {
      echo 'Файл не скопирован на сервер';
    }
  }


  
?>