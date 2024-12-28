-- Criação do schema biblioteca
CREATE SCHEMA IF NOT EXISTS `biblioteca` DEFAULT CHARACTER SET utf8;

USE `biblioteca`;

-- Criação da tabela usuario
CREATE TABLE IF NOT EXISTS `usuario` (
  `ID_usuario` INT NOT NULL AUTO_INCREMENT,
  `nome_usuario` VARCHAR(100) NOT NULL,
  `data_nascimento` DATE NOT NULL,
  PRIMARY KEY (`ID_usuario`)
) ENGINE = InnoDB;

-- Criação da tabela autor
CREATE TABLE IF NOT EXISTS `autor` (
  `ID_autor` INT NOT NULL AUTO_INCREMENT,
  `nome_autor` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`ID_autor`)
) ENGINE = InnoDB;

-- Criação da tabela livro
CREATE TABLE IF NOT EXISTS `livro` (
  `ID_livro` INT NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(150) NOT NULL,
  `ano` YEAR(4) NOT NULL,
  `ID_usuario` INT NOT NULL,
  PRIMARY KEY (`ID_livro`),
  FOREIGN KEY (`ID_usuario`) REFERENCES `usuario` (`ID_usuario`)
) ENGINE = InnoDB;

-- Criação da tabela autor_livro_escrito
CREATE TABLE IF NOT EXISTS `autor_livro_escrito` (
  `autor_ID_autor` INT NOT NULL,
  `livro_ID_livro` INT NOT NULL,
  PRIMARY KEY (`autor_ID_autor`, `livro_ID_livro`),
  FOREIGN KEY (`autor_ID_autor`) REFERENCES `autor` (`ID_autor`),
  FOREIGN KEY (`livro_ID_livro`) REFERENCES `livro` (`ID_livro`)
) ENGINE = InnoDB;