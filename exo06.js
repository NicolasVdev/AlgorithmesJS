function algoWestViewSimpleTour(heights) {
  let count = 0;
  let maxHeight = 0;
  for (let i = heights.length - 1; i >= 0; i--) {
      if (heights[i] > maxHeight) {
          maxHeight = heights[i];
          count++;
      }
  }
  return count;
}
result = algoWestViewSimpleTour([3, 7, 8, 3, 6, 1]);
console.log(result);

result = algoWestViewSimpleTour([1, 4, 5, 8]);
console.log(result);

result = algoWestViewSimpleTour([20, 5, 1, 11, 12, 2, 9, 5, 5, 6]);
console.log(result);