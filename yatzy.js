
let rollButton = document.getElementById('rollButton');
rollButton.innerHTML = 'Roll the dice!';
rollButton.onmouseover = function() {
  rollButton.style.backgroundColor = 'lightblue';
}
rollButton.addEventListener('click', function() {alert('Button clicked!')});