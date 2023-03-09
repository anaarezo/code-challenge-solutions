const getWinner = (board) => {
  const processedBoard = board.split("\n").map((line) => line.split(" "));

  for (let i = 0; i < processedBoard.length; i++) {
    // check line
    const lineArray = processedBoard[i];
    if (lineArray[0] == lineArray[1] && lineArray[0] == lineArray[2]) {
      return lineArray[0] + " wins!";
    }

    // check column
    if (
      processedBoard[0][i] == processedBoard[1][i] &&
      processedBoard[0][i] == processedBoard[2][i]
    ) {
      return processedBoard[0][i] + " wins!";
    }
  }

  // check diagonal
  if (
    (processedBoard[1][1] == processedBoard[0][0] &&
      processedBoard[1][1] == processedBoard[2][2]) ||
    (processedBoard[1][1] == processedBoard[0][2] &&
      processedBoard[1][1] == processedBoard[2][0])
  ) {
    return processedBoard[1][1] + " wins!";
  }

  return "No winner";
};

module.exports = getWinner;
