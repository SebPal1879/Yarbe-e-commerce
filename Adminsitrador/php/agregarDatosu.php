<?php 

	require_once "conexion.php";
	$conexion=conexion();
	$a=$_POST['name'];
	$b=$_POST['id'];
    $c=$_POST['mail'];
	$d=$_POST['password'];
    $e=$_POST['profile'];
 

    $sql2="INSERT into usuarios (name , idc, mail, password, role) values ('$a','$b','$c','$d','$e')";
	echo $result=mysqli_query($conexion,$sql2);

 ?>