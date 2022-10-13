console.log(1);
const indexOfMountain = (arr = []) => {
  let start = 0;
  let end = arr.length - 1;

  let index = -1;
  while (start < end) {
    let mid = start + Math.floor((end - start) / 2);
    if ((mid === 0 || arr[mid] > arr[mid - 1]) && (mid === arr.length - 1 || arr[mid] > arr[mid + 1])) {
      return (index = mid);
    } else if (arr[mid] < arr[mid + 1]) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }
  return index;
};
const array = [2,1];
console.log(indexOfMountain(array));
