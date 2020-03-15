$(document).ready(function() {
	initializePage();

	$("#uploadFileButton").change(function() {   		
		filename = this.files[0].name   		
		$("#uploadFileButtonFileName").text(filename);   		
		console.log(filename); 	});
});

function initializePage() {
	$('#Home').click(function(res){
  		console.log("upload piciture");
  		// return res.redirect("sdf");
  		//$("#uploadPictureDiv").hide();
  		$(location).attr('href', '/home2')
	});
}	
