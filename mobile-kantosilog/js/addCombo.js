var url = "http://localhost/mobile-kantosilog/";
function newCombo(){
	var food_name = $('#food_name').val();
	var food_ing1 = $('#food_ing1').val();
	var food_ing2 = $('#food_ing2').val();
	var food_ing3 = $('#food_ing3').val();
	var food_price = $('#food_price').val();

	$.ajax({
		url:url+"php/newcombo.php",
		method:"POST",
		data:{
			food_name:food_name,
			food_ing1:food_ing1,
			food_ing2:food_ing2,
			food_ing3:food_ing3,
			food_price:food_price
		},
		dataType:"JSON",
		success:function(){
			$('#food_name').val('');
			$('#food_ing1').val('');
			$('#food_price').val('');
			swal({
				title: "Added Successfully!",
				text: "New Combo Meal Added!",
				icon: "success",
			});
		}
	});
}
select();
function select(){
	var select = document.getElementById('food_ing1');
	$.ajax({
		url:url+"php/codes.php?select",
		method:"GET",
		dataType:"JSON",
		success:function(data){
			var option="";
			data.map(e=>{
				option +='<option value="'+e.fld_name+'">'+e.fld_name+'</option>';
			});
			$('#food_ing1').append(option);
			$('#food_ing2').append(option);
			$('#food_ing3').append(option);
		}
	})
}
