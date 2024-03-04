let diceHeld = [false, false, false, false, false];
let diceValues = [0, 0, 0, 0, 0];
let turn = 0;

let rollButton = document.getElementById("rollButton");

rollButton.onclick = () => buttonRoll();

let dice = [document.getElementById('die1'), document.getElementById('die2'), document.getElementById('die3'), 
document.getElementById('die4'), document.getElementById('die5')];

for (let i = 0; i < dice.length; i++){
    dice[i].addEventListener("click", function(){
        if (turn != 0){
            diceHeld[i] = !diceHeld[i];
        }
    });
}

function buttonRoll(){
    rollDice();
    updateDice();
    updateScores();
    console.log(diceValues);
    console.log(diceHeld);
    turn++;
    if (turn == 3){
        rollButton.disabled = true;
    }
}

function rollDice(){
    for (i = 0; i < dice.length; i++){
        if (!diceHeld[i]){
            diceValues[i] = Math.floor(Math.random() * 6) + 1;
        }
    }
}

function updateDice(){
    for (i = 0; i < dice.length; i++){
        if (!diceHeld[i]){
            switch(diceValues[i]){
                case 1:
                    dice[i].src = "dice-six-faces-one.png";
                    break;
                case 2:
                    dice[i].src = "dice-six-faces-two.png";
                    break;
                case 3:
                    dice[i].src = "dice-six-faces-three.png";
                    break;
                case 4:
                    dice[i].src = "dice-six-faces-four.png";
                    break;
                case 5:
                    dice[i].src = "dice-six-faces-five.png";
                    break;
                case 6:
                    dice[i].src = "dice-six-faces-six.png";
                    break;
            }
        }
    }
}

let scores = document.getElementById("2").querySelectorAll("input");
console.log(scores.length);
for (let field of scores){
    field.addEventListener("click", function(){
        if (turn != 0){
            field.style.backgroundColor = "lightblue";
            turn = 0;
            rollButton.disabled = false;

            if (gameOver()){
                if (confirm("Play again?")){
                    resetGame();
                }
            }
        }
});
}


function resetGame(){
    for (let field of scores){
        field.style.backgroundColor = "white";
    }
    
    for (let i = 0; i < dice.length; i++){
        diceHeld[i] = false;
    }

    dice[0].src = "dice-six-faces-one.png";
    dice[1].src = "dice-six-faces-two.png";
    dice[2].src = "dice-six-faces-three.png";
    dice[3].src = "dice-six-faces-four.png";
    dice[4].src = "dice-six-faces-five.png";

    turn = 0;
    rollButton.disabled = false;
}

function gameOver(){
    for (let field of scores){
        if (field.style.backgroundColor != "lightblue"){
            return false;
        }
    }
    return true;
}

let testArray = [5,5,6,6,3];


/*Fill 1-s, 2-s, 3-s, 4-s, 5-s, 6-s fields*/
function fillSingles() {
  let sumArray = [0,0,0,0,0,0];
  for (const no of diceValues) {
    if(no == 1){
      sumArray[0]++;
    }
    else if (no == 2){
      sumArray[1] += 2;
    }
    else if (no == 3){
      sumArray[2] += 3
    }
    else if (no == 4){
      sumArray[3] += 4
    }
    else if (no == 5){
      sumArray[4] += 5
    }
    else {
      sumArray[5] += 6
    }
  }

  let one = document.getElementById("1-s");
  let two = document.getElementById("2-s");
  let three = document.getElementById("3-s");
  let four = document.getElementById("4-s");
  let five = document.getElementById("5-s");
  let six = document.getElementById("6-s");

  one.value = sumArray[0];
  two.value = sumArray[1];
  three.value = sumArray[2];
  four.value = sumArray[3];
  five.value = sumArray[4];
  six.value = sumArray[5];
}

/*One pair*/
function fillOnePair(){
  let bestPair = 0;
  for (let i = diceValues.length - 1; i >= 1; i--) {
    for (let j = i - 1; j >= 0; j--) {
      if (diceValues[i] === diceValues[j] && bestPair < (2 * diceValues[i])){
        bestPair = (2 * diceValues[i]);
      }
    }
  
  }
  let field = document.getElementById("One pair");
  field.value = bestPair;
}

