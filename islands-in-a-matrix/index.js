const processData = (input) => {
  let island = 0;
  const normalizedInput = input
    .split("\n")
    .slice(1, -1)
    .map((line) => line.split(" "));

  for (let x = 0; x < normalizedInput.length; x++) {
    for (let y = 0; y < normalizedInput[x].length; y++) {
      if (normalizedInput[x][y] === "1") {
        island++;
        // console.log("ENCONTREI UM INICIO DE ILHA");
        // console.log("X: " + x + " Y: " + y);
        // console.log(normalizedInput);
        visitIsland(x, y, normalizedInput);
      }
    }
  }
  console.log(island);
};

const visitIsland = (x, y, chart) => {
  if (x < 0 || y < 0 || x >= chart.length || y >= chart[x].length) {
    return;
  }

  if (chart[x][y] == "1") {
    chart[x][y] = "-";

    visitIsland(x, y - 1, chart);
    visitIsland(x + 1, y - 1, chart);
    visitIsland(x + 1, y, chart);
    visitIsland(x + 1, y + 1, chart);
    visitIsland(x, y + 1, chart);
    visitIsland(x - 1, y - 1, chart);
    visitIsland(x - 1, y, chart);
    visitIsland(x - 1, y + 1, chart);
  }
};
