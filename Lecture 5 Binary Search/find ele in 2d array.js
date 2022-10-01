function findEleIn2dArray(arr, target) {
  const rowLength = arr.length;
  const columnLength = arr[0].length;
  let left = 0;
  let right = rowLength * columnLength - 1;
  while (left < right) {
    let mid = left + Math.ceil((right - left) / 2);
    let i = Math.floor(mid / columnLength);
    let j = Math.floor(mid % columnLength);
    const ele = arr[i][j];
    if (ele === target) return true;
    else if (target < ele) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return false;
}

const array = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];

console.log(findEleIn2dArray(array, 3));
