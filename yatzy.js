
let rollButton = document.getElementById('rollButton');
let turn = document.getElementById('turn');

function rollDice() {return Math.floor(Math.random() * 6) + 1;}


let testArray = [6,4,2,5,3];
let sumArray = [0,0,0,0,0,0];

/*Fill 1-s, 2-s, 3-s, 4-s, 5-s, 6-s fields*/
function fillSingles() {
  for (const no of testArray) {
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
  for (let i = testArray.length - 1; i >= 1; i--) {
    for (let j = i - 1; j >= 0; j--) {
      if (testArray[i] === testArray[j] && bestPair < (2 * testArray[i])){
        bestPair = (2 * testArray[i]);
      }
    }
  
  }
  let field = document.getElementById("One pair");
  field.value = bestPair;
}

/*Two pairs*/
function fillTwoPairs(){

}

/*Three same*/
function fillThreeSame(){

}

/*Four same*/
function fillFourSame(){

}

/*Full house*/
function fillFullHouse(){

}

/*Small straight*/
function fillSmallStraight(){
  let result = 0;
  let kopi = [...testArray];
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
  let kopi = [...testArray];
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
  for (const no of testArray) {
    sum += no
  }

  document.getElementById("Chance").value = sum
}

/*Yatzy*/
function fillYatzy(){
  let result = 0;
  let isYatzy = true;
  let i = 0;
  while (isYatzy && (i < (testArray.length - 1))){
    if (testArray[i] != testArray[i+1]){
      isYatzy = false;
    }
    i++;
  }

  if(isYatzy){
    result = 5 * testArray[0];
  }

  document.getElementById("Yatzy").value = result;
}

fillSingles();
fillOnePair();
fillChance();
fillYatzy();
fillSmallStraight();
fillLargeStraight();