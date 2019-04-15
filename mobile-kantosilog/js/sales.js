var url="http://localhost/mobile-kantosilog/";

function viewSalesReport(){
	var viewButton = $('#salesReport').val();
	if(viewButton == 'Daily'){
		$.ajax({
			url:url+"php/sales.php?daily",
			method:"GET",
			dataType:"JSON",
			success:function(data){
				var a = '₱' +data.salestoday+'.00';
				$('#sales').html(a);
				$('#name').text('Today`s Sales');
			}
		});
	}else if(viewButton =='Weekly'){
		$.ajax({
			url:url+"php/sales.php?weekly",
			method:"GET",
			dataType:"JSON",
			success:function(data){
				var a = '₱' +data.salesweekly+'.00';
				$('#sales').html(a);
				$('#name').text('This week sales');
			}
		})
	}else if(viewButton=='Monthly'){
		$.ajax({
			url:url+"php/sales.php?monthly",
			method:"GET",
			dataType:"JSON",
			success:function(data){
				var a = '₱' +data.salesmonthly+'.00';
				$('#sales').html(a);
				$('#name').text('This month sales');
			}
		})
	}else if(viewButton=='Yearly'){
		$.ajax({
			url:url+"php/sales.php?yearly",
			method:"GET",
			dataType:"JSON",
			success:function(data){
				var a = '₱' +data.salesyearly+'.00';
				$('#sales').html(a);
				$('#name').text('This year sales');
			}
		})
	}
}
