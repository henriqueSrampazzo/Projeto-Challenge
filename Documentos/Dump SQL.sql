-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 16-Out-2018 às 01:51
-- Versão do servidor: 10.1.36-MariaDB
-- versão do PHP: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bd`
--

DELIMITER $$
--
-- Procedures
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_cadastro_insert` (`pnome` VARCHAR(100), `pemail` VARCHAR(50), `pdatanasc` VARCHAR(12), `plogin` VARCHAR(50), `psenha` VARCHAR(50), `pnivel` VARCHAR(25), `pscore1` BIGINT, `pscore2` BIGINT, `pscore3` BIGINT)  BEGIN

INSERT INTO cadastro(nome, email, datanasc, login, senha, nivel, score1, score2, score3) VALUES (pnome, pemail, pdatanasc, plogin, psenha, pnivel, pscore1, pscore2, pscore3);

SELECT * FROM cadastro WHERE id_cadastro = LAST_INSERT_ID();

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_log2_insert` (`phora` DATETIME, `pip` VARCHAR(20), `parquivo` VARCHAR(50), `pnome` VARCHAR(25))  BEGIN

INSERT INTO logtentativa(hora, ip, arquivo, nome) VALUES (phora, pip, parquivo, pnome);

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_log_insert` (`phora` DATETIME, `pip` VARCHAR(20), `parquivo` VARCHAR(50), `pusuario` VARCHAR(25))  BEGIN

INSERT INTO logacesso(hora, ip, arquivo, usuario) VALUES (phora, pip, parquivo, pusuario);

END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Estrutura da tabela `cadastro`
--

CREATE TABLE `cadastro` (
  `id_cadastro` int(11) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `email` varchar(60) NOT NULL,
  `datanasc` varchar(12) NOT NULL,
  `login` varchar(20) NOT NULL,
  `senha` varchar(35) NOT NULL,
  `nivel` varchar(25) NOT NULL,
  `score1` bigint(20) NOT NULL,
  `score2` bigint(20) NOT NULL,
  `score3` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estrutura da tabela `logacesso`
--

CREATE TABLE `logacesso` (
  `id_log` int(11) NOT NULL,
  `hora` datetime NOT NULL,
  `ip` varchar(20) NOT NULL,
  `arquivo` varchar(50) NOT NULL,
  `usuario` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estrutura da tabela `logtentativa`
--

CREATE TABLE `logtentativa` (
  `id_log2` int(11) NOT NULL,
  `hora` datetime NOT NULL,
  `ip` varchar(20) NOT NULL,
  `arquivo` varchar(50) NOT NULL,
  `nome` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cadastro`
--
ALTER TABLE `cadastro`
  ADD PRIMARY KEY (`id_cadastro`);

--
-- Indexes for table `logacesso`
--
ALTER TABLE `logacesso`
  ADD PRIMARY KEY (`id_log`);

--
-- Indexes for table `logtentativa`
--
ALTER TABLE `logtentativa`
  ADD PRIMARY KEY (`id_log2`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cadastro`
--
ALTER TABLE `cadastro`
  MODIFY `id_cadastro` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `logacesso`
--
ALTER TABLE `logacesso`
  MODIFY `id_log` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `logtentativa`
--
ALTER TABLE `logtentativa`
  MODIFY `id_log2` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
