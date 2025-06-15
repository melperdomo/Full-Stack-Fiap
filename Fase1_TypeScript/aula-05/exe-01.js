// Injeção de dependência: é quando você usa uma classe dentro de outra classe.
var Interruptor = /** @class */ (function () {
    function Interruptor() {
    }
    Interruptor.prototype.ligar = function () {
        console.log('Lâmpaga Ligada');
    };
    return Interruptor;
}());
var Lampada = /** @class */ (function () {
    function Lampada(interruptor) {
        this.interruptor = interruptor;
    }
    Lampada.prototype.acionar = function () {
        this.interruptor.ligar();
    };
    return Lampada;
}());
var interruptor = new Interruptor();
var lampada = new Lampada(interruptor);
lampada.acionar();
