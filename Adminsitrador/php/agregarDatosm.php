<?php 

	require_once "conexion.php";
	$conexion=conexion();
	$n=$_POST['name'];

	$sql1="INSERT into metodop (namem)
								values ('$n')";
	echo $result=mysqli_query($conexion,$sql1);

 ?>