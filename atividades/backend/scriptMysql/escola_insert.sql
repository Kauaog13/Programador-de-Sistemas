INSERT INTO professor (nome_professor, materia)
VALUES
  ('José Almeida', 'Matemática'),
  ('Maria Souza', 'Português'),
  ('Pedro Silva', 'História');
  
INSERT INTO aluno (nome_aluno, data_nascimento)
VALUES
  ('João da Silva', '2005-01-01'),
  ('Maria Pereira', '2004-11-20'),
  ('Pedro Santos', '2005-03-15'),
  ('Ana Oliveira', '2004-09-05'),
  ('Lucas Almeida', '2005-02-28');
  
INSERT INTO turma (nome_turma)
VALUES
  ('1A'),
  ('2B'),
  ('3C');
  
INSERT INTO matricula (aluno_ID_aluno, turma_ID_turma)
VALUES
  (1, 1),  -- João na turma 1A
  (2, 1),  -- Maria na turma 1A
  (3, 2),  -- Pedro na turma 2B
  (4, 3),  -- Ana na turma 3C
  (5, 2);  -- Lucas na turma 2B