var playerWin = 0
var compWin = 0

function computerPlay() {
    const options = ["Rock", "Paper", "Scissors"];
    const selected = options[Math.floor(Math.random() * 3)]
    
    console.log(selected)

    return selected;
}

function round(playSelection, computerSelection) {
    const player = format(playSelection)
    const computer = computerSelection

    if (player == computer) {
        console.log("DRAW! " + player + " does not beat " + computer +"!")
    } 
    else {
        if (player == "Rock" && computer != "Paper") {
            console.log("You WIN! "+ player + " beats " + computer + "!")
            playerWin++
        } 
        else if (player == "Paper" && computer != "Scissors" ){
            console.log("You WIN! "+ player + " beats " + computer + "!") 
            playerWin++       
        }
        else if (play == "Scissors" && computer != "Rock") {
            console.log("You WIN! "+ player + " beats " + computer + "!")
            playerWin++     
        }
        else {
        console.log("You LOSE! " + player + " does not beat " + computer + "!")
        compWin++
        }
    }
    console.log("Player Wins:" + playerWin)
    console.log("Computer Wins:" + compWin)
}

function format(string) {
    const form = string.charAt(0).toUpperCase() + string.substring(1).toLowerCase()
    return form;
}

function play() {
    const roundLength = 5;
    var count = 0;

    while (count != roundLength) {
        round(prompt(), computerPlay())
        count++
    }

    if (playerWin == compWin) {
        console.log("It's a DRAW!")
    } 
    else if (playerWin > compWin) {
        console.log("Player WINS!")
    } else {
        console.log("Computer WINS!")
    }

}

//play()