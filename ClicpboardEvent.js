console.clear();

var input = document.querySelector('input');
var p = document.querySelector('p');

input.addEventListener('copy', function()
{
    p.innerText = "you have copied";
});
input.addEventListener('paste', function()
{
    p.innerText = "you have paste";
});
input.addEventListener('cut', function()
{
    p.innerText = "you have cut";
});