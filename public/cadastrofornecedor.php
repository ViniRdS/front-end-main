<?php
include "Conection.php";
try {
    $id        = $_POST["id"];
    $acao      = $_POST["acao"];
    $nome      = $_POST["nome"];
    $cnpj      = $_POST["cnpj"];
    $telefone  = $_POST["telefone"];
    $endereco  = $_POST["endereco"];
    switch ($acao) {
        case 'insert':
            $sql = "INSERT INTO fornecedor(nome, cnpj, telefone, endereco) " .
                " VALUES ('{$nome}','{$cnpj}','{$telefone}','{$endereco}');";
            $pdo->prepare($sql)->execute();
            break;
        case 'update':
            $sql = "update fornecedor set nome = '{$nome}', " .
                " cnpj = '{$cnpj}', telefone = '{$telefone}', endereco = '{$endereco}' " .
                " where id = '{$id}'";
            $pdo->prepare($sql)->execute();
            break;
    }
    echo "true";
} catch (PDOException $e) {
    echo $e->getMessage();
}
