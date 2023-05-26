<?php
session_start();
require_once "../php/conexion.php";
$conexion = conexion();

?>
<div class="row">
    <div class="col-sm-12">
        <h2>Payment Method</h2>
        <table class="table table-hover table-condensed table-bordered">
            <caption>
                <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalNuevom">
                    Add New <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-file-plus" viewBox="0 0 16 16">
                        <path
                            d="M8.5 6a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V10a.5.5 0 0 0 1 0V8.5H10a.5.5 0 0 0 0-1H8.5V6z" />
                        <path
                            d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" />
                    </svg>
                    <span class="glyphicon glyphicon-plus"></span>
                </button>
            </caption>
            <tr>
                <td>Name</td>
                <td>Edit</td>
                <td>Delete</td>
            </tr>

            <?php
            $sql = "SELECT idm, namem from metodop";
            $result = mysqli_query($conexion, $sql);
            while ($ver = mysqli_fetch_row($result)) {
                $datos=$ver[0]."||".
						   $ver[1];
                ?>
                <tr>

                    <td>
                        <?php echo $ver[1] ?>
                    </td>
                    <td>
                        <button class="btn btn-warning glyphicon glyphicon-pencil" data-bs-toggle="modal"
                            data-bs-target="#modalEditarm" onclick="agregaform1('<?php echo $datos ?>')"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16">
                                <path
                                    d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
                            </svg></button>
                    </td>
                    <td>
                        <button class="btn btn-danger glyphicon glyphicon-remove" onclick="preguntarSiNo1('<?php echo $ver[0] ?>')"><svg xmlns="http://www.w3.org/2000/svg"
                                width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                <path
                                    d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                            </svg></button>
                    </td>
                </tr>
                <?php
            }
            ?>
        </table>
    </div>
</div>