<?php 

 // $servername = "localhost";
 // $username = "root";
 // $password = "";
 // $dbname = "bd";

$servername = "localhost";
$username = "phpmyadmin";
$password = "Root@1234";
$dbname = "bd";

require ("verifica.php");

require_once("config.php");

$score = new Usuario();
$sql = new Sql();

$login = $_COOKIE['login'];
echo $login;

$consultascore = $sql -> select ( "SELECT score2 FROM cadastro where login = '$login'");
$consultascore1 = substr(json_encode($consultascore), 12,-3);

	//dado do score1 do banco já pronto
echo $consultascore1;


$consultascore2 = $sql -> select ( "SELECT score2 FROM cadastro where login = '$login'");
$consultascore2 = substr(json_encode($consultascore), 12,-3);

$dados = filter_input_array(INPUT_POST,FILTER_DEFAULT);

	//variavel que vai armazenar os dados vindos por ajax
$score1 = $dados['pontos'];
$score2 = $dados['pontos'];

//  echo $score1;

//  $score -> loadByScore1($login, $score1);

// $score -> updateScore1($score1);

//$teste = $sql -> update ("UPDATE cadastro SET score1 = '1' where login = '$login'");

	// echo $score1;

	// var_dump($score1);

	// echo "A pontuação do jogador é $score1";


if($consultascore1< $score1 ){

	$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	} 

	$sql = "UPDATE cadastro SET score2=$score1 WHERE login = '$login'";

	if ($conn->query($sql) === TRUE) {
		echo "Record updated successfully";
	} else {
		echo "Error updating record: " . $conn->error;
	}

}

?>