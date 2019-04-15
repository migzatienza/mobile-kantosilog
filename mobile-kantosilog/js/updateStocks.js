url="http://localhost/mobile-kantosilog/";
function addStocks(){
	var foodname1 = document.getElementById('foodname1').value;
	var foodstocks1 = document.getElementById('foodstocks1').value;
	$.ajax({
		url:url+"php/updateStocks.php",
		method:"POST",
		data:{foodname1:foodname1, foodstocks1:foodstocks1},
		dataType:"JSON",
		success:function(){
			swal("Updated Successfully", "Stocks!", "success");
			document.getElementById('foodname1').value='';
			document.getElementById('foodstocks1').value='';
		}
	});
}


