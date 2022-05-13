console.clear();

var textareas = document.querySelector('textarea');

textareas.addEventListener('keydown', function(e)
{
    if(e.repeat)
    {
        alert("do not reapet");
    }
});
// textareas.addEventListener('keypress', function(e)
// {
//     console.log("keypress");
// });

// textareas.addEventListener('keyup', function(e)
// {
//     //console.log(e.key);
//     //console.log(e.keyCode);
//     //console.log(e.code);

//     //shift button press kore onno kono button press korle tokhon 'True' otherwise 'False Dekhabe'
//     if(e.shiftKey)
//     {
//         console.log("Shift + " + e.key);
//     }
// });
