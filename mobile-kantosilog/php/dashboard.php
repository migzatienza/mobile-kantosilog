<?php 
require_once("connect.php");

if(isset($_GET['todaysales'])){
	$sql = mysqli_query($db, "SELECT SUM(fld_totalprice) as todaysales FROM tbl_orders WHERE DATE(fld_date)=DATE(NOW())");
}elseif(isset($_GET['overall'])){
	$sql = mysqli_query($db, "SELECT SUM(fld_totalprice) as overall FROM tbl_orders");
}
$a = mysqli_fetch_assoc($sql);
$data = $a;
echo json_encode($data);

?>