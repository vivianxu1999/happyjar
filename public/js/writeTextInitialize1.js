$(document).ready(function() {
	initializePage();
});




function initializePage() {
	$('#Home').click(function(res){
  		console.log("upload piciture");
  		// return res.redirect("sdf");
  		//$("#uploadPictureDiv").hide();
  		$(location).attr('href', '/home1')
	});
};

function showSuccessMsg() {
	console.log('show success msg')
	$('#successMsg').text('Message successfully uploaded!');
}

	// Handlebars.registerHelper('checkEmptyString', function(value, comparator) {
 //    	return (value === comparator) ? 'No content' : value;
	// });




