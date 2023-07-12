const algoWestViewDoubleLoop = (building) => {
  let count = building.length;
  for (let i = 0; i < building.length; i++) {
    for (let j = i + 1; j < building.length; j++) {
      if (building[i] < building[j]) {
        count--;
        break;
      }
    }
  }
  return count;
}

const list = [3, 7, 8, 3, 6, 1];
const list2 = [1, 4, 5, 8];
const list3 = [20, 5, 1, 11, 12, 2, 9, 5, 5, 6];

console.log(algoWestViewDoubleLoop(list));
console.log(algoWestViewDoubleLoop(list2));
console.log(algoWestViewDoubleLoop(list3));
