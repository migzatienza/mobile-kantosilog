<?php  
require_once("connect.php");
$id = $_GET['id'];
$list = array();
$sql = mysqli_query($db,"SELECT * FROM tbl_orders WHERE fld_unique_id = '$id'");

while($rows=mysqli_fetch_assoc($sql)){
	$list[]=$rows;
}

echo json_encode($list);
?>