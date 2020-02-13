const options = ["Rock", "Paper", "Scissors"];

function computerPlay() {
    const selected = options[Math.floor(Math.random() * 3)]
    
    console.log(selected)

    return selected;
}

function round(player, computerSelection) {
    const computer = computerSelection

    if (player == computer) {
        console.log("DRAW! " + player + " does not beat " + computer +"!")
    } 
    else {
        if (player == "Rock" && computer != "Paper") {
            console.log("You WIN! "+ player + " beats " + computer + "!")
            incrementScore('player-score');
        } 
        else if (player == "Paper" && computer != "Scissors" ){
            console.log("You WIN! "+ player + " beats " + computer + "!") 
            incrementScore('player-score');
        }
        else if (player == "Scissors" && computer != "Rock") {
            console.log("You WIN! "+ player + " beats " + computer + "!")
            incrementScore('player-score');
        }
        else {
        console.log("You LOSE! " + player + " does not beat " + computer + "!")
            incrementScore('comp-score');
        }
    }
}

function play(type) {
    const roundLength = 5;
    var count = 0;

    /*while (count != roundLength) {
        round(type, computerPlay())
        count++
    }*/
    round(type, computerPlay())
    count++
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
    var playerScore = document.getElementById(winner).innerHTML;
    playerScore++;
    document.getElementById(winner).innerHTML = playerScore;
}


//play()