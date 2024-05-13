class ClienteCtrl{

    validar(nome,dataNascimento,cpf,email,celular,estado,cep){
        if(nome!=="" && dataNascimento !=="" && cpf !=="" && email !=="" && celular !=="" && estado !=="" && cep !==""){
            return true;
        }
        else{
            return false;
        }
    }

    verificaDuplicidade(nome,dataNascimento,cpf,email,celular,estado,cep){
        var listaClientes = new Cliente();
        listaClientes = listaClientes.consultar();
        const duplicidade = listaClientes.filter((itemLista) =>{
            return itemLista.cpf === cpf;
        });
        if(duplicidade.length ===0){
            const cliente= new Cliente(nome,dataNascimento,cpf,email,celular,estado,cep);
            cliente.incluir();
            return true;
        }
        return false;
    }

    buscarCliente(){
        const cliente = new Cliente();
        return cliente.consultar();
    }
    
    excluir(cpf){
        const cliente = new Cliente();
        return cliente.excluir(cpf);
     }
}