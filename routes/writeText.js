var data = require("../data.json");

exports.view = function(req, res){
	console.log("In home page. ");
	
	res.render('writeText');
};

exports.submitWriteText = function(req, res){
	var contentVal = req.query.content;
	console.log("Writing the text to database: ");
	console.log("content: " + contentVal);

	// var parsedData = JSON.parse(data);  
	data.histories.push({        
    	content:contentVal,
    	imageURL:''
	});

	console.log(data)

	res.writeHead(302, {
  		'Location': '/history'
	});
	res.end();

	// txt = JSON.stringify(data);  //reserialize to JSON
};




