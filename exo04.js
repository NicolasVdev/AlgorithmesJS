const algoWestViewSimpleLoop = (building) => {
  let currentIndex = building.length -1;
  let count = 1;
  for (i = building.length; i > 1; --i) {
    console.log("$$$$$$$$$$$$$$$$$$$$$")
      console.log(i);
      console.log(currentIndex);
      console.log("$$$$$$$$$$$$$$$$$$$$$")
    if (building[i] > building[currentIndex]) {
      count ++;
      currentIndex = i;
    }
  }
  return count;
}

const list = [3, 7, 8, 3, 6, 1];
const list2 = [1, 4, 5, 8];
const list3 = [7, 5, 1, 11, 12, 2, 9, 5, 5, 6];

console.log(algoWestViewSimpleLoop(list));
console.log(algoWestViewSimpleLoop(list2));
console.log(algoWestViewSimpleLoop(list3));


// function westView(data) {
//   let current = data.length - 1;
//   let westSide = 1;
//   for (i = data.length; i > 1; --i) {
//     if (data[i] > data[current]) {
//       westSide++;
//       current = i;
//     }
//   }
//   return westSide;
// }