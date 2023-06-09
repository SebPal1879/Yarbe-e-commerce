<?php 
	require_once "conexion.php";
	$conexion=conexion();
	$id=$_POST['id0'];
	$id1=$_POST['id1'];
    $t=$_POST['title1'];
    $i=$_POST['image1'];
    $c=$_POST['code1'];
    $co=$_POST['content1'];
    $cs=$_POST['cost1'];
    $n=$_POST['name1'];
    $p=$_POST['payment1'];


	$sql="UPDATE producto set idname='$id1', titulo='$t', imagen='$i', code='$c', content='$co', cost='$cs', namec='$n', mediop='$p'
				where idp='$id'";
	echo $result=mysqli_query($conexion,$sql);

 ?>