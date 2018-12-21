<?php

require_once("config.php");

$cadastro = new Usuario();

$nome = strip_tags($_POST['nome']); 
$email = strip_tags($_POST['email']);
$datanasc = strip_tags($_POST['datanasc']);
$login = strip_tags($_POST['login']); 
$senha = strip_tags(md5($_POST['senha']));

$cadastro -> setNome($nome);
$cadastro -> setEmail($email);
$cadastro -> setDatanasc($datanasc);
$cadastro -> setLogin($login);
$cadastro -> setSenha($senha);

$cadastro -> insert();

?>