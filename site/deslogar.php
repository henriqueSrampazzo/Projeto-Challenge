<?php 

session_start();

setcookie('login', null, -1);

header("Location: /index.html"); 

session_destroy(); 

?>