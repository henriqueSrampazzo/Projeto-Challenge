<!doctype html>

<html lang="pt-br">

<head>

	<title>Ranking Geral</title>

	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous">
	<link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">
	<link rel="shortcut icon" href="css/img/favicon.ico">
	<link rel="stylesheet" type="text/css" href="css/style.css">

</head>

<body id="fundoranking">

	<div class="center">

		<div class="texto">

			<br>

			<h1 class=" animated bounceInDown">Resultados</h1>

		</div>

		<div class="container">

			<br><br>

			<center class= "animated fadeInLeft">

				<?php

				require_once("config.php");

				$sql = new Sql();

				$query =("SELECT login,score1 FROM cadastro WHERE nivel = 'Usuario' ORDER BY score1 DESC, login ASC");
				$result = $sql->query( $query );
				$rows = $result->fetchAll(PDO::FETCH_ASSOC);

				echo "<br>";
				echo "<div class=resultado1>";
				echo "<br>";
				echo "<div class=score1>";
				echo "<p class = level> Ranking Level 1 </p>";

				foreach($rows as $item){

					echo "<div class=cry>";
					echo  $item['login']; 
					echo "&nbsp";echo "&nbsp";echo "&nbsp";echo "&nbsp";echo "&nbsp";echo "&nbsp"; echo "&nbsp"; echo "&nbsp"; echo "&nbsp";
					echo  $item['score1']; 
					echo "<br>";
				}

				echo "</div>";
				echo "</div>";
				echo "</div>";

				?>
			</center>

			<center class= "animated fadeInUp">

				<?php  

				echo "<br>";
				echo "<div class=resultado2>";
				echo "<br>";
				echo "<div class=score2>";
				echo "<p class = level> Ranking Level 2 </p>";

				$query =("SELECT login,score2 FROM cadastro WHERE nivel = 'Usuario' ORDER BY score2 DESC, login ASC");
				$result = $sql->query( $query );
				$rows = $result->fetchAll(PDO::FETCH_ASSOC);


				foreach($rows as $item){

					echo "<div class=cry2>";
					echo  $item['login']; 
					echo "&nbsp";echo "&nbsp";echo "&nbsp";echo "&nbsp";echo "&nbsp";echo "&nbsp"; echo "&nbsp"; echo "&nbsp"; echo "&nbsp";
					echo  $item['score2']; 
					echo "<br>";
				}

				echo "</div>";
				echo "</div>";
				echo "</div>";

				?>

			</center>

			<center class= "animated fadeInRight">

				<?php  

				echo "<br>";
				echo "<div class=resultado3>";
				echo "<br>";
				echo "<div class=score3>";
				echo "<p class = level> Ranking Level 3 </p>";


				$query =("SELECT login,score3 FROM cadastro WHERE nivel = 'Usuario' ORDER BY score3 DESC, login ASC");
				$result = $sql->query( $query );
				$rows = $result->fetchAll(PDO::FETCH_ASSOC);


				foreach($rows as $item){

					echo "<div class=cry3>";
					echo  $item['login']; 
					echo "&nbsp";echo "&nbsp";echo "&nbsp";echo "&nbsp";echo "&nbsp";echo "&nbsp"; echo "&nbsp"; echo "&nbsp"; echo "&nbsp";
					echo  $item['score3']; 
					echo "<br>";
				}

				echo "</div>";
				echo "</div>";
				echo "</div>";

				?>

			</center>

		</div>

		<br><br> <br>  
		
		<p class=" animated fadeIn"><a class=" btn btn-outline-dark" href = "/index.html" > Página Inicial </a></p>
		<p class=" animated fadeIn"><a class=" btn btn-outline-dark" href = "/site/jogo.php" > Jogar </a></p>

	</div>

	<div class="center">

		<img class=" animated fadeInLeft" id="logoranking" src="css/img/logo.png" alt="Logo do nome do jogo" title="Logo do jogo">

	</div>

</body>

</html>