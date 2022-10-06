// Dice Result Randomizer for Dice 1 and Dice 2 (1,2,3,4,5,6)
var diceRandomizer = Math.ceil(Math.random() * 6);
var diceRandomizer2 = Math.ceil(Math.random() * 6);
//DOM Change Image Name
document.querySelector("#dice1").innerHTML = `<img src="images/dice${diceRandomizer}.png" alt="" class="dice">`;
document.querySelector("#dice2").innerHTML = `<img src="images/dice${diceRandomizer2}.png" alt="" class="dice">`;
// Changing H1 and show The Winner
if (diceRandomizer > diceRandomizer2) {
  document.querySelector("#winner").innerHTML = "🎲 Player 1 Wins!"
} else if (diceRandomizer < diceRandomizer2) {
  document.querySelector("#winner").innerHTML = "Player 2 Wins! 🎲"
} else {
  document.querySelector("#winner").innerHTML = "Draw!"
}