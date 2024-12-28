//------------------------------------/ATIVIDADE 29/------------------------------------//

//Crie uma página HTML com um parágrafo <p> com o ID paragrafo e altere seu
// conteúdo para "Texto alterado!" usando document.getElementById().

let elemento1 = document.getElementById("paragrafo1");

elemento1.textContent = "Texto Alterado!"

//------------------------------------/ATIVIDADE 30/------------------------------------//

//Crie um botão na página. Ao clicar no botão, altere o texto do parágrafo 
//com o ID mensagem para "O conteúdo foi alterado!".

function alteraParagrafo() {
    let elemento2 = document.getElementById("paragrafo2")

    elemento2.textContent = "Texto Alterado!"
}

//------------------------------------/ATIVIDADE 31/------------------------------------//

//Crie um botão que, ao ser clicado, altere a cor de fundo da página para "lightblue".

function alterarFundo() {
    let bodyFundo = document.getElementById("corpo");

    bodyFundo = corpo.style.backgroundColor = "lightblue";
}

//------------------------------------/ATIVIDADE 32/------------------------------------//

//Crie um botão que, quando clicado, adicione uma nova <div> com o texto 
//"Nova div adicionada" no final da página.

function AdicionarDiv() {
    let novoElemento = document.createElement("DIV");

    novoElemento.textContent = "Nova Div Adicionada";
    novoElemento.setAttribute("id", "div1");
    document.body.appendChild(novoElemento);
}

//------------------------------------/ATIVIDADE 33/------------------------------------//

//Crie um botão que, ao ser clicado, remova um elemento <div> com o ID removerDiv.

function removerDiv() {
    let div = document.getElementById("div1");
    if (div) {
        div.parentNode.removeChild(div);
    } else {
        alert("Div não encontrada!")
    }
}

//------------------------------------/ATIVIDADE 34/------------------------------------//

//Crie um botão que, quando clicado, adicione a classe ativo a um elemento com 
//o ID elemento e outra vez que for clicado, remova essa classe. 
//utilize addeventlistener para escutar o evento.

let elemento = document.getElementById("elemento");

let botao1 = document.getElementById("meuBotao");

botao1.addEventListener("click", function () {
    elemento.classList.toggle("ativo");
});

//------------------------------------/ATIVIDADE 35/------------------------------------//

//Crie um botão que, ao ser clicado, exibe um alerta com a mensagem 
//"Você clicou no botão!" utilize o método addeventlistener()

let botao2 = document.getElementById("meuBotao");

botao2.addEventListener("click", function () {
    alert("Você clicou no botão!");
});

//------------------------------------/ATIVIDADE 36/------------------------------------//

//Crie um campo de entrada de texto. Quando o usuário pressionar qualquer tecla, exiba
// um alerta com a tecla pressionada utilize addeventlistener() para escutar o evento.

let campoTexto1 = document.getElementById("campoTexto1");

// Adiciona um evento de escuta para o evento de tecla pressionada
campoTexto1.addEventListener("keypress", function (event) {
    // Exibe um alerta com a tecla pressionada
    alert("Você pressionou a tecla: " + event.key);
});

//------------------------------------/ATIVIDADE 37/------------------------------------//

//Crie um formulário simples com um campo de texto e um botão de envio. 
//Quando o formulário for enviado, mostre um alerta com o valor do campo
// de texto utilize addeventlistener() para escutar o evento.

let formulario = document.getElementById("meuFormulario");
let campoTexto2 = document.getElementById("campoTexto2");

formulario.addEventListener("submit", function (event) {

    event.preventDefault();
    
    alert("Você digitou: " + campoTexto2.value);
});

//------------------------------------/ATIVIDADE 38/------------------------------------//

//Crie um parágrafo. Quando o mouse passar por cima do parágrafo, 
//altere a cor do texto para "green" utilize addeventlistener() para escutar o evento.

let paragrafo = document.getElementById("meuParagrafo");

paragrafo.addEventListener("mouseover", function () {
    paragrafo.style.color = "green";
});

paragrafo.addEventListener("mouseout", function () {
    paragrafo.style.color = "";
});

//------------------------------------/ATIVIDADE 39/------------------------------------//

//Crie um campo de texto. Quando o campo receber o foco, altere sua 
//borda para azul, e quando ele perder o foco, altere a borda para vermelha utilize
// addeventlistener() para escutar o evento

let campoTexto3 = document.getElementById("campoTexto3");

campoTexto3.addEventListener("focus", function () {
    campoTexto3.style.border = "5px solid blue  ";
});

campoTexto.addEventListener("blur", function () {
    campoTexto.style.border = "5px solid red";
});

//------------------------------------/ATIVIDADE 40/------------------------------------//
//Ao carregar a página, exiba um alerta informando que a página foi totalmente carregada
// utilize addeventlistener() para escutar o evento.

window.addEventListener("load", function () {
    alert("A página foi totalmente carregada!");
});






