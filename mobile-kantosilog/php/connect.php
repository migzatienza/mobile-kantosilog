<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
header('Content-Type: application/json');
?>
<?php  
$db = mysqli_connect("localhost", "root", "", "db_capstone");
?>