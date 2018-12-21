<?php 

require_once("verificaadm.php");
require_once("config.php");

extract($_POST);

if ("{$teste}"  == "Enviar") {

	$root = new Administrador();

	$root -> loadById("{$id}");

	echo $root;
}

else if ("{$teste}"  == "Enviar1"){

	$search = Administrador::search("{$login}");

	echo json_encode($search);

	if (count($search)==0) {

		echo "Usuário não existente";
	}
}

else if("{$teste}" == "Enviar2"){

	$root1 = new Administrador();

	$root1 -> deleteById("{$Id}");

	echo("Sucesso");
}

else if("{$teste}" == "Enviar3"){

	$lista = Administrador::getList();

	echo json_encode($lista);
}	

else if("{$teste}" == "Enviar4"){

	$lista = Administrador::getListLogsAcesso();

	echo json_encode($lista);
}

else if("{$teste}" == "Enviar5"){

	$lista = Administrador::getListLogsTentativa();

	echo json_encode($lista);

}

?>