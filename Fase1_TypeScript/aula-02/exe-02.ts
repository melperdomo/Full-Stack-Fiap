// Classes, Métodos e Propriedades

class Animal {
    private especie: string;

    constructor(especie: string) {
        this.especie = especie;
    }

    getEspecie(): string {
        return this.especie;
    }

    emitirSom() {
        console.log("O animal emite um som.")
    }
}

class Cachorro extends Animal {
    emitirSom(): void {
        console.log("O cachorro late.");
    }
}

class Gato extends Animal {
    emitirSom(): void {
        console.log("O gato mia.");
    }
}

const meuCachorro = new Cachorro("Cachorro");
meuCachorro.emitirSom();

const meuGato: Animal = new Gato("Gato");
meuGato.emitirSom();
