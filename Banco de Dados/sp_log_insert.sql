CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_log_insert`(

phora datetime,
pip varchar(20),
parquivo varchar(50),
pusuario varchar(25)

)
BEGIN

INSERT INTO logacesso(hora, ip, arquivo, usuario) VALUES (phora, pip, parquivo, pusuario);

END