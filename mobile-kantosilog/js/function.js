var url = "http://localhost/mobile-kantosilog/";
// function register(){
// 	var fdata = new URLSearchParams();

// 	fdata.append('username', x('#username').value);
// 	fdata.append('password', x('#password').value);
// 	fdata.append('email', x('#email').value);
// 	fdata.append('fullname', x('#fullname').value);

// 	fetch(url+'php/codes.php?register', {
// 		method:"POST",
// 		body:fdata
// 	}).then(res => {return res.json()}).then(data => {
// 		toastr.success('Please wait the administrator to activate your account!', 'Successfully Created an Account!');
// 		document.getElementById('username').value='';
// 		document.getElementById('password').value='';
// 		document.getElementById('email').value='';
// 		document.getElementById('fullname').value='';
// 	});
// }

function register(){
	var username = document.getElementById('username').value;
	var password = document.getElementById('password').value;
	var email = document.getElementById('email').value;
	var fullname = document.getElementById('fullname').value;
	if(username == '' || password == '' || email == '' || fullname ==''){
		toastr.warning('Complete the other form before you proceed!');
	}else{
		if(password.length < 6 ){
			toastr.warning('Password must be 6 characters and above!');
		}else{
			$.ajax({
				url:url+"php/codes.php?register",
				method:"POST",
				data:{
					username:username,
					password:password,
					email:email,
					fullname:fullname
				},
				dataType:"JSON",
				success:function(){
					toastr.success('Please wait the administrator to activate your account!', 'Successfully Created an Account!');
					document.getElementById('username').value='';
					document.getElementById('password').value='';
					document.getElementById('email').value='';
					document.getElementById('fullname').value='';
				}
			});
		}
		
	}
	
}
// function x(value){
// 	return document.querySelector(value);
// }