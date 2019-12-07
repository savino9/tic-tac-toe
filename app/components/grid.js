import Component from '@ember/component';

export default Component.extend({
  actions: {
    startGame() {
      const ticTacToeGame = new TicTacToeGame();
      ticTacToeGame.start();

      function TicTacToeGame() {
        const board = new Board();
        const humanPlayer = new HumanPlayer(board);
        const computerPlayer = new ComputerPlayer(board);
        let turn = 0;
        
        this.start = function() {
          const config = {childList: true};
          const observer = new MutationObserver(() => takeTurn());
          board.positions.forEach((el) => observer.observe(el, config));
          takeTurn();
        }

        function takeTurn() {
          console.log("something changed");
          if (turn % 2 === 0) {
            humanPlayer.takeTurn();
          } else {
            computerPlayer.takeTurn();
          }
          turn++;
        }
      }

      function Board() {
        this.positions = Array.from(document.querySelectorAll(".cell"));
      }

      function HumanPlayer(board) {
        this.takeTurn = function(){
          console.log("human turn");
          board.positions.forEach(el => el.addEventListener('click', handleTurnTaken));
        }

        function handleTurnTaken(event) {
          console.log("turn taken");
          event.target.innerText = "X"
        }
      }

      function ComputerPlayer() {
        this.takeTurn = function(){
          console.log("computer turn");
        }
      }
    }
    //   document.querySelector(".end-game").style.display = "none";
    //   // creation of the grid array
    //   grid = Array.from(Array(9).keys());      
    
    //   // setting X or O in empty cell
    //   grid[cell_id] = player1;
    //   document.getElementById(`${cell_id}`).innerText = player1;

    //   // check if the game has been won
    //   let playerWon = checkWin(grid, player1);
    //   // call the gameOver function if playerWin is true
    //   if (playerWon) gameOver(playerWon)
      
    //   function checkWin(board, player) {      
    //     // find the index that the player has been played
    //     let play = board.reduce((acc, el, i) => (el === player) ? acc.concat(i) : acc, []);

    //     let playerWon = null;
    //     // for loop to get the index and the winning array combination
    //     // check in all the possible winning combination
    //     for (var win of winCombinations) {          
    //       if (win.every(el => play.indexOf(el) > -1)) {
    //         console.log("win");
    //       }
    //     //   if (win.every(el => play.indexOf(el) > -1)) {
    //     //     console.log("wiiiiiin");
    //     // //     playerWin = {index: index, player: player};
    //     // //     break;
    //     //   }
    //     }
    //     // return playerWon;
    //   }

    //   function gameOver(playerWon) {
    //     for (let index of winCombinations[playerWon.index]) {
    //       document.getElementById(index).style.backgroundColor = 
    //         playerWon.player == player1 ? "blue" : "red";
    //     }
    //   }

    // },
    // gameReset() {
    //   let cells = document.querySelectorAll(".cell");
    //   for (let i = 0; i < cells.length; i++) {
    //     cells[i].innerText = '';
    //     cells[i].style.removeProperty('background-color');
    //   }
    // }
  }
});
