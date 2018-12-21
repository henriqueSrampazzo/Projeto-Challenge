<?php

require ("verifica.php");
require_once("config.php");

ini_set( 'display_errors', 0 );

$senha = strip_tags($_POST['senha']);

if(strlen($senha)<8){
	echo 'Não foi possível cadastrar. Campo senha, mínimo de caracteres é 8!';
	die();
}
if(strlen($senha)>35){
	echo 'Não foi possível cadastrar. Campo senha, máximo de caracteres é 20!';
	die();
}
$patternsenha = '/^[A-z0-9-_\s]+$/';
if (!preg_match($patternsenha, $senha)){
	echo 'Não foi possível cadastrar. Caracteres inválidos no campo senha!';
	die();
}

$login = $_COOKIE['login'];

$update = new Usuario();

$update -> loadByLogin($login);

$update ->update(md5($senha));

echo"<script> 
alert('Senha alterada com sucesso!');
window.location.assign('jogo.php');
</script>";


?>
