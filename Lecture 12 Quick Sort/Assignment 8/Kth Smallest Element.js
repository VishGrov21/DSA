/**
 * Problem Statement: Kth smallest element [Amazon]
 * Given an array of n-elements and an integer k, find the kth smallest element present in an array.
 * For example: arr = [40, 25, 68, 79, 52, 66, 89, 97], k = 2, result = 40
 */

function helper(arr = [], startIndex = 0, endIndex) {
  if (arr.length > 0) {
    const pivotIndex = startIndex;
    let index = startIndex;
    for (let j = startIndex + 1; j <= endIndex; j++) {
      if (arr[j] <= arr[pivotIndex]) {
        index++;
        [arr[index], arr[j]] = [arr[j], arr[index]];
      }
    }
    [arr[index], arr[pivotIndex]] = [arr[pivotIndex], arr[index]];
    return index;
  }
}

/**
 * There are 2 approaches,
 * 1st Approach is to use in-built sorting method, which would sort the array
 * then  Kth element lies at the (k-1)th Position -> O(N logN) time complexity.
 *
 * 2nd Approach is to use Quick Sort Algorithm which uses Partition Algorithm
 * The Partition algorithm would take an element, place it at right position in the array
 * & provide its index, if(k-1)=== pivotIndex then we would the Kth smallest
 * else we need to navigate to left or right subArray accordingly.
 * Best case as Theta (N) & worst case as O(N^2)
 * @param arr
 * @param k
 * @param startIndex
 * @param endIndex
 * @returns
 */
function kSmallest(arr = [], k = 0, startIndex = 0, endIndex) {
  if (arr.length > 0 && startIndex <= endIndex) {
    const pivotIndex = helper(arr, startIndex, endIndex);
    if (k - 1 === pivotIndex) return arr[pivotIndex];
    if (pivotIndex > k - 1) return kSmallest(arr, k, startIndex, pivotIndex - 1);
    else return kSmallest(arr, k, pivotIndex + 1, endIndex);
  }
  return -1;
}
const arr = [40, 25, 30, 68, 79, 52, 66, 89, 97];

console.log(kSmallest(arr, 3, 0, arr.length - 1));
