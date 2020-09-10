describe(
		'WindowHandle Tutorial',
		function() {

			it('window handle',	function() {
						browser.waitForAngularEnabled(false);
						browser.get("https://rahulshettyacademy.com/AutomationPractice/");
						element(by.css("a[id='opentab']")).click().then(function() {
						browser.getTitle().then(function(beforeswitchtitle) {
						console.log("The title is before switch tab is :"+ beforeswitchtitle);
						})
						browser.getAllWindowHandles().then(function(handles) {
						browser.switchTo().window(handles[1]);
						browser.sleep(5000);
						browser.getTitle().then(function(afterswitchtitle) {
						console.log("The title is after switch tab is :"+ afterswitchtitle);
						browser.switchTo().window(handles[0]);
						browser.getTitle().then(function(parentswindow) {
						console.log("The window is again back to :"+ parentswindow);
																									})
																				})
															})
										})
					})
		})
