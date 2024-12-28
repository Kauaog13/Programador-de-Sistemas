// Inicialização do tabuleiro
let tabuleiro = Array(3).fill().map(() => Array(3).fill('-'));

// Função para exibir o tabuleiro
function exibirTabuleiro() {
    for (let linha of tabuleiro) {
        console.log(linha.join(' | '));
        console.log("---------");
    }
}

// Função para verificar se há um vencedor
function verificarVencedor() {
    // Verificar linhas
    for (let linha of tabuleiro) {
        if (linha.every((element) => element === linha[0]) && linha[0] !== '-') {
            return linha[0];
        }
    }

    // Verificar colunas
    for (let coluna = 0; coluna < 3; coluna++) {
        let check = [];
        for (let linha = 0; linha < 3; linha++) {
            check.push(tabuleiro[linha][coluna]);
        }
        if (check.every((element) => element === check[0]) && check[0] !== '-') {
            return check[0];
        }
    }

    // Verificar diagonais
    if (tabuleiro[0][0] === tabuleiro[1][1] && tabuleiro[1][1] === tabuleiro[2][2] && tabuleiro[0][0] !== '-') {
        return tabuleiro[0][0];
    }
    if (tabuleiro[0][2] === tabuleiro[1][1] && tabuleiro[1][1] === tabuleiro[2][0] && tabuleiro[0][2] !== '-') {
        return tabuleiro[0][2];
    }

    return null;
}

// Função que recebe a jogada do jogador e atualiza o tabuleiro
function fazerJogada(jogador, linha, coluna) {
    if (tabuleiro[linha][coluna] === '-') {
        tabuleiro[linha][coluna] = jogador;
        return true;
    } else {
        return false;
    }
}

// Função que verifica se todas as posições foram preenchidas
function verificarEmpate() {
    for (let linha of tabuleiro) {
        if (linha.includes('-')) {
            return false;
        }
    }
    return true;
}

// Inicialização do jogo
let jogadorAtual = 'X';

while (true) {
    exibirTabuleiro();
    console.log(`Jogador ${jogadorAtual}, escolha uma posição (linha e coluna):`);
    let linha = parseInt(prompt("Linha: "));
    let coluna = parseInt(prompt("Coluna: "));

    if (fazerJogada(jogadorAtual, linha, coluna)) {
        let vencedor = verificarVencedor();
        if (vencedor) {
            exibirTabuleiro();
            console.log(`Jogador ${vencedor} venceu!`);
            break;
        } else if (verificarEmpate()) {
            exibirTabuleiro();
            console.log("Empate!");
            break;
        }
        jogadorAtual = jogadorAtual === 'X' ? 'O' : 'X';
    } else {
        console.log("Posição ocupada, tente novamente.");
    }
}