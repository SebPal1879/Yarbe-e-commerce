
<?php 

	require_once "conexion.php";
	$conexion=conexion();
	$a=$_POST['idp'];
	$b=$_POST['titlep'];
    $c=$_POST['imagep'];
	$d=$_POST['codep'];
    $e=$_POST['contentp'];
	$m=$_POST['costp'];
    $g=$_POST['namep'];
	$h=$_POST['paymentp'];

	$sql5="INSERT into producto (idp, titlep, imagep, codep, contentp, costp, namep, paymentp) values ('$a','$b','$c','$d','$e','$m','$g','$h')";
	echo $result=mysqli_query($conexion,$sql5);

 ?>