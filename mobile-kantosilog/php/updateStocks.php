<?php  
require_once("connect.php");

$addfoodname1 = $_POST['addfoodname1'];
$addfoodstocks1 = $_POST['addfoodstocks1'];
$htmlFName = $_POST['htmlFName'];

$sql = mysqli_query($db, "SELECT * FROM tbl_inventory WHERE fld_name = '$addfoodname1'");
$rows = mysqli_fetch_array($sql);
$dbstocks = $rows[2];
$totaladded = $addfoodstocks1 + $dbstocks;

$sql2 = mysqli_query($db, "INSERT INTO tbl_invlogs(fld_name, fld_oldstocks, fld_additional, fld_totalstocks, fld_staff, fld_status) VALUES('$addfoodname1', '$dbstocks', '$addfoodstocks1', '$totaladded', '$htmlFName', 'Restock')");

$sql3 = mysqli_query($db, "UPDATE tbl_inventory SET fld_stocks='$totaladded' WHERE fld_name ='$addfoodname1'");

echo json_encode(array('response'=> 'success'));
?>