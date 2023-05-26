<?php 

	require_once "conexion.php";
	$conexion=conexion();
	$a=$_POST['id'];
	$b=$_POST['title'];
    $c=$_POST['image'];
	$d=$_POST['code'];
    $e=$_POST['content'];
	$m=$_POST['cost'];
    $g=$_POST['name'];
	$h=$_POST['payment'];

    $sql="INSERT into producto (idname,titulo,imagen,code,content,cost,namec,mediop) values ('$a','$b','$c','$d','$e','$m','$g','$h')";
	echo $result=mysqli_query($conexion,$sql);

 ?>