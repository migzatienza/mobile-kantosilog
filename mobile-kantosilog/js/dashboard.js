var url="http://localhost/mobile-kantosilog/";
sales();

function sales(){
	$.ajax({
		url:url+"php/dashboard.php?todaysales",
		method:"GET",
		dataType:"JSON",
		success:function(data){
			if(data.todaysales == null){
				var a = '₱ 0.00';
			}else{
				var a = '₱'+data.todaysales+'.00';
			}
			
			$('#sales').html(a);
		}
	});
}

bestSeller();
function bestSeller(){
	$.ajax({
		url:url+"php/bestSeller.php",
		method:"GET",
		dataType:"JSON",
		success:function(data){
			var a = data.fld_menu;
			$('#bestseller').html(a);

		}
	});
}

overall();
function overall(){
	$.ajax({
		url:url+"php/dashboard.php?overall",
		method:"GET",
		dataType:"JSON",
		success:function(data){
			if(data.overall == null){
				var a = '₱ 0.00';
			}else{
				var a = '₱'+data.overall+'.00';
			}
			
			$('#overall').html(a);
		}
	})
}