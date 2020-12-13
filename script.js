function send(){
    let url = document.forms["form"].elements[0].value
    let send = document.forms["form"].elements[1].value
    $.post(url, send, function(data, status){
	$("#results").text(data);
        $("#status").text(status);
    });
}

