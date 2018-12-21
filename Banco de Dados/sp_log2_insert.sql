CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_log2_insert`(

phora datetime,
pip varchar(20),
parquivo varchar(50),
pnome varchar(25)
)
BEGIN

INSERT INTO logtentativa(hora, ip, arquivo, nome) VALUES (phora, pip, parquivo, pnome);

END