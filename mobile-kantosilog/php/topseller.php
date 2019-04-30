<?php
require_once("connect.php");
$list = array();
if(isset($_GET['asd'])){
	$sql = mysqli_query($db, "SELECT *, sum(fld_qty) as qty from tbl_orders GROUP BY DATE_FORMAT(fld_date, '%M %d, %Y') order by qty desc");
}

while($rows = mysqli_fetch_assoc($sql)){
$list[] = $rows;
}

echo json_encode($list);
?>