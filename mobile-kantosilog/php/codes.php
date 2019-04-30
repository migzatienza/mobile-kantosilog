<?php  
require_once("db.php");
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
header('Content-Type: application/json');
class DataOperation extends Database{
	public function insert_record($table, $fields){
		$sql ="";
		$sql .="INSERT INTO ".$table;
		$sql .=" (".implode(",", array_keys($fields)).") VALUES ";
		$sql .="('".implode("','", array_values($fields))."')";
		$query = mysqli_query($this->con,$sql);
		if($query){
			header('HTTP/1.0 201 Created');
			echo json_encode(array("status" =>"Reminder Created."));
		}else{
			header('HTTP/1.0 404 Not Found');
			echo json_encode(array("status" =>"Not Found"));
		}
	}
	public function fetch_record($table){
		$sql = "SELECT * FROM ".$table;
		$list = array();
		$query = mysqli_query($this->con,$sql);
		while($rows = mysqli_fetch_assoc($query)){
			$list[] = $rows;
		}
		echo json_encode($list, JSON_PRETTY_PRINT);
	}
	public function select_record($table, $where){
		$sql ="";
		$condition = "";
		foreach($where as $key=>$value){
			// id = "1" AND content = "something"
			$condition .= $key . "='" . $value . "' AND ";
		}
		$condition = substr($condition, 0, -5);
		$sql .= "SELECT * FROM ".$table." WHERE ".$condition;
		$query = mysqli_query($this->con,$sql);
		$list = array();
		while($rows = mysqli_fetch_assoc($query)){
			$list[] = $rows;
		}
		echo json_encode($list);
	}
	public function order_by_one($table,$field,$orderby, $limit){
		$sql = "SELECT * FROM ".$table." ". "ORDER BY" ." " .$field. " ".$orderby. " ". "LIMIT"." " .$limit;
		$list = array();
		$query = mysqli_query($this->con,$sql);
		while($rows = mysqli_fetch_assoc($query)){
			$list[] = $rows;
		}
		echo json_encode($list, JSON_PRETTY_PRINT);
	}
	public function select_all_order_by($table,$field,$order){
		$sql = "SELECT * FROM $table ORDER BY $field $order";
		$list = array();
		$query = mysqli_query($this->con,$sql);
		while($rows = mysqli_fetch_assoc($query)){
			$list[] = $rows;
		}
		echo json_encode($list, JSON_PRETTY_PRINT);
	}
	public function delete_record($table, $where){
		$sql ="";
		$condition ="";
		foreach($where as $key=>$value){
			$condition .= $key . "='" . $value . "' AND ";
		}
		$condition = substr($condition, 0, -5);
		$sql .= "DELETE FROM ".$table." WHERE ".$condition;
		$query = mysqli_query($this->con,$sql);
		echo json_encode(array("response" => "Success"));
	}
	public function login($table, $where, $check){
		$sql = "SELECT * FROM $table WHERE $where ='$check'";
		$query = mysqli_query($this->con,$sql);
		$list = array();
		while($rows = mysqli_fetch_array($query)){
			$list[] = $rows;
		}
		echo json_encode($list);
	}
	public function update_record($table,$where,$fields){
		$sql = "";
		$condition ="";
		foreach ($where as $key => $value) {
			$condition .= $key . "='" . $value . "' AND ";
		}
		$condition = substr($condition, 0, -5);
		foreach ($fields as $key => $value) {
			$sql .= $key . "='".$value."', ";
		}
		$sql = substr($sql, 0, -2);
		$sql = "UPDATE ".$table." SET ".$sql." WHERE ".$condition;
		mysqli_query($this->con,$sql);
		echo json_encode(array("response" => "Success"));
	}
	public function select_all($table){
		$sql = "SELECT * FROM $table";
		$query = mysqli_query($this->con,$sql);
		$list = array();
		while ($rows = mysqli_fetch_array($query)) {
			$list[]=$rows;
		}
		echo json_encode($list);
	}
}
$obj = new DataOperation;


