class Fornecedor{
    #nome;
    #cnpj;
    #email;
    #celular;
    #telefone;
    #estado;
    #cep;
    #numero;

    getNome(){
        return this.#nome;
    }

    setNome(novoNome){
        this.#nome=novoNome;
    }

    getCnpj(){
        return this.#cnpj;
    }

    setCnpj(novoCnpj){
        this.#cnpj=novoCnpj;
    }

    getEmail(){
        return this.#email;
    }

    setEmail(novoEmail){
        this.#email=novoEmail;
    }

    getCelular(){
        return this.#celular;
    }

    setCelular(novoCelular){
        this.#celular=novoCelular;
    }

    getTelefone(){
        return this.#telefone;
    }

    setTelefone(novoTelefone){
        this.#telefone=novoTelefone;
    }

    getEstado(){
        return this.#estado;
    }

    setEstado(novoEstado){
        this.#estado=novoEstado;
    }

    getCep(){
        return this.#cep;
    }

    setCep(novoCep){
        this.#cep=novoCep;
    }

    getNumero(){
        return this.#numero;
    }

    setNumero(novoNumero){
        this.#numero=novoNumero;
    }

    constructor(nome,cnpj,email,celular,telefone,estado,cep,numero){
        this.#nome=nome;
        this.#cnpj=cnpj;
        this.#email=email;
        this.#celular=celular;
        this.#telefone=telefone;
        this.#estado=estado;
        this.#cep=cep;
        this.#numero=numero;
    }

    incluir(){
        const fornecedorDAO= new FornecedorDAO();
        fornecedorDAO.incluir(this);
    }

    toJSON(){
        return{
            "nome" : this.#nome,
            "cnpj" : this.#cnpj,
            "email":this.#email,
            "celular": this.#celular,
            "telefone": this.#telefone,
            "estado":this.#estado,
            "cep":this.#cep,
            "numero": this.#numero
        }
        
    }

    consultar(){
         const fornecedorDAO= new FornecedorDAO();
         return fornecedorDAO.consultar();
    }

    excluir(cnpj){
        const fornecedorDAO = new FornecedorDAO();
        fornecedorDAO.excluir(cnpj);
    }
}