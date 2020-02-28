var data = require("../data2.json");

exports.view = function(req, res){
	console.log("In home page. ");
	
	res.render('seeHistories2', data);
};








