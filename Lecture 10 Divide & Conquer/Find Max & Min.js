const findMaxAndMin = (arr = [], startIndex, endIndex) => {
  let maxNum = Number.MAX_VALUE;
  let minNum = Number.MIN_VALUE;

  if (startIndex === endIndex) {
    maxNum = arr[startIndex];
    minNum = arr[startIndex];
  } else if (startIndex === endIndex - 1) {
    if (arr[startIndex] < arr[endIndex]) {
      minNum = arr[startIndex];
      maxNum = arr[endIndex];
    } else {
      minNum = arr[endIndex];
      maxNum = arr[startIndex];
    }
  } else {
    const mid = startIndex + Math.floor((endIndex - startIndex) / 2);
    let [minNum1, maxNum1] = findMaxAndMin(arr, startIndex, mid);
    let [minNum2, maxNum2] = findMaxAndMin(arr, mid + 1, endIndex);
    [minNum, maxNum] = compareMinAndMax(minNum1, minNum2, maxNum1, maxNum2);
  }
  return [minNum, maxNum];
};

function compareMinAndMax(min1, min2, max1, max2) {
  let min = Number.MIN_VALUE;
  let max = Number.MAX_VALUE;
  if (min1 > min2) min = min2;
  else min = min1;

  if (max2 > max1) max = max2;
  else max = max1;
  return [min, max];
}

const array = [10, 20, 30, 90, 4, 1, 65, 12];
console.log(findMaxAndMin(array, 0, array.length - 1));
