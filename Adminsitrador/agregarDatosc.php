
<?php 

	require_once "conexion.php";
	$conexion=conexion();
	$i=$_POST['id'];
	$n=$_POST['name'];

	$sql="INSERT into categoria (id,name) values ('$i','$n')";
	echo $result=mysqli_query($conexion,$sql);

 ?>