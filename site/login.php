<?php

require_once("config.php");

$logar = new Usuario();

$login = strip_tags($_POST['login']); 
$senha = strip_tags($_POST['senha']);

$logar -> login($login, $senha);

?>