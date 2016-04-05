//Name: resetCredits.js
//Run: casperjs test resetCredits.js
//Description: Logs into sightcorp.com and resets the credits for the 
//	first application listed.
//Author: Brendan Lilly



var url = 'http://face.sightcorp.com/login/';

casper.start(url, function() {
   
   console.log("Loaded the sightcorp login page");

   this.sendKeys('#id_username', 'ENTER USERNAME HERE');
   this.sendKeys('#id_password','ENTER PASSWORD HERE');
});

casper.then(function() {
    
    this.click('html body div#wrap div.container div.row div.col-md-8.square div.row form p input.btn.btn-info.form_button');
    console.log("Clicked the login button and navigated to the User-Dashboard");
    
});

casper.then(function(){
	this.click('html body div#wrap div.container div.row div.col-md-10.square table.table.table-hover tbody tr td a');
	console.log("Clicked on the first application listed");

});

casper.then(function(){
	this.click('html body div#wrap div.container div.row div.col-md-10.square p a.btn.btn-warning.pull-right');
	console.log("Clicked on the Reset credits button");

});

casper.waitForAlert(function(response) {
    console.log("Alert triggered: " + response.data);
    casper.open('face.sightcorp.com/logout').then(function(){
    	console.log("Logged out.");
    });
});



casper.run();