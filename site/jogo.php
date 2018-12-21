<?php 

require ("verifica.php"); 

?>

<!doctype html>

<html lang="pt-br">

<head>

  <title>WITS</title>
  <script src="//cdn.jsdelivr.net/phaser/2.2.2/phaser.min.js"></script>
  <script src="js/boot.js"></script>
  <script src="js/preload.js"></script>
  <script src="js/menu.js"></script>
  <script src="js/text2.js"></script>
  <script src="js/game.js"></script>
  <script src="js/text1.js"></script>
  <script src="js/game1.js"></script>
  <script src="js/text3.js"></script>
  <script src="js/game3.js"></script>
  <script src="js/creditos.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>

  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">
  <link rel="shortcut icon" href="css/img/favicon.ico">
  <link href="https://fonts.googleapis.com/css?family=Press+Start+2P" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet">
  <link rel="stylesheet" type="text/css" href="css/style.css">

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta property="og:url"           content="https://www.your-domain.com/your-page.html" />
  <meta property="og:type"          content="website" />
  <meta property="og:title"         content="Your Website Title" />
  <meta property="og:description"   content="Your description" />
  <meta property="og:image"         content="https://www.your-domain.com/path/image.jpg" />
  <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">

  <script type="text/javascript" src="http://platform.twitter.com/widgets.js"></script>
  <script src="https://code.jquery.com/jquery-3.3.1.min.js"
  integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
  crossorigin="anonymous"></script>

  <script>
    var game = new Phaser.Game(1220,600, Phaser.CANVAS, "game");
    WebFontConfig = {

    //  'active' means all requested fonts have finished loading
    //  We set a 1 second delay before calling 'createText'.
    //  For some reason if we don't the browser cannot render the text the first time it's created.
    // active: function() { game.time.events.add(Phaser.Timer.SECOND, this); },

    //  The Google Fonts we want to load (specify as many as you like in the array)
    google: {
      families: ['Press Start 2P']
    }

  };
  (function() {
    game.state.add("Boot",boot);
    game.state.add("Preload",preload);
    game.state.add("Menu",gameTitle);
    game.state.add("text1",text1);
    game.state.add("Game1",theFase1);
    game.state.add("text2",text2);
    game.state.add("Game",theGame);
    game.state.add("text3",text3);
    game.state.add("Game3",theFase3);
    game.state.add("creditos",creditos);
    game.state.start("Boot");
  })();    

</script>

<div id="fb-root"></div>
<script>(function(d, s, id) {
 var js, fjs = d.getElementsByTagName(s)[0];
 if (d.getElementById(id)) return;
 js = d.createElement(s); js.id = id;
 js.src = 'https://connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v3.1';
 fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


</script>

</head>

<body id="fundojogo">

  <div id="game"></div> 

  <div class="blocoinfo">

    <?php

    require_once("config.php");

    $jogo = new Usuario();
    $sql = new Sql();

    $teste = $_COOKIE['login'];

    $consultanome = $sql -> select ( "SELECT nome FROM cadastro where login = '$teste'");
    $consultaemail = $sql -> select ( "SELECT email FROM cadastro where login = '$teste'");
    $consultadatanasc = $sql -> select ( "SELECT datanasc FROM cadastro where login = '$teste'");
    $consultalogin = $sql -> select ( "SELECT login FROM cadastro where login = '$teste'");

    $consultascore1 = $sql -> select ( "SELECT score1 FROM cadastro where login = '$teste'");
    $consultascore2 = $sql -> select ( "SELECT score2 FROM cadastro where login = '$teste'");
    $consultascore3 = $sql -> select ( "SELECT score3 FROM cadastro where login = '$teste'");


    $nome = substr(json_encode($consultanome), 10,-3);
    $email = substr(json_encode($consultaemail), 11,-3);
    $datanasc = substr(json_encode($consultadatanasc), 14,-3);
    $datanascC = str_replace('\/', '/', $datanasc);
    $login = substr(json_encode($consultalogin), 11,-3);

    $score1 = substr(json_encode($consultascore1), 12,-3);
    $score2 = substr(json_encode($consultascore2), 12,-3);
    $score3 = substr(json_encode($consultascore3), 12,-3);


    echo "<div class=center>";
    echo "<a class=dado1> Bem-vindo,  $nome </a> ";
    echo "<a class=dado2> Email: $email </a>";
    echo"<a class=dado3> Data de Nascimento: $datanascC </a>";
    echo "<a class=dado4> Login: $login </a> </div>";

    echo "<p></p>";

    echo "<div class=center>";
    echo "<a class=dado1> Seu score máximo na Fase 1 é  : $score1 ,</a> ";
    echo "<a class=dado2> Fase 2  : $score2 </a>";
    echo "<a class=dado2> e</a>";
    echo "<a class=dado3> Fase 3  : $score3 </a>";

    ?>

    <div class="center">

      <br><br>
      <a class="btn btn-outline-dark" href="deslogar.php"> Encerrar Sessão</a>
      <br><br>
      <a class="btn btn-outline-dark" href="alterar.php"> Alterar Senha</a>

    </div>

    <br><br>

    <a id="valor" href="http://twitter.com/share" data-text="<?php echo "Fiz $score1 pontos na Fase 1, ";echo "$score2 pontos na Fase 2 "; echo "e $score3 pontos na Fase 3"?> nesse game incrível! :D " data-url="" class="twitter-share-button" data-count="horizontal" data-via="WaitingInTheSk1" 
      data-lang="pt">Tweet</a>

      <br>

    </div>
    <div class="wrapper">

      <nav><p class="btn btn-outline-dark"> <a href="regras.html" id="textoindex1"> Regras do jogo </a></p></nav>

      <br><br>

      <nav><p class="btn btn-outline-dark"> <a href="ranking.php" id="textoindex2"> Ranking Geral </a></p></nav>

      <br><br>

      <nav><p class="btn btn-outline-dark"> <a href="contato.html" id="textoindex3"> Contato </a></p></nav>

    </div>


  </body>

  </html>


