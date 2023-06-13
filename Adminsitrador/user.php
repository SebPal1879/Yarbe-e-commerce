<?php
session_start();
require_once "php/conexion.php";
$conexion = conexion();

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Catalogue</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <title>Tabla dinamica</title>
    <link rel="stylesheet" type="text/css" href="lib/css/themes/bootstrap.css">
    <link rel="stylesheet" type="text/css" href="lib/css/alertify.css">
    <link rel="stylesheet" type="text/css" href="lib/css/themes/default.css">
    <link rel="stylesheet" type="text/css" href="lib/css/select2.css">
    <link rel="stylesheet" type="text/css" href="lib/select2/css/select2.css">
    <link rel="stylesheet" type="text/css" href="lib/alertify.js">
    <link rel="stylesheet" type="text/css" href="lib/alertify.min.js">


    <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
    <script src="librerias/jquery-3.2.1.min.js"></script>
    <script src="//cdn.jsdelivr.net/npm/alertifyjs@1.13.1/build/alertify.min.js"></script>

    <!-- JavaScript -->
    <script src="//cdn.jsdelivr.net/npm/alertifyjs@1.13.1/build/alertify.min.js"></script>
    <script src="js/funciones.js"></script>
    <script src="librerias/bootstrap/js/bootstrap.js"></script>
    <script src="librerias/alertifyjs/alertify.js"></script>
    <script src="librerias/select2/js/select2.js"></script>
</head>

<body>
    <!--Header-->
    <header>
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid d-flex">
                <a class="navbar-brand" href="../Login/index.html"><img src="../pictures/Logotipo.png" alt="Yarbuna"
                        height="50px"></a>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">


                    </ul>
                    <div class="div">
                        <button id="users">Users</button>
                    </div>
                    <div class="div">
                        <button id="products">Products</button>
                    </div>
                </div>
            </div>
        </nav>
    </header>
    <!--/Header-->

    <!--Main-->

    <div class="wrapper">
        <aside>
            <header>
                <h1 class="logo">Yarbe Ecommerce Administration</h1>
            </header>
            <nav>
                <ul class="menu">
                    <li><button class="boton-menu boton-categoria active" id="All"><svg
                                xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-wallet-fill" viewBox="0 0 16 16">
                                <path
                                    d="M1.5 2A1.5 1.5 0 0 0 0 3.5v2h6a.5.5 0 0 1 .5.5c0 .253.08.644.306.958.207.288.557.542 1.194.542.637 0 .987-.254 1.194-.542.226-.314.306-.705.306-.958a.5.5 0 0 1 .5-.5h6v-2A1.5 1.5 0 0 0 14.5 2h-13z" />
                                <path
                                    d="M16 6.5h-5.551a2.678 2.678 0 0 1-.443 1.042C9.613 8.088 8.963 8.5 8 8.5c-.963 0-1.613-.412-2.006-.958A2.679 2.679 0 0 1 5.551 6.5H0v6A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-6z" />
                            </svg>Administration Customer</button></li>
                </ul>
            </nav>
            <!--Footer-->

            <footer>
                <div class="container">
                    <img src="../pictures/Logotipo.png" alt="" style="width: 100px;">
                    <article class="pt-4">© Yarbe 2023 - All Rights Reserved</article>
                </div>

            </footer>
            <!--/Footer-->


        </aside>
        <main>
            <h2 id="titulo-principal" class="titulo-principal">All Customer</h2>
            <div id="contendor-productos" class="contendor-productos">

            </div>
            <div class="container pt-5">
                <div id="tabla"></div>
            </div>

            <!-- Modal para registros nuevo User-->
            <div class="modal fade" id="modalNuevou" tabindex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog modal-sm">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Add New User</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <label>Name</label>
                            <input type="text" id="Name" name="Name" class="form-control input-sm">
                            <label>ID</label>
                            <input type="number" id="ID" name="ID" class="form-control input-sm">
                            <label>Mail</label>
                            <input type="email" id="Mail" name="Mail" class="form-control input-sm">
                            <label>Password</label>
                            <input type="text" id="Password" name="Password" class="form-control input-sm">
                            <label>Profile</label>
                            <select id="Profile" name="Profile" class="form-control input-sm"
                                aria-label="Default select example">
                                <option selected>Open this select menu</option>
                                <?php
                                $sql = "SELECT id, descripcion from roles";
                                $result = mysqli_query($conexion, $sql);

                                while ($ver = mysqli_fetch_row($result)) {
                                    $datos = $ver[0] . "||" .
                                        $ver[1];

                                    ?>
                                    <option value="<?php echo $ver[0] ?>"> <?php echo $ver[1] ?></option>
                                    <?php
                                }
                                ?>
                            </select>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" id="guradarnuevou">
                                Add</button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Modal Editr Usuario -->
            <div class="modal fade" id="modalEditaru" tabindex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog modal-sm">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Edit User</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <input type="number" hidden="" id="idu1" name="idu1">
                            <label>Name</label>
                            <input type="text" id="Nameu" name="Name" class="form-control input-sm">
                            <label>ID</label>
                            <input type="number" id="IDu2" name="ID" class="form-control input-sm">
                            <label>Mail</label>
                            <input type="text" id="Mailu" name="Mail" class="form-control input-sm">
                            <label>Password</label>
                            <input type="text" id="Passwordu" name="Password" class="form-control input-sm">
                            <label>Profile </label>
                            <input type="number" id="Profileu" name="Profileu" class="form-control input-sm">
                            <select id="Profilex" name="Profile" class="form-control input-sm"
                                aria-label="Default select example">
                                <option selected>Open Profile this select menu</option>
                                <?php
                                $sql = "SELECT id, descripcion from roles";
                                $result = mysqli_query($conexion, $sql);

                                while ($ver = mysqli_fetch_row($result)) {
                                    $datos = $ver[0] . "||" .
                                        $ver[1];

                                    ?>
                                    <option value="<?php echo $ver[0] ?>"> <?php echo $ver[1] ?></option>
                                    <?php
                                }
                                ?>
                            </select>
                            <input type="text" hidden="" id="idu1" name="">
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-warning" data-bs-dismiss="modal"
                                id="actualizardatosu">Update</button>
                        </div>
                    </div>
                </div>
            </div>


        </main>
    </div>
    <!--/Main-->



    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe"
        crossorigin="anonymous"></script>
    <script src="../Adminsitrador/scrip.js"></script>


