class Cliente {
    #nome;
    #dataNascimento;
    #cpf;
    #email;
    #celular;
    #estado;
    #cep;

    setNome(novoNome){
        this.#nome=novoNome;
    }
    getNome(){
        return this.#nome;
    }
    
    setData(novaData){
        this.#dataNascimento=novaData;
    }
    getNome(){
        return this.#dataNascimento;
    }

    setNome(novoCpf){
        this.#cpf=novoCpf;
    }
    getNome(){
        return this.#cpf;
    }

    setNome(novoEmail){
        this.#email=novoEmail;
    }
    getNome(){
        return this.#email;
    }

    setNome(novoCelular){
        this.#celular=novoCelular;
    }
    getNome(){
        return this.#celular;
    }

    setNome(novoEstado){
        this.#estado=novoEstado;
    }
    getNome(){
        return this.#estado;
    }

    setNome(nocoCep){
        this.#cep=nocoCep;
    }
    getNome(){
        return this.#cep;
    }

    constructor(nome,dataNascimento,cpf,email,celular,estado,cep){
        this.#nome=nome;
        this.#dataNascimento=dataNascimento;
        this.#cpf=cpf;
        this.#email=email;
        this.#celular=celular
        this.#estado=estado;
        this.#cep=cep;
    }

    incluir(){
        const clienteDAO = new ClienteDAO();
        clienteDAO.incluir(this);
    }
    
    toJSON(){
        return{
            "nome":this.#nome,
            "dataNascimento":this.#dataNascimento,
            "cpf":this.#cpf,
            "email":this.#email,
            "celular":this.#celular,
            "estado":this.#estado,
            "cep":this.#cep
        }
    }
    
    consultar(){
        const clienteDAO= new ClienteDAO();
        return clienteDAO.consultar();
    }
    
    excluir(cpf){
        const clienteDAO = new ClienteDAO();
        clienteDAO.excluir(cpf);
    }

}