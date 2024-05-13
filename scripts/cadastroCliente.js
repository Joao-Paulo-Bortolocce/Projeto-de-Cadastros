const formCadCliente= document.getElementById('formCadCliente');

relatorioClientes();

formCadCliente.onsubmit = (evento) =>{
    var nome= document.getElementById('nome').value;
    var dataNascimento= document.getElementById('data').value;
    var cpf= document.getElementById('cpf').value;
    var email= document.getElementById('Email').value;
    var celular= document.getElementById('celular').value;
    var estado= document.getElementById('uf').value;
    var cep= document.getElementById('cep').value;

    const clienteCtrl= new ClienteCtrl();

    if(cep.length<9){
        const limpaCep = document.getElementById('cep');
        alert('CEP informado é inválido');
        limpaCep.value="";
        cep="";
    }
    if(celular.length<15){
        const limpaCelular = document.getElementById('celular');
        alert('Celular informado é inválido');
        limpaCelular.value="";
        celular="";
    }
    if(cpf.length<14){
        const limpaCpf = document.getElementById('cpf');
        alert('CPF informado é inválido');
        limpaCpf.value="";
        cpf="";
    }

    if(clienteCtrl.validar(nome,dataNascimento,cpf,email,celular,estado,cep)){
        if(clienteCtrl.verificaDuplicidade(nome,dataNascimento,cpf,email,celular,estado,cep)){
            formCadCliente.classList.remove('was-validated');
            formCadCliente.reset();
            relatorioClientes();
        }
        else{
            const limpaCpf = document.getElementById('cpf');
            alert('CPF informado ja está cadastrado!');
            limpaCpf.value="";
            formCadCliente.classList.add('was-validated');
        }   
    }
    else{
        formCadCliente.classList.add('was-validated');
    }

    evento.stopPropagation();
    evento.preventDefault();
}

function relatorioClientes(){
    const clienteCtrl = new ClienteCtrl();
    const sectionRelatorio= document.getElementById('relatorio');
    sectionRelatorio.innerHTML= '';
    const relClientes= clienteCtrl.buscarCliente();

    if(relClientes.length>0){
        const relatorio = document.createElement('table');
        relatorio.className = 'table table-striped table-hover';
        const cabecalho= document.createElement('thead');
        cabecalho.innerHTML=`
        <th>Nome</th>
        <th>Data de nascimento</th>
        <th>CPF</th>
        <th>E-mail</th>
        <th>Celular</th>
        <th>União Federal</th>
        <th>CEP</th>
        <th>Excluir</th>
        `

        const corpo= document.createElement('tbody');
        for(var i=0; i<relClientes.length;i++){
            const linha= document.createElement('tr');
             linha.innerHTML=`
             <tr>
                <td>${relClientes[i].nome}</td>
                <td>${relClientes[i].dataNascimento}</td>
                <td>${relClientes[i].cpf}</td>
                <td>${relClientes[i].email}</td>
                <td>${relClientes[i].celular}</td>
                <td>${relClientes[i].estado}</td>
                <td>${relClientes[i].cep}</td>
                <td><button type="button" class="btn btn-outline-danger" onclick='excluirCliente("${relClientes[i].cpf}")'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                </svg>
                </button>
                
                </td>

             </tr>
            `;
            corpo.appendChild(linha);
        }
        relatorio.appendChild(cabecalho);
        relatorio.appendChild(corpo);
        sectionRelatorio.appendChild(relatorio);
    }
    else{
        const paragrafo= document.createElement('h2');
        paragrafo.innerText='Não há clientes cadastrados!'
        sectionRelatorio.appendChild(paragrafo);
    }
}

function excluirCliente(cpf){
    if(confirm('Deseja realmente excluir o cadastro deste cliente? ')){
        const clienteCtrl = new ClienteCtrl();
        clienteCtrl.excluir(cpf);
        relatorioClientes();
    }    

}