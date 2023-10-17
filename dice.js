
const button = document.getElementById('dice-btn');
button.addEventListener('click', rollDice);


function rollDice() {
  var randomDice = Math.floor((Math.random()*6) + 1);
  var diceLocation = "images/dice" + randomDice + ".png";
  var dice1 = document.querySelectorAll("img")[0];
  dice1.setAttribute("src", diceLocation);

  var randomDice2 = Math.floor((Math.random()*6) + 1);
  var diceLocation2 = "images/dice" + randomDice2 + ".png";
  var dice2 = document.querySelectorAll("img")[1];
  dice2.setAttribute("src", diceLocation2);

  if (randomDice > randomDice2) {
    document.querySelector("h2").innerHTML="🎖️ Player 1 wins!";
  }

  else if (randomDice < randomDice2) {
    document.querySelector("h2").innerHTML=" Player 2 wins! 🎖️";
  }

  else if (randomDice = randomDice2) {
    document.querySelector("h2").innerHTML="🎖️Draw!🎖️";
  }

  else {
    document.querySelector("h2").innerHTML="Click again";
  }
}


