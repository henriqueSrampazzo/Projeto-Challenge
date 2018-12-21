<?php 

class Usuario{

	private $id_cadastro;
	private $nome; 
	private $email;
	private $datanasc;
	private $login; 
	private $senha;
	private $nivel = "Usuario";
	private $nivelAdmin = "Administrador";
	private $score1 = 0;
	private $score2 = 0;
	private $score3 = 0;

	public function getId_cadastro(){
		return $this -> id_cadastro;
	}

	public function setId_cadastro($value){
		$this -> id_cadastro = $value;
	}

	public function getNome(){
		return $this -> nome;
	}

	public function setNome($value){
		$this -> nome = $value;
	}

	public function getEmail(){
		return $this -> email;
	}

	public function setEmail($value){
		$this -> email = $value;
	}

	public function getDatanasc(){
		return $this -> datanasc;
	}

	public function setDatanasc($value){
		$this -> datanasc = $value;
	}

	public function getLogin(){
		return $this -> login;
	}

	public function setLogin($value){
		$this -> login = $value;
	}

	public function getSenha(){
		return $this -> senha;
	}

	public function setSenha($value){
		$this -> senha = $value;
	}

	public function getNivel(){
		return $this -> nivel;
	}

	public function setNivel($value){
		$this -> nivel = $value;
	}

	public function getNivelAdmin(){
		return $this -> nivelAdmin;
	}

	public function setNivelAdmin($value){
		$this -> nivelAdmin = $value;
	}

	public function getScore1(){
		return $this -> score1;
	}

	public function setScore1($value){
		$this -> score1 = $value;
	}

	public function getScore2(){
		return $this -> score2;
	}

	public function setScore2($value){
		$this -> score2 = $value;
	}

	public function getScore3(){
		return $this -> score3;
	}

	public function setScore3($value){
		$this -> score3 = $value;
	}

	public function login($login, $senha){

		$sql = new Sql();

		$resultado = $sql -> select ("SELECT * FROM cadastro WHERE login = :LOGIN AND senha =:SENHA AND nivel = :NIVEL", array(
			":LOGIN" => $login, 
			":SENHA" => md5($senha), 
			":NIVEL" => $this -> getNivel()));

		$resultadoAdmin = $sql -> select ("SELECT * FROM cadastro WHERE login = :LOGIN AND senha =:SENHA AND nivel = :NIVEL", array(":LOGIN" => $login, 
			":SENHA" => md5($senha), 
			":NIVEL" => $this -> getNivelAdmin()));

		if(count($resultado) > 0){

			$this -> setData($resultado[0]);

			session_start();

			setcookie("login", $login);

			$this -> salvaLog($this -> getLogin());

			header("Location:jogo.php");

		}elseif(count($resultadoAdmin) > 0){

			$this -> setData($resultadoAdmin[0]);

			session_start();

			setcookie("login", $login);

			header("Location:indexadm.php");

			session_destroy();

			$this -> salvaLog($this -> getLogin());

		}else{

			$this -> salvaLog2();
			
			echo"<script> 
			alert('Login e/ou senha incorretos ou inexistentes!');
			window.location.assign('/index.html');
			</script>";

			die();
		}
	}

	public function setData($data){

		$this -> setId_cadastro($data['id_cadastro']);
		$this -> setNome($data['nome']);
		$this -> setEmail($data['email']);
		$this -> setDatanasc($data['datanasc']);
		$this -> setLogin($data['login']);
		$this -> setSenha(($data['senha']));
		$this -> setNivel(($data['nivel']));
	}

	public function insert(){

		$sql = new Sql();

		if(strlen($this->nome)<5){
			echo 'Não foi possível cadastrar. Campo nome, mínimo de caracteres é 5!';
			die();
		}
		if(strlen($this->nome)>50){
			echo 'Não foi possível cadastrar. Campo nome, máximo de caracteres é 50!';
			die();
		}
		$patternnome = '/^[a-zA-Zá-õç-â\s]+$/';
		if (!preg_match($patternnome, $this->nome)){
			echo 'Não foi possível cadastrar. Caracteres inválidos no campo nome!';
			die();
		}
		if(strlen($this->email)<10){
			echo 'Não foi possível cadastrar. Campo email, mínimo de caracteres é 10!';
			die();
		}
		if(strlen($this->email)>60){
			echo 'Não foi possível cadastrar. Campo email, máximo de caracteres é 60!';
			die();
		}
		$patternemail = '/^[A-z0-9.]+@[a-z0-9.-]+\.[a-z]{2,10}$/';
		if (!preg_match($patternemail, $this->email)){
			echo 'Não foi possível cadastrar. Caracteres inválidos no campo email!';
			die();
		}
		if(strlen($this->datanasc)<6){
			echo 'Não foi possível cadastrar. Campo data de nascimento, mínimo de caracteres é 6!';
			die();
		}
		if(strlen($this->datanasc)>10){
			echo 'Não foi possível cadastrar. Campo data de nascimento, máximo de caracteres é 10!';
			die();
		}
		if(strlen($this->login)<5){
			echo 'Não foi possível cadastrar. Campo login, mínimo de caracteres é 5!';
			die();
		}
		if(strlen($this->login)>20){
			echo 'Não foi possível cadastrar. Campo login, máximo de caracteres é 20!';
			die();
		}
		$patternlogin = '/^[A-z0-9-_\s]+$/';
		if (!preg_match($patternlogin, $this->login)){
			echo 'Não foi possível cadastrar. Caracteres inválidos no campo login!';
			die();
		}
		if(strlen($this->senha)<8){
			echo 'Não foi possível cadastrar. Campo senha, mínimo de caracteres é 8!';
			die();
		}
		if(strlen($this->senha)>35){
			echo 'Não foi possível cadastrar. Campo senha, máximo de caracteres é 20!';
			die();
		}
		$patternsenha = '/^[A-z0-9-_\s]+$/';
		if (!preg_match($patternsenha, $this->senha)){
			echo 'Não foi possível cadastrar. Caracteres inválidos no campo senha!';
			die();
		}
		$resultadotst = $sql -> select ("SELECT * FROM cadastro WHERE login = :LOGIN OR email =:EMAIL", array(":LOGIN" => $this -> getLogin(), ":EMAIL" => $this -> getEmail()));

		if (count($resultadotst)==1) {

			echo"<script> 
			alert('Não foi possível cadastrar, email ou login já cadastrados');
			window.location.assign('cadastro.html');
			</script>";

			die();

		}else{

			$resultado = $sql -> select("CALL sp_cadastro_insert(:NOME, :EMAIL, :DATANASC, :LOGIN, :SENHA, :NIVEL, :SCORE1, :SCORE2, :SCORE3)", array(

				':NOME' => $this -> getNome(),
				':EMAIL' => $this -> getEmail(),
				':DATANASC' => $this -> getDatanasc(),
				':LOGIN' => $this -> getLogin(),
				':SENHA' => $this -> getSenha(),
				':NIVEL' => $this -> getNivel(),
				':SCORE1'=> $this -> getScore1(),
				':SCORE2'=> $this -> getScore2(),
				':SCORE3'=> $this -> getScore3(),
			));

			if (count($resultado)>0) {

				$this -> setData($resultado[0]);

				echo"<script> 
				alert('Cadastrado com sucesso!');
				window.location.assign('/index.html');
				</script>";
			}
		}
	}

