import Component from '@ember/component';
import { A } from '@ember/array';
import EmberObject from '@ember/object';

const Board = EmberObject.extend({
  init() {
    this._super(...arguments);
    this.set("turn", 0);
    this.set("winner", false);
    this.set('winnigCombinations', A([
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,4,8],
      [2,4,6],
      [0,3,6],
      [1,4,7],
      [2,5,8]
    ]));
  },
  handleHumanTurn(id, cells) {
    cells.forEach(function(cell) {
      if (id == cell.id) {
        cell.innerHTML = "X";
        board.turn++;
        board.checkWinner(cells);
        
        if (board.winner !== true) {          
          board.handleComputerTurn(cells);
        }
      }
    });
  },
  handleComputerTurn(cells) {
    const position = Array.from(cells);

    const availablePositions = position.filter((p) => p.innerText === "");
    const move = Math.floor(Math.random() * availablePositions.length);
    availablePositions[move].innerText = "O";
    board.turn++;
    board.checkWinner(cells);
  },
  checkWinner(cells) {
    const positions = Array.from(cells);
  
    board.winnigCombinations.forEach((winnigCombo) => {
      const pos0InnerText = positions[winnigCombo[0]].innerText;
      const pos1InnerText = positions[winnigCombo[1]].innerText;
      const pos2InnerText = positions[winnigCombo[2]].innerText;
  
      const isWinningCombo = pos0InnerText !== "" &&
      pos0InnerText === pos1InnerText &&
      pos1InnerText === pos2InnerText;
  
      if (isWinningCombo) {
        board.winner = true;
        winnigCombo.forEach((i) => {
          positions[i].className += " winner";
        });
      } 
    });
    return board.winner;
  }
});

let board = Board.create();

export default Component.extend({

  actions: {
    takeTurn(id) {
      let cells = this.element.querySelectorAll('.cell');

      if (board.turn % 2 === 0) {
        board.handleHumanTurn(id, cells);
      }
    },
    reStart() {
      let cells = this.element.querySelectorAll('.cell');
      board.turn = 0;
      board.winner = false;

      cells.forEach(el => {
        el.innerText = "";
        el.classList.remove("winner");
      })
    }
  }
});
