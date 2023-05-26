
<?php 

	require_once "conexion.php";
	$conexion=conexion();
	$x=$_POST['id'];
	$z=$_POST['name'];

	$sql4="INSERT into metodop (Idm,namem) values ('$x','$z')";
	echo $result=mysqli_query($conexion,$sql4);

 ?>