<?php 

	require_once "conexion.php";
	$conexion=conexion();
	$a=$_POST['id1'];
	$b=$_POST['title1'];
    $c=$_POST['image1'];
	$d=$_POST['code1'];
    $e=$_POST['content1'];
	$m=$_POST['cost1'];
    $g=$_POST['name1'];
	$h=$_POST['payment1'];

    $sql2="INSERT into producto (idname,titulo,imagen,code,content,cost,namec,mediop) values ('$a','$b','$c','$d','$e','$m','$g','$h')";
	echo $result=mysqli_query($conexion,$sql2);

 ?>