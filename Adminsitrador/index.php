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
                </div>
                <div class="div">
                    <button id="users">Users</button>
                </div>
                <div class="div">
                    <button id="products">Products</button>
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
                            </svg>Administration</button></li>
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
            <h2 id="titulo-principal" class="titulo-principal">All Products</h2>
            <div id="contendor-productos" class="contendor-productos">

            </div>
            <div class="container pt-5">
                <div id="tabla"></div>
            </div>
            <!-- Modal registros nuevos Categoria -->
            <div class="modal fade" id="modalNuevoc" tabindex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog modal-sm">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Add New Category</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <label>Name</label>
                            <input type="text" id="namec1" class="from-control input-sm" required>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" id="guradarnuevoc">
                                Add</button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Modal Editr Categoria -->
            <div class="modal fade" id="modalEditarc" tabindex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog modal-sm">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Edit Category</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <input type="text" hidden="" id="idca" name="">
                            <label>Name</label>
                            <input type="text" id="namece" class="from-control input-sm" required>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-warning" data-bs-dismiss="modal"
                                id="actualizardatosc">Update</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container pt-5">
                <div id="tabla1"></div>
            </div>
            <!-- Modal registros nuevos Metodos Pagos -->
            <div class="modal fade" id="modalNuevom" tabindex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog modal-sm">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Add New Payment Method<button type="button"
                                    class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <label>Name</label>
                            <input type="text" id="namem1" class="from-control input-sm">
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" id="guradarnuevom">
                                Add</button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Modal Editar Metodo Pago -->
            <div class="modal fade" id="modalEditarm" tabindex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog modal-sm">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Edit Payment Method</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <input type="text" hidden="" id="idma" name="">
                            <label>Name</label>
                            <input type="text" id="nameme" class="from-control input-sm">
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-warning" data-bs-dismiss="modal"
                                id="actualizardatosm">Update</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container pt-5">
                <div id="tabla2"></div>
            </div>

            <!-- Modal para registros nuevo Producto-->
            <div class="modal fade" id="modalNuevop" tabindex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Add New Products</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div class="modal-body">
                            <div id="error-message" style="display: none;"></div>
                            <label>Id</label>
                            <input type="text" id="idp3" name="idp" class="form-control input-sm" required>
                            <label>Title</label>
                            <input type="text" id="titlep3" name="titlep" class="form-control input-sm" required>
                            <label id="fichero" for="imagep3">Image</label>
                            <input type='file' id='imagep3' name="file" class="form-control input-sm"
                                accept=".jpg, .jpeg, .png" onchange="processSelectedFiles(this)" required>
                            <label>Code</label>
                            <input type="text" id="codep3" name="codep" class="form-control input-sm" required>
                            <label>Content</label>
                            <input type="text" id="contentp3" name="contentp" class="form-control input-sm" required>
                            <label>Cost: only numeric values</label>
                            <input type="number" id="costp3" name="costp" class="form-control input-sm" required>
                            <label>Name Category</label>
                            <select id="namep3" class="form-select" aria-label="Default select example" required>
                                <option value="none" selected>Open this select menu</option>
                                <?php
                                $sql = "SELECT idc, namec from categoria";
                                $result = mysqli_query($conexion, $sql);
                                while ($ver = mysqli_fetch_row($result)) {
                                    $datos = $ver[0] . "||" .
                                        $ver[1];
                                    ?>
                                    <option value="<?php echo $ver[1] ?>"> <?php echo $ver[1] ?></option>
                                    <?php
                                }
                                ?>
                            </select>
                            <label>Payment method</label>
                            <select id="paymentp3" class="form-select" aria-label="Default select example" required>
                                <option value="none" selected>Open this select menu</option>
                                <?php
                                $sql = "SELECT idm, namem from metodop";
                                $result = mysqli_query($conexion, $sql);

                                while ($ver = mysqli_fetch_row($result)) {
                                    $datos = $ver[0] . "||" .
                                        $ver[1];

                                    ?>
                                    <option value="<?php echo $ver[1] ?>"> <?php echo $ver[1] ?></option>
                                    <?php
                                }
                                ?>
                            </select>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal"
                                id="guardarnuevop">Add</button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Modal para registros de editar Producto -->
            <div class="modal fade" id="modalEditp" tabindex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">

                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <input type="text" hidden="" id="idpa" name="" required>
                            <label>Id</label>
                            <input type="text" id="idp" name="idp" class="form-control input-sm" required>
                            <label>Title</label>
                            <input type="text" id="titlep" name="titlep" class="form-control input-sm" required>
                            <div>
                                <label>Imagen</label>
                                <input type="text" id="titlepn" name="titlepn" class="form-control input-sm" readonly>
                                <label for="imagep">Eddit Image</label>
                                <input type="file" id="imagep" name="imagep" class="form-control input-sm"
                                    accept=".jpg, .jpeg, .png" onchange="processSelectedFiles(this)">
                            </div>
                            <label>Code</label>
                            <input type="text" id="codep" name="codep" class="form-control input-sm" required>
                            <label>Content</label>
                            <input type="text" id="contentp" name="contentp" class="form-control input-sm" required>
                            <label>Cost: only numeric values</label>
                            <input type="number" id="costp" name="costp" class="form-control input-sm" required>
                            <label>Name Category</label>
                            <input type="text" id="namep" name="namep" class="form-control input-sm" readonly>
                            <select id="namepx" class="form-select" aria-label="Default select example">
                                <option selected>Open this select menu</option>
                                <?php
                                $sql = "SELECT idc, namec from categoria";
                                $result = mysqli_query($conexion, $sql);
                                while ($ver = mysqli_fetch_row($result)) {
                                    $datos = $ver[0] . "||" .
                                        $ver[1];
                                    ?>
                                    <option value="<?php echo $ver[1] ?>"> <?php echo $ver[1] ?></option>
                                    <?php
                                }
                                ?>
                            </select>
                            <label>Payment method</label>
                            <input type="text" id="paymentp" name="paymentp" class="form-control input-sm" readonly>
                            <select id="paymentpx" class="form-select" aria-label="Default select example">
                                <option selected>Open this select menu</option>
                                <?php
                                $sql = "SELECT idm, namem from metodop";
                                $result = mysqli_query($conexion, $sql);

                                while ($ver = mysqli_fetch_row($result)) {
                                    $datos = $ver[0] . "||" .
                                        $ver[1];

                                    ?>
                                    <option value="<?php echo $ver[1] ?>"> <?php echo $ver[1] ?></option>
                                    <?php
                                }
                                ?>
                            </select>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-warning" data-bs-dismiss="modal"
                                id="actualizardatosp">Update</button>
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
        $('#tabla').load('componentes/tablac.php');
    });
