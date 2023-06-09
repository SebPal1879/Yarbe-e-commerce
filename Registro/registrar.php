<?php

$name = isset($_POST['username']) ? $_POST['username'] : '';
$idc = isset($_POST['userID']) ? $_POST['userID'] : '';
$mail = isset($_POST['email']) ? $_POST['email'] : '';
$password = isset($_POST['password']) ? $_POST['password'] : '';
$role = 2;

try {

    $conexion = new PDO("mysql:host=localhost;port=3306;dbname=yarbe_bd", "root", "");
    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);

    $pdo = $conexion->prepare('INSERT INTO usuarios(name, idc, mail, password, role) VALUES(?, ?, ?, ?, ?)');

    $pdo->bindParam(1, $name);
    $pdo->bindParam(2, $idc);
    $pdo->bindParam(3, $mail);
    $pdo->bindParam(4, $password);
    $pdo->bindParam(5, $role);

    $pdo->execute() or die(print($pdo->errorInfo()));

    echo json_encode('true');

} catch(PDOException $error) {
    echo $error->getMessage();
    die();
}