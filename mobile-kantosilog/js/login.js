var url="http://localhost/mobile-kantosilog/";
$(document).ready(function(){
	// $("form")[0].reset();
	$('#signinUser').click(function(e){
		var username1 = $('#username1').val();
		var password1 = $('#password1').val();
		e.preventDefault();
		$.ajax({
			url:url+"php/login.php",
			method:"POST",
			data:{username1:username1, password1:password1},
			success:function(account){
				if(account.response == 'no account'){
					swal({
						title: "No account found!",
						text: "Wait for the response of administrator",
						icon: "error",
					});
					$('#username1').val('');
					$('#password1').val('');

				}else{
					var loading = '<div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div>';
					if(account.user_remarks == 'Activated'){
						localStorage.setItem("user_data", JSON.stringify(account));
						window.location.assign("./href/index.html");
						swal({
							title: "Successfully Logged!",
							text: "Welcome Staff!",
							icon: "success",
						});
					}else if(account.user_remarks == 'Deactivated'){
						swal({
							title: "Account Deactivated!",
							text: "Please Contact the administrator",
							icon: "warning",
						});
					}else if(account.user_remarks == 'New User'){
						swal({
							title: "Account not yet activated!",
							text: "Wait for the response of administrator",
							icon: "warning",
						});
					}
					$('#loading').html(loading);
				}
			}
		});
	});
});



