class UsuarioCTRL{
    validar(nome,senha,tipo,email,senhaAdm){
        if(nome != "" && senha != "" && tipo != "" && email != ""){
            return true;
        }
        else{
            return false;
        }
    }

    verificaDuplicidade(nome,senha,tipo,email,senhaAdm){
        var listaUsuarios = new Usuario();
        listaUsuarios = listaUsuarios.consultar();
        const duplicidade= listaUsuarios.filter((itemLista) =>{
           return itemLista.nickName === nome;
        });
        if(duplicidade.length ===0){
            const usuario = new Usuario(nome,tipo,email,senha);
            usuario.incluir();
            return true;
        }
        return false;
    }

    buscarUsuarios(){
        const usuario = new Usuario();
        return usuario.consultar();
    }

    excluir(nome){
        const usuario = new Usuario();
        return usuario.excluir(nome);
    }

    verificarSenha(input){
        const senha = input.value;
        if(senha==="1234"){
            return true;
        }
        return false;
    }
}