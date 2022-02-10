// Generate random Image for player 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomImageSource1 = "images/dice" + randomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);

// Generate random Image for Player 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

// Generate random Image for Player 3
var randomNumber3 = Math.floor(Math.random() * 6) + 1;

var randomImageSource3 = "images/dice" + randomNumber3 + ".png";

document.querySelectorAll("img")[2].setAttribute("src", randomImageSource3);

// Logic to reload or refresh Page using Play button
document.querySelector(".pabtn").addEventListener("click", function(){
  document.location.reload();
})


//Player 1 Wins
if ((randomNumber1 >= randomNumber2)&&(randomNumber1>=randomNumber3)) {
   document.querySelector("h1").innerHTML = "Player 1 Wins!";


// Player 2 Wins
} else if ((randomNumber2 >= randomNumber3)&&(randomNumber2>=randomNumber1)) {
   
   document.querySelector("h1").innerHTML = "Player 2 Wins!";

//Player 3 Wins   
} else {
   document.querySelector("h1").innerHTML = "Player 3 wins!";
}

// Draw condition
if(randomNumber1===randomNumber2 && randomNumber2===randomNumber3 && randomNumber1===randomNumber3){
    document.querySelector("h1").innerHTML="Draw";
 }