</body>

</html>

<script type="text/javascript">
    $(document).ready(function () {
        $('#tabla').load('componentes/tablau.php');
    });
</script>

<script type="text/javascript">
    $(document).ready(function () {
        $('#guradarnuevou').click(function () {
            var name = $('#Name').val().trim();
            var id = $('#ID').val().trim();
            var mail = $('#Mail').val().trim();
            var password = $('#Password').val().trim();
            var profile = $('#Profile').val();

            // Validar campos vacíos
            if (name === '' || id === '' || mail === '' || password === '' || profile === 'Open this select menu') {
                alert('All fields must be filled out.');
                return false;
            }

            // Validar caracteres especiales en nombre y contraseña
            var specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
            if (specialChars.test(name) || specialChars.test(password)) {
                alert('Fields cannot contain special characters.');
                return false;
            }

            // Validar formato de correo electrónico
            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(mail)) {
                alert('Invalid email format.');
                return false;
            }

            // Si todas las validaciones pasan, se puede guardar los datos
            agregarUsauario(name, id, mail, password, profile);
            $('#Name').val('');
            $('#ID').val('');
            $('#Mail').val('');
            $('#Password').val('');
            $('#Profile').val('');

        });

        $('#actualizardatosu').click(function () {
            var name = $('#Nameu').val().trim();
            var id = $('#IDu2').val().trim();
            var mail = $('#Mailu').val().trim();
            var password = $('#Passwordu').val().trim();
            var profile = $('#Profilex').val();

            // Validar campos vacíos
            if (name === '' || id === '' || mail === '' || password === '' || profile === 'Open Profile this select menu') {
                alert('All fields must be filled out.');
                return false;
            }

            // Validar caracteres especiales en nombre y contraseña
            var specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
            if (specialChars.test(name) || specialChars.test(password)) {
                alert('Fields cannot contain special characters.');
                return false;
            }

            // Validar formato de correo electrónico
            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(mail)) {
                alert('Invalid email format.');
                return false;
            }

            // Si todas las validaciones pasan, se puede actualizar los datos
            actualizadatosu();
        });

    });
</script>

<script>
    var boton = document.getElementById("products");

    boton.addEventListener("click", function () {
        window.location.href = "../Adminsitrador/index.php";
    });
</script>
<script>
    var boton = document.getElementById("users");

    boton.addEventListener("click", function () {
        window.location.href = "../Adminsitrador/user.php";
    });
</script>