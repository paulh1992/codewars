function findNextSquare(square) {
   // find the square root of the square and if square root of square == 0
  if (Math.sqrt(square) % 1 == 0) {
  	// add 1 to the square root and multiply this by 2
    return (Math.sqrt(square) + 1 )**2
  }

  // if square root of square value is anything other than 0 return -1
  else return -1;
}