
// // getElementsByClassName returns an array
// // make an event handler for each box on the board
// var topLeft = document.getElementsByClassName(1)[0];
// // topLeft.addEventListener('click', () => makeMove(topLeft));
// var topMiddle = document.getElementsByClassName(2)[0];
// // topMiddle.addEventListener('click', () => makeMove(topMiddle));
// var topRight = document.getElementsByClassName(3)[0];
// // topRight.addEventListener('click', () => makeMove(topRight));

// var middleLeft = document.getElementsByClassName(4)[0];
// // middleLeft.addEventListener('click', () => makeMove(middleLeft));
// var middleMiddle = document.getElementsByClassName(5)[0];
// // middleMiddle.addEventListener('click', () => makeMove(middleMiddle));
// var middleRight = document.getElementsByClassName(6)[0];
// // middleRight.addEventListener('click', () => makeMove(middleRight));

// var bottomLeft = document.getElementsByClassName(7)[0];
// // bottomLeft.addEventListener('click', () => makeMove(bottomLeft));
// var bottomMiddle = document.getElementsByClassName(8)[0];
// // bottomMiddle.addEventListener('click', () => makeMove(bottomMiddle));
// var bottomRight = document.getElementsByClassName(9)[0];
// // bottomRight.addEventListener('click', () => makeMove(bottomRight));

// var allSquares = document.getElementsByClassName('boardSpot');

// for (var i = 0; i < allSquares.length; i++) {
//   // need to somehow connect second class name to proper variable here. 
//   allSquares[i].addEventListener('click', (event) => {
//     // console.log(event.path[0], 'class names');
//     // console.log(event, 'the evenet');
//     makeMove(event.path[0])
//   });
// }

// var count = 0;
// var lastWinner = 'X';
// var currentPlayer = 'X';
// var xWins = 0;
// var oWins = 0;
// var player1 = prompt('Player 1, please enter your name', '');
// var player2 = prompt('Player 2, please enter your name', '');

// var isLegalMove = function(element) {
//   if(element.innerHTML === 'X' || element.innerHTML === 'O') {
//     return false;
//   }
//   return true;
// }
// var isWinningMove = function() {
//   var c = currentPlayer;
//   if (topLeft.innerHTML === c && topMiddle.innerHTML === c && topRight.innerHTML === c) {
//     return true;
//   } 
//   if (middleLeft.innerHTML === c && middleMiddle.innerHTML === c && middleRight.innerHTML === c) {
//     return true;
//   }
//   if (bottomLeft.innerHTML === c && bottomMiddle.innerHTML === c && bottomRight.innerHTML === c) {
//     return true;
//   }
//   if (topLeft.innerHTML === c && middleLeft.innerHTML === c && bottomLeft.innerHTML === c) {
//     return true;
//   }
//   if (topMiddle.innerHTML === c && middleMiddle.innerHTML === c && bottomMiddle.innerHTML === c) {
//     return true;
//   }
//   if (topRight.innerHTML === c && middleRight.innerHTML === c && bottomRight.innerHTML === c) {
//     return true;
//   }
//   if (topLeft.innerHTML === c && middleMiddle.innerHTML === c && bottomRight.innerHTML === c) {
//     return true;
//   }
//   if (bottomLeft.innerHTML === c && middleMiddle.innerHTML === c && topRight.innerHTML === c) {
//     return true;
//   }  
//   return false;
// }


// var updateScoreboard = function() {
//   var score = document.getElementsByClassName('score')[0];
//   score.innerHTML = `${player1} (X) Score: ${xWins} <br> ${player2} (O) Score: ${oWins}`
// }
// updateScoreboard();

// var makeMove = function(element) {
//   // if the space is already occupied, return out of the makeMove function without making a move.
//   // Player gets another chance to make a legal move.
//   if (!isLegalMove(element)) {
//     alert('Not a legal move. Try again!');
//     return
//   }
//   // place the next piece

//   if (count === 0) {
//     currentPlayer = lastWinner;
//   }  

//   element.innerHTML = currentPlayer;
//   // increment the count
//   count ++
//   // console.log(count, 'count');
//   // check to see if more moves are possible on the board
//   if (count === 9) {
//     alert('The game is a draw')
//     reset();
//     // reset the game board
//   }
//   // check to see if resulting board is a win
//   if (isWinningMove()) {
//     alert (`${currentPlayer} WINS!`)
//     lastWinner = currentPlayer;
//     if (currentPlayer === 'X') {
//       xWins ++;
//     } else {
//       oWins ++;
//     }
//     updateScoreboard();
//     reset();
//   }
//   // change current player before next move
//   toggle();
// }


