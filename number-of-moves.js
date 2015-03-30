function numberOfMoves(numberOfDisks) {
  if(numberOfDisks == 1) {
    return 1
  } else {
    return 2 * numberOfMoves(numberOfDisks - 1) + 1;
  }
}

console.log(numberOfMoves(64));
