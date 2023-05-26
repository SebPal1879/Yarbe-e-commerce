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
				alertify.success("agregado con exito :)");
			} else {
				alertify.error("Fallo el servidor :(");
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
				alertify.success("Actualizado con exito :)");
			} else {
				alertify.error("Fallo el servidor :(");
			}
		}
	});

}

function preguntarSiNo(id) {
	alertify.confirm('Delete Data', 'Are you sure to delete this record?',
		function () { eliminarDatos(id) }
		, function () { alertify.error('Se cancelo') });
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
				alertify.success("Eliminado con exito!");
			} else {
				alertify.error("Fallo el servidor :(");
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
				alertify.success("agregado con exito :)");
			} else {
				alertify.error("Fallo el servidor :(");
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
				alertify.success("Actualizado con exito :)");
			} else {
				alertify.error("Fallo el servidor :(");
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
				alertify.success("Eliminado con exito!");
			} else {
				alertify.error("Fallo el servidor :(");
			}
		}
	});
}

//Funciones de productos
function agregarProductos(id, title, image1, code, content, cost, name, payment) {
	
	cadena = "&id=" + id +
		"&title=" + title +
		"&image1=" + image1 +
		"&code=" + code +
		"&content=" + content +
		"&cost=" + cost +
		"&name=" + name
	"&payment" + payment;

	$.ajax({
		type: "POST",
		url: "php/agregarDatosp.php",
		data: cadena,
		success: function (r) {
			if (r == 1) {
				$('#tabla2').load('componentes/tablap.php');
				alertify.success("agregado con exito :)");
			} else {
				alertify.error("Fallo el servidor :(");
			}
		}
	});
}

function agregaform2(datos) {

	d = datos.split('||');

	$('#idpa').val(d[0]);
	$('#idp').val(d[1]);
	$('#titlep').val(d[2]);
	$('#imagep').val(d[3]);
	$('#codep').val(d[4]);
	$('#contentp').val(d[5]);
	$('#costp').val(d[6]);
	$('#namep').val(d[7]);
	$('#paymentp').val(d[8]);

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
				alertify.success("Actualizado con exito :)");
			} else {
				alertify.error("Fallo el servidor :(");
			}
		}
	});

}

function preguntarSiNo1(id) {
	alertify.confirm('Delete Data', 'Are you sure to delete this record?',
		function () { eliminarDatosm(id) }
		, function () { alertify.error('Se cancelo') });
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
				alertify.success("Eliminado con exito!");
			} else {
				alertify.error("Fallo el servidor :(");
			}
		}
	});
}