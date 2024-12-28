-- Inserção de dados na tabela usuario
INSERT INTO `biblioteca`.`usuario` (ID_usuario, nome_usuario, data_nascimento) VALUES
(1, 'Maria Silva', '1990-05-10'),
(2, 'Carlos Souza', '1985-08-22'),
(3, 'João Pereira', '1992-12-01'),
(4, 'Ana Oliveira', '1980-02-15'),
(5, 'Paulo Almeida', '1988-07-30');

-- Inserção de dados na tabela autor
INSERT INTO `biblioteca`.`autor` (ID_autor, nome_autor) VALUES
(1, 'J.R.R. Tolkien'),
(2, 'J.K. Rowling'),
(3, 'George Orwell'),
(4, 'Ernest Hemingway'),
(5, 'Isaac Asimov');

-- Inserção de dados na tabela livro
INSERT INTO `biblioteca`.`livro` (ID_livro, titulo, ano, ID_usuario) VALUES
(1, 'O Senhor dos Anéis', 1954, 1),
(2, 'Harry Potter e a Pedra Filosofal', 1997, 2),
(3, '1984', 1949, 3),
(4, 'O Velho e o Mar', 1952, 4),
(5, 'Fundação', 1951, 5);

-- Inserção de dados na tabela autor_livro_escrito
INSERT INTO `biblioteca`.`autor_livro_escrito` (autor_ID_autor, livro_ID_livro) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5);