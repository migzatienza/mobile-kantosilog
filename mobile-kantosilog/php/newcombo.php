<?php  
require_once("connect.php");

$food_name = $_POST['food_name'];
$food_ing1 = $_POST['food_ing1'];
$food_ing2 = $_POST['food_ing2'];
$food_ing3 = $_POST['food_ing3'];
$food_price = $_POST['food_price'];

$desc = $food_ing1 .' + '. $food_ing2 .' + '. $food_ing3;

$sql = mysqli_query($db, "INSERT INTO tbl_foods(food_name, food_description, food_ing1, food_ing2, food_ing3, food_price) VALUES('$food_name', '$desc', '$food_ing1', '$food_ing2' ,'$food_ing3', '$food_price')");


echo json_encode(array('response'=>'success'));
?>