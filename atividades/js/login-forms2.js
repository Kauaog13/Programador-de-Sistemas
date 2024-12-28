
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const senhaPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

function validarLogin() {
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  if (!emailPattern.test(email)) {
    alert('Por favor, insira um e-mail válido.');
    return;
  }

  if (!senhaPattern.test(senha)) {
    alert('A senha deve ter pelo menos 8 caracteres, incluindo pelo menos uma letra maiúscula, uma letra minúscula e um número.');
    return;
  }

  alert('Login realizado com sucesso!');
}

document.getElementById('entrar').addEventListener('click', validarLogin);



