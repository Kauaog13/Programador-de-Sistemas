// Definição da classe Carro
class Car {
    // Construtor da classe Carro, recebe marca, modelo e ano como parâmetros
    constructor(marca, modelo, ano) {
        // Atribuição dos valores recebidos aos atributos da classe
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    // Método que exibe as informações do carro
    informacoes() {
        // Exibição das informações do carro no console
        console.log(`Marca: ${this.marca}`);
        console.log(`Modelo: ${this.modelo}`);
        console.log(`Ano: ${this.ano}`);
    }
}

// Criação de instâncias da classe Carro
const carro1 = new Car("Toyota", "Corolla", "2020");
const carro2 = new Car("Honda", "Civic", "2018");
const carro3 = new Car("Ford", "Fusion", "2022");
const carro4 = new Car("Chevrolet", "Onix", "2021");
const carro5 = new Car("Volkswagem", "Golf", "2019");

// Chamada do método informacoes para exibir as informações de cada carro
carro1.informacoes();
carro2.informacoes();
carro3.informacoes();
carro4.informacoes();
carro5.informacoes();
