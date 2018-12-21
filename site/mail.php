 <?php 

 require_once("classphpmailer/class.phpmailer.php");
 require_once("config.php");

 $mail = new PHPMailer;
 $sql = new Sql();

 $email = strip_tags($_POST['email']);
 $login = strip_tags($_POST['login']);

 $destinatario = $email;
 $assunto = utf8_decode("Recuperação de Senha");

 $comparaemail = $sql -> select ( "SELECT email FROM cadastro WHERE email = '$email'");
 $comparalogin = $sql -> select ( "SELECT login FROM cadastro WHERE email = '$email'");
 $consultanome = $sql -> select ( "SELECT nome FROM cadastro WHERE email = '$email'");

 $nome = substr(json_encode($consultanome), 10,-3);
 $loginC = substr(json_encode($comparalogin), 11,-3);

 ini_set( 'display_errors', 0 );

 if (count($comparaemail)==0 ) {

     //echo "Email inválido";

  echo "<script>
  alert('Email inválido ou não cadastrado!');
  window.location.href='recupera.html';
  </script>";

  die();

}else if($loginC != $login){

    //echo "Login inválido";

 echo "<script>
 alert('Login inválido ou não cadastrado!');
 window.location.href='recupera.html';
 </script>";

 die();

}else{

    //echo "Dados válidos";

    $alterar = new Usuario();

    $ns = substr(md5(time()), 0, 8);

    $alterar -> loadByEmail($email, $login);

    $alterar ->updateSenha(md5($ns));

}


// Configura para envio de e-mails usando SMTP
$mail->isSMTP();

// Servidor SMTP
$mail->Host = 'smtp.gmail.com';

// Usar autenticação SMTP
$mail->SMTPAuth = true;

// Usuário da conta
$mail->Username = 'nao.respondawits@gmail.com';

// Senha da conta
$mail->Password = 'naorespondausuario';

// Tipo de encriptação que será usado na conexão SMTP
$mail->SMTPSecure = 'tls';

// Porta do servidor SMTP
$mail->Port = 587;

// Informa se vamos enviar mensagens usando HTML
$mail->IsHTML(true);

// Email do Remetente
$mail->From = 'nao.respondawits@gmail.com';

// Nome do Remetente
$mail->FromName = 'WITS';

// Endereço do e-mail do destinatário
$mail->addAddress($destinatario);

// Assunto do e-mail
$mail->Subject = $assunto;

// Mensagem que vai no corpo do e-mail
$mail->Body = 
"<h3>Olá $nome, você solicitou uma alteração de senha.</h3>
<p>Por favor, entre com seu Login e essa nova Senha gerada e depois altere-a clicando no botão Alterar Senha depois de logado.</p>
<p>Sua nova senha gerada é: $ns</p>
<hr>
<p>Ajuda? Duvidas? Envie um e-mail para suportewits@gmail.com e fale com nosso suporte.</p>
Não foi você? Favor desconsiderar este e-mail. Obrigado.";

// Envia o e-mail e captura o sucesso ou erro
if($mail->Send()){

    echo "<script>
    alert('Enviado com sucesso! Por favor, cheque seu email.');
    window.location.href='/index.html';
    </script>";

}else{

 echo "<script>
 alert('Erro ao enviar! Tente novamente mais tarde.');
 window.location.href='recupera.html';
 </script>"; 

 echo "$mail->ErrorInfo";
}

?>