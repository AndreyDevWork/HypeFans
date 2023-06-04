<?php 
  require_once 'connect.php';
  function auth(&$connect) {
    if(!$_SESSION['user']['token']) {
      header('Location: ../../login.php');
      exit;
    } else {
      $token = $_SESSION['user']['token'];
      $query = "SELECT * FROM userLogin WHERE token='$token'";
      $result = mysqli_query($connect, $query);
      $row = mysqli_fetch_assoc($result);
      $_SESSION['user']['id'] = $row['id'];
      $_SESSION['user']['email'] = $row['email'];
      $_SESSION['user']['name'] = $row['name'];
      $_SESSION['user']['avatar'] = $row['avatar'];
      return $row;
    }
  }

?>