var photo = ["image/mithun1.jpg", "image/Mithun2.JPG",
 "image/Mithun3.JPG", "image/group.JPG"];
var imageTag = document.querySelector("img");
var count = 0;

function next()
{
    if(photo.length >= count )
    {
        imageTag.src = photo[count];
        count++;
        if(count >= photo.length)
        {
            count = 0;
        }
    }
}

function prev()
{
    imageTag.src = photo[count];
    count--;
    if(count < 0)
    {
        count = photo.length-1;
    }
}