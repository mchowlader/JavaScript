console.clear();

var input = document.querySelector('input');

input.addEventListener('blur', function(e)
{
    //console.log("blur is occur")
    // console.log(e.target.value)
    input.value = e.target.value.toUpperCase();
});

// input.addEventListener('focus', function(e)
// {
//     input.style.backgroundColor = "orange";
//     input.style.padding = "2rem";
// });