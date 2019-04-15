<?php  
require_once('connect.php');

$list = array();
$username = $_POST['username1'];
$password = $_POST['password1'];
$sql = mysqli_query($db, "SELECT * FROM tbl_users WHERE user_name = '$username' AND user_password = '$password'");
if(mysqli_num_rows($sql) > 0){
	while($rows = mysqli_fetch_assoc($sql)){
		$list = $rows;
	}
	echo json_encode($list);
}else{
	echo json_encode(array('response' => 'no account'));	
}

?>