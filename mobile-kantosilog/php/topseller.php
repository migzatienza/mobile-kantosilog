<?php
require_once("connect.php");
$list = array();
if(isset($_GET['asd'])){
	$sql = mysqli_query($db, "SELECT *, SUM(fld_qty) as topseller FROM tbl_orders GROUP BY fld_menu ORDER BY topseller DESC LIMIT 3");
}

while($rows = mysqli_fetch_assoc($sql)){
$list[] = $rows;
}

echo json_encode($list);
?>