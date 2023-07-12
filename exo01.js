const AlgoWithDoubleLoop = (list, k) => {
  for (let i = 0; i < list.length; i++) {
    for (let j = i + 1; j < list.length; j++) {
      if (list[i] + list[j] === k) {
        return true;
      }
    }
  }
  return false;
};

let result1 = AlgoWithDoubleLoop([10, 5, 3, 7], 17);
console.log("List : [10, 5, 3, 7] - k = 17 => " + result1);

let result2 = AlgoWithDoubleLoop([1, 8, 10, 21], 19);
console.log("List : [1, 8, 10, 21] - k = 19 => " + result2);