//elments 
//create
//remove

var doc = document.querySelector("#mydiv");

//create
var heading1 = document.createElement("h1");
var text = document.createTextNode("This is new heading");
//append
heading1.append(text);
doc.append(heading1);

//remove
var headingRemove = document.getElementsByTagName("h1")[1];
doc.removeChild(headingRemove); 

//insertBefore
var headingZeroText = document.createTextNode("Hi");
var headingZero = document.createElement("h1");
headingZero.append(headingZeroText);
var headingOne = document.getElementsByTagName("h1")[0];
doc.insertBefore(headingZero, headingOne);

//classFindAddRemove
