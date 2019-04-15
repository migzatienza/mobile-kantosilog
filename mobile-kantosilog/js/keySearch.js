var url ="http://localhost/mobile-kantosilog/";
$(document).ready(function(){
	
	$('#Food_Name').keyup(function(){
		var query = $(this).val();
		if(query != ''){
			$.ajax({
				url:url+"php/keySearch.php",
				method:"POST",
				data:{query:query},
				dataType:"JSON",
				success:function(data){
					$('#foodList').fadeIn();
					$('#foodList').html(data.food_name);
					$('#Food_Price').val(data.food_price);
					$('#Food_Quantity').keyup(function(){
						var qty = $('#Food_Quantity').val();
						document.getElementById('Food_TotalPrice').value=qty * data.food_price;
						
					});
				}
			});
		}
		
	});
	$(document).on('click', 'li', function(){
		$('#Food_Name').val($(this).text());
		$('#foodList').fadeOut();
	});
});