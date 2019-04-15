<?php 
require_once("connect.php");
$qty = $_POST['qty']+1;
$id = $_POST['id'];
$query = mysqli_query($db,"SELECT * FROM tbl_purchase WHERE fld_id='$id'");
$rows = mysqli_fetch_array($query);
$dbname = $rows[1];
$food_ing1=$rows[4];
$food_ing2=$rows[5];
$food_ing3=$rows[6];
$dbstocks=$rows[3];
$dbprice = $rows[2];
$totalprice = $qty*$dbprice;
$plus = $rows[3] + 1;
$subtract = $rows[3] -1;

$query1 = mysqli_query($db,"SELECT * FROM tbl_inventory WHERE fld_name='$food_ing1'");
$query2 = mysqli_query($db,"SELECT * FROM tbl_inventory WHERE fld_name='$food_ing2'");
$query3 = mysqli_query($db,"SELECT * FROM tbl_inventory WHERE fld_name='$food_ing3'");

$rows1=mysqli_fetch_array($query1);
$rows2=mysqli_fetch_array($query2);
$rows3=mysqli_fetch_array($query3);

$dbstocks1=$rows1[2];
$dbstocks2=$rows2[2];
$dbstocks3=$rows3[2];

$total1 = $dbstocks1 - 1;
$total2 = $dbstocks1 + 1;

$total11 = $dbstocks2 - 1;
$total22 = $dbstocks2 + 1;

$total111 = $dbstocks3 - 1;
$total222 = $dbstocks3 + 1;

$void1 = $dbstocks1+$dbstocks;
$void2 = $dbstocks2+$dbstocks;
$void3 = $dbstocks3+$dbstocks;

if(isset($_GET['add'])){
	if($dbstocks1 <=0 || $dbstocks2 <= 0 || $dbstocks3 <=0){
		echo json_encode(array('response'=>'failed'));
	}else{
		$sql = mysqli_query($db,"UPDATE tbl_purchase SET fld_qty= '$plus', fld_totalprice='$totalprice' WHERE fld_id='$id'");
		$sql1 = mysqli_query($db,"UPDATE tbl_inventory SET fld_stocks='$total1' WHERE fld_name='$food_ing1'");
		$sql2 = mysqli_query($db,"UPDATE tbl_inventory SET fld_stocks='$total11' WHERE fld_name='$food_ing2'");
		$sql3 = mysqli_query($db,"UPDATE tbl_inventory SET fld_stocks='$total111' WHERE fld_name='$food_ing3'");
		echo json_encode(array('response'=>'success'));
	}
	
}elseif(isset($_GET['minus'])){
	$sql = mysqli_query($db,"UPDATE tbl_purchase SET fld_qty= '$subtract' WHERE fld_id='$id'");
	$sql1 = mysqli_query($db,"UPDATE tbl_inventory SET fld_stocks='$total2' WHERE fld_name='$food_ing1'");
	$sql2 = mysqli_query($db,"UPDATE tbl_inventory SET fld_stocks='$total22' WHERE fld_name='$food_ing2'");
	$sql3 = mysqli_query($db,"UPDATE tbl_inventory SET fld_stocks='$total222' WHERE fld_name='$food_ing3'");
	echo json_encode(array('response'=>'success'));
}




?>