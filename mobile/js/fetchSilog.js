var url= "http://kantosilog.esy.es.esy.es/mobile-kantosilog/";
foods();
function foods(){

	$.ajax({
		url:url+"php/codes.php?fetchFoods",
		method:"GET",
		dataType:"JSON",
		success:function(data){
			var body="";
			data.map(x=>{
				body+='<div class="col-12">';
				body+='<div class="card">';
				body+='<div class="card-container">';
				body+='<br><div class="row col-12">';
				body+='<div class="col-4"><img src="https://3c1703fe8d.site.internapcdn.net/newman/gfx/news/hires/2016/howcuttingdo.jpg" class="OrderImage"></div>';
				body+='<div class="col-8"><h4 class="Price">₱ '+x.food_price+'.00</h4>';
				body+='<h4 class="card-title">'+x.food_name+'</h4>';
				body+='<h4 class="text">'+x.food_description+'</h4>';
				body+='</div></div></div>';
				body+='<a href="#" data-toggle="modal" data-target="#modalOrder"><button class="btn btn-block green white-text" onclick="modalFoods('+x.food_id+')">Purchase</button></a></div></div><br>';

			});
			$('#fetchfoods').html(body);
		}
	});
}


function modalFoods(id){
	var quantity = $('#fetchQty').val();
	$.ajax({
		url:url+"php/codes.php?modalFoods&id="+id,
		method:"GET",
		dataType:"JSON",
		success:function(data){
			data.map(e=>{
				var fetch_name = e.food_name;
				var fetch_price =e.food_price;
				$('#fetchName').val(fetch_name);
				$('#fetchPrice').val(fetch_price);
				$('#fetchQty').keyup(function(){
					var qty = $('#fetchQty').val();
					var total=e.food_price*qty;
					$('#fetchTotalPrice').val(total);
				});
			});
		}
	});
}
var count = document.getElementById('fetchQty').value; 
function increment(){
	count++;
	document.getElementById('fetchQty').value = count;
	console.log(count);
}

function decrement(){
	count--;
	document.getElementById('fetchQty').value = count;
	console.log(count);
}