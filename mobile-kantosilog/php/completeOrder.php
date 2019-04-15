<?php  
require_once("connect.php");

$id = $_POST['id'];

$sql = mysqli_query($db, "UPDATE tbl_vieworders SET fld_status ='Completed' WHERE fld_orderid ='$id'");

echo json_encode(array('response' =>'success'));
?>