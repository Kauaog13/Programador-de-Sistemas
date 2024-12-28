//Crie um programa em JavaScript que utilize um laço while para solicitar uma senha ao usuário até que ele insira a senha correta. 
//Exiba uma mensagem de sucesso com alert quando a senha for acertada

let senhaCorreta = "kaualindo";
let senhaInserida;

while (senhaInserida !== senhaCorreta) {
    senhaInserida = prompt("Digite a senha:");

    if(senhaInserida == senhaCorreta ) {
        alert("Senha correta ! Acesso concedido !")
    } else {
        alert("Senha errada ! Tente novamente...")
    }
}

