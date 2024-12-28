INSERT INTO cliente (nome_cliente, telefone)
VALUES
  ('Ana Silva', '(11) 98765-4321'),
  ('João Pereira', '(21) 91234-5678'),
  ('Maria Souza', '(19) 35791-2468'),
  ('Pedro Santos', '(41) 85214-7396'),
  ('Laura Almeida', '(12) 34567-8901');
  
INSERT INTO prato (nome_prato, preco)
VALUES
  ('Bife à milanesa', 25.99),
  ('Macarrão à bolonhesa', 22.50),
  ('Salmão grelhado', 35.00),
  ('Frango xadrez', 19.90),
  ('Pizza margherita', 30.00);
  
INSERT INTO pedido (cliente_ID_cliente, data_pedido)
VALUES
  (1, '2023-11-22'),
  (2, '2023-11-23'),
  (3, '2023-11-24'),
  (4, '2023-11-25'),
  (5, '2023-11-26');
  
INSERT INTO pedido_prato (pedido_ID_pedido, prato_ID_prato)
VALUES
  (1, 1),  -- Pedido 1: Bife à milanesa
  (2, 2),  -- Pedido 2: Macarrão à bolonhesa
  (3, 3),  -- Pedido 3: Salmão grelhado
  (4, 4),  -- Pedido 4: Frango xadrez
  (5, 5);  -- Pedido 5: Pizza margherita