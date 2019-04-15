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