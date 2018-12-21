<?php 

class Administrador{

	private $id_cadastro;
	private $nome; 
	private $email;
	private $datanasc;
	private $login; 
	private $senha;

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

	public function loadById($id){

		$sql = new Sql();

		$resultado = $sql -> select ("SELECT id_cadastro, nome, email, datanasc, login FROM cadastro WHERE id_cadastro = :ID", array(":ID" => $id));

		if(count($resultado) > 0){

			$this -> setData($resultado[0]);
		}
	}

	public function deleteById($id){

		$sql = new Sql();

		$resultado = $sql -> select ("DELETE  FROM cadastro WHERE id_cadastro = :ID", array(":ID" => $id));

		if(count($resultado) > 0){

			$this -> setData($resultado[0]);
		}
	}

	public static function getList(){

		$sql = new Sql();

		return $sql -> select("SELECT * FROM cadastro ORDER BY login;");
	}

	public static function getListLogsAcesso(){

		$sql = new Sql();

		return $sql -> select("SELECT * FROM logacesso ORDER BY hora;");
	}

	public static function getListLogsTentativa(){

		$sql = new Sql();

		return $sql -> select("SELECT * FROM logtentativa ORDER BY hora;");
	}

	public static function search($login){

		$sql = new Sql();

		return $sql -> select("SELECT * FROM cadastro WHERE login LIKE :SEARCH ORDER BY login", array(
			':SEARCH'=> "%".$login."%"));
	}

	public function setData($data){

		$this -> setId_cadastro($data['id_cadastro']);
		$this -> setNome($data['nome']);
		$this -> setEmail($data['email']);
		$this -> setDatanasc($data['datanasc']);
		$this -> setLogin($data['login']);
	}

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
}

?>