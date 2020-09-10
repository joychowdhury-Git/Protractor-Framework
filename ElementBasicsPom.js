
function ElementBasicsPom(){

	this.firstnumber = element(by.model('first'));
	this.secondnumber = element(by.model('second'));
	this.gobutton = element(by.id('gobutton'));
	this.resultvalue = element(by.css("h2[class='ng-binding']"));
	
	this.getUrl=function(){
		browser.get("https://juliemr.github.io/protractor-demo/");
	};
	
	
};


module.exports= new ElementBasicsPom();

//var a = new car();
//a.model();
//console.log(a.engine);