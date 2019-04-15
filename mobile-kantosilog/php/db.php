<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
header('Content-Type: application/json');
?>
<?php  

class Database{
	public $con;
	public function __construct(){
		$this->con = mysqli_connect("localhost", "root", "", "db_capstone");
	}
}
class blowFishEncryption{
	public function __construct(){
		
	}
	public function generate_salt($length){
		$unique_random_string = md5(uniqid(mt_rand(), true));
		$base64_string = base64_encode($unique_random_string);
		$mod_base64_string = str_replace("+", ".", $base64_string);
		$salt = substr($mod_base64_string,0,$length);
		return $salt;
	}   
	public function encryptPass($password){
		$hash_format = "$2y$10$";
		$salt_length = 22;
		$salt = $this->generate_salt($salt_length);
		$format_and_salt = $hash_format.$salt;
		$hash = crypt($password, $format_and_salt);
		return $hash;
	}
	public function password_check($password, $existing_hash){
		$new_hash = crypt($password, $existing_hash);
		if($new_hash == $existing_hash){
			return true;
		}
		return false;
	} 
}

?>