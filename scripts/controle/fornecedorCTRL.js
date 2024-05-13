class FornecedorCtrl{

    validar(nome,cnpj,email,celular,telefone,estado,cep,numero){
        if(nome !=="" && cnpj !=="" && email !=="" && celular !=="" && telefone !=="" && estado !=="" && cep !=="" && !isNaN(numero)){
            return true;
        }
        else{
            return false;
        }
    }

    verificaDuplicidade(nome,cnpj,email,celular,telefone,estado,cep,numero){
        var listaFornecedores = new Fornecedor();
        listaFornecedores = listaFornecedores.consultar();
        const duplicidade= listaFornecedores.filter((itemLista) =>{
            return itemLista.cnpj === cnpj;
        });
        if(duplicidade.length ===0){
            const fornecedor = new Fornecedor(nome,cnpj,email,celular,telefone,estado,cep,numero);
            fornecedor.incluir();
            return true;
        }
        return false;
    }

    buscarFornecedor(){
        const fornecedor = new Fornecedor();
        return fornecedor.consultar();
    }

    excluir(cnpj){
        const fornecedor = new Fornecedor();
        fornecedor.excluir(cnpj);
    }
}

