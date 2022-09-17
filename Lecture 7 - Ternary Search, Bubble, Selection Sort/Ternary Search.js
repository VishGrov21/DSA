function ternarySearch(arr = [], left = 0, right = 0, targetNum = 0) {
  right = right || arr.length - 1;
  let mid1 = left + Math.floor((right - left) / 3);
  let mid2 = right - Math.floor((right - left) / 3);
  //   If target is found either at mid 1 or at mid 2 then return the number
  if (arr[mid1] === targetNum || arr[mid2] === targetNum) {
    return targetNum;
  } else if (targetNum < arr[mid1]) {
    // if target is less than mid1, then move towards left & ignore middle & right portion
    return ternarySearch(arr, left, mid1 - 1, targetNum);
  } else if (targetNum > arr[mid2]) {
    // if target is greater than mid2 then move towards the right & ignore middle & left portion
    return ternarySearch(arr, mid2 + 1, right, targetNum);
  } else if (targetNum > arr[mid1] && targetNum < arr[mid2]) {
    // if target is in between left & right then conc on middle portion
    return ternarySearch(arr, mid1 + 1, mid2 - 1, targetNum);
  }
  return -1;
}

const array = [20, 25, 47, 56, 59, 63, 65, 79, 82];

console.log(ternarySearch(array, 0, 8, 79));
