//Crie um vetor de 10 posições e com um laço de repetição percorra o vetor e 
//imprima apenas os números pares.Depois poste aqui na plataforma

// Cria o vetor com 10 números
const vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Percorre o vetor
for (let i = 0; i < vetor.length; i++) {
  // Verifica se o número é par
  if (vetor[i] % 2 === 0) {
    console.log(vetor[i]); // Imprime o número par
  }
}
