var randomNumber=Math.floor((Math.random()*6))+1;

var randomDiceImage="dice" +randomNumber+ ".png";

var randomImageSource="images/"+randomDiceImage;

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSource);


var randomNumber2=Math.floor(Math.random()*6)+1;

var randomImageSource2="images/dice"+randomNumber2+".png";

document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

if(randomNumber > randomNumber2)
{
  document.querySelector("h1").innerHTML="Player 1 Win!";
}
else if(randomNumber < randomNumber2)
{
  document.querySelector("h1").innerHTML="Player 2 Win!";
}
else
{
  document.querySelector("h1").innerHTML="Draw!";
}
