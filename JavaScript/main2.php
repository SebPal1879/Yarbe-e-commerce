<?php
require_once "../Adminsitrador/conexion.php";
$conexion = conexion();

?>
<?php
$sql = "SELECT id_p, titulo_p, imagen_p, code_p, content_p, cost_p, nameC_p, metpago_p from producto";
$result = mysqli_query($conexion, $sql);
while ($ver = mysqli_fetch_row($result)) {
    ?>

    <img class="producto-imagen" src="../stock/<?php echo $ver[2] ?>" alt="<?php echo $ver[1]?>">
    <div class="producto-detalle">
        <h3 class="producto-titulo"><?php echo $ver[1]?></h3>
        <p class="producto-precio">Product code:<?php echo $ver[4] ?></p>
        <p class="producto-precio">Content:<?php echo $ver[5] ?></p>
        <p class="producto-precio">Cost: <?php echo $ver[6] ?></p>
        <button class="agregar-producto" id="<?php echo $ver[7] ?>">Add</button>
    </div>
    <?php
}
?>

