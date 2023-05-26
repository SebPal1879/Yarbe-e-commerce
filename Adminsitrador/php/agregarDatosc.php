<?php 

	require_once "conexion.php";
	$conexion=conexion();
	$n=$_POST['name'];

	$sql="INSERT into categoria (namec)
								values ('$n')";
	echo $result=mysqli_query($conexion,$sql);

 ?>