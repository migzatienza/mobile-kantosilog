var url = "http://localhost/mobile-kantosilog/";
viewStocks();
function viewStocks(){
	fetch(url+'php/codes.php?viewstocks')
	.then(res=>res.json()).then(function(data){
		var body="";
		data.forEach( (e) => {
			if(e.food_status =='Available'){
				body+='<tr>';
				body+='<td>'+e.food_id+'</td>';
				body+='<td>'+e.food_name+'</td>';
				body+='<td>₱'+e.food_price+'.00</td>';
				body+='<td>'+e.food_stocks+'</td>';
				body+='<td class="green-text"><b>'+e.food_status+'</b></td>';
				body+='</tr>';
			}else{
				body+='<tr>';
				body+='<td>'+e.food_id+'</td>';
				body+='<td>'+e.food_name+'</td>';
				body+='<td>₱'+e.food_price+'.00</td>';
				body+='<td>'+e.food_stocks+'</td>';
				body+='<td class="red-text"><b>'+e.food_status+'</b></td>';
				body+='</tr>';
			}

		});
		
		document.getElementById('stocklist').innerHTML = body;
	});
}


