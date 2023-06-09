<?php 
	require_once "conexion.php";
	$conexion=conexion();
	$i=$_POST['id0'];
	$n=$_POST['name1'];
	$d=$_POST['id'];
	$m=$_POST['mail'];
	$p=$_POST['passwordu'];
	$c=$_POST['profileu'];

	$sql="UPDATE usuarios set name='$n', idc='$d', mail='$m', password='$p', role='$c'
				where Id='$i'";
	echo $result=mysqli_query($conexion,$sql);

 ?>