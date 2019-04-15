<?php  
require_once("connect.php");
$totalprice = $_POST['totalprice'];
$payment = $_POST['payment'];
$change = $_POST['change'];
$htmlFName = $_POST['htmlFName'];

$sql = mysqli_query($db, "INSERT INTO tbl_orders(fld_menu, fld_price, fld_qty, fld_totalprice, fld_staff, fld_unique_id) SELECT fld_menu, fld_price, fld_qty, fld_totalprice, fld_staff, fld_uniqueid FROM tbl_purchase WHERE fld_qty >= 1");
$sql2 = mysqli_query($db, "INSERT INTO tbl_vieworders(fld_staff, fld_maintotal, fld_payment, fld_change, fld_status) VALUES('$htmlFName', '$totalprice', '$payment', '$change', 'Not Yet')");
echo json_encode(array('response'=>'success'));
$sql1 = mysqli_query($db, "DELETE FROM tbl_purchase");
?>