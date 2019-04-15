<?php  
require_once("connect.php");

if(isset($_GET['daily'])){
	$sql = mysqli_query($db, "SELECT SUM(fld_totalprice) AS salestoday, DATE(NOW()) as todaydate FROM tbl_orders WHERE DATE(fld_date) =DATE(NOW())");
}elseif(isset($_GET['weekly'])){
	$sql=mysqli_query($db, "SELECT SUM(fld_totalprice) AS salesweekly FROM tbl_orders WHERE WEEK(fld_date) = WEEK(DATE(NOW()))");
}
elseif(isset($_GET['monthly'])){
	$sql=mysqli_query($db, "SELECT SUM(fld_totalprice) AS salesmonthly FROM tbl_orders WHERE MONTH(fld_date) = MONTH(DATE(NOW()))");

}elseif(isset($_GET['yearly'])){
	$sql=mysqli_query($db, "SELECT SUM(fld_totalprice) AS salesyearly FROM tbl_orders WHERE YEAR(fld_date) = YEAR(DATE(NOW()))");
}


$rows = mysqli_fetch_assoc($sql);
$data = $rows;
echo json_encode($data);

?>