let firstIndex = -1;
const firstOccurence = (arr = [], start = 0, end = 0, target = 0) => {
  const mid = start + Math.floor((end - start) / 2);
  if (start <= end) {
    if (target === arr[mid]) {
      firstIndex = mid;
      firstOccurence(arr, start, mid - 1, target);
    } else if (target < mid) {
      firstOccurence(arr, start, mid - 1, target);
    } else if (target > mid) {
      firstOccurence(arr, mid + 1, end, target);
    }
  }
  return firstIndex;
};

let lastIndex = -1;
const lastOccurence = (arr = [], start = 0, end = 0, target = 0) => {
  const mid = start + Math.floor((end - start) / 2);
  if (start <= end) {
    let currentEle = arr[mid];
    if (target === currentEle) {
      lastIndex = mid;
      lastOccurence(arr, mid + 1, end, target);
    } else if (target < currentEle) {
      lastOccurence(arr, start, mid - 1, target);
    } else lastOccurence(arr, mid + 1, end, target);
  }
  return lastIndex;
};

const firstAndLastOccurence = (arr = [], target = 0) => {
  const index = [];
  index.push(firstOccurence(arr, 0, arr.length, target));
  index.push(lastOccurence(arr, 0, arr.length, target));
  return index;
};
const array = [1, 2, 3, 3, 3, 3, 5, 6, 7, 9, 10];
console.log(firstAndLastOccurence(array, 1));