// var toggle = function() {
//   if(currentPlayer === 'X') {
//     currentPlayer = 'O';
//   } else {
//     currentPlayer = 'X'
//   } 
//   return currentPlayer;
// }

// var reset = function() {
//   console.log('getting here')
//   // window.location.reload()
//   var allSpotsArr = document.getElementsByClassName('boardSpot');
//   for (var i = 0; i < allSpotsArr.length; i++) {
//     allSpotsArr[i].innerHTML = '.';
//   }
//   count = 0;
// }

// var resetButton = document.getElementsByClassName('btn')[0];
// resetButton.addEventListener('click', reset);

// Refactoring for classes

class Game {
  constructor() {
    this.count = 0;
    this.lastWinner = 'X';
    this.currentPlayer = 'X';
    this.xWins = 0;
    this.oWins = 0;
    this.player1 = prompt('Player 1, please enter your name', '');
    this.player2 = prompt('Player 2, please enter your name', '');

    this.topLeft = document.getElementsByClassName(1)[0];
    this.topMiddle = document.getElementsByClassName(2)[0];
    this.topRight = document.getElementsByClassName(3)[0];
    this.middleLeft = document.getElementsByClassName(4)[0];
    this.middleMiddle = document.getElementsByClassName(5)[0];
    this.middleRight = document.getElementsByClassName(6)[0];
    this.bottomLeft = document.getElementsByClassName(7)[0];
    this.bottomMiddle = document.getElementsByClassName(8)[0];
    this.bottomRight = document.getElementsByClassName(9)[0];
    this.allSquares = document.getElementsByClassName('boardSpot');
    this.resetButton = document.getElementsByClassName('btn')[0];
    this.resetButton.addEventListener('click', () => this.reset());
  }
  init () {
    for (var i = 0; i < this.allSquares.length; i++) {
      this.allSquares[i].addEventListener('click', (event) => {
        this.makeMove(event.path[0])
      });
    }
  }
  isLegalMove (element) {
    if(element.innerHTML === 'X' || element.innerHTML === 'O') {
      return false;
    }
    return true;
  }
  isWinningMove () {
    this.c = this.currentPlayer;
    if (this.topLeft.innerHTML === this.c && this.topMiddle.innerHTML === this.c && this.topRight.innerHTML === this.c) {return true} 
    if (this.middleLeft.innerHTML === this.c && this.middleMiddle.innerHTML === this.c && this.middleRight.innerHTML === this.c) {return true}
    if (this.bottomLeft.innerHTML === this.c && this.bottomMiddle.innerHTML === this.c && this.bottomRight.innerHTML === this.c) {return true}
    if (this.topLeft.innerHTML === this.c && this.middleLeft.innerHTML === this.c && this.bottomLeft.innerHTML === this.c) {return true}
    if (this.topMiddle.innerHTML === this.c && this.middleMiddle.innerHTML === this.c && this.bottomMiddle.innerHTML === this.c) {return true}
    if (this.topRight.innerHTML === this.c && this.middleRight.innerHTML === this.c && this.bottomRight.innerHTML === this.c) {return true}
    if (this.topLeft.innerHTML === this.c && this.middleMiddle.innerHTML === this.c && this.bottomRight.innerHTML === this.c) {return true}
    if (this.bottomLeft.innerHTML === this.c && this.middleMiddle.innerHTML === this.c && this.topRight.innerHTML === this.c) {return true}  
    return false;
  }
  updateScoreboard () {
    this.score = document.getElementsByClassName('score')[0];
    this.score.innerHTML = `${this.player1} (X) Score: ${this.xWins} <br> ${this.player2} (O) Score: ${this.oWins}`
  }
  toggle () {
    if(this.currentPlayer === 'X') {
      this.currentPlayer = 'O';
    } else {
      this.currentPlayer = 'X'
    } 
    return this.currentPlayer;
  }
  reset () {
    for (var i = 0; i < this.allSquares.length; i++) {
      this.allSquares[i].innerHTML = '.';
    }
    this.count = 0;
  }
  makeMove (element) {
    if (!this.isLegalMove(element)) {
      alert('Not a legal move. Try again!');
      return
    }
    if (this.count === 0) {
      this.currentPlayer = this.lastWinner;
    }  
    element.innerHTML = this.currentPlayer;
    this.count ++
    if (this.count === 9) {
      alert('The game is a draw')
      this.reset();
    }
    if (this.isWinningMove()) {
      alert (`${this.currentPlayer} WINS!`)
      this.lastWinner = this.currentPlayer;
      if (this.currentPlayer === 'X') {
        this.xWins ++;
      } else {
        this.oWins ++;
      }
      this.updateScoreboard();
      this.reset();
    }
    // change current player before next move
    this.toggle();
  }
}

var game = new Game;
game.init();
game.updateScoreboard();




