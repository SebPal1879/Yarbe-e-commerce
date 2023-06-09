//Funciones de categoría
function agregarCategoria(name) {

	cadena = "&name=" + name;

	$.ajax({
		type: "POST",
		url: "php/agregarDatosc.php",
		data: cadena,
		success: function (r) {
			if (r == 1) {
				$('#tabla').load('componentes/tablac.php');
				alertify.success("Added successfully :)");
			} else {
				alertify.error("Server failed :(");
			}
		}
	});
}

function agregaform(datos) {

	d = datos.split('||');

	$('#idca').val(d[0]);
	$('#namece').val(d[1]);

}

function actualizaDatos() {


	id = $('#idca').val();
	name1 = $('#namece').val();

	cadena = "id=" + id +
		"&name1=" + name1;

	$.ajax({
		type: "POST",
		url: "php/actualizaDatos.php",
		data: cadena,
		success: function (r) {

			if (r == 1) {
				$('#tabla').load('componentes/tablac.php');
				alertify.success("Successfully updated :)");
			} else {
				alertify.error("Server failed :(");
			}
		}
	});

}

function preguntarSiNo(id) {
	alertify.confirm('Delete Data', 'Are you sure to delete this record?',
		function () { eliminarDatos(id) }
		, function () { alertify.error('Cancel') });
}

function eliminarDatos(id) {

	cadena = "id=" + id;

	$.ajax({
		type: "POST",
		url: "php/eliminarDatos.php",
		data: cadena,
		success: function (r) {
			if (r == 1) {
				$('#tabla').load('componentes/tablac.php');
				alertify.success("Deleted successfully!");
			} else {
				alertify.error("Server failed :(");
			}
		}
	});
}

//Funciones de Metodos de pago

function agregarMetodop(name) {

	cadena = "&name=" + name;

	$.ajax({
		type: "POST",
		url: "php/agregarDatosm.php",
		data: cadena,
		success: function (r) {
			if (r == 1) {
				$('#tabla1').load('componentes/tablam.php');
				alertify.success("Added successfully :)");
			} else {
				alertify.error("Server failed :(");
			}
		}
	});
}

function agregaform1(datos) {

	d = datos.split('||');

	$('#idma').val(d[0]);
	$('#nameme').val(d[1]);

}

function actualizarDatosm() {


	id = $('#idma').val();
	name1 = $('#nameme').val();

	cadena = "id=" + id +
		"&name1=" + name1;

	$.ajax({
		type: "POST",
		url: "php/actualizaDatosm.php",
		data: cadena,
		success: function (r) {

			if (r == 1) {
				$('#tabla1').load('componentes/tablam.php');
				alertify.success("Successfully updated :)");
			} else {
				alertify.error("Server failed :(");
			}
		}
	});

}

function preguntarSiNo1(id) {
	alertify.confirm('Delete Data', 'Are you sure to delete this record?',
		function () { eliminarDatosm(id) }
		, function () { alertify.error('Cancel') });
}

function eliminarDatosm(id) {

	cadena = "id=" + id;

	$.ajax({
		type: "POST",
		url: "php/eliminarDatosm.php",
		data: cadena,
		success: function (r) {
			if (r == 1) {
				$('#tabla1').load('componentes/tablam.php');
				alertify.success("Deleted successfully!");
			} else {
				alertify.error("Server failed :(");
			}
		}
	});
}

//Funciones de productos
function agregarProductos(id1, title1, image1, code1, content1, cost1, name1, payment1) {
	
	cadena = "&id1=" + id1 +
		"&title1=" + title1 +
		"&image1=" + image1 +
		"&code1=" + code1 +
		"&content1=" + content1 +
		"&cost1=" + cost1 +
		"&name1=" + name1 +
		"&payment1=" + payment1;
	
		
	$.ajax({
		type: "POST",
		url: "php/agregarDatosp.php",
		data: cadena,
		success: function (r) {

			if (r == 1) {
			$('#tabla2').load('componentes/tablap.php');
			alertify.success("Added successfully :)");
			} else {
				alertify.error("Server failed :(");
			}
		}
	});
}

function agregaform2(datos) {

	d = datos.split('||');

	$('#idpa').val(d[0]);
	$('#idp').val(d[1]);
	$('#titlep').val(d[2]);
	$('#titlepn').val(d[3]);
	$('#codep').val(d[4]);
	$('#contentp').val(d[5]);
	$('#costp').val(d[6]);
	$('#namep').val(d[7]);
	$('#paymentp').val(d[8]);

}

function actualizarDatosp() {


	id0=$('#idpa').val();
	id1=$('#idp').val();
	title1=$('#titlep').val();
	image1=$('#titlepn').val();
	code1=$('#codep').val();
	content1=$('#contentp').val();
	cost1=$('#costp').val();
	name1=$('#namep').val();
	payment1=$('#paymentp').val(); 
	payment2=$('#paymentpx').val();
	name2=$('#namepx').val();

	if(imagep != ""||imagep != null){

		image1=processSelectedFiles2(imagep);
	}

	if(payment2 != payment1 && payment2 != "Open this select menu" ){
		payment1=$('#paymentpx').val();;
	}

	if(name2 != name1 && name2 != "Open this select menu"){
		name1=$('#namepx').val();
	}

	

	cadena = "&id0=" + id0 +
		"&id1=" + id1 +
		"&title1=" + title1 +
		"&image1=" + image1 +
		"&code1=" + code1 +
		"&content1=" + content1 +
		"&cost1=" + cost1 +
		"&name1=" + name1 +
		"&payment1=" + payment1;

	$.ajax({
		type: "POST",
		url: "php/actualizaDatosp.php",
		data: cadena,
		success: function (r) {
			if (r == 1) {
				$('#tabla2').load('componentes/tablap.php');
				alertify.success("Successfully updated :)");
			} else {
				alertify.error("Server failed :(");
			}
		}
	});

}



//funcion capturar solo el nombre
function processSelectedFiles(fileInput){
	var files = fileInput.files;
		
		var2 = files[0].name;

	return var2;
}
function processSelectedFiles2(fileInput){
	var files = fileInput.files;
	
	if(files[0].name != null ||files[0].name != ""){
	
		var2 = files[0].name;

	}else{
		var2 = 0;
	}

		
	return var2;
}

function preguntarSiNo2(id) {
	alertify.confirm('Delete Data', 'Are you sure to delete this record?',
		function () { eliminarDatosp(id) }
		, function () { alertify.error('Cancel ') });
}

function eliminarDatosp(id) {

	cadena = "id=" + id;

	$.ajax({
		type: "POST",
		url: "php/eliminarDatosp.php",
		data: cadena,
		success: function (r) {
			if (r == 1) {
				$('#tabla2').load('componentes/tablap.php');
				alertify.success("Deleted successfully!");
			} else {
				alertify.error("Server failed :(");
			}
		}
	});
}