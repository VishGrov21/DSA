function mergeSort(arr = [], startIndex = 0, endIndex = 0) {
  if (startIndex === endIndex) return [arr[startIndex]];
  const mid = startIndex + Math.floor((endIndex - startIndex) / 2);
  const leftSorted = mergeSort(arr, startIndex, mid);
  const rightSorted = mergeSort(arr, mid + 1, endIndex);
  return mergeProcedure(leftSorted, rightSorted);
}

function mergeProcedure(leftArr = [], rightArr = []) {
  const combinedArray = [];
  if (leftArr.length > 0 || rightArr.length > 0) {
    let leftPtr = 0;
    let rightPtr = 0;
    const combinedArrLength = leftArr.length + rightArr.length;
    for (let index = 0; index < combinedArrLength; index++) {
      // Check if right array has any value, if it has then compare with left
      if (isNaN(rightArr[rightPtr]) || leftArr[leftPtr] < rightArr[rightPtr]) {
        combinedArray.push(leftArr[leftPtr]);
        leftPtr++;
      } else {
        combinedArray.push(rightArr[rightPtr]);
        rightPtr++;
      }
    }
  }
  return combinedArray;
}

const arr = [90, 65, 12, 31, 56, 1234, 73];

console.log(mergeSort(arr, 0, arr.length - 1));
