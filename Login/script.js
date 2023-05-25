function validarFormulario(event) {
    event.preventDefault(); 
  
    // Obtener los valores de los campos de formulario
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    fetch('listar.php')
      .then(res => res.json())
      .then(data => {

        // Buscar una coincidencia exacta del correo, contraseña y rol en los datos
        var admin = data.find(item => item.correo === email && item.contrasena === password && item.id_rol === 1);
        var cliente = data.find(item => item.correo === email && item.contrasena === password && item.id_rol === 2);
        

        if (cliente) {

          window.location.href = "../Vista productos/index.html";
          
        } else if (admin){

          window.location.href = "../Vista productos/prueba.html";

        } else {

          alert("Email or password are incorrect.");
          

        }
      });
  }