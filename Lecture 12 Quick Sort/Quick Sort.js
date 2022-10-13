function partition(arr = [], startIndex, endIndex) {
  if (arr.length > 0) {
    const pivot = arr[startIndex];
    let i = startIndex;
    for (let j = i + 1; j <= endIndex; j++) {
      if (arr[j] <= pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
    [arr[i], arr[startIndex]] = [arr[startIndex], arr[i]];
    return i;
  }
}

function quickSort(arr = [], startIndex = 0, endIndex) {
  if (arr.length > 0) {
    if (startIndex < endIndex) {
      const pivotIndex = partition(arr, startIndex, endIndex);
      quickSort(arr, startIndex, pivotIndex);
      quickSort(arr, pivotIndex + 1, endIndex);
    }
    return arr;
  }
}

const arr = [90, 20, 40, 60, 11, 214, 62, 23];
quickSort(arr, 0, arr.length - 1);
console.log(arr);
