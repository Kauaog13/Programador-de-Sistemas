CREATE DATABASE restaurante;
USE restaurante;

-- Criando as tabelas
CREATE TABLE cliente (
    ID_cliente INT PRIMARY KEY AUTO_INCREMENT,
    nome_cliente VARCHAR(100) NOT NULL,
    telefone VARCHAR(20)
);

CREATE TABLE prato (
    ID_prato INT PRIMARY KEY AUTO_INCREMENT,
    nome_prato VARCHAR(100) NOT NULL,
    preco DECIMAL(10,2)
);

CREATE TABLE pedido (
    ID_pedido INT PRIMARY KEY AUTO_INCREMENT,
    cliente_ID_cliente INT,
    data_pedido DATE,
    FOREIGN KEY (cliente_ID_cliente) REFERENCES cliente(ID_cliente)
);

CREATE TABLE pedido_prato (
    pedido_ID_pedido INT,
    prato_ID_prato INT,
    PRIMARY KEY (pedido_ID_pedido, prato_ID_prato),
    FOREIGN KEY (pedido_ID_pedido) REFERENCES pedido(ID_pedido),
    FOREIGN KEY (prato_ID_prato) REFERENCES prato(ID_prato)
);