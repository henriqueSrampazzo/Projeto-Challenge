<?php  

session_start();   

if (!isset($_COOKIE['login'])){

	session_destroy();  

	header("Location: /index.html"); 

	die();

}

?>