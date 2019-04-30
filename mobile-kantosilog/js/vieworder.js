var url="http://localhost/mobile-kantosilog/";


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
					vieworder();
				}
			});
		} else {
			swal("Cancelled");
		}
	});
}

vieworder();
function vieworder(){
	$.getJSON(url+"php/codes.php?viewOrders", function(data){
		var body="";
		data.map(e=>{
			body+='<div class="toast-header">';
			body+='<svg class=" rounded mr-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice"focusable="false" role="img">';
			if(e.fld_status == 'Not Yet'){
				body+='<rect fill="red" width="100%" height="100%" /></svg>';
			}else{
				body+='<rect fill="#007aff" width="100%" height="100%" /></svg>';
			}
			body+='<strong class="mr-auto">Order </strong>';
			body+='<small>'+e.fld_date+'</small>';
			body+='<small style="margin-left: 55px">₱'+e.fld_maintotal+'</small>';
			if(e.fld_status =='Not Yet'){
				body+='<button type="button" onclick="completeOrder(\''+e.fld_orderid+'\')" class="ml-2 mb-1 close">';
				body+='<i class="fa fa-pause"></i></button></div>';
			}else{
				body+='<button type="button" onclick="orderList(\''+e.fld_orderid+'\')" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close" data-toggle="modal" data-target="#ModalViewOrder">';
				body+='<i class="fa fa-eye"></i></button></div>';
			}

			body+='<div class="toast-body">Order No. '+e.fld_orderid+'<small style="margin-left: 53px">6 orders</small></div><br>';
		});
		$('#viewLogss').html(body);
	})
}
















