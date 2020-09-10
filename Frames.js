describe('Protractor Frames Tutorial', function()

{
	it('Handle Frames', function() {
		browser.waitForAngularEnabled(false);
		browser.get("https://rahulshettyacademy.com/AutomationPractice/").then(function() {
			console.log("maximize window");
			browser.manage().window().maximize();
			browser.sleep(5000);
			console.log("Enter into frame");
			browser.switchTo().frame("courses-iframe");
			element(by.css("a[href*='sign_in']")).getText().then(function(text) {
				
				console.log(text);
			})
		})		
	})

})