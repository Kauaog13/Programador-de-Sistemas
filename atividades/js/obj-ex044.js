//Crie uma classe Cachorro com o método latir(), que imprime "Au au!" no console.

class dog {

    latir() {
        console.log("- Cachorro: AU AU !");
    }

    territorio() {
        console.log("- Cachorro: SHHHH! Marcou Território !")
    }

    rosnar() {
        console.log("- Cachorro: GRRR! Rosnando !")
    }

    brincar() {
        console.log("- Cachorro: Pegou a bolinha !")
    }

}

const meuDog1 = new dog();

meuDog1.latir();
meuDog1.territorio();
meuDog1.rosnar();
meuDog1.brincar();


