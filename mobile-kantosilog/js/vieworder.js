var url="http://localhost/mobile-kantosilog/";
viewOrders();

function viewOrders(){
	$.ajax({
		url:url+"php/codes.php?viewOrders",
		method:"GET",
		dataType:"JSON",
		success:function(data){
			var body="";
			data.map(e=>{
				body+='<tr>';
				if(e.fld_status == 'Not Yet'){
					body+='<td><button onclick="completeOrder(\''+e.fld_orderid+'\')" class="btn btn-rounded btn-sm red" >Complete Order</button></td>';
				}else if(e.fld_status == 'Completed'){
					body+='<td><button onclick="orderList(\''+e.fld_orderid+'\')" class="btn btn-rounded btn-sm blue" data-toggle="modal" data-target="#ModalViewOrder">View Order</button></td>';	
				}
				body+='<td><b>'+e.fld_orderid+'</b></td>';
				body+='<td><b>'+e.fld_staff+'</b></td>';
				body+='<td>₱<b>'+e.fld_maintotal+'.00</b></td>';
				body+='<td>₱<b>'+e.fld_payment+'.00</b></td>';
				body+='<td>₱<b>'+e.fld_change+'.00</b></td>';
				body+='<td><b>'+e.fld_date+'</b></td>';
				body+='</tr>';
			})
			$('#viewLogs').html(body);
		}
	})
}

function orderList(id){
	$.ajax({
		url:url+"php/vieworder.php?id="+id,
		method:"GET",
		dataType:"JSON",
		data:{id:id},
		success:function(data){
			var body="";
			data.map(e=>{
				body+='<tr>';
				body+='<td>'+e.fld_menu+'</td>';
				body+='<td>₱'+e.fld_price+'.00</td>';
				body+='<td>'+e.fld_qty+'</td>';
				body+='<td>₱'+e.fld_totalprice+'.00</td>';
				body+='</tr>';
			})
			$('#viewOrders').html(body);
		}
	})
}

function completeOrder(id){
	swal({
		title: "Is the order complete?",
		buttons: true,
		dangerMode: true,
	})
	.then((c) => {
		if (c) {
			$.ajax({
				url:url+"php/completeOrder.php",
				method:"POST",
				data:{id:id},
				dataType:"JSON",
				success:function(){
					swal("Order Completed!", {
						icon: "success",
					});
					viewOrders();
				}
			});
		} else {
			swal("Cancelled");
		}
	});
}

















