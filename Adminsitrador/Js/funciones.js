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