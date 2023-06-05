<?php 
  require_once 'connect.php';
  function auth(&$connect) {
    $token = $_SESSION['user']['token'];
    $query = "SELECT * FROM userLogin WHERE token='$token'";
    if(!$_SESSION['user']['token'] && $query === false) {
      return 0;
      exit;
    } else {
      $result = mysqli_query($connect, $query);
      $row = mysqli_fetch_assoc($result);
      $_SESSION['user']['id'] = $row['id'];
      $_SESSION['user']['email'] = $row['email'];
      $_SESSION['user']['name'] = $row['name'];
      $_SESSION['user']['avatar'] = $row['avatar'];
      $_SESSION['user']['statustext'] = $row['statustext'];
      return $row;
    }
  }

?>