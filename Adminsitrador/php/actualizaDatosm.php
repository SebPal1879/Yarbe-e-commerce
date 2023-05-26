<?php 
	require_once "conexion.php";
	$conexion=conexion();
	$id=$_POST['id'];
	$n=$_POST['name1'];

	$sql="UPDATE metodop set namem='$n'
				where idm='$id'";
	echo $result=mysqli_query($conexion,$sql);

 ?>