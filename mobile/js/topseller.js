var url="http://kantosilog.esy.es/mobile-kantosilog/";
viewOrders();
function viewOrders(){
	$.ajax({
		url:url+"php/topseller.php?asd",
		method:"GET",
		dataType:"JSON",
		success:function(data){
			body="";
			data.map(e=>{
				body+='	<div class="card-wrapper" style="margin-bottom: -200px">';
				body+='	<div id="'+e.fld_id+'" class="card-rotating effect__click h-50 w-100">';
				body+='<div class="face front card"><div class="view overlay">';
				body+='<img class="card-img-top" src="../images/sisigsilog.jpg" alt="Example photo"><a>';
				body+='<div class="mask rgba-white-slight"></div></a></div>';
				body+='<div class="card-body">';
				body+='<p class="font-weight-bold black-text">'+e.fld_menu+'</p>';
				body+='<a class="rotate-btn" data-card="'+e.fld_id+'"><i class="fa fa-repeat"></i>Click to View</a></div></div>';
				body+='<div class="face back card"><div class="card-body" style="height: 20%!important;">';
				body+='<h4 class="font-weight-bold" id="productname" style="text-align: center;">'+e.fld_menu+'</h4><hr><div class="row">';
				body+='<p><b>Sold: </b></p><p>' +e.topseller+' pc(s)</p></div><div class="row">';
				body+='<p><b>Price: </b></p><p>₱ ' +e.fld_price+'.00</p></div><div class="row">';
				body+='</div><div class="row">';
				body+='</div>';
				body+='<a class="rotate-btn" data-card="'+e.fld_id+'"><i class="fa fa-undo"></i>View Image</a></div></div></div></div>';
			});
			$('#viewOrderList').html(body);
		}
	});	
}


















