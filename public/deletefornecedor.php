<?php
include_once 'Conection.php';
try {
    //RECUPERAMOS O CÓDIGO DO REGISTRO A SER EXCLUIR
    $id = $_POST['idfornecedor'];
    //CRIAMOS A INSTRUÇÃO SQL PARA EXCLUSÃO DO REGISTRO
    $sql = "delete from fornecedor where id = {$id}";
    //EXECUTAMOS O INSTRUÇÃO SQL
    $pdo->prepare($sql)->execute();
    echo "true";
} catch (PDOException $e) {
    var_dump($e->getMessage());
}