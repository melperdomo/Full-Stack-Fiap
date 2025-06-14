// Trabalhando com Modules e Namespaces
var MatematicaBasica;
(function (MatematicaBasica) {
    function somar(a, b) {
        return a + b;
    }
    MatematicaBasica.somar = somar;
    function subtrair(a, b) {
        return a - b;
    }
    MatematicaBasica.subtrair = subtrair;
})(MatematicaBasica || (MatematicaBasica = {}));
var MatematicaAvancada;
(function (MatematicaAvancada) {
    function exponenciar(base, expoente) {
        return Math.pow(base, expoente);
    }
    MatematicaAvancada.exponenciar = exponenciar;
})(MatematicaAvancada || (MatematicaAvancada = {}));
console.log(MatematicaBasica.somar(5, 3));
console.log(MatematicaBasica.subtrair(100, 20));
console.log(MatematicaAvancada.exponenciar(2, 3));
