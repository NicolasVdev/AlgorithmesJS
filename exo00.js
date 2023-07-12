const fs = require('fs');
const fileName = process.argv[2];

let file, data;

try {
  file = fs.readFileSync(fileName, 'utf8');
  data = JSON.parse(file);
  console.log(data);
} catch (error) {
  console.error(error.message);
}

const mergeSort = (data) => {
  let dataArr = [...data];
  if (dataArr.length <= 1) {
    return dataArr;
  }
  const midArr = Math.floor(dataArr.length / 2);
  const leftArr = dataArr.slice(0, midArr);
  const rightArr = dataArr.slice(midArr);

  return mergeArrays(mergeSort(leftArr), mergeSort(rightArr));
}

const mergeArrays = (leftArr, rightArr) => {
  let resultArr = [];
  let leftIndex = 0, rightIndex = 0;
  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    if (leftArr[leftIndex] < rightArr[rightIndex]) {
      resultArr.push(leftArr[leftIndex]);
      leftIndex++;
    } else {
      resultArr.push(rightArr[rightIndex]);
      rightIndex++;
    }
  }
  if (leftArr[leftIndex]) {
    let unaddedElements = leftArr.slice(leftIndex)
    resultArr.push(...unaddedElements);
  } else {
    unaddedElements = rightArr.slice(rightIndex)
    resultArr.push(...unaddedElements);
  }
  return resultArr;
}

console.time("temp");
console.log(`Tri par fusion: ${mergeSort(data.list)}`);
console.timeEnd("temp");