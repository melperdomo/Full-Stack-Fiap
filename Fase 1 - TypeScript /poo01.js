var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade) {
        this.nome = nome,
            this.idade = idade;
    }
    Pessoa.prototype.saudacao = function () {
        console.log("Ol\u00E1! Meu nome \u00E9 ".concat(this.nome, " e eu tenho ").concat(this.idade, " anos."));
    };
    return Pessoa;
}());
var aluno = new Pessoa('Mel', 33);
aluno.saudacao();
