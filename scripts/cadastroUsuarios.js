const formCadUsuario= document.getElementById('formCadUsuario');

exibirUsuarios();
const verificaTipo= document.getElementById('Tipo');

verificaTipo.oninput= (evento) =>{
    const tipo= document.getElementById('Tipo').value;
    const blocoPergunta= document.getElementById('perguntaSenha') ;
    blocoPergunta.innerHTML='';
    const senhaAdm =document.createElement('div');
    senhaAdm.innerHTML='';
    if( tipo === "Administrador"){
        senhaAdm.innerHTML=`
        <div class="col-md-8" style="justify-content: center; margin: 0 auto ;" >
            <label for="senhaAdm" class="form-label">Senha para criar conta de Administrador</label>
            <input type="password" class="form-control" id="senhaAdm" onblur="verificarSenha(this)" required="required">
            <div class="invalid-feedback">
                Por favor, Informe a senha do sistema criar uma conta de Administrador!
            </div>
        </div>
        `;
    }
    blocoPergunta.appendChild(senhaAdm);

    evento.stopPropagation();
    evento.preventDefault();
}


function verificarSenha(input){
    const usuarioCTRL =  new UsuarioCTRL();
    if(!usuarioCTRL.verificarSenha(input)){
        alert('Senha para perfil de Administrador está incorreta')
        input.value="";
        formCadUsuario.classList.add('was-validated');
    }
}

formCadUsuario.onsubmit = (evento) =>{
    const nickName= document.getElementById('Nome').value;
    const senha= document.getElementById('Senha').value;
    const tipo= document.getElementById('Tipo').value;
    const email= document.getElementById('Email').value;
    var senhaAdm="";
    if(tipo === "Administrador"){
        senhaAdm= document.getElementById('senhaAdm').value;
    }

    const usuarioCTRL= new UsuarioCTRL();

    if(usuarioCTRL.validar(nickName,senha,tipo,email,senhaAdm)){
        if(usuarioCTRL.verificaDuplicidade(nickName,senha,tipo,email,senhaAdm)){
            formCadUsuario.classList.remove('was-validated');
            formCadUsuario.reset();
            exibirUsuarios();
        }
        else{
            const nome = document.getElementById('Nome');
            alert('Nome de Usuario ja existente!');
            nome.value="";
            formCadUsuario.classList.add('was-validated');
        }
        
    }
    else{
        formCadUsuario.classList.add('was-validated');
    }

    evento.stopPropagation();
    evento.preventDefault();
}

function exibirUsuarios(){
    const usuarioCTRL = new UsuarioCTRL();
    const relUsuarios= document.getElementById('relatorio');
    relUsuarios.innerHTML='';
    const listaUsuarios= usuarioCTRL.buscarUsuarios();
    if(listaUsuarios.length > 0){
        const tabela = document.createElement('table');
        tabela.className = 'table table-striped table-hover';
        const cabecalho= document.createElement('thead');
        cabecalho.innerHTML=`
        <td>Nome de usuário</td>
        <td>Tipo</td>
        <td>E-mail</td>
        <td>Excluir</td>
        `;
        const corpo = document.createElement('tbody');
        for(var i=0;i<listaUsuarios.length;i++){
            const linha = document.createElement('tr');
            linha.innerHTML=`
            <td>${listaUsuarios[i].nickName}</td>
            <td>${listaUsuarios[i].tipo}</td>
            <td>${listaUsuarios[i].email}</td>
            <td>
                <button type="button" class="btn btn-outline-danger"  onclick="excluirUsuario('${listaUsuarios[i].nickName}')">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
                    </svg>
                </button>
            </td>
            `;
            corpo.appendChild(linha);
        }
        tabela.appendChild(cabecalho);
        tabela.appendChild(corpo);
        relUsuarios.appendChild(tabela);
    }
    else{
        const frase= document.createElement('h1');
        frase.innerText='Não há usuários cadastrados!!';
        relUsuarios.appendChild(frase);
    }
}
function excluirUsuario(nickName){
    if(confirm('Deseja realmente excluir o usuário?')){
        const usuarioCTRL = new UsuarioCTRL();
        usuarioCTRL.excluir(nickName);
        exibirUsuarios();
    } 
}