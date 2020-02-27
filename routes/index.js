
/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('index', {
  	"projects":[
  		{	
  			"name":"test name 1",
  			"image":"lorempixel.people.1.jpeg",
  			"id":"test id 1"
  		},
  		{
  			"name":"test name 2",
  			"image":"lorempixel.city.1.jpeg",
  			"id":"test id 2"
  		}
  ]
  	
  });
};