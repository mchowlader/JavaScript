
console.clear();

//using anonimous object
// setTimeout(() => 
// {
//     console.log("Hi!");
// }, 2000)


// setTimeout(dispaly,2000);
// function dispaly()
// {
//     console.log("Display Function");
// }


//setTimeout Example
// var Savebutton = document.querySelector(".save-btn");
// var message = document.querySelector(".message");

// Savebutton.addEventListener("click", saveUser);
// function saveUser()
// {
//     message.textContent = "User Register Successfully";

//     setTimeout(() => 
//     {
//         message.textContent = "";
//     }, 2000)
// }

//setInterval
// var Savebutton = document.querySelector(".save-btn");
//  var message = document.querySelector(".message");

//  Savebutton.addEventListener("click", countDisplay);

// function countDisplay()
// {
//     let count = 1;
//     message.textContent = count;
    
//     setInterval(() => 
//     {
    
//         count++;
//         message.textContent = count;

//     }, 1000);
// }

//create watch using setInterval

var Savebutton = document.querySelector(".save-btn");
var message = document.querySelector(".message"); 

Savebutton.addEventListener("click", DisplayWatch);

function DisplayWatch()
{
    var date = new Date();
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    minutes = TimeFormat(minutes);
    seconds = TimeFormat(seconds);

    var time = hour + ":" + minutes + ":" + seconds;

    message.textContent = time
    setInterval(DisplayWatch, 1000);
}

function TimeFormat(value)
{
    if(value < 10)
    {
        value = "0" + value;
    }

    return value;
}