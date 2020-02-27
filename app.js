
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var fs = require("fs");
var handlebars = require('express3-handlebars')
var multer = require("multer");

var index = require('./routes/index');
var project = require('./routes/project');
var hello = require('./routes/hello');
var home = require('./routes/home');
var history = require('./routes/seeHistories');
var text = require('./routes/writeText');
var image = require('./routes/uploadImage');
var about = require('./routes/about');
var login = require('./routes/login');



// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
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
app.get('/home', home.view);
app.get('/hello/:userName', hello.view);
app.get('/project/:name', project.viewProject);
app.get('/home', home.view);
app.get('/history', history.view);
app.get('/text', text.view);
app.get('/image', image.view);
app.get('/writeText', text.submitWriteText);
app.get('/about', about.view)
app.get('/', login.view)

const upload = multer({
  dest: "/tmp/"
  // you might also want to set some limits: https://github.com/expressjs/multer#limits
});

app.post(
  "/uploadImage",
  upload.single("file" /* name attribute of <file> element in your form */),
  image.uploadImage
);


// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
