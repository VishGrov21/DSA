function binarySearch(arr = [], start = 0, end, target = 0) {
  let mid = start + Math.floor((end - start) / 2);
  if (start <= end) {
    if (arr[mid] === target) {
      return mid;
    } else if (target < arr[mid]) {
      return binarySearch(arr, start, mid - 1, target);
    } else if (target > arr[mid]) {
      return binarySearch(arr, mid + 1, end, target);
    }
  }
  return -1;
}

const array = [10, 15, 20, 25, 30, 35];

console.log(binarySearch(array, 0, 5, 25));
