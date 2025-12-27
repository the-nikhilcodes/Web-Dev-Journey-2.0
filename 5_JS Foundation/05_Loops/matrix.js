const matrix = [
  [1, 4, 7],
  [2, 5, 9],
  [3, 6, 8],
];

let found = false;

for (let i = 0; i < matrix.length && !found; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    if (matrix[i][j] === 5) {
      console.log("Found at:", i, j);
      found = true;
      break;
    }
  }
}
