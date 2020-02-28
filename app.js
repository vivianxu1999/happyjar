
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var fs = require("fs");
var handlebars = require('express3-handlebars')
var multer = require("multer");
var cloudinary = require('cloudinary').v2;

var home1 = require('./routes/home1');
var history1 = require('./routes/seeHistories1');
var text1 = require('./routes/writeText1');
var image1 = require('./routes/uploadImage1');
var about1 = require('./routes/about1');
var login1 = require('./routes/login1');

var home2 = require('./routes/home2');
var history2 = require('./routes/seeHistories2');
var text2 = require('./routes/writeText2');
var image2 = require('./routes/uploadImage2');
var about2 = require('./routes/about2');
var login2 = require('./routes/login2');
// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.set('CLOUDINARY_URL', 'cloudinary://821554757443318:Q2a12Dps3FjbfMBnc8V3ErssUWo@hjtheir6o'); 
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/home1', home1.view);
app.get('/history1', history1.view);
app.get('/text1', text1.view);
app.get('/image1', image1.view);
app.get('/writeText1', text1.submitWriteText);
app.get('/about1', about1.view)
app.get('/page_A', login1.view)

app.get('/home2', home2.view);
app.get('/history2', history2.view);
app.get('/text2', text2.view);
app.get('/image2', image2.view);
app.get('/writeText2', text2.submitWriteText);
app.get('/about2', about2.view)
app.get('/page_B', login2.view)

const upload = multer({
  dest: "/tmp/"
  // you might also want to set some limits: https://github.com/expressjs/multer#limits
});

app.post(
  "/uploadImage1",
  upload.single("file" /* name attribute of <file> element in your form */),
  image1.uploadImage
);

app.post(
  "/uploadImage2",
  upload.single("file" /* name attribute of <file> element in your form */),
  image2.uploadImage
);

// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
