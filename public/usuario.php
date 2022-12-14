<?php
include "Conection.php";

$id = (filter_input(INPUT_GET, 'id', FILTER_SANITIZE_ENCODED)
) ?
    filter_input(INPUT_GET, 'id', FILTER_SANITIZE_ENCODED)
    : false;

if ($id) {
    $usuario = $pdo->query("select * from usuario where id = " . $id)
        ->fetch();
}
?>
<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css">
    <title>Alteração e cadastro de usuario</title>
</head>

<body>
    <div class="constainer">
        <div class="row m-2">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <h3>Dados do usuario</h3>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-12">
                                <div class="alert alert-warning" role="alert">
                                    Todos os campos com <span class="text-danger"> * </span> são obrigatórios para o cadastro!
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <form method="post" id="frmusuario">
                                    <div class="mb-3">
                                        <label for="nome" class="form-label">
                                            Nome
                                            <span class="text-danger"> * </span>
                                        </label>
                                        <input type="text" class="form-control" id="nome" name="nome" placeholder="Digite seu nome!" required autofocus value="<? echo isset($usuario['nome']) ? $usuario['nome'] : ''; ?>">
                                    </div>
                                    <div class="mb-3">
                                        <label for="sobrenome" class="form-label">
                                            Sobrenome
                                            <span class="text-danger"> * </span>
                                        </label>
                                        <input type="text" class="form-control" id="sobrenome" name="sobrenome" placeholder="Digite seu sobre nome!" required value="<? echo isset($usuario['sobre_nome']) ? $usuario['sobre_nome'] : ''; ?>">
                                    </div>
                                    <div class="mb-3">
                                        <label for="cpf" class="form-label">
                                            CPF
                                            <span class="text-danger"> * </span>
                                        </label>
                                        <input type="text" class="form-control" id="CPF" name="CPF" placeholder="Digite seu CPF!" required value="<? echo isset($usuario['cpf']) ? $usuario['cpf'] : ''; ?>">
                                    </div>
                                    <div class="mb-3">
                                        <label for="telefone" class="form-label">
                                            Telefone
                                            <span class="text-danger"> * </span>
                                        </label>
                                        <input type="text" class="form-control" id="telefone" name="telefone" placeholder="Digite seu telefone!" required autofocus value="<? echo isset($usuario['telefone']) ? $usuario['telefone'] : ''; ?>">
                                    </div>
                                    <div class="mb-3">
                                        <label for="nome" class="form-label">
                                            Endereço
                                            <span class="text-danger"> * </span>
                                        </label>
                                        <input type="text" class="form-control" id="endereco" name="endereco" placeholder="Digite seu endereço!" required autofocus value="<? echo isset($usuario['endereco']) ? $usuario['endereco'] : ''; ?>">
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer">
                        <a href="listafornecedores.php" class="btn btn-warning">
                            Voltar
                        </a>
                        <button type="button" class="btn btn-success">
                            <i class="fa-solid fa-floppy-disks"> </i> Salvar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    <script src="js/request.js"></script>
    <script src="js/usuarios.js"></script>
</body>

</html>