<?php 
			$servidor="localhost";
			$usuario="root";
			$password="";
			$bd="yarbe_bd";

      $conexion=mysqli_connect($servidor,$usuario,$password,$bd);
      $ordernum = mysqli_real_escape_string($conexion, $_POST['ordernum']);
      $address = mysqli_real_escape_string($conexion, $_POST['address']);
      $mediopago = mysqli_real_escape_string($conexion, $_POST['mediop']);
      $total = mysqli_real_escape_string($conexion, $_POST['total']);

      mysqli_query($conexion, "INSERT INTO compra (ordernum, address, mediop, total) VALUES ('".$ordernum."','".$address."','".$mediopago."','".$total."')")

      // try{
			// $conexion=mysqli_connect($servidor,$usuario,$password,$bd);
      //       $sql = "INSERT INTO producto (ordernum, address, mediop, total) VALUES (ordernum, address, mediop, total)";
      //       // $results = mysqli_query($conexion, $sql);
      //       // $json_array = array();
      //       $stmt = $conexion->prepare ("INSERT INTO producto (ordernum, address, mediop, total) VALUES (ordernum, address, mediop, total)");
      //       foreach ($d as $row) {
      //         echo "banderuna";
      //         $ordernum = $row['ordernum'];
      //         $address = $row['address'];
      //         $mediop = $row['mediop'];
      //         $total = $row['total'];
      //         $stmt->execute();
      //       }

      //       echo "Datos insertados correctamente.";
      //     } catch (PDOException $e) {
      //       echo "Error al conectar con la base de datos: " . $e->getMessage();
      //     }
		

 ?>
 