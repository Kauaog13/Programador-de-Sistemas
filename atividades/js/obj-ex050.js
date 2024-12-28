//Demonstrar o conceito de abstração, onde uma classe base define a estrutura (assinar um método) e as classes derivadas implementam o comportamento específico.Enunciado:
//Crie uma classe abstrata chamada Forma que defina um método abstrato calcularArea(). Depois, crie duas classes derivadas que implementam esse método:
//Classe Circulo:
//Possui uma propriedade raio e implementa o método calcularArea(), retornando a área do círculo: π * raio².
//Classe Retangulo:
//Possui as propriedades largura e altura e implementa o método calcularArea(), retornando a área do retângulo: largura * altura.
//let circulo = new Circulo(5); // Raio = 5
//console.log(circulo.calcularArea()); // A área do círculo é: 78.54

//let retangulo = new Retangulo(4, 6); // Largura = 4, Altura = 6
//console.log(retangulo.calcularArea()); // A área do retângulo é: 24

class Forma {
  calcularArea() {
    throw new Error("Método abstrato");
  }
}

class Circulo extends Forma {
  constructor(raio) {
    super();
    this.raio = raio;
  }

  calcularArea() {
    return Math.PI * (this.raio ** 2);
  }
}

class Retangulo extends Forma {
  constructor(largura, altura) {
    super();
    this.largura = largura;
    this.altura = altura;
  }

  calcularArea() {
    return this.largura * this.altura;
  }
}

let circulo = new Circulo(5);
console.log(`A área do círculo é: ${circulo.calcularArea().toFixed(2)}`);

let retangulo = new Retangulo(4, 6);
console.log(`A área do retângulo é: ${retangulo.calcularArea()}`);