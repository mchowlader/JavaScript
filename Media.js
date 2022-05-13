for(var i = 0; i < 2; i++)
{
    document.querySelectorAll(".musicButton")[i].addEventListener("click",function()
    {
        var text = this.innerHTML;
        console.log(text);
        playAudio(text);
        playAnimation(text);
    });
}

document.addEventListener("keypress", function(ev){
    var value = ev.key;
    playAudio(value);
    playAnimation(value);
});

function playAudio(text)
{
    switch(text)
        {
            case "a":
                var audio = new Audio("Sounds/apon.mp3");
                audio.play();
                break;

            case "b":
                var audio = new Audio("Sounds/porano.mp3");
                audio.play();
                break;
        }
}

function playAnimation(text)
{
    var selectionButton = document.querySelector("." + text);
    selectionButton.classList.add("animation");

    setTimeout(function()
    {
        selectionButton.classList.remove("animation");
    }, 1000);
}

function playAnimation(text){

    var selectionButton = document.querySelector("." + text);
    selectionButton.classList.add("animation");

    setTimeout(function(){
        selectionButton.classList.remove("animation");
    }, 1000)
}

var count = 0;
document.querySelector("textarea").addEventListener("keypress", function(event)
{
    count++;
    var values = event.key;
    document.querySelectorAll("p")[0].innerHTML = "You lst clicked " + values;
    document.querySelectorAll("p")[1].innerHTML = "Total charecter " + count;
});