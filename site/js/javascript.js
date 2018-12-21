function validarlogin() {

	var login = formulario.login.value;
	var senha = formulario.senha.value;

	if (login.length < 5) {
		swal({
			text: 'Campo login, mínimo de caracteres é 5!',
			icon: "warning",
			buttons: ["OK!", false],
		});
		formulario.login.focus();
		return false;
	}

	if (login.length > 20) {
		swal({
			text: 'Campo login, máximo de caracteres é 20!',
			icon: "warning",
			buttons: ["OK!", false],
		});
		formulario.login.focus();
		return false;
	}

	if (senha.length < 8) {
		swal({
			text: 'Campo senha, mínimo de caracteres é 8!',
			icon: "warning",
			buttons: ["OK!", false],
		});
		formulario.senha.focus();
		return false;
	}

	if (senha.length > 20) {
		swal({
			text: 'Campo senha, máximo de caracteres é 20!',
			icon: "warning",
			buttons: ["OK!", false],
		});
		formulario.senha.focus();
		return false;
	}
}

function validarcadastro() {

	var nome = formulario.nome.value;
	var email = formulario.email.value;
	var datanasc = formulario.datanasc.value;
	var senha = formulario.senha.value;
	var login = formulario.login.value;
	var rsenha = formulario.rsenha.value;

	if (nome.length < 5) {
		swal({
			text: 'Campo nome, mínimo de caracteres é 5!',
			icon: "warning",
			buttons: ["OK!", false],
		});
		formulario.nome.focus();
		return false;
	}

	if (nome.length > 50) {
		swal({
			text: 'Campo nome, máximo de caracteres é 50!',
			icon: "warning",
			buttons: ["OK!", false],
		});
		formulario.nome.focus();
		return false;
	}

	if (email.length < 10) {
		swal({
			text: 'Campo email, mínimo de caracteres é 10!',
			icon: "warning",
			buttons: ["OK!", false],
		});
		formulario.email.focus();
		return false;
	}

	if (email.length > 60) {
		swal({
			text: 'Campo email, máximo de caracteres é 60!',
			icon: "warning",
			buttons: ["OK!", false],
		});
		formulario.email.focus();
		return false;
	}

	if (datanasc == "") {
		swal({
			text: 'Campo obrigatório! Preencha com sua data de nascimento.',
			icon: "warning",
			buttons: ["OK!", false],
		});
		formulario.datanasc.focus();
		return false;
	}

	if (login.length < 5) {
		swal({
			text: 'Campo login, mínimo de caracteres é 5!',
			icon: "warning",
			buttons: ["OK!", false],
		});
		formulario.nome.focus();
		return false;
	}

	if (login.length > 20) {
		swal({
			text: 'Campo login, máximo de caracteres é 20!',
			icon: "warning",
			buttons: ["OK!", false],
		});
		formulario.nome.focus();
		return false;
	}

	if (senha.length < 8) {
		swal({
			text: 'Campo senha, mínimo de caracteres é 8!',
			icon: "warning",
			buttons: ["OK!", false],
		});
		formulario.senha.focus();
		return false;
	}

	if (senha.length > 20) {
		swal({
			text: 'Campo senha, máximo de caracteres é 20!',
			icon: "warning",
			buttons: ["OK!", false],
		});
		formulario.senha.focus();
		return false;
	}

	if (senha != rsenha) {
		swal({
			text: 'Senhas diferentes! revise e tente novamente.',
			icon: "warning",
			buttons: ["OK!", false],
		});
		formulario.senha.focus();
		return false;
	}
}

function validarrecupera(){

	var email = formulario.email.value;
	var login = formulario.login.value;

	if (email.length < 10) {
		swal({
			text: 'Campo email, mínimo de caracteres é 10!',
			icon: "warning",
			buttons: ["OK!", false],
		});
		formulario.email.focus();
		return false;
	}

	if (email.length > 60) {
		swal({
			text: 'Campo email, máximo de caracteres é 60!',
			icon: "warning",
			buttons: ["OK!", false],
		});
		formulario.email.focus();
		return false;
	}

	if (login.length < 5) {
		swal({
			text: 'Campo login, mínimo de caracteres é 5!',
			icon: "warning",
			buttons: ["OK!", false],
		});
		formulario.login.focus();
		return false;
	}

	if (login.length > 20) {
		swal({
			text: 'Campo login, máximo de caracteres é 20!',
			icon: "warning",
			buttons: ["OK!", false],
		});
		formulario.login.focus();
		return false;
	}

}

function validaralterar() {

	var senha = formulario.senha.value;
	var rsenha = formulario.rsenha.value;

	if (senha.length < 8) {
		swal({
			text: 'Campo senha, mínimo de caracteres é 8!',
			icon: "warning",
			buttons: ["OK!", false],
		});
		formulario.senha.focus();
		return false;
	}

	if (senha.length > 20) {
		swal({
			text: 'Campo senha, máximo de caracteres é 20!',
			icon: "warning",
			buttons: ["OK!", false],
		});
		formulario.senha.focus();
		return false;
	}

	if (senha != rsenha) {
		swal({
			text: 'Senhas diferentes! revise e tente novamente.',
			icon: "warning",
			buttons: ["OK!", false],
		});
		formulario.senha.focus();
		return false;
	}
}

function mascara(o,f){
	v_obj=o
	v_fun=f
	setTimeout("execmascara()",1)
}

function execmascara(){
	v_obj.value=v_fun(v_obj.value)
}

function mcep(v){
	v=v.replace(/\D/g,"")                    
	v=v.replace(/^(\d{5})(\d)/,"$1-$2")        
	return v
}

function mdata(v){
	v=v.replace(/\D/g,"");                   
	v=v.replace(/(\d{2})(\d)/,"$1/$2");       
	v=v.replace(/(\d{2})(\d)/,"$1/$2");       

	v=v.replace(/(\d{2})(\d{2})$/,"$1$2");
	return v;
}

function mrg(v){
	v=v.replace(/\D/g,'');
	v=v.replace(/^(\d{2})(\d)/g,"$1.$2");
	v=v.replace(/(\d{3})(\d)/g,"$1.$2");
	v=v.replace(/(\d{3})(\d)/g,"$1-$2");
	return v;
}

function mvalor(v){
	v=v.replace(/\D/g,"");
	v=v.replace(/(\d)(\d{8})$/,"$1.$2");
	v=v.replace(/(\d)(\d{5})$/,"$1.$2");

	v=v.replace(/(\d)(\d{2})$/,"$1,$2");
	return v;
}

function id( el ){
	return document.getElementById( el );
}

function next( el, next ){
	if( el.value.length >= el.maxLength ) 
		id( next ).focus(); 
}