<?php 
require_once("connect.php");
$id = $_POST['id'];
$query = mysqli_query($db,"SELECT * FROM tbl_purchase WHERE fld_id='$id'");
$rows = mysqli_fetch_array($query);
$food_ing1=$rows[4];
$food_ing2=$rows[5];
$food_ing3=$rows[6];
$dbstocks=$rows[3];


$query1 = mysqli_query($db,"SELECT * FROM tbl_inventory WHERE fld_name='$food_ing1'");
$query2 = mysqli_query($db,"SELECT * FROM tbl_inventory WHERE fld_name='$food_ing2'");
$query3 = mysqli_query($db,"SELECT * FROM tbl_inventory WHERE fld_name='$food_ing3'");

$rows1=mysqli_fetch_array($query1);
$rows2=mysqli_fetch_array($query2);
$rows3=mysqli_fetch_array($query3);

$dbstocks1=$rows1[2];
$dbstocks2=$rows2[2];
$dbstocks3=$rows3[2];

$void1 = $dbstocks1+$dbstocks;
$void2 = $dbstocks2+$dbstocks;
$void3 = $dbstocks3+$dbstocks;

$sql1 = mysqli_query($db,"UPDATE tbl_inventory SET fld_stocks='$void1' WHERE fld_name='$food_ing1'");
$sql2 = mysqli_query($db,"UPDATE tbl_inventory SET fld_stocks='$void2' WHERE fld_name='$food_ing2'");
$sql3 = mysqli_query($db,"UPDATE tbl_inventory SET fld_stocks='$void3' WHERE fld_name='$food_ing3'");
$sql = mysqli_query($db, "DELETE FROM tbl_purchase WHERE fld_id='$id'");



echo json_encode(array('response'=>'success'));

?>