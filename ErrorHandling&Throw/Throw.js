console.clear();

document.querySelector("#btn").addEventListener("click", function()
{
    var data =  document.querySelector("#input-box").value;

    try
    {
        if(data < 5)
        {
            throw "Input can not less than 5."
        }
        else if(data > 5)
        {
            throw "Input can not greater then 5."
        }
    }
    catch(ex)
    {
        console.log(ex);
    }
})