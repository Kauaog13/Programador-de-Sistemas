function digaOla(){
console.log("Olá");
}

function soma(a,b){

    alert("Função soma iniciada");
    somaT = a + b;
    return somaT;
}

let num1, num2, somaT, numT1, numT2;

num1 = prompt("Digite o Primeiro número: ");
num2 = prompt("Digite o Segunda número: ");

numT1 = parseInt(num1);
numT2 = parseInt(num2);

soma(numT1, numT2);
alert(somaT);
