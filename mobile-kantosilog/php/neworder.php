<?php  
require_once("connect.php");

$foodname = $_POST['name'];
$foodprice = $_POST['price'];
$ing1 = $_POST['ing1'];
$ing2 = $_POST['ing2'];
$ing3 = $_POST['ing3'];
$htmlFName = $_POST['htmlFName'];


$list = array();
$sql = mysqli_query($db, "SELECT * FROM tbl_inventory WHERE fld_name='$ing1' OR fld_name='$ing2' OR fld_name='$ing3' ORDER BY fld_stocks ASC");
$rows=mysqli_fetch_array($sql);
$dbStocks = $rows[2];

$sql1 = $db->query("SELECT * FROM tbl_vieworders ORDER BY fld_orderid DESC LIMIT 1");
$rows1 = mysqli_fetch_array($sql1);
$orderid = $rows1['fld_orderid'] +1;

if($dbStocks <=0){
	echo json_encode(array('response'=>'failed'));
}else{
	$sql1 = mysqli_query($db,"INSERT INTO tbl_purchase(fld_menu, fld_price, fld_qty, fld_ing1, fld_ing2, fld_ing3, fld_totalprice, fld_staff, fld_uniqueid) VALUES('$foodname', '$foodprice', '0', '$ing1', '$ing2', '$ing3', '0', '$htmlFName', '$orderid')");
	echo json_encode(array('response'=>'success'));
}
?>