drop database bd;

create database bd;

use bd;

create table cadastro(
id_cadastro int not null auto_increment,
nome varchar(50) not null,
email varchar(60) not null,
datanasc varchar(12) not null,
login varchar(20) not null,
senha varchar(35) not null,
nivel varchar(25) not null,
score1 bigint not null,
score2 bigint not null,
score3 bigint not null,
primary key (id_cadastro)
)collate utf8_general_ci
default charset = utf8;

create table logacesso(
id_log int not null auto_increment,
hora datetime not null,
ip varchar(20) not null,
arquivo varchar(50) not null,
usuario varchar(25) not null,
primary key (id_log)
)collate utf8_general_ci
default charset = utf8;

create table logtentativa(
id_log2 int not null auto_increment,
hora datetime not null,
ip varchar(20) not null,
arquivo varchar(50) not null,
nome varchar(50) not null,
primary key (id_log2)
)collate utf8_general_ci
default charset = utf8;

