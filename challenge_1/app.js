// getElementsByClassName returns an array
// make an event handler for each box on the board
var topLeft = document.getElementsByClassName(1)[0];
// topLeft.addEventListener('click', () => makeMove(topLeft));
var topMiddle = document.getElementsByClassName(2)[0];
// topMiddle.addEventListener('click', () => makeMove(topMiddle));
var topRight = document.getElementsByClassName(3)[0];
// topRight.addEventListener('click', () => makeMove(topRight));

var middleLeft = document.getElementsByClassName(4)[0];
// middleLeft.addEventListener('click', () => makeMove(middleLeft));
var middleMiddle = document.getElementsByClassName(5)[0];
// middleMiddle.addEventListener('click', () => makeMove(middleMiddle));
var middleRight = document.getElementsByClassName(6)[0];
// middleRight.addEventListener('click', () => makeMove(middleRight));

var bottomLeft = document.getElementsByClassName(7)[0];
// bottomLeft.addEventListener('click', () => makeMove(bottomLeft));
var bottomMiddle = document.getElementsByClassName(8)[0];
// bottomMiddle.addEventListener('click', () => makeMove(bottomMiddle));
var bottomRight = document.getElementsByClassName(9)[0];
// bottomRight.addEventListener('click', () => makeMove(bottomRight));

var allSquares = document.getElementsByClassName('boardSpot');

for (var i = 0; i < allSquares.length; i++) {
  // need to somehow connect second class name to proper variable here. 
  allSquares[i].addEventListener('click', (event) => {
    // console.log(event.path[0], 'class names');
    // console.log(event, 'the evenet');
    makeMove(event.path[0])
  });

}


var count = 0;
var lastWinner = 'X';
var currentPlayer = 'X';
var xWins = 0;
var oWins = 0;


var isLegalMove = function(element) {
  if(element.innerHTML === 'X' || element.innerHTML === 'O') {
    return false;
  }
  return true;
}
var isWinningMove = function() {
  var c = currentPlayer;
  if (topLeft.innerHTML === c && topMiddle.innerHTML === c && topRight.innerHTML === c) {
    return true;
  } 
  if (middleLeft.innerHTML === c && middleMiddle.innerHTML === c && middleRight.innerHTML === c) {
    return true;
  }
  if (bottomLeft.innerHTML === c && bottomMiddle.innerHTML === c && bottomRight.innerHTML === c) {
    return true;
  }
  if (topLeft.innerHTML === c && middleLeft.innerHTML === c && bottomLeft.innerHTML === c) {
    return true;
  }
  if (topMiddle.innerHTML === c && middleMiddle.innerHTML === c && bottomMiddle.innerHTML === c) {
    return true;
  }
  if (topRight.innerHTML === c && middleRight.innerHTML === c && bottomRight.innerHTML === c) {
    return true;
  }
  if (topLeft.innerHTML === c && middleMiddle.innerHTML === c && bottomRight.innerHTML === c) {
    return true;
  }
  if (bottomLeft.innerHTML === c && middleMiddle.innerHTML === c && topRight.innerHTML === c) {
    return true;
  }  
  return false;
}

var updateScoreboard = function() {
  var score = document.getElementsByClassName('score')[0];
  score.innerHTML = `X Wins: ${xWins} <br> O Wins: ${oWins}`
}

var makeMove = function(element) {
  // if the space is already occupied, return out of the makeMove function without making a move.
  // Player gets another chance to make a legal move.
  if (!isLegalMove(element)) {
    alert('Not a legal move. Try again!');
    return
  }
  // place the next piece

  if (count === 0) {
    currentPlayer = lastWinner;
  }  

  element.innerHTML = currentPlayer;
  // increment the count
  count ++
  // console.log(count, 'count');
  // check to see if more moves are possible on the board
  if (count === 9) {
    alert('The game is a draw')
    reset();
    // reset the game board
  }
  // check to see if resulting board is a win
  if (isWinningMove()) {
    alert (`${currentPlayer} WINS!`)
    lastWinner = currentPlayer;
    if (currentPlayer === 'X') {
      xWins ++;
    } else {
      oWins ++;
    }
    updateScoreboard();
    reset();
  }
  // change current player before next move
  toggle();
}


var toggle = function() {
  if(currentPlayer === 'X' && count > 0) {
    currentPlayer = 'O';
  } else if(currentPlayer === 'O' && count > 0) {
    currentPlayer = 'X'
  } else {
    currentPlayer = lastWinner;
  }
  return currentPlayer;
}

var reset = function() {
  console.log('getting here')
  // window.location.reload()
  var allSpotsArr = document.getElementsByClassName('boardSpot');
  for (var i = 0; i < allSpotsArr.length; i++) {
    allSpotsArr[i].innerHTML = '.';
  }
  count = 0;
}

var resetButton = document.getElementsByClassName('btn')[0];
resetButton.addEventListener('click', reset);




