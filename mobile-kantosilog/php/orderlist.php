<?php  
require_once("connect.php");
$list = array();
$sql = mysqli_query($db, "SELECT * FROM tbl_purchase WHERE fld_qty >= 1");
while($rows = mysqli_fetch_assoc($sql)){
	$list[] = $rows;
}
echo json_encode($list);
?>