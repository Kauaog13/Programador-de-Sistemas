//Praticar o conceito de encapsulamento em JavaScript, utilizando métodos e propriedades privadas dentro de uma classe.

//Crie uma classe chamada ContaBancaria que simule o comportamento de uma conta bancária simples.
//A classe deve ter uma propriedade privada saldo, que armazena o saldo da conta.
//A classe deve ter um método público depositar(valor), que adiciona o valor ao saldo da conta.
//A classe deve ter um método público sacar(valor), que retira o valor do saldo da conta, desde que haja saldo suficiente. Caso contrário, exiba uma mensagem de erro.
//Crie um método verSaldo(), que retorne o saldo atual da conta.
//Assegure que o saldo não possa ser acessado diretamente fora da classe.

//let conta = new ContaBancaria();
//conta.depositar(500);
//console.log(conta.verSaldo()); // 500

//conta.sacar(200);
//console.log(conta.verSaldo()); // 300

//conta.sacar(400); // Saldo insuficiente!

//Utilize o conceito de e para acessar e manipular o saldo dentro da classe.
//A propriedade saldo deve ser privada e não pode ser acessada diretamente fora da classe.

class ContaBancaria {
  #saldo;

  constructor() {
    this.#saldo = 0;
  }

  depositar(valor) {
    this.#saldo += valor;
  }

  sacar(valor) {
    if (this.#saldo >= valor) {
      this.#saldo -= valor;
    } else {
      console.log("Saldo insuficiente!");
    }
  }

  verSaldo() {
    return this.#saldo;
  }
}

let conta = new ContaBancaria();
conta.depositar(500);
console.log(conta.verSaldo()); // 500

conta.sacar(200);
console.log(conta.verSaldo()); // 300

conta.sacar(400); // Saldo insuficiente!