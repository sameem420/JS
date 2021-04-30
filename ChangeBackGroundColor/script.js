var button = document.getElementById("btn");
var hex = document.getElementById("hex");
var chart = "0123456789ABCDEF"

button.addEventListener("click", ChangeColor);

function ChangeColor(){
    var randomColor = ""
    for(var i = 0; i < 6; i++)
    {
        randomColor += chart[Math.floor(Math.random()*16)]
    }
    document.body.style.backgroundColor = "#" + randomColor;
    hex.style.visibility="visible"
    hex.innerHTML = "Hex Color Code : #" + randomColor;

}