describe('All locator Tutorial', function() {
	// function will have all test cases (it block)
	
	function addnumber(a,b,c)
	{
		element(by.model('first')).sendKeys(a);
		element(by.model('second')).sendKeys(b);
		
		element.all(by.tagName("option")).each(function(item) {
		item.getAttribute("value").then(function(dropdownvalue) {
		//console.log(dropdownvalue);
		if(dropdownvalue==c)
		{
		item.click();
		}
	})
})
		
		element(by.id('gobutton')).click();
	}
	
	it("Chain Locators", function() {

		browser.get("https://juliemr.github.io/protractor-demo/");
		addnumber(2,3,"ADDITION");
		addnumber(2,3,"DIVISION");
		addnumber(2,3,"MODULO");
		addnumber(2,3,"MULTIPLICATION");
		addnumber(2,3,"SUBTRACTION");
		element.all(by.repeater("result in memory")).each(function(item) {
			item.element(by.css("td:nth-child(3)")).getText().then(function(text)
					{			
				console.log(text);
				
					})
		})
		
	})

})