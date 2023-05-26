<?php 
	require_once "conexion.php";
	$conexion=conexion();
	$id=$_POST['id'];
	$n=$_POST['name1'];

	$sql="UPDATE categoria set namec='$n'
				where idc='$id'";
	echo $result=mysqli_query($conexion,$sql);

 ?>