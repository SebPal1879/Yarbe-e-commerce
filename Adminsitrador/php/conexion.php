<?php 
		function conexion(){
			$servidor="localhost";
			$usuario="root";
			$password="";
			$bd="yarbe_bd";

			$conexion=mysqli_connect($servidor,$usuario,$password,$bd);

			return $conexion;
		}

 ?>