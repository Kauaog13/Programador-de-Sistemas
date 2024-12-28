//Praticar o conceito de herança em JavaScript, criando uma classe base e uma classe derivada.

//Crie uma classe chamada Animal, que tenha as seguintes propriedades e métodos:
//A classe Animal deve ter uma propriedade nome e um método falar(), que exibe uma mensagem padrão: "O animal faz um som".
//Crie uma classe derivada chamada Cachorro, que herda da classe Animal e tem um método adicional latir(), que exibe "Au Au!".

//let animal = new Animal("Genérico");
//animal.falar(); // O animal faz um som

//let cachorro = new Cachorro("Rex");
//cachorro.falar(); // O animal faz um som
//cachorro.latir(); // Au Au!

class Animal {
  constructor(nome) {
    this.nome = nome;
  }

  falar() {
    console.log("O animal faz um som");
  }
}

class Cachorro extends Animal {
  constructor(nome) {
    super(nome);
  }

  latir() {
    console.log("Au Au!");
  }
}

let animal = new Animal("Genérico");
animal.falar(); // O animal faz um som

let cachorro = new Cachorro("Rex");
cachorro.falar(); // O animal faz um som
cachorro.latir(); // Au Au!