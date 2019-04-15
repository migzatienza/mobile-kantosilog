var url = "http://localhost/mobile-kantosilog/";
function submitStocks(){
	var addfoodname1 = $('#addfoodname1').val();
	var addfoodstocks1 = $('#addfoodstocks1').val();
	var htmlFName = $('#htmlFName').text();
	$.ajax({
		url:url+"php/updateStocks.php",
		method:"POST",
		data:{addfoodname1:addfoodname1,
			addfoodstocks1:addfoodstocks1,
			htmlFName:htmlFName
		},
		dataType:"JSON",
		success:function(){
			fetchInventory()
			$('#addfoodstocks1').val("");
			swal({
				title: "Restocked!",
				text: "New quantity added!",
				icon: "success",
			});
		}
	});
}