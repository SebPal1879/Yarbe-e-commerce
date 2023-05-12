function validarFormulario(event) {
    event.preventDefault(); 
  
    // Obtener los valores de los campos de formulario
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    fetch('listar.php')
      .then(res => res.json())
      .then(data => {
        // Buscar una coincidencia exacta del correo y contraseña en los datos
        var found = data.find(item => item.correo === email && item.contrasena === password);
  
        if (found) {

          window.location.href = "../Vista productos/index.html";
          alert("El email y la contraseña ingresados son correctos.");
        } else {
          alert("El email o la contraseña ingresados son incorrectos.");
        }
      });
  }