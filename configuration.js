var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
var HtmlReporter = require('protractor-beautiful-reporter');
var AllureReporter = require('jasmine-allure-reporter');
exports.config = {
		
		//seleniumAddress: 'http://localhost:4444/wd/hub', --direct connect
		specs: ['ElementBasicsParameter.js','ChainLocator.js'],
		
		
		capabilities: {
		      browserName: 'chrome',
		      'goog:chromeOptions': {
		        w3c: false
		       },     
		},		
		onPrepare : function(){
			
			browser.manage().window().maximize();
			//html report
			jasmine.getEnv().addReporter(
			        new Jasmine2HtmlReporter({
			          savePath: 'target/screenshots'
			        })
			      );
			//extent report
			jasmine.getEnv().addReporter(new HtmlReporter({
		         baseDirectory: 'Extentreport/screenshots'
		      }).getJasmine2Reporter());
			//allure report
			jasmine.getEnv().addReporter(new AllureReporter({
			      resultsDir: 'allure-results'
			    }));			
			
		},
		
		suites :{
			Smoke : ['Dropdown.js'],
			Regression : ['PracticeExercise.js','Frames.js']
		
		},
		
		jasmineNodeOpts: {
		    showColors: true, // Use colors in the command line report.
		  }

};