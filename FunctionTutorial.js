//function in javascript
function add(a,b)
{
	return a+b;
}

console.log(add(2,3));

//array in javascript

var a = ["joy","Roy","Hello","4"];

console.log("Total length is "+a.length);

for(var i=0;i<a.length;i++)
	{
	console.log("value of " +i+ " is:"+a[i])
	}

console.log("Print in reverse");
for(var i=a.length;i>=0;i--)
	{
	console.log("value is in "+i+" is:"+a[i])
	}


//String concept

var name ="Rahul"; // String literal declaration

console.log(name.charAt(3));

var newname=name.concat("Shetty");
console.log(newname);

console.log(name.indexOf("u"));

console.log(name.slice(1, 4));
//starting index is inclusive - ending index is exclusive

console.log(name.toUpperCase());

var name ="Rahul ";

console.log(name.trim());

var name2=new String("Rahul");  // string object declaration


