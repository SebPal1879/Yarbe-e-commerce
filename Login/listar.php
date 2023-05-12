<?php

try {

    $conexion = new PDO("mysql:host=localhost;port=3306;dbname=yarbe_bd", "root", "");
    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);

    $res = $conexion->query('SELECT * FROM usuarios') or die(print($conexion->errorInfo()));

    $data = [];

    while($item = $res->fetch(PDO::FETCH_OBJ)) {

        $data[] = [
            'correo' => $item->correo,
            'contrasena' => $item->contrasena,
            
        ];

    }

    echo json_encode($data);

} catch(PDOException $error) {

    echo $error->getMessage();
    die();

}