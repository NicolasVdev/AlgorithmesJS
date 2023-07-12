const AlgoWithSimpleLoop = (list, k) => {
  let i = 0;
  let j = i + 1;

  while (i < list.length - 1) {
    if (list[i] + list[j] === k) {
      return true;
    }
    j++;
    if (j === list.length) {
      i++;
      j = i + 1;
    }
  }
  return false;
};

let result1 = AlgoWithSimpleLoop([10, 5, 3, 7], 17);
console.log("List: [10, 5, 3, 7] - k = 17 => " + result1);

let result2 = AlgoWithSimpleLoop([1, 8, 10, 21], 19);
console.log("List : [1, 8, 10, 21] - k = 19 => " + result2);