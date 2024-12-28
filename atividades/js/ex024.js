//Crie um conjunto de funções em JavaScript para realizar as operações matemáticas básicas: soma, subtração, multiplicação e divisão. 
//Além disso, desenvolva uma função separada que receba o resultado de uma operação como argumento e o imprima na tela.

//Requisitos:
//Funções com retorno: Cada função de operação (soma, subtração, multiplicação, divisão) deve retornar o resultado da operação.
//Parâmetros e argumentos: As funções de operação devem receber dois parâmetros numéricos para executar o cálculo.
//Procedimento: A função de impressão deve ser um procedimento (função sem retorno), que exiba o resultado recebido como argumento.

                            //----------------- FUNÇÕES DA CALCULADORA -----------------
//FUNÇÃO SOMA
function soma(a, b) {
    return a + b;
}

//FUNÇÃO SUBTRAÇÃO
function subt(a, b) {
    return a - b;
}

//FUNÇÃO MULTIPLICAÇÃO
function mult(a, b) {
    return a * b;
}

//FUNÇÃO DIVISÃO
function divi(a, b) {
    return a / b;
}

//FUNÇÃO RESULTADO FINAL
function imprimirResultado(resultadoSoma, resultadoSubt, resultadoMult, resultadoDivi){

    alert("O resultado da SOMA é: "             + resultadoSoma);
    alert("O resultado da SUBTRAÇÃO é: "        + resultadoSubt);
    alert("O resultado da MULTIPLICAÇÃO é: "    + resultadoMult);
    alert("O resultado da DIVISÃO é: "          + resultadoDivi);
}

                            //----------------- ENTRADA DO USUÁRIO - INICIA O PROGRAMA PRINCIPAL -----------------

// AS VARIÁVEIS ABAIXO SÃO CONVERTIDAS PARA RECEBER NÚMEROS DO USUÁRIO
let num1 = parseInt(prompt("Digite o primeiro número INTEIRO:")); 
let num2 = parseInt(prompt("Digite o segundo número INTEIRO:"));
    if(num2 == 0){
        alert("Não existe divisão por o. Digite outro número INTEIRO !");
        num2 = parseINT(prompt("Digite outro número INTEIRO:"));
    }

// AS VARIAVEIS ABAIXO RECEBE A FUNÇÃO COM OS PARAMÊTROS QUE O USUÁRIO FORNECEU 
let respSoma = soma(num1, num2);
let respSubt = subt(num1, num2);
let respMult = mult(num1, num2);
let respDivi = divi(num1, num2);

//IMPRIMIR RESULTADO DAS OPERAÇÕES - PASSANDO 4 ARGUMENTOS
imprimirResultado(respSoma, respSubt, respMult, respDivi);








