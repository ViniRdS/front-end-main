<?php
include "Conection.php";
try {
    $id        = $_POST["id"];
    $acao      = $_POST["acao"];
    $nome      = $_POST["nome"];
    $sobrenome = $_POST["sobrenome"];
    $cpf       = $_POST["cpf"];
    $telefone  = $_POST["telefone"];
    $endereco  = $_POST["endereco"];
    switch ($acao) {
        case 'insert':
            $sql = "INSERT INTO usuario(nome, sobre_nome, cpf,telefone,endereco) " .
                " VALUES ('{$nome}','{$sobrenome}','{$cpf}','{$telefone}','{$endereco}');";
            $pdo->prepare($sql)->execute();
            break;
        case 'update':
            $sql = "update usuario set nome = '{$nome}', " .
                " sobre_nome = '{$sobrenome}', cpf = '{$cpf}', telefone = '{$telefone}', endereco = '{$endereco}' " .
                " where id = '{$id}'";
            $pdo->prepare($sql)->execute();
            break;
    }
    echo "true";
} catch (PDOException $e) {
    echo $e->getMessage();
}
