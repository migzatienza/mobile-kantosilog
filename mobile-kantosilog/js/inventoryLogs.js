var url="http://localhost/mobile-kantosilog/";
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
				body+="<td><b>"+e.fld_name+"</b></td>";
				body+="<td><b>"+e.fld_oldstocks+"</b></td>";
				body+="<td><b>"+e.fld_additional+"</b></td>";
				body+="<td><b>"+e.fld_totalstocks+"</b></td>";
				body+="<td><b>"+e.fld_dateadded+"</b></td>";
				body+="<td><b>"+e.fld_staff+"</b></td>";
				body+="</tr>";
			});
			$('#viewLogs').html(body);
		}
	})
}