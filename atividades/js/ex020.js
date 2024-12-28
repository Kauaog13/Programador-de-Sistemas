//Desenvolva um programa em JavaScript que utilize a estrutura switch para retornar o nome do dia da semana 
//com base em um número fornecido pelo usuário (de 1 a 7). Exiba o nome do dia correspondente no console.

let num_dia = prompt("Digite um número de 1-7: ");

switch(num_dia) {
    case "1":
        console.log("O dia da semana é Domingo !");
    break;
    case "2":
        console.log("O dia da semana é Segunda-Feira !");
    break;
    case "3":
        console.log("O dia da semana é Terceira-Feira !");
    break;
    case "4":
        console.log("O dia da semana é Quarta-Feira !");
    break;
    case "5":
        console.log("O dia da semana é Quinta-Feira !");
    break;
    case "6":
        console.log("O dia da semana é Sexta-Feira !");
    break;
    case "7":
        console.log("O dia da semana é Sábado !");
    default:
        console.log("Escolha um dia de 1 a 7");
    break;
}