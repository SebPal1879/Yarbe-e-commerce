
<?php 
	require_once "conexion.php";
	$conexion=conexion();
	$t=$_POST['id'];
	$r=$_POST['name1'];
	

	$sql7="UPDATE categoria set Idm='$t',
								namem='$r'
				where Idm='$t'";
	echo $result=mysqli_query($conexion,$sql7);

 ?>