console.clear();

const input = document.querySelector("input[name = password]");
console.log(input);

input.addEventListener('change', EventHadler);

function EventHadler(event)
{
    // console.log("change work properly");
    // console.log(event);
    //console.log(event.type);
    // console.log(event.target);
    //console.log(event.target.className);
    //console.log(event.target.id);
    //console.log(event.target.value);
}


//checkbox
const programs = document.querySelectorAll("input[name = program]");
console.log(programs);

Array.from(programs).map((program) => 
{
    program.addEventListener("change", programHandler);
})

function programHandler(event)
{
    if(event.target.checked)
    {
        console.log(event.target.value);
    }
}

//select
 
const departments = document.querySelector("#deparment");
console.log(departments);

document.addEventListener("change", departmentsHadler)

function departmentsHadler(event)
{
    console.log(event.target.value);
}