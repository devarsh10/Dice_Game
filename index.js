var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomImage1 = "dice"+randomNumber1+".png";

var img1 = document.querySelectorAll("img")[1];
img1.setAttribute("src", randomImage1);

var randomNumber2 = Math.floor(Math.random()*6) + 1;
var randomImage2 = "dice"+randomNumber2+".png";

var img2 = document.querySelectorAll("img")[2];
img2.setAttribute("src", randomImage2);

//Player __ Wins!


if(randomNumber1 > randomNumber2)
{
    document.querySelector(".font").innerHTML = "Player 1 Wins!";
}
else if(randomNumber2 > randomNumber1)
{
    document.querySelector(".font").innerHTML = "Player 2 Wins!";
}
else
{
    document.querySelector(".font").innerHTML = "Draw, Try Again!";
}
