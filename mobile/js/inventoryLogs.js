var url="http://kantosilog.esy.es/mobile-kantosilog/";
invLogs();
function invLogs(){
	$.ajax({
		url:url+"php/codes.php?viewInvLogs",
		method:"GET",
		dataType:"JSON",
		success:function(data){
			var body="";
			data.map(e=>{
				body+="<tr>";
				body+="<td>"+e.fld_name+"</td>";
				body+="<td>"+e.fld_oldstocks+"</td>";
				body+="<td>"+e.fld_additional+"</td>";
				body+="<td>"+e.fld_totalstocks+"</td>";
				body+="<td>"+e.fld_dateadded+"</td>";
				body+="<td>"+e.fld_staff+"</td>";
				body+="</tr>";
			});
			$('#viewLogs').html(body);
		}
	})
}