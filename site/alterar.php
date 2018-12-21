<?php 

require ("verifica.php");

?>

<!doctype html>

<html lang="pt-br">

<head>

	<title>Alterar Senha</title>

	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">
	<link rel="shortcut icon" href="css/img/favicon.ico">
	<link rel="stylesheet" type="text/css" href="css/style.css">

</head>

<body id="fundorecupera">

	<div>

		<div class="center">

			<img class=" animated fadeInDown" id="logoalterar" src="css/img/logo.png" alt="Logo do nome do jogo" title="Logo do jogo">

		</div>

	</div>

	<div class="center">

		<div class="blocoalterar"> 

			<form name="formulario" action ="update.php" method ="post" class=" wow animated bounceInDown" >

				<label>Nova Senha</label>
				<input id="inputemail" class="form-control" name ="senha" type="password" placeholder="Digite sua nova senha" pattern="[0-9A-z_]+$" title="Caracteres aceitos: Letras maiúsculas, minúsculas, números inteiros e _ "/>

				<br>

				<label>Repita a nova senha</label>
				<input id="inputemail" class="form-control" name ="rsenha" type="password" placeholder=" Repita sua nova senha" pattern="[0-9A-z_]+$" title="Caracteres aceitos: Letras maiúsculas, minúsculas, números inteiros e _ "/>

				<br> <br>

				<input onclick=" return validaralterar()" class="form-control btn btn-outline-dark" type= "submit" name="Enviar" value ="Enviar"/> 

				<br> <br>

				<a class="form-control btn btn-outline-dark" href = "jogo.php"> Voltar </a>

				<br>

			</form>

			<br>

		</div>

	</div>

	<script src="js/javascript.js"></script>
	<script src = "https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>

</body>

</html>

