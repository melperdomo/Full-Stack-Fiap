// Classes, Métodos e Propriedades

class Pessoa {
    nome: string;
    idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome,
        this.idade = idade
    }

    saudacao() {
        console.log(`Olá! Meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
    }
}

const aluno = new Pessoa('Mel', 33);
aluno.saudacao();