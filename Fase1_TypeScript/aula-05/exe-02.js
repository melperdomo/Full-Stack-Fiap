var ServicoEmail = /** @class */ (function () {
    function ServicoEmail() {
    }
    ServicoEmail.prototype.enviarEmail = function (mensagem) {
        console.log("Enviando e-mail:", mensagem);
    };
    return ServicoEmail;
}());
var UsuarioServico = /** @class */ (function () {
    // Construtor que aceita um ServicoEmail como parâmetro
    function UsuarioServico(servicoEmail) {
        this.servicoEmail = servicoEmail;
    }
    UsuarioServico.prototype.registrarUsuario = function (usuario) {
        console.log("Registrando o usu\u00E1rio ".concat(usuario.nome));
        this.servicoEmail.enviarEmail("Boas vindas!");
    };
    return UsuarioServico;
}());
// Exemplo de uso:
var servicoEmail = new ServicoEmail();
var usuarioServico = new UsuarioServico(servicoEmail);
// Supondo que temos um objeto usuário com a propriedade nome:
var usuario = { nome: "Mel" };
usuarioServico.registrarUsuario(usuario);
