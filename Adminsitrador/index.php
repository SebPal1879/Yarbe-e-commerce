<<<<<<< HEAD
<?php 
	session_start();
	require_once "php/conexion.php";
	$conexion=conexion();

 ?>
=======
<?php
require_once "conexion.php";
$conexion = conexion();

?>


>>>>>>> 00c291ad4988e5ec039abbfdf2d094540adceabf
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
<<<<<<< HEAD
    <script src="js/funciones.js"></script>
=======
    <script src="funciones.js"></script>
>>>>>>> 00c291ad4988e5ec039abbfdf2d094540adceabf
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
<<<<<<< HEAD
                            </svg>Administration</button></li>
=======
                            </svg> All Products</button></li>
                    <li><button class="boton-menu boton-categoria" id="Cardiovascular"><svg
                                xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-chat-right-heart-fill" viewBox="0 0 16 16">
                                <path
                                    d="M16 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h9.586a1 1 0 0 1 .707.293l2.853 2.853a.5.5 0 0 0 .854-.353V2ZM8 3.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z" />
                            </svg> Categorias</button></li>
>>>>>>> 00c291ad4988e5ec039abbfdf2d094540adceabf
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
<<<<<<< HEAD

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
=======
                <!--Esto se va llenar con JS-->
            </div>
            <div class="container pt-5">
                <div id="tabla3"></div>
                <!-- Modal para nuevo registro Categoria-->
                <div class="modal fade" id="modalNuevoc" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Add New Category</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <label>Id</label>
                                <input type="text" id="idc3" name="idc" class="form-control input-sm">
                                <label>Name</label>
                                <input type="text" id="namec3" name="namec" class="form-control input-sm">
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-primary" data-bs-dismiss="modal"
                                    id="guardarnuevoc">Add</button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Modal para editar Categoria-->
                <div class="modal fade" id="modalEditarc" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Edit Category</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <label>Id</label>
                                <input type="text" id="idce3" name="idce" class="form-control input-sm">
                                <label>Name</label>
                                <input type="text" id="namece3" name="namece" class="form-control input-sm">
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-warning" data-bs-dismiss="modal"
                                    id="actualizardatosc">Update</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container pt-5">
                <div id="tabla1"></div>
                <!-- Modal para registros nuevo Producto-->
                <div class="modal fade" id="modalNuevop" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Add New Products</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <label>Id</label>
                                <input type="text" id="idp3" name="idp" class="form-control input-sm">
                                <label>Title</label>
                                <input type="text" id="titlep3" name="titlep" class="form-control input-sm">
                                <label>Image</label>
                                <input type="file" id="imagep3" name="imagep" class="form-control input-sm">
                                <label>Code</label>
                                <input type="text" id="codep3" name="codep" class="form-control input-sm">
                                <label>Content</label>
                                <input type="text" id="contentp3" name="contentp" class="form-control input-sm">
                                <label>Cost</label>
                                <input type="number" id="costp3" name="costp" class="form-control input-sm">
                                <label>Name Category</label>
                                <input type="text" id="namep3" name="namep" class="form-control input-sm">
                                <label>Payment method</label>
                                <input type="text" id="paymentp3" name="paymentp" class="form-control input-sm">
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
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <label>Id</label>
                                <input type="text" id="idp" name="idp" class="form-control input-sm">
                                <label>Title</label>
                                <input type="text" id="titlep" name="titlep" class="form-control input-sm">
                                <label>Image</label>
                                <input type="file" id="imagep" name="imagep" class="form-control input-sm">
                                <label>Code</label>
                                <input type="text" id="codep" name="codep" class="form-control input-sm">
                                <label>Content</label>
                                <input type="text" id="contentp" name="contentp" class="form-control input-sm">
                                <label>Cost</label>
                                <input type="number" id="costp" name="costp" class="form-control input-sm">
                                <label>Name Category</label>
                                <input type="text" id="namep" name="namep" class="form-control input-sm">
                                <label>Payment method</label>
                                <input type="text" id="paymentp" name="paymentp" class="form-control input-sm">
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
>>>>>>> 00c291ad4988e5ec039abbfdf2d094540adceabf
                        </div>
                    </div>
                </div>
            </div>

<<<<<<< HEAD
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
=======
            <div class="container pt-5">
                <div id="tabla2"></div>
                <!-- Modal para nuevo Metodo de Pago -->
                <div class="modal fade" id="modalNuevom" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Add New methods</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <label>Id</label>
                                <input type="number" id="idm3" name="idm" class="form-control input-sm">
                                <label>Name</label>
                                <input type="text" id="namem3" name="namem" class="form-control input-sm">
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-primary" data-bs-dismiss="modal"
                                    id="guardarnuevom">Add</button>
                            </div>
                        </div>
                    </div>
                </div>


                <!-- Editar Metodo de Pago -->
                <div class="modal fade" id="modalEditarm" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Edit Payment methods</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <label>Id</label>
                                <input type="number" id="idem3" name="idm" clas s="form-control input-sm">
                                <label>Name</label>
                                <input type="text" id="nameem3" name="namem" class="form-control input-sm">
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-warning" data-bs-dismiss="modal"
                                    id="actualizardatosm">Update</button>
                            </div>
>>>>>>> 00c291ad4988e5ec039abbfdf2d094540adceabf
                        </div>
                    </div>
                </div>
            </div>
<<<<<<< HEAD

        </main>
=======
    </main>
>>>>>>> 00c291ad4988e5ec039abbfdf2d094540adceabf
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
<<<<<<< HEAD
        $('#tabla').load('componentes/tablac.php');
=======
        $('#tabla3').load('tablac.php');
>>>>>>> 00c291ad4988e5ec039abbfdf2d094540adceabf
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
<<<<<<< HEAD
        $('#guradarnuevoc').click(function () {
            name = $('#namec1').val();
            agregarCategoria(name);
=======
        $('#guardarnuevoc').click(function () {
            id = $('#idc3').val();
            name = $('#namec3').val();
            agregarCategoria(id, name);
>>>>>>> 00c291ad4988e5ec039abbfdf2d094540adceabf
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