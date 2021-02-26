const player1 = "X";
const player2 = "O";
let currentPlayer = player1;
let victory = false;
let counter = 0;


let score;
let cells = document.getElementsByTagName("td");
let msg = document.getElementById("message");

msg.innerHTML = "Let's go x !";

let state = [];
let scorePlayer1 = 0;
let scorePlayer2 = 0;

for (let i = 0; i < cells.length; i++) {
  let cell = cells[i];
  cell.addEventListener("click", () => {
    if (cell.innerHTML == "" && victory == false) {
      counter++;
      cell.innerHTML = currentPlayer;
      state[i] = cell.innerHTML;
      if (counter >= 5) {
        checkVictory(state);
      }
      // verification d'un victoire
      if (victory === true) {
        msg.innerHTML = "Congratulations !"; //message général prédsent dans la span "message"
        //Si le le joueur 1 gagne
        if (currentPlayer === player1) {
          /*message personnalisé qui s'affiche dans la span "winner"
          et reprend le nom du que ce joueur à tapé dans l'input "name1" + Affichage d'un qui rafraichi la page*/
          document.getElementById("winner").innerHTML =
          document.getElementsByName("name1")[0].value+" won the game!!" +
           "<br><a href=''>Continue</a>"// + event.preventDefault();
          /*le score du gagnant est incrémenté de 1*/
          scorePlayer1++;
          document.getElementById("score-player-1").innerHTML =
            "Score: +" + scorePlayer1;
        }
        //Si le le joueur 2 gagne
        if (currentPlayer === player2) {
          document.getElementById("winner").innerHTML =
            document.getElementsByName("name2")[0].value+" won the game!!" + "<br><a href=''>Continue</a>";
          scorePlayer2++;
          document.getElementById("score-player-2").innerHTML =
            "Score: +" + scorePlayer2;
        }
      } else if (counter == 9 && victory == false) {
        msg.innerHTML = "DRAW !!!<br><a href='../HTML/indexmorpionLvL2.html'>Let's try something harder!</a>";
      } else {
        currentPlayer = currentPlayer == player1 ? player2 : player1;
        msg.innerHTML = "Let's go " + currentPlayer + " !";
      }
    }
  });
}

function checkVictory(state) {
  if (
    state[0] == currentPlayer &&
    state[0] == state[1] &&
    state[1] == state[2]
  ) {
    victory = true;
  }
  if (
    state[3] == currentPlayer &&
    state[3] == state[4] &&
    state[4] == state[5]
  ) {
    victory = true;
  }
  if (
    state[6] == currentPlayer &&
    state[6] == state[7] &&
    state[7] == state[8]
  ) {
    victory = true;
  }
  if (
    state[0] == currentPlayer &&
    state[0] == state[3] &&
    state[3] == state[6]
  ) {
    victory = true;
  }
  if (
    state[1] == currentPlayer &&
    state[1] == state[4] &&
    state[4] == state[7]
  ) {
    victory = true;
  }
  if (
    state[2] == currentPlayer &&
    state[2] == state[5] &&
    state[5] == state[8]
  ) {
    victory = true;
  }
  if (
    state[0] == currentPlayer &&
    state[0] == state[4] &&
    state[4] == state[8]
  ) {
    victory = true;
  }
  if (
    state[2] == currentPlayer &&
    state[2] == state[4] &&
    state[4] == state[6]
  ) {
    victory = true;
  }
  return false;
}
