CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_cadastro_insert`(

pnome varchar(100),
pemail varchar(50),
pdatanasc varchar(12),
plogin varchar(50),
psenha varchar(50),
pnivel varchar(25),
pscore1 bigint,
pscore2 bigint,
pscore3 bigint

)
BEGIN

INSERT INTO cadastro(nome, email, datanasc, login, senha, nivel, score1, score2, score3) VALUES (pnome, pemail, pdatanasc, plogin, psenha, pnivel, pscore1, pscore2, pscore3);

SELECT * FROM cadastro WHERE id_cadastro = LAST_INSERT_ID();

END