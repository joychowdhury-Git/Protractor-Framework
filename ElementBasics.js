describe('Protractor Locator Tutorial', function() {
	// function will have all test cases (it block)
	
	var eb = require("./ElementBasicsPom.js");
	var data = require("./data.js");
	beforeEach(function() {
		console.log("Test is started:....");
		eb.getUrl();	
	})
		
	it("Testing calculator functionality", function() {		
		//wait for non angular web-site
		//browser.waitForAngularEnabled(false);
		//browser.get("https://www.google.com");
		//browser.get("https://juliemr.github.io/protractor-demo/")	
		eb.firstnumber.sendKeys(data.datadetails.firstinput);
		eb.secondnumber.sendKeys(data.datadetails.secondinput);
		eb.gobutton.click();

		//jasmine take care the promise 

		expect(eb.resultvalue.getText()).toBe(data.datadetails.result);

		//element(by.css("h2[class='ng-binding']")).getText().then(function(text){

		//console.log(text);

		//})

	})
	
	afterEach(function() {
		console.log("Test is completed");
	});

})