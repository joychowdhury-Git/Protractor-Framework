describe('All locator Tutorial', function() {
	// function will have all test cases (it block)
	
	function addnumber(a,b)
	{
		element(by.model('first')).sendKeys(a);
		element(by.model("operator")).element(by.css("option:nth-child(4)"))
				.click();
		element(by.model('second')).sendKeys(b);
		element(by.id('gobutton')).click();
	}
	
	it("Chain Locators", function() {

		browser.get("https://juliemr.github.io/protractor-demo/");
		addnumber(2, 3);
		addnumber(4, 3);
		addnumber(6, 1);
		addnumber(7, 2);
		addnumber(3, 4);
		addnumber(1, 4);

		// count of the same repeater attribute
		element.all(by.repeater("result in memory")).count().then(
				function(count) {

					console.log(count);

				})

		// get each child value
		element.all(by.repeater("result in memory")).each(
				function(item) {
					item.element(by.css("td:nth-child(3)")).getText().then(
							function(textoftable) {

								console.log(textoftable);
							})

				})

	})

})