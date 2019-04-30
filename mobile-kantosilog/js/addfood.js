var url = "http://localhost/mobile-kantosilog/";

fetchInventory();
function fetchInventory(){
	$.ajax({
		url:url+"php/codes.php?fetchInventory",
		method:"GET",
		dataType:"JSON",
		success:function(data){
			var body="";
			data.map(e=>{
				if(e.fld_stocks < 5 ){
					body+="<tr>";
					body+="<td><b>"+e.fld_name+"</b></td>";
					body+="<td class='orange-text'><b>"+e.fld_stocks+"</b></td>";
					body+="<td><button onclick='addtoStocks("+e.fld_id+")' class='btn btn-rounded btn-sm blue' data-toggle='modal' data-target='#addStocks'><i class='fa fa-plus'></i></button></td>";
					body+="</tr>";
				}else{
					body+="<tr>";
					body+="<td><b>"+e.fld_name+"</b></td>";
					body+="<td><b>"+e.fld_stocks+"</b></td>";
					body+="<td><button class='btn btn-rounded btn-sm blue' data-toggle='modal' data-target='#addStocks' onclick='addtoStocks("+e.fld_id+")'><i class='fa fa-plus'></i></button></td>";
					body+="</tr>";
				}
			});
			$('#fetchInv').html(body);
		}
	});
}

function addtoStocks(id){
	$.ajax({
		url:url+"php/codes.php?viewtoStocks&id="+id,
		method:"GET",
		dataType:"JSON",
		data:{id:id},
		success:function(data){
			data.map(e=>{
				var namea = e.fld_name;
				$('#addfoodname1').val(namea);
			})
		}
	});
}


function addtoInventory(){
	var addfoodname = $('#addfoodname').val();
	var addfoodstocks = $('#addfoodstocks').val();
	$.ajax({
		url:url+"",
		method:"POST",
		data:{addfoodname:addfoodname, addfoodstocks:addfoodstocks},
		dataType:"JSON",
		success:function(){
			$('#addfoodname').val('');
			$('#addfoodstocks').val('');
		}
	})
}
