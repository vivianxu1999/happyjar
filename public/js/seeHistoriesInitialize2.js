$(document).ready(function() {
	initializePage();

	// Handlebars.registerHelper('ifEquals', function(arg1, arg2, options) {
 //    	return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
	// });

});

function initializePage() {
	$('#Home').click(function(res){
  		console.log("upload piciture");
  		// return res.redirect("sdf");
  		//$("#uploadPictureDiv").hide();
  		$(location).attr('href', '/home2')
	});
}