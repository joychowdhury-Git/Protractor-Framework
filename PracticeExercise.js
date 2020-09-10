describe('Protractor Tutorial', function()
{
	
	
	function itemname(products)
	{
		
		element.all(by.tagName("app-card")).each(function(item) {
			//browser.sleep(1000);
			item.element(by.css("h4[class='card-title'] a")).getText().then(function(titletext) {
				
				if(titletext==products)
					{
					//browser.sleep(1000);
					item.element(by.css("button[class='btn btn-info']")).click();
					}
				
			})
		})
		
	}
	
	
	it('Submit the form in Protractor site', function() {
		browser.get("https://rahulshettyacademy.com/angularpractice/");
		browser.manage().window().maximize();
		element(by.name("name")).sendKeys("Joy Chowdhury");
		element(by.name("email")).sendKeys("www.joy.chowdhury@gmail.com");
		element(by.id("exampleInputPassword1")).sendKeys("Joy@2020");
		element(by.css("input[type='checkbox']")).click();
		element(by.cssContainingText("[id='exampleFormControlSelect1'] option","Female"));
		element.all(by.name("inlineRadioOptions")).first().click();
		element(by.name("bday")).sendKeys("07-09-2020");
		
		element(by.buttonText("Submit")).click().then(function() {
		
			element(by.css("div[class*='success']")).getText().then(function(successtext) {
				console.log(successtext);
			})
			
			element(by.name("name")).clear();
			element(by.name("name")).sendKeys("M").then(function() {
				
				element(by.css("div[class='alert alert-danger']")).getText().then(function(errormessage) {
					console.log(errormessage);
					browser.sleep(5000);
					element(by.name("name")).clear();
					browser.sleep(5000);						
					element(by.css("div[class='alert alert-danger']")).getText().then(function(seconderrormessage) {
							console.log(seconderrormessage);	
					})
					var errorcount = element.all(by.css("div[class='alert alert-danger']")).count();
					if(errorcount>0)
						{
						console.log("error is present in website");
						}
				
					else
						{
						console.log("error is not present");
						}
			})
			
				element(by.linkText("Shop")).click();
				itemname("Samsung Note 8");
				itemname("iphone X");
				element(by.partialLinkText("Checkout")).getText().then(function(cartnumber) {
					
					var cart = cartnumber.split("(");
					var carttotalcount = Number(cart[1].trim().charAt(0));
					expect(carttotalcount).toBe(2);
				})
			
			})
		
		})
	})
		
	it('Checkout function',function(){
			var total = 0 ;
			element(by.partialLinkText("Checkout")).click();
			browser.sleep(3000);
			element.all(by.css("tr td:nth-child(4) strong")).each(function(item) {
				item.getText().then(function(amount) {
				var textofamount = amount.split(" ");
				totalamount = Number(textofamount[1]);
				total = total + totalamount;
				console.log(total);	
				})
			})
			
			element(by.css("h3 strong")).getText().then(function(amountverify) {
				console.log(amountverify);
				var textofamount = amountverify.split(" ");
				totalfinal = Number(textofamount[1]);
				expect(totalfinal).toBe(total);
			})
						
		})
	
})
		
	