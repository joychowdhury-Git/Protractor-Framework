describe('Protractor Locator Tutorial', function() {
	
	var eb = require("./ElementBasicsPom.js");
	var data = require("./dataparameter.js");
	var using = require('jasmine-data-provider');
	
	beforeEach(function() {
		console.log("Test is started:....");
		eb.getUrl();	
	})
	
	//datas store actual data
	//description store the sub object name
	//for every iteration one dataset will be picked
	using(data.Datadriven,function(datas,description)
			{
		it("Testing calculator functionality"+ describtion, function() {				
			eb.firstnumber.sendKeys(datas.firstinput);
			eb.secondnumber.sendKeys(datas.secondinput);
			eb.gobutton.click();
			expect(eb.resultvalue.getText()).toBe(datas.result);

		})
			})
	
	
	afterEach(function() {
		console.log("Test is completed");
	});

})