
function car(){
	
	this.engine="turbo";
	this.colour="red";
	
	//method name model and property is function
	
this.model=function()
{
	console.log("bmw");
};
	
};


module.exports= new car();

//var a = new car();
//a.model();
//console.log(a.engine);