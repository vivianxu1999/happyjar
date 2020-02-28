var data = require("../data1.json");

exports.view = function(req, res){
	console.log("In home page. ");
	
	res.render('seeHistories1', data);
};








