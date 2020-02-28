var data = require("../data1.json");

exports.view = function(req, res){
	console.log("In home page. ");
	
	res.render('writeText1');
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
  		'Location': '/history1'
	});
	res.end();

	// txt = JSON.stringify(data);  //reserialize to JSON
};




