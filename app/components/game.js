import Component from '@ember/component';

export default Component.extend({
  actions: {
    gameStart() {
      const board = new Board();
      const humanPlayer = new HumanPlayer(board);
      const computerPlayer = new ComputerPlayer(board);
      let turn = 0;

      const config = {childList: true};
      const observer = new MutationObserver(() => takeTurn());
      board.positions.forEach((el) => observer.observe(el, config));

      takeTurn();

      function takeTurn() {
        if (board.checkWinner()) {
          return;
        } else {
          if (turn % 2 === 0) {
            humanPlayer.takeTurn();
          } else {
            computerPlayer.takeTurn();
          }
          turn++;
        }
      }

      if(board.checkWinner){
        this.sendAction('update');
      }

      function Board() {
        this.positions = Array.from(document.querySelectorAll(".cell"));

        this.checkWinner = function() {
          let winner = false;

          const winnigCombinations = [
            [0,1,2],
            [3,4,5],
            [6,7,8],

            [0,4,8],
            [2,4,6],
            [0,3,6],
            [1,4,7],
            [2,5,8],
          ];

          const positions = this.positions;

          winnigCombinations.forEach((winnigCombo) => {
            const pos0InnerText = positions[winnigCombo[0]].innerText;
            const pos1InnerText = positions[winnigCombo[1]].innerText;
            const pos2InnerText = positions[winnigCombo[2]].innerText;
            const isWinningCombo = pos0InnerText !== "" &&
            pos0InnerText === pos1InnerText &&
            pos1InnerText === pos2InnerText;

            if (isWinningCombo) {
              winner = true;
              winnigCombo.forEach((i) => {
                positions[i].className += " winner";
              });
            } 
          });
          return winner;
        }
      }

      function HumanPlayer(board) {
        this.takeTurn = function(){
          board.positions.forEach(el => el.addEventListener("click", handleTurnTaken));
        }

        function handleTurnTaken(event) {
          event.target.innerText = "X";
          board.positions.forEach(el => el.removeEventListener("click", handleTurnTaken));
        }
      }

      function ComputerPlayer(board) {
        this.takeTurn = function(){
          const availablePositions = board.positions.filter((p) => p.innerText === "");
          const move = Math.floor(Math.random() * availablePositions.length);
          availablePositions[move].innerText = "O";
        }
      }
    }
  }
});
