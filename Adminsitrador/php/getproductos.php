<?php 
			$servidor="localhost";
			$usuario="root";
			$password="";
			$bd="yarbe_bd";

			$conexion=mysqli_connect($servidor,$usuario,$password,$bd);
            $sql = "SELECT * FROM producto";
            $results = mysqli_query($conexion, $sql);
            $json_array = array();
			
            while ($data = mysqli_fetch_assoc($results)){
                $json_array[] = $data;
            }
            echo json_encode($json_array);
		

 ?>