describe('Protractor Tutorial', function()

{
	// function will have all test cases (it block)

	it('Open angular js website', function() {

		//write your real protractor code
		browser.get("https://angularjs.org");
		browser.get("https://juliemr.github.io/protractor-demo/").then(function()
				{
			browser.sleep(5000);
			console.log("This is the end of testing");
				})
		
	})

	/*it('Close browser', function() {

	})*/

})