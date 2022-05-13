console.clear();
const div = document.querySelector("div");

div.addEventListener("click", function(e)
{
    //console.log(e.target);
    //console.log(e.target.id);
    //console.log(e.target.className);
    //console.log(e.target.innerHTML);

    // console.log(e.target.textContent);
    // console.log(e.target.innerText);

})

// div.addEventListener("dblclick", function()
// {
//     console.log("double click is occure");
// })

// div.addEventListener("mousedown", function()
// {
//     console.log("mousedown is occure");
// })

// div.addEventListener("mouseup", function()
// {
//     console.log("mouseup is occure");
// })
// div.addEventListener("mouseenter", function()
// {
//     console.log("mouse enter");
// })
// div.addEventListener("mouseleave", function()
// {
//     console.log("mouseup leave");
// })
// div.addEventListener("mousemove", function()
// {
//     console.log("mouse moveing");
// })
// div.addEventListener("mouseover", function()
// {
//     console.log("mouseup over");
// })


//comaper with window
// div.addEventListener("mousemove", function(e)
// {
//     console.log("ClientX = " + e.clientX + " , ClientY = " + e.clientY);
// })

//compare with div
// div.addEventListener("mousemove", function(e)
// {
//     console.log("OffSetX = " + e.offsetX + " , OffSetY = " + e.offsetY)
// })


//node convert to array
//using mapping

var buttons = document.querySelectorAll('.btn');

Array.from(buttons).map((button) => 
{
    button.addEventListener('click', function(e)
    {
        console.log(e.target.innerText);
    })
})