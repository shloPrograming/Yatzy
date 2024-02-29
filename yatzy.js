
let rollButton = document.getElementById('rollButton');
rollButton.innerHTML = 'Roll the dice!';
rollButton.onmouseover = function() {
  rollButton.style.backgroundColor = 'lightblue';
}
rollButton.addEventListener('click', function() {alert(rollDice())});

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}