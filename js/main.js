
/*----- constants -----*/ 
const COLORS = {
    '0': 'white', 
    '1': 'purple', 
    '-1': 'lime'
};

const board = ["sq0", "sq1", "sq2", "sq3", "sq4", "sq5", "sq6", "sq7", "sq8"];

const winCombos = [
    ["sq0", "sq1", "sq2"]
    ["sq3", "sq4", "sq5"]
    ["sq6", "sq7", "sq8"]
    ["sq0", "sq3", "sq6"]
    ["sq1", "sq4", "sq7"]
    ["sq2", "sq5", "sq8"]
    ["sq8", "sq4", "sq8"]
    ["sq2", "sq4", "sq6"]
];

/*----- app's state (variables) -----*/ 
let board, turn, winner;

/*----- cached element references -----*/
const msgEl = document.getElementById('msg');

/*----- event listeners -----*/ 
document.querySelectorAll('div')
  .addEventListener('click', fillSquare);

/*----- functions -----*/
init();

function init() {
  board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  turn = 1;
  winner = null; 

  render();
}


function render() {
    board.forEach(function(boardArr, square) {
      let idx = document.querySelector(`sq${idx}`);
      if (idx.indexOf(0) === 0) {
        idx.style.visibility = 'hidden';
       } else {
        idx.style.visibility = 'visible';
       }

      square.forEach(function(div, unit) {
        let div = document.getElementById(`sq${}`);
        unit.style.backgroundColor = COLORS[cell];
      });
    });
  
  function fillSquare(evt) {
    let index = parseInt(evt.target.id.replace(`sq${}`));
    if (isNaN(index) || winner) return;
    let boardArr = board[index];
    if (boardIdx === -1) return;
   
    boardArr[index] = turn;
    turn *= -1;
    winner = getWinner();
    render();
  }
  
  function getWinner() {
    let winner = null;

    if ("sq0" && "sq1" && "sq2" === 1 || "sq3" && "sq4" && "sq5" === 1 || "sq6" && "sq7" && "sq8" === 1 || 
    "sq0" && "sq3" && "sq6" === 1 || "sq1" && "sq4" && "sq7" === 1 || "sq2" && "sq5" && "sq8" === 1 || 
    "sq8" && "sq4" && "sq8" === 1 || "sq2" && "sq4" && "sq6" === 1) {
        alert("Player 1 Wins!");
    } else if ("sq0" && "sq1" && "sq2" === -1 || "sq3" && "sq4" && "sq5" === -1 || "sq6" && "sq7" && "sq8" === -1 || 
    "sq0" && "sq3" && "sq6" === -1 || "sq1" && "sq4" && "sq7" === -1 || "sq2" && "sq5" && "sq8" === -1 || 
    "sq8" && "sq4" && "sq8" === -1 || "sq2" && "sq4" && "sq6" === -1)) {
        alert("Player 2 Wins!");
    };