</script>
<script type="text/javascript">
    $(document).ready(function () {
        $('#tabla1').load('componentes/tablam.php');
    });
</script>
<script type="text/javascript">
    $(document).ready(function () {
        $('#tabla2').load('componentes/tablap.php');
    });
</script>

<script type="text/javascript">
    $(document).ready(function () {
        $('#guradarnuevoc').click(function () {
            var nombre = $('#namec1').val().trim();
            var caracteresEspeciales = /[.-\/&%$#]/;

            if (nombre === '' || caracteresEspeciales.test(nombre)) {
                $('#namec1').addClass('campo-invalido');
                alert('The field "Name" is invalid.');
                return false;
            } else {
                $('#namec1').removeClass('campo-invalido');
                agregarCategoria(nombre);
                $('#namec1').val('');
            }
        });

        $('#actualizardatosc').click(function () {
            var nombre = $('#namece').val().trim();
            var caracteresEspeciales = /[.-\/&%$#]/;

            if (nombre === '' || caracteresEspeciales.test(nombre)) {
                $('#namece').addClass('campo-invalido');
                alert('The field "Name" is invalid.');
                return false;
            } else {
                $('#namece').removeClass('campo-invalido');
                actualizaDatos();
                $('#namec1').val('');
            }
        });
    });

</script>
<script type="text/javascript">
    $(document).ready(function () {
        $('#guradarnuevom').click(function () {
            var nombre = $('#namem1').val().trim();
            var caracteresEspeciales = /[.-\/&%$#]/;

            if (nombre === '' || caracteresEspeciales.test(nombre)) {
                $('#namem1').addClass('campo-invalido');
                alert('The field "Name" is invalid.');
                return false;
            } else {
                $('#namem1').removeClass('campo-invalido');
                agregarMetodop(nombre);
                $('#namem1').val('');
            }
        });

        $('#actualizardatosm').click(function () {
            var nombre = $('#nameme').val().trim();
            var caracteresEspeciales = /[.-\/&%$#]/;

            if (nombre === '' || caracteresEspeciales.test(nombre)) {
                $('#nameme').addClass('campo-invalido');
                alert('The field "Name" is invalid.');
                return false;
            } else {
                $('#nameme').removeClass('campo-invalido');
                actualizarDatosm();
                $('#namem1').val('');
            }
        });

    });
</script>

<script type="text/javascript">
    $(document).ready(function () {

        $('#guardarnuevop').click(function (event) {
            event.preventDefault(); // Evita que se realice el envío del formulario

            var camposValidos = validarCampos();

            if (camposValidos) {
                // Aquí puedes realizar la acción para crear el nuevo producto
                id1 = $('#idp3').val();
                title1 = $('#titlep3').val();
                image1 = processSelectedFiles(imagep3);
                code1 = $('#codep3').val();
                content1 = $('#contentp3').val();
                cost1 = $('#costp3').val();
                name1 = $('#namep3').val();
                payment1 = $('#paymentp3').val();
                agregarProductos(id1, title1, image1, code1, content1, cost1, name1, payment1);

                $('#idp3').val('');
                $('#titlep3').val('');
                $('#imagep3').val('');
                $('#codep3').val('');
                $('#contentp3').val('');
                $('#costp3').val('');
                $('#namep3').val('Open this select menu');
                $('#paymentp3').val('Open this select menu');

                $('#modalNuevop').modal('hide');
            } else {
                // Mostrar campos faltantes dentro del formulario
                var errorMessage = "Please complete the required fields.";
                $('#error-message').text(errorMessage).show();

                // Agregar clase CSS para resaltar los campos requeridos que faltan
                $('input:required, select:required').each(function () {
                    if ($(this).val() === '') {
                        $(this).addClass('campo-faltante');
                    }
                });

                // Enfoque de desplazamiento suave (smooth scrolling) al primer campo faltante
                var firstMissingField = $('.campo-faltante:first');
                if (firstMissingField.length) {
                    $('html, body').animate({
                        scrollTop: firstMissingField.offset().top - 100
                    }, 500);
                }
            }
        });





        $('#actualizardatosp').click(function () {
            actualizarDatosp();
            $('#idp3').val('');
                $('#titlep3').val('');
                $('#imagep3').val('');
                $('#codep3').val('');
                $('#contentp3').val('');
                $('#costp3').val('');
                $('#namep3').val('Open this select menu');
                $('#paymentp3').val('Open this select menu');
        });
        document.getElementById('modal-body').reset();
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