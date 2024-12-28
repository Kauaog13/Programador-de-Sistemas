function validarCampos() {
    // Validação de entrada - Obter os campos de nome pelos seus IDs
    const nomeAluno = document.getElementById("nomeAluno");
    const nomeMae = document.getElementById("nomeMae");
    const email = document.getElementById("email");
    const telDDD = document.getElementById("telDDD");
    const tel = document.getElementById("tel");

    // Validação de formato - Apenas letras e espaços para os campos de nome
    const nomePattern = /^[a-zA-ZÀ-ÿ\s]+$/;

    // Validação de formato - Email
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Validação de formato - Telefone DDD (2 dígitos) e telefone (8 a 9 dígitos)
    const dddPattern = /^\d{2}$/;
    const telPattern = /^\d{8,9}$/;

    // Validação de campos obrigatórios e formato
    if (!nomeAluno.value || !nomePattern.test(nomeAluno.value)) {
        alert("Por favor, insira um nome válido para o Aluno.");
        return false; // Impede o envio
    }

    if (!nomeMae.value || !nomePattern.test(nomeMae.value)) {
        alert("Por favor, insira um nome válido para a Mãe.");
        return false; // Impede o envio
    }

    if (!telDDD.value || !dddPattern.test(telDDD.value)) {
        alert("Por favor, insira um DDD válido (apenas 2 dígitos).");
        return false; // Impede o envio
    }

    if (!tel.value || !telPattern.test(tel.value)) {
        alert("Por favor, insira um número de telefone válido (8 a 9 dígitos).");
        return false; // Impede o envio
    }

    if (!email.value || !emailPattern.test(email.value)) {
        alert("Por favor, insira um e-mail válido.");
        return false; // Impede o envio
    }
    alert("Formulário validado com sucesso!");
    return true;
}

// Função que valida os campos do usuário
function validarUsuario() {
    const emailUsuario = document.getElementById("emailUsuario");
    const senhaUsuario = document.getElementById("senhaUsuario");

    // Validação de formato - Email e senha do usuário
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const senhaPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

    if (!emailUsuario.value || !emailPattern.test(emailUsuario.value)) {
        alert("Por favor, insira um email válido.");
        return false; // Impede o envio
    }

    if (!senhaUsuario.value || !senhaPattern.test(senhaUsuario.value)) {
        alert("Por favor, insira uma senha válida (mínimo 8 caracteres, com letras maiúsculas, minúsculas, números e caracteres especiais).");
        return false; // Impede o envio
    }

    //Se a validação for bem-sucedida, redirecione para a nova página
    window.location.href = "/Kauã/aulas-teste/html/forms2.html"; // Substitua por sua página de destino

    alert("Bem Vindo a Escola Virtual!");
    return true; // Todos os campos estão válidos

}
