try
{
    alert("Hi!")
    alert(x);
}
catch(ex)
{
    console.log("Catch the inner error : ")
    console.log(ex);
    console.log(ex.name);
    console.log(ex.message);
}
finally
{
    alert("Bye!");
}