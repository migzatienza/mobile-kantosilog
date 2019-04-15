<?php  
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
header('Content-Type: application/json');
session_start();

if(isset($_GET['logout'])){
	session_destroy();
	session_unset();
	echo json_encode(array('response' => 'session_expired'));
}else{
	if(!empty($_SESSION['user_accounts'])){
		echo json_encode($_SESSION['user_accounts']);
	}else{
		echo json_encode(array('response' => 'session_expired'));
	}
}
?>