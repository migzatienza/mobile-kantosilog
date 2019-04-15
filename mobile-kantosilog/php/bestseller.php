<?php  
require_once("connect.php");
$list = array();
$sql = mysqli_query($db, "SELECT fld_menu,SUM(fld_qty) as qty FROM tbl_orders WHERE DATE(fld_date) = DATE(CURDATE()) GROUP BY fld_menu ORDER BY qty DESC LIMIT 1");
$rows = mysqli_fetch_assoc($sql);
echo json_encode($rows);
?>