const options = ["Rock", "Paper", "Scissors"];

const payoffMatrix = [
    [0, -1, 1],
    [1, 0, -1],
    [-1, 1, 0]
];
    

function computerPlay() {
    const selected = Math.floor(Math.random() * 3);
    return selected;
}

function round(player) {
    const computer = computerPlay();

    if (payoffMatrix[player][computer] == 1) {
        console.log("You WIN! "+ options[player] + " beats " + options[computer] + "!")
        incrementScore('player-score');
    } 
    else if (payoffMatrix[player][computer] == -1) {
            console.log("You LOSE! " + options[player] + " does not beat " + options[computer] + "!")
            incrementScore('comp-score');
        } 
    else {
        console.log("DRAW! " + options[player] + " does not beat " + options[computer] +"!")
        }
    }


function play(type) {
    const roundLength = 5;
    var count = 0;

    for (count; count <= 5; count++) {
        round(type, computerPlay())
    }
    /*if (playerWin == compWin) {
        console.log("It's a DRAW!")
    } 
    else if (playerWin > compWin) {
        console.log("Player WINS!")
    } else {
        console.log("Computer WINS!")
    }*/
}

function incrementScore(winner) {
    var scoreInc = document.getElementById(winner).innerHTML;
    scoreInc++;
    document.getElementById(winner).innerHTML = scoreInc;
}


//play()