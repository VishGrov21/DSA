function rotatedSortedArray(array = [], target = 0) {
  let left = 0;
  let right = array.length - 1;
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (array[mid] === target) return mid;
    // checking if right side is sorted
    if (array[mid] >= array[left]) {
      if (array[left] <= target && array[mid] >= target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      // Assuming right side is sorted
      if (array[mid] <= target && target <= array[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1;
}
const arr = [60, 10, 20, 30, 40, 50];
console.log(rotatedSortedArray(arr, 60));
