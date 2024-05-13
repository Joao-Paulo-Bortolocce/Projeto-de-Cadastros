class Usuario {
    #nome;
    #tipo;
    #email;
    #senha;

    setNome(novoNome) {
        this.#nome = novoNome;
    }
    getNome() {
        return this.#nome;
    }
    setTipo(novoTipo) {
        this.#tipo = novoTipo;
    }
    getTipo() {
        return this.#tipo;
    }
    setEmail(novoEmail) {
        this.#email = novoEmail;
    }
    getEmail() {
        return this.#email;
    }
    setSenha(novaSenha)
    {
        this.#senha=novaSenha;
    }
    getSenha ()
    {
        return this.#senha;
    }

    constructor(nome,tipo,email,senha){
        this.#nome=nome;
        this.#email=email;
        this.#senha=senha;
        this.#tipo=tipo;
    }

    incluir(){
        const usuarioDAO = new UsuarioDAO();
        usuarioDAO.incluir(this);
    }

    toJson(){
        return{
            "nickName":this.#nome,
            "senha": this.#senha,
            "tipo": this.#tipo,
            "email": this.#email,
        }
    }

    consultar(){
        const usuarioDAO = new UsuarioDAO();
        return usuarioDAO.consultar();
    }

    excluir(nome){
        const usuarioDAO = new UsuarioDAO();
        usuarioDAO.excluir(nome);
    }

}