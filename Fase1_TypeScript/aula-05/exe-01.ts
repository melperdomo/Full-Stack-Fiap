// Injeção de dependência: é quando você usa uma classe dentro de outra classe.

class Interruptor {
    ligar() {
        console.log('Lâmpaga Ligada');
    }
}

class Lampada {
    private interruptor: Interruptor;

    constructor(interruptor: Interruptor) {
        this.interruptor = interruptor;
    }

    acionar() {
        this.interruptor.ligar();
    }
}

const interruptor = new Interruptor();
const lampada = new Lampada(interruptor);
lampada.acionar();