<?php

$nombre = isset($_POST['username']) ? $_POST['username'] : '';
$id = isset($_POST['userID']) ? $_POST['userID'] : '';
$correo = isset($_POST['email']) ? $_POST['email'] : '';
$contrasena = isset($_POST['password']) ? $_POST['password'] : '';
$id_rol = isset($_POST['rol']) ? $_POST['rol'] : '';

try {

    $conexion = new PDO("mysql:host=localhost;port=3306;dbname=yarbe_bd", "root", "");
    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);

    $pdo = $conexion->prepare('INSERT INTO usuarios(nombre, id, correo, contrasena, id_rol) VALUES(?, ?, ?, ?, ?)');

    $pdo->bindParam(1, $nombre);
    $pdo->bindParam(2, $id);
    $pdo->bindParam(3, $correo);
    $pdo->bindParam(4, $contrasena);
    $pdo->bindParam(5, $id_rol);

    $pdo->execute() or die(print($pdo->errorInfo()));

    echo json_encode('true');

} catch(PDOException $error) {
    echo $error->getMessage();
    die();
}