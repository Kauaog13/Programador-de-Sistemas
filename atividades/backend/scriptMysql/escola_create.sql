CREATE DATABASE escola;
USE escola;

-- Criando as tabelas
CREATE TABLE aluno (
    ID_aluno INT PRIMARY KEY AUTO_INCREMENT,
    nome_aluno VARCHAR(100) NOT NULL,
    data_nascimento DATE
);

CREATE TABLE professor (
    ID_professor INT PRIMARY KEY AUTO_INCREMENT,
    nome_professor VARCHAR(100) NOT NULL,
    materia VARCHAR(50)
);

CREATE TABLE turma (
    ID_turma INT PRIMARY KEY AUTO_INCREMENT,
    nome_turma VARCHAR(50) NOT NULL
);

-- Criando a tabela de relacionamento (matricula)
CREATE TABLE matricula (
    ID_matricula INT PRIMARY KEY AUTO_INCREMENT,
    aluno_ID_aluno INT,
    turma_ID_turma INT,
    FOREIGN KEY (aluno_ID_aluno) REFERENCES aluno(ID_aluno),
    FOREIGN KEY (turma_ID_turma) REFERENCES turma(ID_turma)
);