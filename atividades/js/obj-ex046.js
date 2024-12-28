class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = parseFloat(preco); // Converte para número ao instanciar
    }

    // Exibe o nome e o preço do produto.
    exibirInformacoes() {
        return `Produto: ${this.nome} - Custa R$: ${this.preco.toFixed(2)}`;
    }

    // Aplica um desconto no preço do produto, de acordo com o percentual passado como argumento.
    desconto(percentual) {
        const desconto = (this.preco * percentual) / 100;
        this.preco -= desconto;
        return `Preço com desconto (${percentual}%): R$ ${this.preco.toFixed(2)}`;
    }
}

// Array para armazenar os produtos
let produtos = [];

// Função para adicionar os produtos à lista
function adicionarProdutos() {
    const nome = document.getElementById("nomeProduto").value;
    const preco = parseFloat(document.getElementById("precoProduto").value);

    if (nome && !isNaN(preco)) {
        const produto = new Produto(nome, preco);
        produtos.push(produto);
        exibirProdutos(); // Atualiza a lista exibida
        limparCampos();   // Limpa os campos
    } else {
        alert("Por favor, preencha o nome e o preço do produto corretamente.");
    }
}

// Função para exibir os produtos na lista
function exibirProdutos() {
    const listaProdutos = document.getElementById("listaProdutos");
    listaProdutos.innerHTML = ""; // Limpa a lista antes de adicionar novos produtos

    produtos.forEach((produto, index) => {
        const li = document.createElement("li");
        li.textContent = produto.exibirInformacoes();

        // Botão para aplicar desconto
        const btnDesconto = document.createElement("button");
        btnDesconto.textContent = "Aplicar Desconto";
        btnDesconto.addEventListener("click", function () {
            const percentual = parseFloat(prompt("Digite o percentual de desconto:"));

            if (!isNaN(percentual) && percentual > 0) {
                alert(produto.desconto(percentual));
                exibirProdutos(); // Atualiza a lista após aplicar o desconto
            } else {
                alert("Percentual de desconto inválido.");
            }
        });

        li.appendChild(btnDesconto);
        listaProdutos.appendChild(li);
    });
}

// Função para limpar os campos do formulário
function limparCampos() {
    document.getElementById("nomeProduto").value = "";
    document.getElementById("precoProduto").value = "";
}

// Adiciona o evento de clique ao botão de adicionar produtos
document.getElementById("adicionarProduto").addEventListener("click", adicionarProdutos); 
