//getElementById
//getElementsByTag
//getElementsByClassName
//querySelector

console.clear();

document.getElementById("heading1").innerHTML = "Hello";

var myHead = document.getElementById("heading1");
myHead.innerHTML = "Hello Guys!";

document.getElementById("para").innerHTML = "Good Bye";

document.getElementsByTagName("p")[0].innerHTML = "get by tag";
document.getElementsByClassName("class1")[0].innerHTML = "get by class tag";

document.querySelector(".class1").innerHTML = "Changed by querySelector";
document.querySelector("#id2").innerHTML = "get by id using queryselector";