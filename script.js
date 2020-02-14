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
    updateRound(
      "round-info",
      "You WIN! " + options[player] + " beats " + options[computer] + "!"
    );
    incrementScore("player-score");
  } else if (payoffMatrix[player][computer] == -1) {
    updateRound(
      "round-info",
      "You LOSE! " +
        options[player] +
        " does not beat " +
        options[computer] +
        "!"
    );
    incrementScore("comp-score");
  } else {
    updateRound(
      "round-info",
      "DRAW! " + options[player] + " does not beat " + options[computer] + "!"
    );
  }
}

function play(type) {
  const winningCondition = 5;

  incrementScore("round-num");

  if (document.getElementById("player-score").innerHTML >= winningCondition) {
    updateRound("player-score", "0");
    updateRound("comp-score", "0");
    updateRound("round-num", "1");
    updateRound("winner", "PLAYER WINS!");
  }
  if (document.getElementById("comp-score").innerHTML >= winningCondition) {
    updateRound("player-score", "0");
    updateRound("comp-score", "0");
    updateRound("round-num", "1");
    updateRound("winner", "COMPUTER WINS!");
  }
  round(type);
}

function incrementScore(winner) {
  var scoreInc = document.getElementById(winner).innerHTML;
  scoreInc++;
  document.getElementById(winner).innerHTML = scoreInc;
}

function updateRound(elementID, message) {
  var update = document.getElementById(elementID).innerHTML;
  update = message;
  document.getElementById(elementID).innerHTML = update;
}
