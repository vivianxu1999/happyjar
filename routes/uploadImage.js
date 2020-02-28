var path = require('path');
var fs = require("fs");
var data = require("../data.json");


exports.view = function(req, res){
	console.log("In home page. ");
	
	res.render('uploadImage');
};


function handleError(err, res) {
  res
    .status(500)
    .contentType("text/plain")
    .end("Oops! Something went wrong!");
};



exports.uploadImage = function(req, res) {
	console.log("req: ", req)
    var tempPath = req.file.path;
    console.log("tempPath: " + tempPath);
    var contentVal = req.body.content;
    console.log("contentVal: " + contentVal);
	
    // /tmp/
    var fileName = req.file.filename;
    
    data.histories.push({        
    	content:contentVal,
    	imageURL: fileName
	});

    console.log("fileName: " + fileName);
    
    var targetPath = path.join(__dirname, "../public/images/" + fileName);

    if (path.extname(req.file.originalname).toLowerCase() === ".png" || path.extname(req.file.originalname).toLowerCase() === ".jpg" 
    	|| path.extname(req.file.originalname).toLowerCase() === ".jpeg") {
      fs.rename(tempPath, targetPath, function (err){
        if (err) return handleError(err, res);

        res
          .status(200)
          .contentType("text/html")
          .end('<head><script src="https://code.jquery.com/jquery.js"></script><script>$(document).ready(function() {$(location).attr("href", "/history")});</script></head>')
          //.end("File uploaded!");
		});
    } else {
      fs.unlink(tempPath, function(err) {
        if (err) return handleError(err, res);

        res
          .status(403)
          .contentType("text/plain")
          .end("Only .png files are allowed!");
      });
    }


  };










