<?php 
	session_start();
	require_once "php/conexion.php";
	$conexion=conexion();

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
    <link rel="stylesheet" type="text/css" href="librerias/bootstrap/css/bootstrap.css">
    <link rel="stylesheet" type="text/css" href="librerias/alertifyjs/css/alertify.css">
    <link rel="stylesheet" type="text/css" href="librerias/alertifyjs/css/themes/default.css">
    <link rel="stylesheet" type="text/css" href="librerias/select2/css/select2.css">
    <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
    <script src="librerias/jquery-3.2.1.min.js"></script>
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
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Dropdown
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
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
                        <input type="text" id="namec1" class="from-control input-sm">
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
                        <input type="text" id="namece" class="from-control input-sm">
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-warning" data-bs-dismiss="modal" id="actualizardatosc">Update</button>
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
        $('#tabla1').load('tablap.php');
    });
</script>
<script type="text/javascript">
    $(document).ready(function () {
        $('#tabla2').load('tablam.php');
    });
</script>

<script type="text/javascript">
    $(document).ready(function () {
        $('#guradarnuevoc').click(function () {
            name = $('#namec1').val();
            agregarCategoria(name);
        });

        $('#actualizardatosc').click(function () {
            actualizaDatos();
        });
    });
</script>
<script type="text/javascript">
    $(document).ready(function () {
        $('#guardarnuevom').click(function () {
            id = $('#idm3').val();
            name = $('#namem3').val();
            agregarMetodop(id, name);
        });
        $('#actualizardatosm').click(function () {
            actualizaDatosm();
        });

    });
</script>

<script type="text/javascript">
    $(document).ready(function () {
        $('#guardarnuevop').click(function () {
            idp = $('idp3').val();
            titlep = $('titlep3').val();
            imagep = $('imagep3').val();
            codep = $('codep3').val();
            contentp = $('contentp3').val();
            costp = $('costp3').val();
            namep = $('namep3').val();
            paymentp = $('paymentp3').val();
            agregarProducto(idp, titlep, imagep, codep, contentp, costp, namep, paymentp);
        });
    });
</script>