/*Two pairs*/
function fillTwoPairs(){
  let kopi = [...diceValues];
  kopi.sort();
  let result = 0;

  if (kopi[0] === kopi[1] && kopi[2] === kopi[3]){
    result = 2 * kopi[0] + 2 * kopi[2];
  }
  else if (kopi[1] === kopi[2] && kopi[3] === kopi[4]){
    result = 2 * kopi[1] + 2 * kopi[3];
  }
  else if (kopi[0] === kopi[1] && kopi[3] === kopi[4]){
    result = 2 * kopi[0] + 2 * kopi[3];
  }

  document.getElementById("Two pairs").value = result;
}

/*Three same*/
function fillThreeSame(){
  let kopi = [...diceValues];
  kopi.sort();
  let result = 0;

  if (kopi[0] === kopi[1] && kopi[1] === kopi[2]){
    result = 3 * kopi[0];
  }
  else if (kopi[1] === kopi[2] && kopi[2] === kopi[3]){
    result = 3 * kopi[1];
  }
  else if (kopi[2] === kopi[3] && kopi[3] === kopi[4]){
    result = 3 * kopi[2];
  }
  document.getElementById("Three same").value = result;
}

/*Four same*/
function fillFourSame(){
  let kopi = [...diceValues];
  kopi.sort();
  let result = 0;

  if (kopi[0] === kopi[1]){
    if (kopi[1] === kopi[2]){
      if (kopi[2] === kopi[3]){
        result = 4 * kopi[0];
      }
    }
  }
  else if (kopi[1] === kopi[2]){
    if (kopi[2] === kopi[3]){
      if (kopi[3] === kopi[4]){
        result = 4 * kopi[1];
      }
    }
  }
  document.getElementById("Four same").value = result;
}

/*Full house*/
function fillFullHouse(){
  let kopi = [...diceValues];
  kopi.sort();
  let result = 0;

  if (kopi[0] === kopi[1] && kopi[1] === kopi[2]){
    if (kopi[3] === kopi[4]){
      result = 3 * kopi[0] + 2 * kopi[4];
    }
  }
  else if (kopi[2] === kopi[3] && kopi[3] === kopi[4]){
    if (kopi[0] === kopi[1]){
      result = 3 * kopi[4] + 2 * kopi[0];
    }
  }

  document.getElementById("Full house").value = result;
}

/*Small straight*/
function fillSmallStraight(){
  let result = 0;
  let kopi = [...diceValues];
  kopi.sort();
  if (kopi[0] === 1){
    if (kopi[1] === 2){
      if (kopi[2] === 3){
        if (kopi[3] === 4){
          if (kopi[4] === 5){
            result = 15;
          }
        }
      }
    }
  }
  document.getElementById("Small straight").value = result;
}

/*Large straight*/
function fillLargeStraight(){
  let result = 0;
  let kopi = [...diceValues];
  kopi.sort();
  if (kopi[0] === 2){
    if (kopi[1] === 3){
      if (kopi[2] === 4){
        if (kopi[3] === 5){
          if (kopi[4] === 6){
            result = 20;
          }
        }
      }
    }
  }
  document.getElementById("Large straight").value = result;
}

/*Chance*/
function fillChance(){
  let sum = 0;
  for (const no of diceValues) {
    sum += no
  }

  document.getElementById("Chance").value = sum
}

/*Yatzy*/
function fillYatzy(){
  let result = 0;
  let isYatzy = true;
  let i = 0;
  while (isYatzy && (i < (diceValues.length - 1))){
    if (diceValues[i] != diceValues[i+1]){
      isYatzy = false;
    }
    i++;
  }

  if(isYatzy){
    result = 5 * diceValues[0];
  }

  document.getElementById("Yatzy").value = result;
}


function updateScores(){
  fillSingles();
  fillOnePair();
  fillTwoPairs();
  fillThreeSame();
  fillFourSame();
  fillFullHouse();
  fillSmallStraight();
  fillLargeStraight();
  fillChance();
  fillYatzy();
}