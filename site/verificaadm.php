<?php 

session_start();   

if (!isset($_COOKIE['login'])){ 

	session_destroy();  

	header("Location: /index.html"); 

	die();

}else if ($_COOKIE['login'] != "Administrador") {

	session_destroy(); 

	header("Location: /index.html"); 

	require ("deslogar.php");

	die();

}