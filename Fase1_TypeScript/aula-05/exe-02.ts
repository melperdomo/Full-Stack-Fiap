class ServicoEmail {
    enviarEmail(mensagem: string) {
        console.log("Enviando e-mail:", mensagem);
    }
}

class UsuarioServico {
    // Declaração da propriedade servicoEmail do tipo ServicoEmail
    private servicoEmail: ServicoEmail;

    // Construtor que aceita um ServicoEmail como parâmetro
    constructor(servicoEmail: ServicoEmail) {
        this.servicoEmail = servicoEmail;
    }

    registrarUsuario(usuario: {nome: string}) {
        console.log(`Registrando o usuário ${usuario.nome}`);
        this.servicoEmail.enviarEmail("Boas vindas!");
    }
}

// Exemplo de uso:
const servicoEmail = new ServicoEmail();
const usuarioServico = new UsuarioServico(servicoEmail);

// Supondo que temos um objeto usuário com a propriedade nome:
const usuario = {nome: "Mel"};
usuarioServico.registrarUsuario(usuario);
