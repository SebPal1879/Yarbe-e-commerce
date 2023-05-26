
<?php 
	require_once "conexion.php";
	$conexion=conexion();
	$i=$_POST['id'];
	$n=$_POST['name1'];
	

	$sql1="UPDATE categoria set id='$i',
								name='$n'
				where id='$i'";
	echo $result=mysqli_query($conexion,$sql1);

 ?>