const formularioCliente=document.getElementById("formCadCliente");


function formatarCelular(input) {
    var valor = input.value;
    if (valor.length === 11) {
        input.value = `(${valor.slice(0, 2)}) ${valor.slice(2, 7)}-${valor.slice(7)}`;
    } else {
        input.value = valor;
    }
}

function formatarTelefone(input) {
    var valor = input.value;
    if (valor.length === 10) {
        input.value = `(${valor.slice(0, 2)}) ${valor.slice(2, 6)}-${valor.slice(6)}`;
    } else {
        input.value = valor;
    }
}

function formatarCPF(input) {
    var valor = input.value;
    if (valor.length === 11) {
        input.value = `${valor.slice(0, 3)}.${valor.slice(3, 6)}.${valor.slice(6, 9)}-${valor.slice(9)}`;
    } else {
        input.value = valor;
    }
}

function formatarCNPJ(input) {
    var valor = input.value;
    if (valor.length === 14) {
        input.value = `${valor.slice(0, 2)}.${valor.slice(2, 5)}.${valor.slice(5, 8)}/${valor.slice(8, 12)}-${valor.slice(12)}`;
    } else {
        input.value = valor;
    }
}

function formatarCEP(input){
    var valor = input.value;
    if (valor.length === 8) {
        input.value = `${valor.slice(0, 5)}-${valor.slice(5)}`;
    } else {
        input.value = valor;
    }
}