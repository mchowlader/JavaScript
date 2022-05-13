//clickevent
var doc = document.querySelector("#b1");
doc.addEventListener("click", function()
{
    alert("Hello");
})

var doc2 = document.querySelector("#b2");
doc2.addEventListener("click", myFun);
function myFun()
{
    alert("Hi!");
}

//mouseOverEvent
var peraDoc = document.querySelector("h1");
peraDoc.addEventListener("mouseover",function()
{
    peraDoc.classList.add("myclass");
});
peraDoc.addEventListener("mouseout", function()
{
    peraDoc.classList.remove("myclass");
})


//getButtonNameByThisProperty

var len = document.querySelectorAll(".myButton").length;
for(var i = 0; i<len; i++)
{
    document.querySelectorAll(".myButton")[i].addEventListener("click", function()
{
    var text = this.innerHTML;
    document.querySelector("h2").innerHTML = text + " is Clicked";
});
}


