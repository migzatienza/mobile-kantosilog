<?php  
require_once('connect.php');
if(isset($_POST['query'])){
	$output='';
	$query = "SELECT * FROM tbl_foods WHERE food_name LIKE '%".$_POST['query']."%'";
	$result = mysqli_query($db, $query);

	$output= '<ul class="collection">';

	if(mysqli_num_rows($result) > 0){
		while($rows = mysqli_fetch_array($result)){
			$output .='<li style="list-style:none">'.$rows[1].'</li>';
			$list = array('food_price' => $rows[3], 'food_name' => $output);
		}
	}else{
		$output .='<li>Category not found</li>';
	}
	$output .='</ul>';
	echo json_encode($list);
}
?>