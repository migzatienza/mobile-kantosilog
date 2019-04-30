<?php  
require_once("connect.php");
$username = $_POST['username'];
$password = $_POST['password'];
$email = $_POST['email'];
$fullname = $_POST['fullname'];
$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$remarks = 'New User';
$status = 'Inactive';

$select = "SELECT * FROM tbl_users WHERE user_name ='$username' OR user_email ='$email'";
$sql1 = $db->query($select);
$res = mysqli_num_rows($sql1);
if($res == 0){
	$sql = $db->query("INSERT INTO tbl_users(user_name, user_password, user_email, user_fullname, user_remarks, user_firstname, user_lastname, user_status) VALUES('$username', '$password', '$email', '$fullname', '$remarks', '$firstname', '$lastname', '$status')");
	echo json_encode(array('response' => 'success'));
	header('HTTP/1.0 201 Created');
}else{
	echo json_encode(array('response' => 'error'));
}
?>