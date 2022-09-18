function insertionSort(arr = []) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    // If the value of key is less than current pointer
    while (j >= 0 && key < arr[j]) {
      // move the element to the right till we find the smaller element
      // than the current element
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    // store the key to the right side of smaller element
    arr[j + 1] = key;
  }
  return arr;
}
const array = [75, 90, 100, 95, 85, 80];
console.log(insertionSort(array));
