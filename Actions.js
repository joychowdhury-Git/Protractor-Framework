describe('MouseAction Tutorial', function(){

	it('Move mouse', function() {
		browser.get("https://rahulshettyacademy.com/AutomationPractice/");
		browser.actions().mouseMove(element(by.css("button[id='mousehover']"))).perform();
		browser.actions().sendkeys(protractor.Key.Arrow_Down).perform().then(function() {
					browser.sleep(5000);
				})
	})

})

