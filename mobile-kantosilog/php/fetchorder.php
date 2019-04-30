<?php  
require_once("connect.php");
$list = array();
$sql = $db->query("SELECT * FROM tbl_purchase");
while($rows = mysqli_fetch_assoc($sql)){
	$list[] = $rows;
}

echo json_encode($list);

?>