	public function loadByLogin($login){

		$sql = new Sql();

		$resultado = $sql -> select ("SELECT login FROM cadastro WHERE login = :LOGIN", array(":LOGIN" => $login));

		if(count($resultado) > 0){

			$this -> setData($resultado[0]);
		}
	}

	public function loadByEmail($email, $login){

		$sql = new Sql();

		$resultado = $sql -> select ("SELECT email FROM cadastro WHERE email = :EMAIL AND login = :LOGIN ", array(

			":EMAIL" => $email,
			":LOGIN" => $login
		));

		if(count($resultado) > 0){

			$this -> setData($resultado[0]);
		}
	}

	// public function loadByScore1($score1, $login){

	// 	$sql = new Sql();

	// 	$resultado = $sql -> select ("SELECT score1 FROM cadastro WHERE score1 != :SCORE1 AND login = :LOGIN ", array(

	// 		":SCORE1" => $score1,
	// 		":LOGIN" => $login
	// 	));

	// 	if(count($resultado) > 0){

	// 		$this -> setData($resultado[0]);
	// 	}
	// }
	
	public function update($senha){

		$this -> setSenha($senha);

		$sql = new Sql();

		$sql -> query("UPDATE cadastro SET senha = :SENHA WHERE login = :LOGIN", array(

			'SENHA' => $this -> getSenha(),
			'LOGIN' => $this -> getLogin()
		));
	}

	public function updateSenha($senha){

		$this -> setSenha($senha);

		$sql = new Sql();

		$sql -> query("UPDATE cadastro SET senha = :SENHA WHERE email = :EMAIL", array(

			'SENHA' => $this -> getSenha(),
			'EMAIL' => $this -> getEmail()
		));
	}

	// public function updateScore1($score1){

	// 	$this -> setScore1($score1);

	// 	$sql = new Sql();

	// 	$sql -> query("UPDATE cadastro SET score1 = :SCORE1 WHERE login = :LOGIN", array(

	// 		'SCORE1' => $this -> getScore1(),
	// 		'LOGIN' => $this -> getLogin()
	// 	));
	// }

	public function __toString(){

		return json_encode(array(

			"id_cadastro" => $this -> getId_cadastro(),
			"nome" => $this -> getNome(),
			"email" => $this -> getEmail(),
			"datanasc" => $this -> getDatanasc(),
			"login" => $this -> getLogin(),
			"senha" => $this -> getSenha(),
		));
	}

	private function salvaLog($usuario){

		date_default_timezone_set('America/Sao_Paulo');
		setlocale(LC_TIME, 'pt_BR', 'pt_BR.utf-8', 'pt_BR.utf-8', 'portuguese');

		$sql = new Sql();

		$hora = date('Y-m-d H:i:s'); 
		$ip = $_SERVER['REMOTE_ADDR'];
		$arquivo = $_SERVER['PHP_SELF'];

		$log = $sql -> select("CALL sp_log_insert(:HORA, :IP, :ARQUIVO, :USUARIO)", array(

			':HORA' =>$hora,
			':IP' =>  $ip,
			':ARQUIVO' => $arquivo,
			':USUARIO' => $this -> getLogin(),
		));
	}

	private function salvaLog2(){

		date_default_timezone_set('America/Sao_Paulo');
		setlocale(LC_TIME, 'pt_BR', 'pt_BR.utf-8', 'pt_BR.utf-8', 'portuguese');

		$sql = new Sql();

		$hora = date('Y-m-d H:i:s'); 
		$ip = $_SERVER['REMOTE_ADDR'];
		$arquivo = $_SERVER['PHP_SELF'];
		$nome = $_SERVER['SERVER_NAME'];

		$log = $sql -> select("CALL sp_log2_insert(:HORA, :IP, :ARQUIVO, :NOME)", array(

			':HORA' =>$hora,
			':IP' =>  $ip,
			':ARQUIVO' => $arquivo,
			':NOME' => $nome,
		));
	}
}

?>