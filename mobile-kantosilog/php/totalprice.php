<?php  
require_once("connect.php");
$list = array();
$sql = mysqli_query($db, "SELECT SUM(fld_price*fld_qty) AS totalprice FROM tbl_purchase");
while($rows = mysqli_fetch_assoc($sql)){
	$list[] = $rows;
}
echo json_encode($list);
?>