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
				body+='<td><button class="btn btn-rounded btn-sm blue" type="submit" onclick="newOrder('+e.food_id+',\''+e.food_name+'\',\''+e.food_price+'\',\''+e.food_ing1+'\',\''+e.food_ing2+'\',\''+e.food_ing3+'\')"><i class="fas fa-plus white-text"></i></button></td>';
				body+="</tr>";
			});
			$('#foodlist').html(body);
		}
	})
}

function newOrder(fld_id,name,price,ing1,ing2,ing3){
	var htmlFName=$('#htmlFName').text();
	var cart = [];
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
				if(localStorage.getItem("cart") !== null) {
					var fetch_cart = JSON.parse(localStorage.getItem("cart"));
					fetch_cart.push({"fld_id":fld_id, "fld_menu" : name, "fld_price": price, "fld_ing1" : ing1, "fld_ing2": ing2,  "fld_ing3" : ing3, "fld_qty": 0 })
					localStorage.setItem("cart", JSON.stringify(fetch_cart));	

				} else {
					cart.push({"fld_id":fld_id, "fld_menu" : name, "fld_price": price, "fld_ing1" : ing1, "fld_ing2": ing2,  "fld_ing3" : ing3, "fld_qty": 0 });	
					localStorage.setItem("cart", JSON.stringify(cart));	

				}
				fetchOrder();
				viewOrder();
			}
			
		}
	});
}

fetchOrder();
function fetchOrder(){
	$.ajax({
		url:url+"php/fetchOrder.php",
		method:"GET",
		dataType:"JSON",
		success:function(data){
			var body="";
			var array=[];
			data.map(e=>{
				array.push(e);
				localStorage.setItem("cart", JSON.stringify(array))
			})
			var cart = JSON.parse(localStorage.getItem("cart"));
			if(localStorage.getItem("cart") === null){

			}else{
				for(var i=0; i<cart.length;i++){
					var total = cart[i].fld_price * cart[i].fld_qty;
					body+="<tr>";
					body+="<td><b>"+cart[i].fld_menu+"</b></td>";
					body+="<td><b>"+cart[i].fld_price+"</b></td>";
					body+="<td id='fldqty'><b>"+cart[i].fld_qty+"</b></td>";
					body+="<td><b>"+total+"</b></td>";
					if(cart[i].fld_qty == '0'){
						body+='<td><button class="btn btn-sm green" onclick="addQty(\''+cart[i].fld_id+'\',\''+cart[i].fld_qty+'\')"><i class="fas fa-plus white-text"></i></button><button class="btn btn-sm red" onclick="minusQty('+cart[i].fld_id+',\''+cart[i].fld_qty+'\' disabled)"><i class="fas fa-minus white-text"></i></button><button class="btn btn-sm orange" onclick="voidOrder('+cart[i].fld_id+')">Void</button></td>';
					}else{
						body+='<td><button class="btn btn-sm green" onclick="addQty(\''+cart[i].fld_id+'\',\''+cart[i].fld_qty+'\')"><i class="fas fa-plus white-text"></i></button><button class="btn btn-sm red" onclick="minusQty('+cart[i].fld_id+',\''+cart[i].fld_qty+'\')"><i class="fas fa-minus white-text"></i></button><button class="btn btn-sm orange" onclick="voidOrder('+cart[i].fld_id+')">Void</button></td>';
					}
					body+="</tr>";
				}
				$('#fetchOrders').html(body);
			}
			

		}
		
	});
	// if(localStorage.getItem("cart") === null) {
		
	// } else {
	// 	var body = "";
	// 	var cart = JSON.parse(localStorage.getItem("cart"));
	// 	for(var i=0; i<cart.length;i++){
	// 		var total = cart[i].fld_price * cart[i].fld_qty;
	// 		body+="<tr>";
	// 		body+="<td><b>"+cart[i].fld_menu+"</b></td>";
	// 		body+="<td><b>"+cart[i].fld_price+"</b></td>";
	// 		body+="<td id='fldqty'><b>"+cart[i].fld_qty+"</b></td>";
	// 		body+="<td><b>"+total+"</b></td>";
	// 		if(cart[i].fld_qty == '0'){
	// 			body+='<td><button class="btn btn-sm green" onclick="addQty(\''+cart[i].fld_id+'\',\''+cart[i].fld_qty+'\')"><i class="fas fa-plus white-text"></i></button><button class="btn btn-sm red" onclick="minusQty('+cart[i].fld_id+',\''+cart[i].fld_qty+'\' disabled)"><i class="fas fa-minus white-text"></i></button><button class="btn btn-sm orange" onclick="voidOrder('+cart[i].fld_id+')">Void</button></td>';
	// 		} else {
	// 			body+='<td><button class="btn btn-sm green" onclick="addQty(\''+cart[i].fld_id+'\',\''+cart[i].fld_qty+'\')"><i class="fas fa-plus white-text"></i></button><button class="btn btn-sm red" onclick="minusQty('+cart[i].fld_id+',\''+cart[i].fld_qty+'\')"><i class="fas fa-minus white-text"></i></button><button class="btn btn-sm orange" onclick="voidOrder('+cart[i].fld_id+')">Void</button></td>';
	// 		}
	// 		body+="</tr>";
	// 	}
	// 	$("#fetchOrders").html(body);
	// }
}

function addQty(id,qty){
	$.ajax({
		url:url+"php/actionqty.php?add&id="+id+"&qty="+qty,
		method:"POST",
		data:{id:id,qty:qty},
		dataType:"JSON",
		success:function(data){
			if(data.response =='failed'){
				toastr.warning("Check your stock!");
			} else {
				toastr.success("Quantity Added");
				fetchOrder();
				viewOrder();
			}
		}
	});
}

function minusQty(id,qty){
	var total=0;
	$.ajax({
		url:url+"php/actionqty.php?minus&id="+id+"&qty="+qty,
		method:"POST",
		data:{id:id,qty:qty},
		dataType:"JSON",
		success:function(data){
			if(data.response =='failed'){
				toastr.warning("Check your stock!");
			}else{
				toastr.success("Quantity deducted!");
				fetchOrder();
				viewOrder();
			}
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
			});
		}
	})
}

function completeTransaction(){
	var totalprice = $('#totalprice').text();
	var payment = $('#payment').val();
	var change = $('#change').text();
	var htmlFName = JSON.parse(localStorage.getItem("user_data")).user_fullname;
	
	if(localStorage.getItem("cart") === null){
		swal({
			title: "No orders found!",
			icon: "warning",
		});
	}else{
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
						localStorage.removeItem("cart");
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
	

}
