//alert, confirm, prompt

//alert("Hello!");


//confirm
// function deleteSomething()
// {
//     let data = confirm("Do you want to delete?");

//     if(data)
//     {
//         console.log("Delete.");
//     }
//     else
//     {
//         console.log("Not Delete");
//     }
// }

// deleteSomething();

//prompt

function WelcomeMessage()
{
    var name = prompt("Enter your name : ");
    var h1 = document.createElement("h1");
    let text;

    if(name == null || name == "")
    {

        text = "No Name Found.";
    }
    else
    {
        text = "Welcome " + name;
    }

    var textNode = document.createTextNode(text);
    h1.appendChild(textNode);
    document.body.appendChild(h1);
}

WelcomeMessage();

