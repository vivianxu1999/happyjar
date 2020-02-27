$(document).ready(function() {
	initializePage();
});




function initializePage() {
	$('#Home').click(function(res){
  		console.log("upload piciture");
  		// return res.redirect("sdf");
  		//$("#uploadPictureDiv").hide();
  		$(location).attr('href', '/home')
	});
};

	// Handlebars.registerHelper('checkEmptyString', function(value, comparator) {
 //    	return (value === comparator) ? 'No content' : value;
	// });




