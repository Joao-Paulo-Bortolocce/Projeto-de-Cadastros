const formCadFornecedor = document.getElementById('formCadFornecedor');

exibirFornecedores();

formCadFornecedor.onsubmit = (evento) =>{
    var nome= document.getElementById('nome').value;
    var cnpj= document.getElementById('cnpj').value;
    var email= document.getElementById('Email').value;
    var celular= document.getElementById('celular').value;
    var telefone= document.getElementById('telefone').value;
    var estado= document.getElementById('uf').value;
    var cep= document.getElementById('cep').value;
    var numero= document.getElementById('numero').value;

    const fornecedorCtrl = new FornecedorCtrl();

    if(cnpj.length<18){
        const limpaCnpj = document.getElementById('cnpj');
        alert('CNPJ informado é inválido');
        limpaCnpj.value="";
        cnpj="";
    }
    if(celular.length<15){
        const limpaCelular = document.getElementById('celular');
        alert('Celular informado é inválido');
        limpaCelular.value="";
        celular="";
    }
    if(telefone.length<14){
        const limpaTelefone = document.getElementById('telefone');
        alert('Telefone informado é inválido');
        limpaTelefone.value="";
        telefone="";
    }
    if(cep.length<9){
        const limpaCep = document.getElementById('cep');
        alert('CEP informado é inválido');
        limpaCep.value="";
        cep="";
    }

    if(fornecedorCtrl.validar(nome,cnpj,email,celular,telefone,estado,cep,numero)){
        if(fornecedorCtrl.verificaDuplicidade(nome,cnpj,email,celular,telefone,estado,cep,numero)){
            formCadFornecedor.classList.remove('was-validated');
            formCadFornecedor.reset();
            exibirFornecedores();
        }
        else{
            const limpaCnpj = document.getElementById('cnpj');
            alert('CNPJ digitado já está cadastrado!');
            limpaCnpj.value="";
            formCadFornecedor.classList.add('was-validated');
        }
        
    }
    else{
        formCadFornecedor.classList.add('was-validated');
    }

    evento.stopPropagation();
    evento.preventDefault();
}

function exibirFornecedores(){
    const fornecedorCtrl = new FornecedorCtrl();
    const relFornecedores = document.getElementById('relatorio');
    relFornecedores.innerHTML='';
    const listaFornecedores= fornecedorCtrl.buscarFornecedor();
    if(listaFornecedores.length>0){
        const tabela= document.createElement('table');
        tabela.className = 'table table-striped table-hover';
        const cabecalho = document.createElement('thead');

        cabecalho.innerHTML=`
            <td>Nome</td>
            <td>CNPJ</td>
            <td>E-mail</td>
            <td>Celular</td>
            <td>Telefone</td>
            <td>UF</td>
            <td>Cep</td>
            <td>Numero</td>
            <td>Excluir</td>
        `;

        const corpo = document.createElement('tbody');

        for(var i=0;i< listaFornecedores.length;i++){
            const linha = document.createElement('tr');
            linha.innerHTML=`
            <tr>
                <td>${listaFornecedores[i].nome}</td>
                <td>${listaFornecedores[i].cnpj}</td>
                <td>E-${listaFornecedores[i].email}</td>
                <td>${listaFornecedores[i].celular}</td>
                <td>${listaFornecedores[i].telefone}</td>
                <td>${listaFornecedores[i].estado}</td>
                <td>${listaFornecedores[i].cep}</td>
                <td>${listaFornecedores[i].numero}</td>
                <td>
                    <button type="button" class="btn btn-outline-danger"  onclick="excluirFornecedor('${listaFornecedores[i].cnpj}')">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
                        </svg>
                    </button>
                </td>
                
            </tr>
            `;
            corpo.appendChild(linha);
        }
        tabela.appendChild(cabecalho);
        tabela.appendChild(corpo);
        relFornecedores.appendChild(tabela);
    }
    else{
        const mensagem= document.createElement('h2');
        mensagem.innerText='Não há fornecedores cadastrados!';
        relFornecedores.appendChild(mensagem);
    }

}

function excluirFornecedor(cnpj){
    const fornecedorCtrl = new FornecedorCtrl();
    fornecedorCtrl.excluir(cnpj);
    exibirFornecedores();
}