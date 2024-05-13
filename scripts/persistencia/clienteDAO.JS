class ClienteDAO{
    #armazenamento;

    constructor(){
        this.#armazenamento= window.localStorage;

        if(this.#armazenamento.getItem('relatorioClientes') === null){
            this.#armazenamento.setItem('relatorioClientes', JSON.stringify([]))
        }
    }

    incluir(cliente){
        if(cliente instanceof Cliente){
            const listaClientes= JSON.parse(this.#armazenamento.getItem('relatorioClientes'));
            listaClientes.push(cliente.toJSON());
            this.#armazenamento.setItem('relatorioClientes',JSON.stringify(listaClientes));
        }
    }

    consultar(){
        return JSON.parse(this.#armazenamento.getItem('relatorioClientes'));
    }

    excluir(cpf){
            const relClientes= JSON.parse(this.#armazenamento.getItem('relatorioClientes'));
            const novoRelClientes= relClientes.filter((itemLista) => {
                return itemLista.cpf !== cpf;
            });

          this.#armazenamento.setItem('relatorioClientes',JSON.stringify(novoRelClientes));
    }
}