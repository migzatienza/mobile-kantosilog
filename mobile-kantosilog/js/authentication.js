var url="http://localhost/mobile-kantosilog/";
authentication();
function authentication(){
	if(localStorage.getItem("user_data")!==null){
		var userLogin = JSON.parse(localStorage.getItem("user_data"));
		$('#htmlFName').html(userLogin.user_fullname);
		$('#htmlEmail').html(userLogin.user_email);
	}else{
		window.location.assign("../login.html");
	}
}
function logOut(){
	window.location.assign("../login.html");
	localStorage.removeItem("user_data");
}