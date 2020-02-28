// var express = require('express');
// var app = express()

$(document).ready(function() {
	initializePage();
});

function signOut() {
    window.location.replace("/");

}

function typeEffect(element, speed) {
  var text = element.innerHTML;
  element.innerHTML = "";
  
  var i = 0;
  var timer = setInterval(function() {
    if (i < text.length) {
      element.append(text.charAt(i));
      i++;
    } else {
      clearInterval(timer);
    }
  }, speed);
}

function displayRandomHappyTip() {
  var tips = [
  'Say “I love you” to someone you love.',
  'Give someone a hug.',
  'Tell your co-worker how much you appreciate the work she does. Be specific.',
  'Practice mindful listening with your friends.',
  'Have device-free lunch and dinner time with co-workers and family. ',
  'Be grateful everyday.',
  'Take action.',
  'Money can\'t buy happiness.',
  'Don\'t take rejection personally. ',
  'Have a backup plan. ',
  'Improve your social skill.',
  ];
  var randomVal = Math.floor(Math.random() * tips.length)
  console.log(tips[randomVal]);
  $('#happytips').hide();
  $('#happytips').text(tips[randomVal]);
}


function initializePage() {
  displayRandomHappyTip();
// application
  var speed = 75;
  var h1 = document.querySelector('h1');
  var p = document.querySelector('p');
  var delay = h1.innerHTML.length * speed + speed;

  // type affect to header
  typeEffect(h1, speed);


  // type affect to body
  setTimeout(function(){
  p.style.display = "inline-block";
  typeEffect(p, speed);
}, delay);

	// $('#uploadPicture').click(function(res){
 //  		console.log("upload piciture");
 //  		// return res.redirect("sdf");
 //  		//$("#uploadPictureDiv").hide();
 //  		$(location).attr('href', '/image')
	// });

	// $('#WriteText').click(function(res){
 //  		console.log("upload piciture");
 //  		// return res.redirect("sdf");
 //  		//$("#uploadPictureDiv").hide();
 //  		$(location).attr('href', '/text')
	// });

	// $('#SeeHistories').click(function(res){
 //  		console.log("upload piciture");
 //  		// return res.redirect("sdf");
 //  		//$("#uploadPictureDiv").hide();
 //  		$(location).attr('href', '/history')
	// });

}



