// Trabalhando com Modules e Namespaces

// Criação de namespaces

namespace MatematicaBasica {
    export function somar(a: number, b: number): number {
        return a + b;
    }

    export function subtrair(a: number, b:number): number {
        return a - b;
    }
}

namespace MatematicaAvancada {
    export function exponenciar(base: number, expoente: number): number {
        return Math.pow(base, expoente);
    }
}

console.log(MatematicaBasica.somar(5, 3));
console.log(MatematicaBasica.subtrair(100, 20));
console.log(MatematicaAvancada.exponenciar(2, 3));
