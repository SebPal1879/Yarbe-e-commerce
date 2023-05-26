function agregarCategoria(id, name) {

    cadena = "id=" + id +
        "&name=" + name;

    $.ajax({
        type: "POST",
        url: "agregarDatosc.php",
        data: cadena,
        success: function (r) {
            if (r == 1) {
                $('#tabla3').load('tablac.php');
                alertify.success("agregado con exito :)");
            } else {
                alertify.error("Fallo el servidor :(");
            }
        }
    });
}

function agregarMetodop(id, name) {

    cadena = "id=" + id +
        "&name=" + name;

    $.ajax({
        type: "POST",
        url: "agregarDatosm.php",
        data: cadena,
        success: function (r) {
            if (r == 1) {
                $('#tabla2').load('tablam.php');
                alertify.success("agregado con exito :)");
            } else {
                alertify.error("Fallo el servidor :(");
            }
        }
    });
}

function agregarProducto(idp, titlep, imagep, codep, contentp, costp, namep, paymentp) {

		cadena = "idp=" + idp +
			"&titlep=" + titlep +
			"imagep=" + imagep +
			"&codep=" + codep +
			"&contentp=" + contentp +
			"&costp=" + costp +
			"namep=" + namep +
			"&paymentp=" + paymentp;
	
		$.ajax({
			type: "POST",
			url: "agregarDatosp.php",
			data: cadena,
			success: function (r) {
				if (r == 1) {
					$('#tabla1').load('tablap.php');
					alertify.success("agregado con exito :)");
				} else {
					alertify.error("Fallo el servidor :(");
				}
			}
		});

}

function agregaform(datos){

	d=datos.split('||');

	$('#idce3').val(d[0]);
	$('#namece3').val(d[1]);
	
}

function agregaform1(datos1){

	d=datos1.split('||');

	$('#idem3').val(d[0]);
	$('#nameem3').val(d[1]);
	
}


function actualizaDatos(){


	id=$('#idce3').val();
	name1=$('#namece3').val();
	

	cadena= "id=" + id +
			"&name1=" + name1;

	$.ajax({
		type:"POST",
		url:"actualizarDatosc.php",
		data:cadena,
		success:function(r){
			
			if(r==1){
				$('#tabla3').load('tablac.php');
                alertify.success("Actualizado con exito :)");
			}else{
				alertify.error("Fallo el servidor :(");
			}
		}
	});

}

function actualizaDatosm(){


	id=$('#idem3').val();
	name1=$('#nameem3').val();
	

	//cadena= "id=" + id +
	//		"&name1=" + name1;

	$.ajax({
		type:"POST",
		url:"actualizarDatosm.php",
		//data:cadena,
		success:function(r){
			
			if(r==1){
				$('#tabla2').load('tablam.php');
                alertify.success("Actualizado con exito :)");
			}else{
				alertify.error("Fallo el servidor :(");
			}
		}
	});

}
