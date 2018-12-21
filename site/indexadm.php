<?php 

require_once("verificaadm.php");

?>

<!DOCTYPE html>

<html lang="pt-br">

<head>

	<title>Página de Administração</title>

	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">
	<link rel="shortcut icon" href="css/img/favicon.ico">
	<link rel="stylesheet" type="text/css" href="css/style.css">

</head>

<body id="fundoadm">

	<div>

		<center>

			<br><br>

			<form id="formulario" class="blocoadm" method="post" action="javascript:;">

				<ul class="tabela">

					<label>Busca por Id</label>

					<input class="form-control" name="id" id="id" type="number" placeholder= "Digite o Id " />

					<br>

					<input type="hidden" name="teste" id="enviar" value="Enviar" />

					<input class="btn btn-outline-secondary" type="submit" id="enviar" value="Buscar" />

				</ul>

			</form>

			<p id="titulo"></p>

			<br>

			<hr>

			<br>

			<form id="formulario1" class="blocoadm" method="post" action="javascript:;">

				<ul class="tabela">

					<label>Busca por Login</label>

					<input class="form-control" name="login" id="login" type="text" placeholder= "Digite o Login " />

					<br>

					<input type="hidden" name="teste" id="enviar" value="Enviar1" />

					<input class="btn btn-outline-secondary" type="submit" id="enviar" value="Buscar" />

				</ul>

			</form>

			<p id="titulo1"></p>

			<br>

			<hr>

			<br>

			<form id="formulario2" class="blocoadm" method="post" action="javascript:;">

				<ul class="tabela">

					<label>Excluir</label>

					<input class="form-control" name="Id" id="Id" type="text" placeholder= "Digite o Id " />

					<br>

					<input type="hidden" name="teste" id="enviar" value="Enviar2" />

					<input class="btn btn-outline-secondary" type="submit" id="enviar" value="Buscar" />

				</ul>

			</form>

			<p id="titulo2"></p>

			<br>

			<hr>

			<br>

			<div>

				<form id="formulario3" method="post" action="javascript:;">

					<ul> 

						<label>Seleção geral de usuários cadastrados</label> 

						<br>

						<input type="hidden" name="teste" id="enviar" value="Enviar3" />
						
						<input class="btn btn-outline-secondary" type="submit" id="enviar" value="Buscar" />

					</form>

					<br><br>

					<p id="titulo3"></p>

				</div>

				<br>

				<hr>

				<br>

				<div>

					<form id="formulario4" method="post" action="javascript:;">

						<ul> 

							<label>Seleção geral dos Logs de Acesso</label> 

							<br>

							<input type="hidden" name="teste" id="enviar" value="Enviar4" />

							<input class="btn btn-outline-secondary" type="submit" id="enviar" value="Buscar" />

						</form>

						<br><br>

						<p id="titulo4"></p>

					</div>

					<br>

					<hr>

					<br>

					<div>

						<form id="formulario5" method="post" action="javascript:;">

							<ul> 

								<label>Seleção geral dos Logs de Tentativa de Acesso</label> 

								<br>

								<input type="hidden" name="teste" id="enviar" value="Enviar5" />

								<input class="btn btn-outline-secondary" type="submit" id="enviar" value="Buscar" />

							</form>

							<br><br>

							<p id="titulo5"></p>

						</div>

						<br>

						<hr>

						<br>

					</center>

					<center>
						<div class="blocobtn">

							<a class="btn btn-outline-secondary  form-control" href="deslogar.php"> Sair</a>

						</div>

					</center>

					<br>

					<script
					src="https://code.jquery.com/jquery-3.3.1.min.js"
					integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
					crossorigin="anonymous"></script>

					<script>

						$(document).ready(main);

						function main(){
							$("#formulario").submit(function(){

								var dados =$(this).serialize();
								enviarDados(dados);

							});

							function enviarDados(dados){
								$.ajax({
									url:"adm.php",
									data: dados,
									dataType: "html",
									type: "post",

									beforeSend: function(){

									},

									success: function(retorno){

										$("#titulo").html(""+retorno);
									}
								});
							}
						}

					</script>

					<script>

						$(document).ready(main);

						function main(){
							$("#formulario1").submit(function(){

								var dados =$(this).serialize();
								enviarDados(dados);

							});

							function enviarDados(dados){
								$.ajax({
									url:"adm.php",
									data: dados,
									dataType: "html",
									type: "post",

									beforeSend: function(){

									},

									success: function(retorno){

										$("#titulo1").html(""+retorno);
									}
								});
							}
						}

					</script>

					<script>

						$(document).ready(main);

						function main(){
							$("#formulario2").submit(function(){

								var dados =$(this).serialize();
								enviarDados(dados);

							});

							function enviarDados(dados){
								$.ajax({
									url:"adm.php",
									data: dados,
									dataType: "html",
									type: "post",

									beforeSend: function(){

									},

									success: function(retorno){

										$("#titulo2").html(""+retorno);
									}
								});
							}
						}

					</script>

					<script>

						$(document).ready(main);

						function main(){
							$("#formulario3").submit(function(){

								var dados =$(this).serialize();
								enviarDados(dados);

							});

							function enviarDados(dados){
								$.ajax({
									url:"adm.php",
									data: dados,
									dataType: "html",
									type: "post",

									beforeSend: function(){

									},

									success: function(retorno){

										$("#titulo3").html(""+retorno);

										
									}
								});
							}
						}

					</script>

					<script>

						$(document).ready(main);

						function main(){
							$("#formulario4").submit(function(){

								var dados =$(this).serialize();
								enviarDados(dados);

							});

							function enviarDados(dados){
								$.ajax({
									url:"adm.php",
									data: dados,
									dataType: "html",
									type: "post",

									beforeSend: function(){

									},

									success: function(retorno){

										$("#titulo4").html(""+retorno);
									}
								});
							}
						}

					</script>

					<script>

						$(document).ready(main);

						function main(){
							$("#formulario5").submit(function(){

								var dados =$(this).serialize();
								enviarDados(dados);

							});

							function enviarDados(dados){
								$.ajax({
									url:"adm.php",
									data: dados,
									dataType: "html",
									type: "post",

									beforeSend: function(){

									},

									success: function(retorno){

										$("#titulo5").html(""+retorno);
									}
								});
							}
						}

					</script>

				</body>

				</html>