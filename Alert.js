describe('Protractor Alert Tutorial', function()

{
	it('Handle Alert', function() {
		browser.waitForAngularEnabled(false);
		browser.get("https://rahulshettyacademy.com/AutomationPractice/").then(function() {
		
			browser.manage().window().maximize();
			element(by.id("confirmbtn")).click();
			browser.sleep(5000);
			browser.switchTo().alert().getText().then(function(alert) {
				
				console.log(alert);
			});
			
		});
	});

})