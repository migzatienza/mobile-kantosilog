<?php  
require_once("connect.php");

if(isset($_POST['query'])){
	$output ='';
	$query = "SELECT * FROM tbl_foods WHERE food_name LIKE '%".$_POST['query']."%'";
	$result = mysqli_query($db, $query);
	
	$output = '<ul class="collection">';

	if(mysqli_num_rows($result) > 0){
		while($rows = mysqli_fetch_array($result)){
			$output .= '<li>'.$rows[1].'</li>';
		}
	}else{
		$output .= '<li>Category Not Found</li>';
	}
	$output .= "</ul>";
	echo json_encode($output);
}

?>