if(isset($_GET['register'])){
	$username = $_POST['username'];
	$password = $_POST['password'];
	$email = $_POST['email'];
	$fullname = $_POST['fullname'];
	$firstname = $_POST['firstname'];
	$lastname = $_POST['lastname'];
	$remarks = 'New User';
	$status = 'Inactive';
	$list = array(
		"user_name" => $username,
		"user_password" => $password,
		"user_email" => $email,
		"user_fullname" => $fullname,
		"user_remarks" => $remarks,
		"user_firstname" => $firstname,
		"user_lastname" => $lastname,
		"user_status" => $status
	);
	$select = "SELECT * FROM tbl_users WHERE user_name ='$username' OR user_email ='$email'";
	$sql1 = mysqli_query($this->con, $select);
	$res = mysqli_num_rows($sql1);
	if($res == 0){
		$obj->insert_record("tbl_users",$list);	
	}else{
		echo json_encode(array('response' => 'error'));
	}
	
}
if(isset($_GET['asd'])){
	$obj->order_by_one("tbl_users", "user_id", "DESC", "1");
}
if(isset($_GET['addtoList'])){
	$foodname = $_POST['addfoodname'];
	$foodstocks = $_POST['addfoodstocks'];
	$list = array(
		"fld_name" => $foodname,
		"fld_stocks" => $foodstocks
	);
	$obj->insert_record("tbl_inventory", $list);
}
if(isset($_GET['unavailable'])){
	$foodname = $_POST['foodname'];
	$foodstocks = $_POST['foodstocks'];
	$foodprice = $_POST['foodprice'];
	$foodcateg = $_POST['foodcateg'];
	$foodstatus = 'Unavailable';
	$list = array(
		"food_name" => $foodname,
		"food_stocks" => $foodstocks,
		"food_price" => $foodprice,
		"food_categ" => $foodcateg,
		"food_status" => $foodstatus
	);
	$obj->insert_record("tbl_foods", $list);
}
if(isset($_GET['fetchFoods'])){
	$obj->select_all("tbl_foods");
}

if(isset($_GET['updateStocks'])){
	$foodname1 = $_POST['foodname1'];
	$foodstocks1 = $_POST['foodstocks1'];
	$where= array('food_name' => $foodname1);
	$list = array('food_stocks' => $foodstocks1);
	$obj->update_record("tbl_foods", $where, $list);
}
if(isset($_GET['modalFoods'])){
	$id = $_GET['id'];
	$list = array('food_id' => $id);
	$obj->select_record("tbl_foods", $list);
}
if(isset($_GET['fetchInventory'])){
	$obj->select_all_order_by("tbl_inventory", "fld_stocks", "ASC");
}
if(isset($_GET['viewOrders'])){
	$obj->select_all_order_by("tbl_vieworders" ,"fld_orderid", "DESC");
}
if(isset($_GET['viewtoStocks'])){
	$id=$_GET['id'];
	$where = array('fld_id'=>$id);
	$obj->select_record("tbl_inventory", $where);
}
if(isset($_GET['viewInvLogs'])){
	$obj->select_all_order_by("tbl_invlogs","fld_id","DESC");
}
if(isset($_GET['select'])){
	$obj->select_all("tbl_inventory");
}
if(isset($_GET['orderList'])){
	$obj->select_all("tbl_foods");
}
if(isset($_GET['newOrder'])){
	$foodname = $_POST['name'];
	$foodprice = $_POST['price'];
	$ing1 = $_POST['ing1'];
	$ing2 = $_POST['ing2'];
	$ing3 = $_POST['ing3'];
	$htmlFName = $_POST['htmlFName'];
	$list = array(
		"fld_menu"=>$foodname,
		"fld_price"=>$foodprice,
		"fld_qty"=>'0',
		"fld_ing1"=>$ing1,
		"fld_ing2"=>$ing2,
		"fld_ing3"=>$ing3,
		"fld_staff"=>$htmlFName
	);
	$obj->insert_record("tbl_purchase", $list);
}
if(isset($_GET['fetchOrder'])){
	$obj->select_all("tbl_purchase");
}
?>