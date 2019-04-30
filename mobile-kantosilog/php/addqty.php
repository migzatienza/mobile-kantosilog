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

$stock1 = $dbstocks1 - $dbstocks; 
$stock2 = $dbstocks2 - $dbstocks; 
$stock3 = $dbstocks3 - $dbstocks; 





if(isset($_GET['add'])){
	if($stock1 <=0 || $stock2 <= 0 || $stock3 <=0){
		echo json_encode(array('response'=>'failed'));
	}else{
		$sql = mysqli_query($db,"UPDATE tbl_purchase SET fld_qty= '$plus', fld_totalprice='$totalprice' WHERE fld_id='$id'");
		echo json_encode(array('response'=>'success'));

	}
	
}elseif(isset($_GET['minus'])){
	if($dbstocks <=0){
		echo json_encode(array('response'=>'failed'));
	}else{
		$sql = mysqli_query($db,"UPDATE tbl_purchase SET fld_qty= '$subtract' WHERE fld_id='$id'");
		echo json_encode(array('response'=>'success'));
	}
	
}




?>