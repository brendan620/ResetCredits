//Automation to log in and reset the API call limit for the Sightcorp API
//Auther : Brendan Lilly

var page = require('webpage').create();

var fillLoginInfo = function(){
  	var frm = document.getElementById("login_form");
    frm.elements["email"].value = 'your fb email/username';
    frm.elements["pass"].value = 'password';
    frm.submit();
}

page.onLoadFinished = function(){
	if(page.title == "Welcome to Facebook - Log In, Sign Up or Learn More"){
		page.evaluate(fillLoginInfo);
		return;
	}
	else
		page.render('./screens/some.png');
	console.log("completed");
	phantom.exit();
}

page.open('http://face.sightcorp.com/login/?next=/user_dashboard/');