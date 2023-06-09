<?php
require_once "../php/conexion.php";
$conexion = conexion();

?>
<div class="row">
    <div class="col-md-12 text-center">
        <h1>Products</h1>
    </div>
    <div class="col-md-12 justify-content-center align-items-center">
        <table class="table table-hover table-condensed table-bordered border-5">
            <caption>
                <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalNuevop">Add New
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-plus-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path
                            d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                    </svg></button>
            </caption>
            <tr>
                <td>Id</td>
                <td>Title</td>
                <td>Image</td>
                <td>Code</td>
                <td>Content</td>
                <td>Cost</td>
                <td>Name Category</td>
                <td>Payment method</td>
                <td>Edit</td>
                <td>Delete</td>
            </tr>
            <?php
            $sql6 = "SELECT idp, idname, titulo, imagen, code, content, cost, namec, mediop from producto";
            $result = mysqli_query($conexion, $sql6);
            while ($ver = mysqli_fetch_row($result)) {
                $datos=$ver[0]."||".
                        $ver[1]."||".
                        $ver[2]."||".
                        $ver[3]."||".
                        $ver[4]."||".
                        $ver[5]."||".
                        $ver[6]."||".
                        $ver[7]."||".
						   $ver[8];
                ?>
                <tr>
                    <td>
                        <?php echo $ver[1] ?>
                    </td>
                    <td>
                        <?php echo $ver[2] ?>
                    </td>
                    <td>
                        <img src="../stock/<?php echo $ver[3] ?>" width="50">
                    </td>
                    <td>
                        <?php echo $ver[4] ?>
                    </td>
                    <td>
                        <?php echo $ver[5] ?>
                    </td>
                    <td>
                        <?php echo $ver[6] ?>
                    </td>
                    <td>
                        <?php echo $ver[7] ?>
                    </td>
                    <td>
                        <?php echo $ver[8] ?>
                    </td>
                    <td>
                        <button class="btn btn-warning glyphicon glyphicon-pencil" data-bs-toggle="modal"
                            data-bs-target="#modalEditp" onclick="agregaform2('<?php echo $datos ?>')"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16">
                                <path
                                    d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
                            </svg>
                        </button>
                    </td>
                    <td>
                        <button class="btn btn-danger glyphicon glyphicon-remove"><svg xmlns="http://www.w3.org/2000/svg"
                                width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16" onclick="preguntarSiNo2('<?php echo $ver[0] ?>')">
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