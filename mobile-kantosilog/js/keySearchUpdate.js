var url ="http://localhost/mobile-kantosilog/";
$(document).ready(function(){
	$('#foodname1').keyup(function(){
		var query = $(this).val();
		if(query != ''){
			$.ajax({
				url:url+"php/updateSearch.php",
				method:"POST",
				data:{query:query},
				dataType:"JSON",
				success:function(data){
					$('#nameofFood').fadeIn();
					$('#nameofFood').html(data);
				}
			});
		}
	});
	
	$(document).on('click', 'li', function(){
		$('#foodname1').val($(this).text());
		$('#nameofFood').fadeOut();
	});
});
