//Demonstrar o conceito de polimorfismo, onde um método pode ter comportamentos diferentes dependendo da classe do objeto que o invoca.

//Crie uma classe base chamada Animal, com um método fazerSom(). Em seguida, crie duas classes derivadas:

//Classe Cachorro:
//Sobrescreva o método fazerSom() para exibir "Au Au!".
//Classe Gato:
//Sobrescreva o método fazerSom() para exibir "Miau!".
//Crie instâncias dessas classes e chame o método fazerSom() para observar o polimorfismo.

//let cachorro = new Cachorro();
//cachorro.fazerSom(); // Au Au!

//let gato = new Gato();
//gato.fazerSom(); // Miau!

class Animal {
  fazerSom() {
    console.log("Som do animal");
  }
}

class Cachorro extends Animal {
  fazerSom() {
    console.log("Au Au!");
  }
}

class Gato extends Animal {
  fazerSom() {
    console.log("Miau!");
  }
}

let cachorro = new Cachorro();
cachorro.fazerSom(); // Au Au!

let gato = new Gato();
gato.fazerSom(); // Miau!