<?php  
require_once('connect.php');

$list = array();
$foodname = $_POST['Food_Name'];
$foodprice = $_POST['Food_Price'];
$foodqty = $_POST['Food_Quantity'];
$foodtp = $_POST['Food_TotalPrice'];

$sql = "SELECT * FROM tbl_foods WHERE food_name ='$foodname'";
$query = mysqli_query($db,$sql);
$rows = mysqli_fetch_array($query);
$dbstocks = $rows[2];
$id = $rows[0];
$minus = $dbstocks - $foodqty;
if($minus<1){
	$query1 = mysqli_query($db,"UPDATE tbl_foods SET food_stocks ='$minus', food_status ='Unavailable' WHERE food_name='$foodname'");
}else{
	$query1 = mysqli_query($db,"UPDATE tbl_foods SET food_stocks ='$minus' WHERE food_name='$foodname'");
}

$query2 = mysqli_query($db,"INSERT INTO tbl_orders(fld_unique_id, fld_menu, fld_service, fld_price, fld_qty, fld_totalprice, fld_categ) VALUES('$id', '$foodname', 'Dine In', '$foodprice', '$foodqty', '$foodtp', 'Food')");

echo json_encode(array('response', 'success'));
?>