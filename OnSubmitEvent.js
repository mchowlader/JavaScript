const form = document.querySelector("form");
const name = form.querySelector("div #name-id");
const email = form.querySelector("div #email-id");
const password = form.querySelector("div #password-id");



form.addEventListener("submit", formHandler);

function formHandler(e)
{
    e.preventDefault();

    const userInfo = 
    {
        name: name.value,
        email:email.value,
        password: password.value
    };

    console.log(userInfo);

    name.value = "";
    email.value = "";
    password.value = "";
}