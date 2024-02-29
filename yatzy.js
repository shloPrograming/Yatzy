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

