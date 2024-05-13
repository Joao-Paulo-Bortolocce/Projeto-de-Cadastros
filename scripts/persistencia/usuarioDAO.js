class UsuarioDAO{
    #armazenamento= window.localStorage;

    constructor(){
        if(this.#armazenamento.getItem('relatorioUsuarios')===null){
            this.#armazenamento.setItem('relatorioUsuarios', JSON.stringify([]));
        }
    }

    incluir(usuario){
        if(usuario instanceof Usuario){
            const relatorio= JSON.parse(this.#armazenamento.getItem('relatorioUsuarios'));
            relatorio.push(usuario.toJson());
            this.#armazenamento.setItem('relatorioUsuarios', JSON.stringify(relatorio));
        }
    }

    consultar(){
        return JSON.parse(this.#armazenamento.getItem('relatorioUsuarios'));
    }

    excluir(nome){
        const relatorio = JSON.parse(this.#armazenamento.getItem('relatorioUsuarios'));
        const novoRelatorio= relatorio.filter((itemLista)=>{
            return itemLista.nickName !== nome;
        });
        this.#armazenamento.setItem('relatorioUsuarios',JSON.stringify(novoRelatorio));
    }
}