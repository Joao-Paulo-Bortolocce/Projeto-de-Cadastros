class FornecedorDAO{
    #armazenamento = window.localStorage;

    constructor(){
        if(this.#armazenamento.getItem('relatorioFornecedores') === null){
            this.#armazenamento.setItem('relatorioFornecedores',JSON.stringify([]));
        }
    }

    incluir(fornecedor){
        if(fornecedor instanceof Fornecedor){
            const relFornecedores = JSON.parse(this.#armazenamento.getItem('relatorioFornecedores'));
            relFornecedores.push(fornecedor.toJSON());
            this.#armazenamento.setItem('relatorioFornecedores' , JSON.stringify(relFornecedores));
        }
    }

    consultar(){
        return JSON.parse(this.#armazenamento.getItem('relatorioFornecedores'));
    }

    excluir(cnpj){
            const relFornecedores= JSON.parse(this.#armazenamento.getItem('relatorioFornecedores'));
            const novoRelatorio= relFornecedores.filter((itemLista) =>{
                return itemLista.cnpj !== cnpj;
            });

            this.#armazenamento.setItem('relatorioFornecedores', JSON.stringify(novoRelatorio));
    }
}