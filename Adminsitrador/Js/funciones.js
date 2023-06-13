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

//Funcion validar campo no vacio de Categoria
function validarCampo() {
	var nombre = $('#namec1').val().trim();
	var caracteresEspeciales = /[.-\/&%$#]/;
  
	if (nombre === '' || caracteresEspeciales.test(nombre)) {
	  $('#namec1').addClass('campo-invalido');
	  return false;
	} else {
	  $('#namec1').removeClass('campo-invalido');
	  return true;
	}
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

//Funcion validar campo no vacio de Categoria
function validarCampo() {
	var nombre = $('#namem1').val().trim();
	var caracteresEspeciales = /[.-\/&%$#]/;
  
	if (nombre === '' || caracteresEspeciales.test(nombre)) {
	  $('#namem1').addClass('campo-invalido');
	  return false;
	} else {
	  $('#namem1').removeClass('campo-invalido');
	  return true;
	}
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
	image2=$('#imagep').val();
	var image3 = processSelectedFiles2($('#imagep')[0]);


    if (image3 != 0) {
        image1 = image3;
    } 

    if (payment2 != payment1 && payment2 != "Open this select menu") {
        payment1 = payment2;
    }

    if (name2 != name1 && name2 != "Open this select menu") {
        name1 = name2;
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


// Función para capturar solo el nombre del archivo
function processSelectedFiles(fileInput) {
    var files = fileInput.files;
    var var2 = files[0].name;
    return var2;
}

function processSelectedFiles2(fileInput) {
    var files = fileInput.files;
    var var2 = (files[0] && files[0].name) || 0;
    return var2;
}

//función para validar campos al momento de guardar nuevos productos
function validarCampos() {
    var id = $('#idp3').val();
    var title = $('#titlep3').val();
    var image = $('#imagep3').val();
    var code = $('#codep3').val();
    var content = $('#contentp3').val();
    var cost = $('#costp3').val();
    var name = $('#namep3').val();
    var payment = $('#paymentp3').val();

    var isValid = true; // Variable para rastrear la validez de los campos

    // Verificar cada campo y resaltar los campos faltantes
    if (id.trim() === '') {
        $('#idp3').addClass('campo-faltante');
        isValid = false;
    } else {
        $('#idp3').removeClass('campo-faltante');
    }

    if (title.trim() === '') {
        $('#titlep3').addClass('campo-faltante');
        isValid = false;
    } else {
        $('#titlep3').removeClass('campo-faltante');
    }

    if (image.trim() === '') {
        $('#imagep3').addClass('campo-faltante');
        isValid = false;
    } else {
        $('#imagep3').removeClass('campo-faltante');
    }

    if (code.trim() === '') {
        $('#codep3').addClass('campo-faltante');
        isValid = false;
    } else {
        $('#codep3').removeClass('campo-faltante');
    }

    if (content.trim() === '') {
        $('#contentp3').addClass('campo-faltante');
        isValid = false;
    } else {
        $('#contentp3').removeClass('campo-faltante');
    }

    if (cost.trim() === '') {
        $('#costp3').addClass('campo-faltante');
        isValid = false;
    } else {
        $('#costp3').removeClass('campo-faltante');
    }

    if (name.trim() === 'none' || name.trim() === '') {
        $('#namep3').addClass('campo-faltante');
        isValid = false;
    } else {
        $('#namep3').removeClass('campo-faltante');
    }

    if (payment.trim() === 'noen' || payment.trim() === '') {
        $('#paymentp3').addClass('campo-faltante');
        isValid = false;
    } else {
        $('#paymentp3').removeClass('campo-faltante');
    }

    if (!isValid) {
        // Mostrar un mensaje o realizar alguna acción para indicar los campos faltantes
        // ...

        return false;
    }

    return true;
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

//Funciones de usuario
function agregarUsauario(name, id, mail, password, profile) {

	cadena = "&name=" + name +
	"&id=" + id +
	"&mail=" + mail +
	"&password=" + password +
	"&profile=" + profile;

	$.ajax({
		type: "POST",
		url: "php/agregarDatosu.php",
		data: cadena,
		success: function (r) {
			if (r == 1) {
				$('#tabla').load('componentes/tablau.php');
				alertify.success("Added successfully :)");
			} else {
				alertify.error("Server failed :(");
			}
		}
	});
}

function agregaform3(datos) {

	d = datos.split('||');

	$('#idu1').val(d[0]);
	$('#Nameu').val(d[1]);
	$('#IDu2').val(d[2]);
	$('#Mailu').val(d[3]);
	$('#Passwordu').val(d[4]);
	$('#Profileu').val(d[5]);
	

}


function actualizadatosu() {

	id0 = $('#idu1').val();
	name1 = $('#Nameu').val();
	id = $('#IDu2').val();
	mail = $('#Mailu').val();
	passwordu = $('#Passwordu').val();
	profileu = $('#Profileu').val();
	profilex = $('#Profilex').val();
	

	if(profilex == 2 || profilex ==1 ){
		profileu=$('#Profilex').val();
	}


	cadena = "&id0=" + id0 +
		"&name1=" + name1 +
		"&id=" + id +
		"&mail=" + mail +
		"&passwordu=" + passwordu +
		"&profileu=" + profileu;

		

	$.ajax({
		type: "POST",
		url: "php/actualizaDatosu.php",
		data: cadena,
		success: function (r) {

			if (r == 1) {
				$('#tabla').load('componentes/tablau.php');
				alertify.success("Successfully updated :)");
			} else {
				alertify.error("Server failed :(");
			}
		}
	});

}

function preguntarSiNou(id) {
	alertify.confirm('Delete Data', 'Are you sure to delete this record?',
		function () { eliminarDatosu(id) }
		, function () { alertify.error('Cancel') });
}

function eliminarDatosu(id) {

	cadena = "id=" + id;

	$.ajax({
		type: "POST",
		url: "php/eliminarDatosu.php",
		data: cadena,
		success: function (r) {
			if (r == 1) {
				$('#tabla').load('componentes/tablau.php');
				alertify.success("Deleted successfully!");
			} else {
				alertify.error("Server failed :(");
			}
		}
	});
}