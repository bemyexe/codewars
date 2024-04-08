/*
Rock Paper Scissors
Let's play! You have to return which player won! In case of a draw return Draw!.

Examples(Input1, Input2 --> Output):

"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"
*/

const rps = (p1, p2) => {
  if (p1 === p2) {
    return "Draw!";
  }
  let scis = "scissors";
  let rock = "rock";
  let paper = "paper";
  let won1 = "Player 1 won!";
  let won2 = "Player 2 won!";
  if (p1 === scis && p2 === rock) {
    return won2;
  } else if (p1 === scis && p2 === paper) {
    return won1;
  } else if (p1 === paper && p2 === rock) {
    return won1;
  } else if (p1 === paper && p2 === scis) {
    return won2;
  } else if (p1 === rock && p2 === scis) {
    return won1;
  } else {
    return won2;
  }
};
