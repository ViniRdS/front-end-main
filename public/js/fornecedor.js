const atualiza = document.querySelector("#btnatualiza");
const salvar = document.querySelector("#btnsalvar");

const alerta = document.querySelector("#alerta");
const titulo = document.querySelector("#titulo");
const carregando = document.querySelector("#carregando");
const cadastro = document.querySelector("#btncadastro");


//CONFIGURAÇÕES DOS PARAMENTRO DE VALIDAÇÃO DO FORMULÁRIO
$('#frmfornecedor').validate({
    //adiconamos regras de validação ao formulário
    rules: {
        //bloqueamos uma quantidade minima de caracteres
        //para o campo nome
        nome: {
            minlength: 3
        },
    },
    //definimos que as mensagem de formulário serão adicionadas a uma tag
    // <span>Mensagem</span>
    errorElement: 'span',
    errorPlacement: function (error, element) {
        error.addClass('invalid-feedback');
        element.closest('.form-group').append(error);
    },
    highlight: function (element, errorClass, validClass) {
        $(element).addClass('is-invalid');
    },
    unhighlight: function (element, errorClass, validClass) {
        $(element).removeClass('is-invalid');
        $(element).addClass('is-valid');
    }
});
async function deleta(id) {
    document.getElementById('idfornecedor').value = id;
    const form = document.querySelector('#fornecedores');
    dados = new FormData(form);
    const opt = {
        method: 'POST',
        body: dados,
        mode: 'cors',
        cache: 'default'
    };
    const response = await fetch('deletefornecedor.php', opt);
    const data = await response.text();
    if (data == 'true') {
        $('#tr' + id).remove();
    }
}
function alterar(fornecedor) {
    const id = fornecedor.id;
    const nome = fornecedor.nome;
    const cnpj = fornecedor.cnpj;
    const telefone = fornecedor.telefone;
    const endereco = fornecedor.endereco;

    $("#acao").val('update');
    $("#id").val(id);
    $("#nome").val(nome);
    $("#cnpj").val(cnpj);
    $("#telefone").val(telefone);
    $("#endereco").val(endereco);
    //exibimos o modal
    $("#cadastrofornecedor").modal('show');
}

async function update() {
    /*alerta.className = 'alert alert-success';
    titulo.className = 'mb-0';
    titulo.innerHTML = `<p>Alteração realizada com sucesso!`;**/
    const form = document.querySelector("#frmfornecedor")
    const dados = new FormData(form);

    const opt = {
        method: "POST",
        mode: 'cors',
        body: dados,
        cache: 'default'

    };
    const response = await fetch('cadastrofornecedor.php', opt);
    const data = await response.text();
    if (data == 'true') {
        $("#acao").val('update');
        $("#id").val('');
        $("#nome").val('');
        $("#cnpj").val('');
        $("#telefone").val('');
        $("#endereco").val('');
        lista_fornecedores();
        //ocultamos o modal
        $("#cadastrofornecedor").modal('hide');

    }
}

async function lista_fornecedores() {
    //monstamos a configuração da requição
    //ao servidor http
    const opt = {
        method: 'POST',
        mode: 'cors',
        cache: 'default'
    }
    //A VARIAVEL response RECEBERÁ UMA PROMISSE
    //DE UMA TENTATIVA DE REQUISIÇÃO.
    const response = await fetch('listafornecedor.php', opt);
    //CONVERTEMOS O A RESPOSTA  PARA TEXTO
    //QUE TERÁ UMA ESTRUTURA HTML
    const html = await response.text();
    //PRINTAMOS NO CONSOLE O RESULTADO
    console.log(html);
    document.getElementById('dados').innerHTML = html;
}

async function inserir() {
    const form = document.querySelector("#frmfornecedor");
    const formData = new FormData(form);
    
    const opt = {
        method: "POST",
        mode: 'cors',
        body: formData,
        cache: 'default'
    }
    const response = await fetch('cadastrofornecedor.php', opt);
    const dados = await response.text();
    console.log(dados);
    console.log(dados);
    //VARIFICAMOS SE A RESPOSTA DO PHP OU SERVER É TRUE
    if (dados == 'true') {
        //CASO SEJA TRUE, EXIBIMOS A MENSAGEM DE SALVO COM SUCESSO,
        //E ALTERAMOS A COR DO COMPONENTE ALERT PARA SUCCESS
        alerta.className = 'alert alert-success';
        titulo.className = 'mb-0';
        titulo.innerHTML = `<p>Cadastro realizado com sucesso!`;
        //OCULTA O ICONES CARREGANDO
        carregando.className = 'mb-0 d-none';
        lista_fornecedores();
        //aguardamos 0,5 seg para fechar o modal
        setTimeout(() => {
            //fecha o modal
            $("#cadastrofornecedor").modal('hide');
            $("#frmfornecedor input").val('');
            $("#alerta").removeClass('alert alert-success');
            $('#alerta').addClass('alert alert-warning');
            $("#titulo").removeClass('d-none');
            $("#titulo").addClass('mb-0');
            titulo.innerHTML = `
            <h6 class="alert-heading">Atenção!</h6>
            Todos os campos com <span class="text-danger"> * </span> 
            são obrigatórios para o
            cadastro!`;
        }, 1000);
    } else {
        titulo.className = `mb-0`;
        titulo.innerHTML = `<p>${dados}</p>`;
    }
}
//MAPEAMOS O EVENTO DE CARREGAMENTO DO DOCUMENTO
document.addEventListener("DOMContentLoaded", function () {
    lista_fornecedores();
});

atualiza.addEventListener('click', async function () {
    lista_fornecedores();
});

cadastro.addEventListener('click', function () {
    $("#frmfornecedor input").val('');
    document.getElementById('acao').value = 'insert';
});

salvar.addEventListener('click', function () {
    //RECEBEMOS O RESULTADO DA VALIDAÇÃO DO FORMULARIO
    const valida = $('#frmfornecedor').valid();
    // let acao = document.getElementById("edtacao");
    if (valida == true) {
        if (document.getElementById('acao').value == 'update') {
            titulo.className = 'd-none';
            carregando.className = 'mb-0';
            setTimeout(() => {
                update();
            }, 500);
        } else if (document.getElementById('acao').value == 'insert') {
            titulo.className = 'd-none';
            carregando.className = 'mb-0';
            setTimeout(() => {
                inserir();
            }, 500);
        }
        /*alerta.className = 'alert alert-primary';
        titulo.className = 'd-none';
        carregando.className = 'mb-0';
        setTimeout(() => {
            inserir();
        }, 500);*/
    }
});

$("#cnpj").inputmask({
    mask: '99.999.999/9999-99'
});

$("#telefone").inputmask({
    mask: '(99)99999-9999'
});
//const cpf = document.querySelector("#cpf");
