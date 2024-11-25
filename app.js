const P1 = {
  score: 0,
  button: document.querySelector("#P1Button"),
  display: document.querySelector("#P1Display"),
};

const P2 = {
  score: 0,
  button: document.querySelector("#P2Button"),
  display: document.querySelector("#P2Display"),
};

const resetButton = document.querySelector("#reset");
const winningScoreSelect = document.querySelector("#playto");
let winningScore = 10;
let isGameOver = false;

function updateScores(player, opponent) {
  if (!isGameOver) {
    player.score += 1;
    if (player.score === winningScore) {
      isGameOver = true;
      player.display.classList.add("winner");
      opponent.display.classList.add("loser");
      player.button.disabled = true;
      opponent.button.disabled = true;
    }
    player.display.textContent = player.score;
  }
}

P1.button.addEventListener("click", function () {
  updateScores(P1, P2);
});

P2.button.addEventListener("click", function () {
  updateScores(P2, P1);
});

winningScoreSelect.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  reset();
});

resetButton.addEventListener("click", reset);

function reset() {
  isGameOver = false;
  for (let player of [P1, P2]) {
    player.score = 0;
    player.display.textContent = 0;
    player.display.classList.remove("winner", "loser");
    player.button.disabled = false;
  }
}
