var url="http://localhost/mobile-kantosilog/";
function orderInvoice(){
	var fetchName = $('#fetchName').val();
	var fetchPrice = $('#fetchPrice').val();
	var fetchQty = $('#fetchQty').val();
	var fetchTotalPrice = $('#fetchTotalPrice').val();
	var fetchService = $('#fetchService').val();
	var htmlFName = $('#htmlFName').text();
	$.ajax({
		url:url+"php/purchase.php",
		method:"POST",
		data:{fetchName:fetchName, 
			fetchPrice:fetchPrice, 
			fetchQty:fetchQty, 
			fetchTotalPrice:fetchTotalPrice, 
			fetchService:fetchService,
			htmlFName:htmlFName
		},
		dataType:"JSON",
		success:function(){
			swal({
				title: "Transaction Complete!",
				text: "Check the !",
				icon: "success",
			});
		}
	});
}
orderList();
function orderList(){
	$.ajax({
		url:url+"php/codes.php?orderList",
		method:"GET",
		dataType:"JSON",
		success:function(data){
			var body="";
			data.map(e=>{
				body+="<tr>";
				body+="<td><b>"+e.food_name+"</b></td>";
				body+="<td><b>"+e.food_price+"</b></td>";
				body+='<td><button class="btn btn-rounded btn-sm blue" type="submit" onclick="newOrder(\''+e.food_name+'\',\''+e.food_price+'\',\''+e.food_ing1+'\',\''+e.food_ing2+'\',\''+e.food_ing3+'\')"><i class="fas fa-plus white-text"></i></button></td>';
				body+="</tr>";
			});
			$('#foodlist').html(body);
		}
	})
}

function newOrder(name,price,ing1,ing2,ing3){
	var htmlFName=$('#htmlFName').text();
	$.ajax({
		url:url+"php/neworder.php",
		method:"POST",
		data:{name:name,
			price:price,
			ing1:ing1,
			ing2:ing2,
			ing3:ing3,
			htmlFName:htmlFName
		},
		dataType:"JSON",
		success:function(data){
			if(data.response =='failed'){
				swal({
					title: "Please Check Your stocks!",
					text: "Check the inventory list!",
					icon: "warning",
				});
			}else{
				swal({
					title: "Ordered Successfully!",
					text: "Check the order list!",
					icon: "success",
				});
				fetchOrder();
				viewOrder();
			}
			
		}
	});
}

fetchOrder();
function fetchOrder(){
	$.ajax({
		url:url+"php/codes.php?fetchOrder",
		method:"GET",
		dataType:"JSON",
		success:function(data){
			var body ="";
			data.map(e=>{
				var total = e.fld_price * e.fld_qty;
				body+="<tr>";
				body+="<td><b>"+e.fld_menu+"</b></td>";
				body+="<td><b>"+e.fld_price+"</b></td>";
				body+="<td><b>"+e.fld_qty+"</b></td>";
				body+="<td><b>"+total+"</b></td>";
				if(e.fld_qty == '0'){
					body+='<td><button class="btn btn-sm green" onclick="addQty(\''+e.fld_id+'\',\''+e.fld_qty+'\')"><i class="fas fa-plus white-text"></i></button><button class="btn btn-sm red" onclick="minusQty('+e.fld_id+',\''+e.fld_qty+'\' disabled)"><i class="fas fa-minus white-text"></i></button><button class="btn btn-sm orange" onclick="voidOrder('+e.fld_id+')">Void</button></td>';

				}else{
					body+='<td><button class="btn btn-sm green" onclick="addQty(\''+e.fld_id+'\',\''+e.fld_qty+'\')"><i class="fas fa-plus white-text"></i></button><button class="btn btn-sm red" onclick="minusQty('+e.fld_id+',\''+e.fld_qty+'\')"><i class="fas fa-minus white-text"></i></button><button class="btn btn-sm orange" onclick="voidOrder('+e.fld_id+')">Void</button></td>';

				}
				body+="</tr>";
			});
			$('#fetchOrders').html(body);
		}
		
	});

}

function addQty(id,qty){
	$.ajax({
		url:url+"php/actionqty.php?add",
		method:"POST",
		data:{id:id,qty:qty},
		dataType:"JSON",
		success:function(data){
			if(data.response =='failed'){
				toastr.warning("Check your stock!");
			}else{
				toastr.success("Quantity Added");
				fetchOrder();
				viewOrder();
			}

		}
	})
}

function minusQty(id,qty){
	$.ajax({
		url:url+"php/actionqty.php?minus",
		method:"POST",
		data:{id:id,qty:qty},
		dataType:"JSON",
		success:function(){
			toastr.success("Quantity Deducted");
			fetchOrder();
			viewOrder();
		}
	});
}

function voidOrder(id){
	$.ajax({
		url:url+"php/void.php",
		method:"POST",
		data:{id:id},
		dataType:"JSON",
		success:function(){
			toastr.success("Order Voided");
			fetchOrder();
			viewOrder();
		}
	});
}
viewOrder();
function viewOrder(){
	$.ajax({
		url:url+"php/orderlist.php",
		method:"GET",
		dataType:"JSON",
		success:function(data){
			var body ="";
			data.map(e=>{
				var total = e.fld_price * e.fld_qty;
				body+="<tr>";
				body+="<td><b>"+e.fld_menu+"</b></td>";
				body+="<td><b>"+e.fld_price+"</b></td>";
				body+="<td><b>"+e.fld_qty+"</b></td>";
				body+="<td><b>"+total+"</b></td>";
				body+="</tr>";
			});
			$('#viewOrder').html(body);
			getTotal();
		}
		
	})
}
getTotal();
function getTotal(){
	$.ajax({
		url:url+"php/totalprice.php",
		method:"GET",
		dataType:"JSON",
		success:function(data){
			data.map(e=>{
				var total = e.totalprice;
				$('#totalprice').html(total);
				$('#payment').keyup(function(){
					var payment = $('#payment').val();
					var change = payment-total;
					$('#change').html(change);
				});
			})
		}
	})
}


function completeTransaction(){
	var totalprice = $('#totalprice').text();
	var payment = $('#payment').val();
	var change = $('#change').text();
	var htmlFName = $('#htmlFName').text();
	if(change <= -1){
		swal({
			title: "The payment is less than the Total Price!",
			icon: "warning",
		});
	}else{
		$.ajax({
			url:url+"php/purchase.php",
			method:"POST",
			dataType:"JSON",
			data:{
				totalprice:totalprice,
				payment:payment,
				change:change,
				htmlFName:htmlFName
			},
			success:function(){
				$('#payment').val();
				if(payment !== ''){
					swal({
						title: "Payment Completed!",
						icon: "success",
					});
					fetchOrder();
					viewOrder();
				}else{
					swal({
						title: "Please complete the payment!",
						icon: "warning",
					});
				}

			}
		});
		
	}
	
}
