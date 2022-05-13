window.addEventListener("load", function(){
    console.log("load");
})

window.addEventListener("unload", function(){
    console.log("unload");
})

window.addEventListener("scroll", function(){
    console.log("scrolling");
})

window.addEventListener("resize", function(){
    const width = this.window.outerWidth;
    const height = this.window.outerHeight;
    console.log(`Height: ${height}, Width: ${width}`);
})

const details = document.querySelector("details");
details.addEventListener("toggle", function(e)
{
    console.log(e.target.open);
})