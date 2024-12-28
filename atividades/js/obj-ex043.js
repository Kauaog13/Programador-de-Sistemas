//Crie um objeto livro com as propriedades titulo, autor e ano, e imprima suas propriedades no console.

class livro{
    constructor(titulo, autor, ano){
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
    }
}

const livro1 = new livro("o Senhor dos Anéis", "J.R.R. Tolkien", "1954");
console.log("O titulo do livro é " + livroClass.titulo + ", o autor é " + livroClass.autor + " e o ano é " + livroClass.ano);
// Ou: console.log(livro1);