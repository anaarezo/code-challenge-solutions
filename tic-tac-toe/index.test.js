const getWinner = require("./noughtsAndCrosses");

test("X wins on top row", () => {
  let winner = getWinner("X X X\nO X O\nX X O");
  expect(winner).toBe("X wins!");
});

test("X wins on middle row", () => {
  let winner = getWinner("O X O\nX X X\nX X O");
  expect(winner).toBe("X wins!");
});

test("X wins on bottom row", () => {
  let winner = getWinner("O X O\nX X O\nX X X");
  expect(winner).toBe("X wins!");
});

test("X wins on left column", () => {
  let winner = getWinner("X O X\nX O O\nX X O");
  expect(winner).toBe("X wins!");
});
